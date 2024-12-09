import Navbar from '@/components/Navbar';
import React from 'react';
import DonationForm from '../components/DonationForm';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const DonationDetailsPage = async ({
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
			<div className="absolute left-0 top-0 -z-10 aspect-[16/4] w-full bg-slate-400">
				<Image
					src={'/ddkkha.jpg'}
					width={1000}
					height={0}
					className="h-full w-full object-cover"
					alt={'Donation'}
				/>
			</div>
			<section className="w-full pt-[5rem]">
				<section className="mx-auto flex w-full max-w-[90rem] items-center justify-center gap-7 px-5 py-20">
					<Card className="mx-auto w-full max-w-xl font-sora shadow-lg">
						<CardHeader className="px-0 pt-0">
							{donationPage.thumbnail && (
								<Image
									src={donationPage?.thumbnail}
									width={1000}
									height={0}
									className="aspect-[16/7] w-full rounded-t-xl object-fill"
									alt={'Donation'}
								/>
							)}

							<section className="space-y-5 p-6">
								<CardTitle>
									<h4>{donationPage.title}</h4>
								</CardTitle>
								<CardDescription>{donationPage.description}</CardDescription>
							</section>
						</CardHeader>
						<CardContent>
							<DonationForm donationPageId={donationPage.id} />
						</CardContent>
					</Card>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default DonationDetailsPage;
