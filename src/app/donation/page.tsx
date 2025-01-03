'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Heading from '@/components/Heading';
import DonationPageSection from './components/DonationPageSection';

const DonationPage = () => {
	return (
		<main>
			<Navbar />
			<Heading name={'Donations'} />
			<DonationPageSection />
			<Footer />
		</main>
	);
};

export default DonationPage;
