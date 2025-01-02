'use client';
import React, { FC } from 'react';
import Sidebar from './sidebar';
import DonationCard from './DonationCard';

interface DonationPage {
	donationPages: any;
}
const DonationPageSection: FC<DonationPage> = ({ donationPages }) => {
	return (
		<section className="mx-auto grid w-full max-w-[90rem] grid-cols-4 gap-7 px-5 py-16">
			<Sidebar />
			<section className="col-start-2 col-end-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
				{donationPages &&
					donationPages.map((donationPage: any) => (
						<DonationCard
							key={donationPage.id}
							donationPageId={donationPage.id}
							title={donationPage.title}
							description={donationPage.description}
							thumbnail={donationPage?.thumbnail || ''}
							targetAmount={donationPage.targetAmount}
							collectedAmount={donationPage.collectedAmount}
						/>
					))}
			</section>
		</section>
	);
};

export default DonationPageSection;
