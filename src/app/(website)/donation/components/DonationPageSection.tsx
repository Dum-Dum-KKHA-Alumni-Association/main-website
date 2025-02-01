'use client';
import React from 'react';
import DonationCard from './DonationCard';
import SkeletonCard from './SkeletonCard';
import { useQuery } from '@tanstack/react-query';
import { getDonationPages } from '@/server/fetch/Donation';

const DonationPageSection = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['donationPage'],
		queryFn: getDonationPages,
	});

	return (
		<section className="mx-auto grid w-full max-w-7xl px-5 py-16">
			<section className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3">
				{isFetching ? (
					<>
						<SkeletonCard />
						<SkeletonCard />
						<SkeletonCard />
					</>
				) : (
					data?.data.map((donationPage: any) => (
						<DonationCard
							key={donationPage.id}
							donationPageId={donationPage.id}
							title={donationPage.title}
							description={donationPage.description}
							thumbnail={donationPage?.thumbnail || ''}
							targetAmount={donationPage.targetAmount}
							collectedAmount={donationPage.collectedAmount}
						/>
					))
				)}
			</section>
		</section>
	);
};

export default DonationPageSection;
