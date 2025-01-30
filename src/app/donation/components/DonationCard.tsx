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
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface DonationCardProps {
	donationPageId: string;
	title: string;
	description: string;
	thumbnail: string;
	targetAmount: number;
	collectedAmount: number;
}

const DonationCard: FC<DonationCardProps> = ({
	donationPageId,
	title,
	description,
	thumbnail,
	targetAmount,
	collectedAmount,
}) => {
	const value = Math.floor((24 / targetAmount) * 100);
	console.log('value', value);
	return (
		<Card className="font-sora">
			<CardHeader className="px-0 pt-0">
				<Link href={`/membership/${donationPageId}`}>
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
					<Link href={`/donation/${donationPageId}`}>{title}</Link>
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

				<CardDescription>{description}</CardDescription>
			</CardContent>
			<CardFooter className="flex flex-col gap-3">
				<Progress value={Math.floor((collectedAmount / targetAmount) * 100)} />
				<section className="flex w-full items-center justify-between">
					<span>₹{collectedAmount}</span>
					<span>₹{targetAmount}</span>
				</section>
			</CardFooter>
		</Card>
	);
};

export default DonationCard;
