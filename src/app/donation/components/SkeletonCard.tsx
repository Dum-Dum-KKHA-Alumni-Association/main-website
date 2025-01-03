import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonCard = () => {
	return (
		<Card className="font-sora">
			<CardHeader className="px-0 pt-0">
				<Skeleton className="aspect-video w-full rounded-none" />
			</CardHeader>
			<CardContent className="space-y-3">
				<Skeleton className="h-4 w-[150px]" />
				<Skeleton className="h-4 w-[200px]" />
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pb-14">
				<Skeleton className="h-4 w-full" />
			</CardFooter>
		</Card>
	);
};

export default SkeletonCard;
