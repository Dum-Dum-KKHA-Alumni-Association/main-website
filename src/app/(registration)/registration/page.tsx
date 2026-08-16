import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import { REGISTRATIONS_QUERY } from '@/sanity/actions/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { Registration } from '@/types/sanity';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const RegistrationsPage = async () => {
	const registrationsData = await sanityFetch<Registration[]>({
		query: REGISTRATIONS_QUERY,
	});
	console.log('Registaration-->', registrationsData);

	return (
		<main>
			<Navbar />
			<Heading name={'Registrations'} />

			<section className="mx-auto grid w-full max-w-7xl px-5 py-16">
				<Header name="Registration Links" />

				<section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{registrationsData.map((registration) => (
						<Card key={registration._id}>
							<CardHeader>
								<CardTitle>{registration.title}</CardTitle>
								<CardDescription>{registration.description}</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col">
								<div className="flex w-full gap-3">
									<div>
										Date -{' '}
										{registration.eventDate
											? new Date(registration.eventDate).toLocaleDateString()
											: 'N/A'}
									</div>
									<div>
										Last Date -{' '}
										{registration.lastRegistrationDate
											? new Date(
													registration.lastRegistrationDate
												).toLocaleDateString()
											: 'N/A'}
									</div>
								</div>
							</CardContent>
							<Separator className="my-3" />
							<CardFooter className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									{new Date().getTime() >
									new Date(registration.lastRegistrationDate!).getTime() ? (
										<Badge className="bg-green-700 text-sm text-background hover:bg-green-700">
											Active
										</Badge>
									) : (
										<Badge className="bg-gray-600 text-sm text-background hover:bg-gray-600">
											Expired
										</Badge>
									)}
								</div>
								{new Date().getTime() <
								new Date(registration.lastRegistrationDate!).getTime() ? (
									<Link href={`/registration/${registration.slug?.current}`}>
										<Button>Apply Now</Button>
									</Link>
								) : (
									<Button disabled>Cannot Apply</Button>
								)}
							</CardFooter>
						</Card>
					))}
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default RegistrationsPage;
