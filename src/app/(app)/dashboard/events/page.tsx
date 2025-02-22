'use client';

import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import EventCard from '../components/EventCard';

const EventsPage = () => {
	return (
		<section className="w-full">
			<section className="mx-auto flex h-auto w-full max-w-6xl flex-1 flex-col px-5 md:px-10">
				<section className="mt-10 w-full">
					<section className="flex flex-col">
						<div className="w-full text-3xl font-medium">
							<span>Events</span>
						</div>
						<p className="font-light">
							Learn more about your new dashboard and get started
						</p>
					</section>
					<Separator className="my-8" />
					<Tabs defaultValue="upcoming" className="w-full">
						<TabsList>
							<TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
							<TabsTrigger value="tickets">Tickets</TabsTrigger>
						</TabsList>
						<TabsContent value="upcoming">
							<section className="flex w-full flex-col gap-8">
								<section className="flex w-full flex-col gap-3">
									<div className="text-lg font-medium antialiased">
										Upcoming Events
									</div>
									<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
										<EventCard
											key={'dwa'}
											eventId={'323232'}
											title={'REMERGENCIA 2025'}
											description={'REMERGENCIA 2025'}
											thumbnail={
												'https://www.ddkkhaaa.org/_next/image?url=%2Fbanners%2Fremergencia-2025-website-banner.jpg&w=3840&q=75'
											}
											eventMode={'Online'}
											location={'Dwaw'}
											isRegistered={false}
										/>
									</section>
								</section>
							</section>
						</TabsContent>
						<TabsContent value="tickets">
							<section className="flex w-full flex-col gap-8">
								<section className="flex w-full flex-col gap-3">
									<div className="text-lg font-medium antialiased">
										Your tickets
									</div>
									<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
										<EventCard
											key={'dwa'}
											ticketId={'232323'}
											title={'REMERGENCIA 2025'}
											description={
												'Celebrating Our Legacy, Reconnecting for the Future'
											}
											thumbnail={
												'https://www.ddkkhaaa.org/_next/image?url=%2Fbanners%2Fremergencia-2025-website-banner.jpg&w=3840&q=75'
											}
											eventMode={'Offline'}
											location={'Rabindra Nagar'}
											isRegistered={true}
										/>
									</section>
								</section>
							</section>
						</TabsContent>
					</Tabs>
				</section>
			</section>
		</section>
	);
};

export default EventsPage;
