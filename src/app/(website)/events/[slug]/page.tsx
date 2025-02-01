import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '@/components/Footer';
import EventBookingForm from '../components/EventBookingForm';
import Image from 'next/image';
import { CalendarDays, MapIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const EventBookingPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`
	);
	const { data: eventDetails } = await response.json();
	console.log('Event Details', eventDetails);

	return (
		<main>
			<Navbar />
			{/* <div className="absolute left-0 top-[5rem] border border-white -z-10 flex w-full text-4xl items-center justify-center bg-primary font-bold text-white lg:aspect-[16/3]">
				{eventDetails.title}
			</div> */}
			<div className="relative flex w-full items-center justify-center bg-primary text-4xl font-bold text-white lg:aspect-[16/2.5]">
				<h1>{eventDetails.title}</h1>
			</div>
			<section className="flex w-full border">
				<section className="relative mx-auto my-20 flex w-full max-w-7xl flex-col items-center justify-center border">
					<section className="flex w-full items-start gap-6 border">
						<section className="flex flex-col items-start gap-6">
							<div className="flex">
								<h2>{eventDetails.title}</h2>
							</div>
							<div className="flex items-center justify-center gap-3">
								<span className="flex items-center justify-center gap-2">
									<CalendarDays />
									Sat, 17th Jan 2026
								</span>
								<Separator orientation={'vertical'} />
								<MapIcon />
								Dum Dum Nager Bazar
							</div>
						</section>
					</section>

					<Image
						src={eventDetails.thumbnail}
						width={1000}
						height={0}
						alt={eventDetails.title}
						className="left-0 top-0 mt-7 aspect-[16/4] w-full object-cover"
					/>

					<section className="mt-10 flex w-full">
						<section className="flex w-[50%] flex-col">
							<div className="w-full">
								<span className="text-4xl font-semibold">Description</span>
							</div>
							<section className="mt-8 w-full px-3">
								<p>{eventDetails.description}</p>
							</section>
						</section>
						<section className="flex w-[50%] flex-col">
							<EventBookingForm eventId={eventDetails.id} />
						</section>
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default EventBookingPage;
