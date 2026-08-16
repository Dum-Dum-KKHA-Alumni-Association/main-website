import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { IoSchool } from 'react-icons/io5';
import { sanityFetch } from '@/sanity/lib/client';
import { Registration } from '@/types/sanity';
import { Specific_Registration } from '@/sanity/actions/queries';

const EventBookingPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;

	const registrationsData = await sanityFetch<Registration>({
		query: Specific_Registration(slug),
	});
	console.log('Registaration-->', registrationsData);

	return (
		<section>
			<Navbar />
			<Heading name={registrationsData.title || ''} />
			<section className="mx-auto mt-10 w-full max-w-7xl gap-8 px-5">
				<section className="flex w-full flex-col items-center justify-center">
					<h3 className="text-center text-2xl font-semibold">
						{registrationsData.title}
					</h3>
					
					<section className="flex w-full flex-col items-center justify-center text-center md:flex-row md:gap-4">
						{registrationsData?.reg_links?.map((registration) => (
							<Link
								key={registration._key}
								className="mt-5 w-full max-w-80"
								href={registration.link || ''}
								target="_blank"
							>
								<Card className="w-full">
									<CardHeader className="flex w-full items-center pb-2">
										<CardTitle className="text-2xl">
											{registration.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="flex w-full items-center justify-center pb-2">
										<IoSchool className="text-[70px] text-blue-600" />
									</CardContent>
									<CardFooter className="flex w-full items-center justify-center">
										{registration.description}
									</CardFooter>
								</Card>
							</Link>
						))}
					</section>
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default EventBookingPage;
