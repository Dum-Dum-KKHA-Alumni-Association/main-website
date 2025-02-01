import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface DonationCardProps {
	eventId: string;
	title: string;
	description: string;
	thumbnail: string;
	eventMode: string;
	location: string;
}

const EventCard: FC<DonationCardProps> = ({
	eventId,
	title,
	description,
	thumbnail,
	eventMode,
	location,
}) => {
	console.log('Event MOde', location);
	return (
		<Card className="font-sora">
			<CardHeader className="px-0 pt-0">
				<Link href={`/events/${eventId}`}>
					<Image
						src={thumbnail ? thumbnail : '/ddkkha.jpg'}
						width={1000}
						height={0}
						className="aspect-video w-full rounded-t-xl"
						alt={'Donation'}
					/>
				</Link>
			</CardHeader>
			<CardContent className="space-y-3">
				<CardTitle className="flex w-full justify-between">
					<Link className="text-3xl" href={`/events/${eventId}`}>
						{title}
					</Link>
					<Dialog>
						<DialogTrigger>
							<Share2 size={20} />
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Share Donation</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogDescription>
								<Separator />
							</DialogHeader>
							<section>
								<section>
									<span>Share Link via </span>
									<span></span>
								</section>
							</section>
						</DialogContent>
					</Dialog>
				</CardTitle>

				<CardDescription className="text-base">{description}</CardDescription>
			</CardContent>
			<CardFooter className="flex flex-col gap-3">
				<Separator />
				<section className="justify-be grid w-full grid-cols-3 items-start text-black">
					<span className="flex gap-2">
						<CalendarDays /> 2 Feb
					</span>
				</section>

				<Separator />
				<section className="flex w-full flex-col items-start justify-start">
					<span className="flex items-start gap-2">
						<MapPin /> {eventMode === 'Offline' ? location : eventMode}
					</span>
				</section>
			</CardFooter>
		</Card>
	);
};

export default EventCard;
