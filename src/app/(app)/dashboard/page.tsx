import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PencilLine } from 'lucide-react';

import React from 'react';
import EventCard from './components/EventCard';

const page = () => {
	return (
		<section className="w-full">
			<section className="mx-auto flex h-auto w-full max-w-5xl flex-1 flex-col px-5 md:px-10">
				<section className="mt-10 w-full">
					<section className="flex flex-col">
						<div className="w-full text-3xl font-medium">
							<span>Dashboard</span>
						</div>
						<p className="font-light">
							Learn more about your new dashboard and get started
						</p>
					</section>
					<Separator className="my-8" />
					<section className="flex w-full flex-col gap-8">
						<section className="flex w-full flex-col gap-3">
							<div className="text-lg font-medium antialiased">Events</div>
							<section className="grid w-full grid-cols-1 md:grid-cols-3">
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
						<section className="flex w-full flex-col gap-3">
							<div className="text-lg font-medium antialiased">Quick links</div>
							<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
								<Card className="flex items-start border-purple-700 py-1 opacity-60 shadow-none">
									<CardHeader className="p-5 pr-3">
										<div className="flex items-center justify-center rounded-full border bg-purple-200 p-2">
											<PencilLine size={16} className="text-purple-700" />
										</div>
									</CardHeader>
									<CardContent className="space-y-2 p-6 pl-0">
										<CardTitle>Write an article</CardTitle>
										<CardDescription>
											Share your thoughts with the community
										</CardDescription>
									</CardContent>
								</Card>
								{/* <Card className="flex items-start py-1 shadow-none hover:border-blue-700">
									<CardHeader className="p-5 pr-3">
										<div className="flex items-center justify-center rounded-full border bg-blue-200 p-2">
											<PencilLine size={16} className="text-blue-700" />
										</div>
									</CardHeader>
									<CardContent className="space-y-2 p-6 pl-0">
										<CardTitle>Write a article</CardTitle>
										<CardDescription>
											Share your thoughts with the community
										</CardDescription>
									</CardContent>
								</Card>
								<Card className="flex items-start py-1 shadow-none">
									<CardHeader className="p-5 pr-3">
										<div className="flex items-center justify-center rounded-full border bg-purple-200 p-2">
											<PencilLine size={16} className="text-purple-700" />
										</div>
									</CardHeader>
									<CardContent className="space-y-2 p-6 pl-0">
										<CardTitle>Write a article</CardTitle>
										<CardDescription>
											Share your thoughts with the community
										</CardDescription>
									</CardContent>
								</Card>  */}
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default page;
