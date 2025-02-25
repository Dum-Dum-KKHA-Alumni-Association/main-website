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
import { CalendarDays, Check, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface DonationCardProps {
	eventId?: string;
	ticketId?: string;
	title: string;
	description: string;
	thumbnail: string;
	eventMode: string;
	location: string;
	isRegistered: boolean;
}

const EventCard: FC<DonationCardProps> = ({
	eventId,
	ticketId,
	title,
	description,
	thumbnail,
	eventMode,
	location,
	isRegistered,
}) => {
	console.log('Event MOde', location);

	function formatDateRange(dates: string[]): string {
		if (!Array.isArray(dates) || dates.length === 0) return '';

		const suffix = (day: number): string =>
			['st', 'nd', 'rd'][((day % 10) - 1) % 3] || 'th';
		const formatDate = (iso: string): string => {
			const date = new Date(iso);
			return `${date.getUTCDate()}${suffix(date.getUTCDate())} ${date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })},${date.getUTCFullYear()}`;
		};

		dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
		return `${formatDate(dates[0])} - ${formatDate(dates[dates.length - 1])}`;
	}

	const dates = ['2025-03-05T00:00:00.000Z', '2025-03-03T00:00:00.000Z'];
	return (
		<Card className="font-sora">
			<CardHeader className="px-0 pt-0">
				{isRegistered ? (
					<Link href={`/dashboard/events/ticket/${ticketId}`}>
						<Image
							src={thumbnail ? thumbnail : '/ddkkha.jpg'}
							width={1000}
							height={0}
							className="aspect-video w-full rounded-t-xl"
							alt={'Donation'}
						/>
					</Link>
				) : (
					<Link href={`/dashboard/events/${eventId}`}>
						<Image
							src={thumbnail ? thumbnail : '/ddkkha.jpg'}
							width={1000}
							height={0}
							className="aspect-video w-full rounded-t-xl"
							alt={'Donation'}
						/>
					</Link>
				)}
			</CardHeader>
			<CardContent className="space-y-3">
				<CardTitle className="flex w-full justify-between">
					{isRegistered ? (
						<Link
							className="text-lg"
							href={`/dashboard/events/ticket/${ticketId}`}
						>
							{title}
						</Link>
					) : (
						<Link className="text-lg" href={`/events/${eventId}`}>
							{title}
						</Link>
					)}

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
			{isRegistered ? (
				<CardFooter className={'flex flex-col gap-3 px-0 pb-0'}>
					<Separator />
					<section className="flex w-full flex-col gap-3 px-6">
						<section className="flex w-full items-start justify-center text-black">
							<span className="flex w-full gap-2">
								<CalendarDays /> {formatDateRange(dates)}
							</span>
						</section>

						<section className="flex w-full flex-col items-start justify-start">
							<span className="flex items-start gap-2">
								<MapPin /> {eventMode === 'Offline' ? location : eventMode}
							</span>
						</section>
					</section>
					{isRegistered && (
						<section className="flex w-full items-center justify-center rounded-b-xl border bg-green-300 p-3 text-green-700">
							{' '}
							<Check /> Registered{' '}
						</section>
					)}
				</CardFooter>
			) : (
				<CardFooter className={'flex flex-col gap-3'}>
					<Separator />

					<section className="flex w-full items-start justify-center text-black">
						<span className="flex w-full gap-2">
							<CalendarDays /> {formatDateRange(dates)}
						</span>
					</section>

					<section className="flex w-full flex-col items-start justify-start">
						<span className="flex items-start gap-2">
							<MapPin /> {eventMode === 'Offline' ? location : eventMode}
						</span>
					</section>
				</CardFooter>
			)}
		</Card>
	);
};

export default EventCard;
