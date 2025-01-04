'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const DonationSuccessPage = () => {
	const router = useRouter();

	const [count, setCount] = useState(3);

	useEffect(() => {
		if (count === 0) {
			router.push('/donation');
		}
		//Implementing the setInterval method
		const interval = setInterval(() => {
			setCount(count - 1);
		}, 1000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [count, router]);

	return (
		<main>
			<Navbar />
			<section className="w-full pt-[5rem]">
				<section className="mx-auto flex w-full max-w-[90rem] gap-7 px-5 py-16">
					<section className="grid w-full grid-cols-1 gap-10">
						<h1>OH, Something is Wrong.</h1>
						<div className="text-xl font-semibold">
							We Redirect you to the donation Page in {count}
						</div>
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default DonationSuccessPage;
