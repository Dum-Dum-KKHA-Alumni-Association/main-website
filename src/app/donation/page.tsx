import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';

import React from 'react';
import DonationCard from './components/DonationCard';

const DonationPage = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/donation/page`,
		{
			cache: 'no-cache',
		}
	);
	const { data: donationPages } = await response.json();
	console.log(donationPages);

	return (
		<main>
			<Navbar />
			<Heading name={'Donations'} />
			<section className="w-full">
				<section className="mx-auto flex w-full max-w-[90rem] gap-7 px-5 py-16">
					<section className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
						{donationPages &&
							donationPages.map((donationPage: any) => (
								<DonationCard
									key={donationPage.id}
									slug={donationPage.slug}
									title={donationPage.title}
									description={donationPage.description}
									thumbnail={donationPage?.thumbnail || ''}
									targetAmount={donationPage.targetAmount}
									collectedAmount={donationPage.collectedAmount}
								/>
							))}
					</section>
					{/* <FilterSection /> */}
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default DonationPage;
