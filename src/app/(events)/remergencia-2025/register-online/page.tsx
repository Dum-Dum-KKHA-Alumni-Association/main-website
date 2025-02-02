import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import RegistrationForm from './RegistrationForm';

const AboutPage = () => {
	return (
		<main className="pt-10 md:pt-[4rem]">
			<Navbar />

			<RegistrationForm title={'ReMergencia 2025'} />

			<Footer />
		</main>
	);
};

export default AboutPage;
