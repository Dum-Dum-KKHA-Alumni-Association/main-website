import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const RefundPolicyPage = () => {
	return (
		<main>
			<Navbar />

			<section className="mx-auto h-auto w-full max-w-6xl px-5 py-20">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h1>Refund Policy</h1>
					<span>Last updated: December 20,2024 </span>
				</section>
				<Separator className="my-4" />
				<div className="text-sm"></div>
			</section>

			<Footer />
		</main>
	);
};

export default RefundPolicyPage;
