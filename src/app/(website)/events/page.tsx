'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Heading from '@/components/Heading';

import { useQuery } from '@tanstack/react-query';

import SkeletonCard from './components/SkeletonCard';
import { getAllEvents } from '@/server/fetch/Events';
import EventCard from './components/EventCard';

const EventsPage = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['Events'],
		queryFn: getAllEvents,
	});

	console.log(data?.data);

	return (
		<main>
			<Navbar />
			<Heading name={'Our Events'} />

			<section className="mx-auto grid w-full max-w-7xl px-5 py-16">
				<section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{isFetching ? (
						<>
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</>
					) : (
						data?.data.map((event: any) => (
							<EventCard
								key={event.id}
								eventId={event.id}
								title={event.title}
								description={event.description}
								thumbnail={event.thumbnail}
								eventMode={event.mode}
								location={event.location}
							/>
						))
					)}
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default EventsPage;
