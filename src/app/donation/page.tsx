import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Heading from '@/components/Heading';
import DonationPageSection from './components/DonationPageSection';

const DonationPage = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/donation/page`
	);
	const { data: donationPages } = await response.json();
	console.log(donationPages);

	return (
		<main>
			<Navbar />
			<Heading name={'Donations'} />
			<section className="w-full"></section>
			<DonationPageSection donationPages={donationPages} />
			<Footer />
		</main>
	);
};

export default DonationPage;
