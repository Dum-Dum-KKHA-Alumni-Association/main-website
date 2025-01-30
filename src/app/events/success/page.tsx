import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const DonationSuccessPage = () => {
	return (
		<main>
			<Navbar />
			<section className="w-full pt-[5rem]">
				<section className="mx-auto flex w-full max-w-[90rem] gap-7 px-5 py-16">
					<section className="grid w-full grid-cols-1 gap-10">
						<h1>
							Thank you, for Contributing Dum Dum Krishna Kumar Hindu Academy{' '}
						</h1>
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default DonationSuccessPage;
