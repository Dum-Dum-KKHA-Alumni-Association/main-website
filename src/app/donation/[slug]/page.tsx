import Navbar from '@/components/Navbar';
import React from 'react';
import DonationForm from '../components/DonationForm';
import Image from 'next/image';

const DonationDetailsPage = () => {
	return (
		<main>
			<Navbar />
			<div className="absolute left-0 top-0 -z-10 aspect-[16/4] w-full bg-slate-400">
				<Image
					src={'/ddkkha.jpg'}
					width={1000}
					height={0}
					className="h-full w-full object-cover"
					alt={'Donation'}
				/>
			</div>
			<section className="w-full pt-[5rem]">
				<section className="mx-auto flex w-full max-w-[90rem] items-center justify-center gap-7 px-5 py-20">
					<DonationForm />
				</section>
			</section>
		</main>
	);
};

export default DonationDetailsPage;
