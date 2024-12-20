import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface DonationCardProps {
	slug: string;
	title: string;
	description: string;
	thumbnail: string;
	targetAmount: number;
	collectedAmount: number;
}

const DonationCard: FC<DonationCardProps> = ({
	slug,
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
				<Link href={`/donation/${slug}`}>
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
				<Link href={`/donation/${slug}`}>
					<CardTitle> {title}</CardTitle>
				</Link>
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
