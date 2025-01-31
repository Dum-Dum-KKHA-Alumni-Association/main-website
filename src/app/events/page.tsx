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
				<section className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3">
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
								thumbnail={
									'https://ddkkhaaa-app.s3.ap-south-1.amazonaws.com/Images/Sports%20Meet%202025.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGNM62376ZWXW%2F20250130%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250130T184645Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBFqH8jF%2F3O%2BnOZ8523rURicu4kY5am88bhVPIa67Cj2AIgM4VOIm8YoXS395sZBuSRurPmruhM7k6BEA%2FSzcp3tzAq8QIIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzNDMyMTgyMTk4MzciDMVNwbnhiQKBN5y3MirFArgEmLb2mmrdXPSiaidu5srTPGykwPvj0vImU2iYNGt8bjRQfdQvPdF3ieeCeCNoFBxoswLaFkPei%2FaDAHBIe9NgXwtRZTwTx7CLZX%2B16R04UF0eEgTxRxtLsS7TAHjgIBCG%2BotvqhEBpYV%2BlKpRiqWzl2XC9joxpMbgSQZ4wTl0nrnk5iaHJnxp5vOAgC8E%2BE89TiDbBsASI9AIaYeZDoZ8WPLC5P2mrm23oOxhvvjOWTPcDkrBAmh8dMUiJYOH%2B071kfex7UNOjaU5LKZd4kc0c8wwKPufk1aBQMZkgj9yJc5Tx8USp9Xx8ePdiuHOtDE%2Bj%2BobWryTBsoSznSUOY2Iwqs1zFNoQxeNTlUlCDnPg4IfUH%2FAPq%2FTrJvHuEEfq5yihaAT4rayEct90Px5%2FGmNh6a0Gi3f%2BJigjU%2FD9rGvz1wzRkkw5vzuvAY6tAJdpvg3kQjGPlv53laySvcT8EIERdkIm09k97oPdrscZA8z1hbMMcCn7%2BNjxweIr6HfFzuQW4RcuHDGiyrBsXminSIZVor9OJFw1Port2%2BMPAxqOVrEvl%2Ber06y6Awf%2Bzf3v8HkLV7YIcMvN3ZNa1J5VN7o4BXdg%2BkjSDoZn4c1Fs1Icefaac7vKvhoTtT%2FInln24FWTXaWzGpArFUAmSX%2B8z5IazYUq7FzbgX91c2QitzEl%2B3GVzB4cIKreko1slFx%2BWj73%2BZe8Be1xvDzt0UNtBSBeAOE8geeT%2FboGsKUHZz2MTu%2BdPst8MUOCjnJOfJZrm7CGGBaJSizNGJ%2BjY6RvjJEYQdfdoInaE9G3Bz8uS4R7%2FDy03%2B9yGu5ErjOhp6QIqoEKDioePE0RPrzEhK2%2F01U4Q%3D%3D&X-Amz-Signature=da801c2464a418f5249d9f163e82dd150c95641756a1f926e766fb0a66ba4bec&X-Amz-SignedHeaders=host&response-content-disposition=inline'
								}
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
