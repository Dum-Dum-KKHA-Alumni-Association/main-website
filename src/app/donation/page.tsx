import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';

import React from 'react';
import DonationCard from './components/DonationCard';

const DonationPage = () => {
	return (
		<main>
			<Navbar />
			<Heading name={'Donations'} />
			<section className="w-full">
				<section className="mx-auto flex w-full max-w-[90rem] gap-7 px-5 py-16">
					<section className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
						<DonationCard
							slug="Grand-Reunion-of-DDKKHA-Alumnies"
							title=" Grand Reunion of DDKKHA Alumnies"
							description="This is donation for upcomming 19 january 2025. A grand reunion of
						all  ex-students and teachers"
							thumbnail="/ddkkha.jpg"
							progressValue={40}
						/>
						<DonationCard
							slug="Grand-Reunion-of-DDKKHA-Alumnies"
							title=" Grand Reunion of DDKKHA Alumnies"
							description="This is donation for upcomming 19 january 2025. A grand reunion of
						all  ex-students and teachers"
							thumbnail="/ddkkha.jpg"
							progressValue={50}
						/>
						<DonationCard
							slug="Grand-Reunion-of-DDKKHA-Alumnies"
							title=" Grand Reunion of DDKKHA Alumnies"
							description="This is donation for upcomming 19 january 2025. A grand reunion of
						all  ex-students and teachers"
							thumbnail="/ddkkha.jpg"
							progressValue={20}
						/>
					</section>
					{/* <FilterSection /> */}
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default DonationPage;
