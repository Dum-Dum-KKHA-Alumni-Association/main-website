import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '@/components/Footer';
import EventBookingForm from '../components/EventBookingForm';

const EventBookingPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/donation/page/${slug}`
	);
	const { data: donationPage } = await response.json();
	console.log(donationPage);

	return (
		<main>
			<Navbar />
			<div className="absolute left-0 top-0 -z-10 w-full bg-primary lg:aspect-[16/3]" />
			<section className="mt-[5rem] flex w-full">
				<section className="mx-auto flex w-full max-w-[90rem] items-center justify-center gap-7 px-5 py-20">
					<EventBookingForm
						title={donationPage.title}
						thumbnail={donationPage.thumbnail}
						description={donationPage.description}
						eventId={donationPage.id}
					/>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default EventBookingPage;
