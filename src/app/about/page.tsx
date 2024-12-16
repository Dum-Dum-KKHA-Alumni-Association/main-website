import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
	return (
		<main>
			<Navbar />
			<Heading name={'About'} />
			<section className="mx-auto my-20 flex w-full max-w-7xl flex-col gap-40">
				{/* aboutUs */}
				<section className="flex w-full flex-col items-center gap-16">
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						className="mx-auto w-full max-w-5xl rounded-2xl"
						alt={'dwa'}
					/>
					<section className="flex flex-col items-center gap-5">
						<h2>Who We are</h2>
						<section className="w-full max-w-4xl">
							<p className="text-lg">
								We are ex-Students of Dum Dum Krishna Kumar Hindu Academy. This
								is the Official Registered Association of Dum Dum Krishna Kumar
								Hindu Academy. Our Mission is Re-Unite our proudly and
								established Student from all over world to help our next
								Generation junior Students.
							</p>
						</section>
					</section>
				</section>

				<section className="grid w-full grid-cols-3 gap-5">
					<Card>
						<CardContent className="flex aspect-video flex-col items-center justify-center gap-2 p-6">
							<span className="text-5xl font-semibold">200+</span>
							<span className="text-lg font-medium">Active Students</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex aspect-video flex-col items-center justify-center gap-2 p-6">
							<span className="text-5xl font-semibold">200+</span>
							<span className="text-lg font-medium">Active Students</span>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex aspect-video flex-col items-center justify-center gap-2 p-6">
							<span className="text-5xl font-semibold">200+</span>
							<span className="text-lg font-medium">Active Students</span>
						</CardContent>
					</Card>
				</section>

				{/* Our Goals  */}
				{/* <section className="grid w-full grid-cols-2 gap-5">
					<section className="w-full space-y-4 py-14">
						<h6 className="text-red-500">Our Goals</h6>
						<h2 className="">Our Goals</h2>
						<section>
							{' '}
							Our Mission is reunite all ex-students and upcomming ex-students
							of Dum Dum Krishna Kumar Hindu Academy's Student in one place
						</section>
					</section>
					<section className="w-full p-6">

						<div className='w-40 bg-yellow-400'>
							dwada
						</div>

					</section>
				</section> */}

				{/* Teacher Sppeches */}
				<section className="flex w-full flex-col gap-10 pb-20">
					<h2>Our Teachers</h2>
					<section className="mt-10 flex w-full justify-between">
						<section className="flex w-[40%] justify-center">
							<Image
								src={'/sir.png'}
								className="w-full max-w-96 rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
						<section className="flex w-[60%] flex-col justify-center gap-8 p-20">
							<section className="w-full max-w-xl">
								<p className="font-semibold">
									&quot;We are ex-Students of Dum Dum Krishna Kumar Hindu
									Academy. This is the Official Registered Association of Dum
									Dum Krishna Kumar Hindu Academy. Our Mission is Re-Unite our
									proudly and established Student from all over world to help
									our next Generation junior Students.&quot;
								</p>
							</section>
							<section className="text-sm">
								- Jana Babu, ex Physics Teacher,2016
							</section>
						</section>
					</section>
					<section className="mt-10 flex w-full justify-between">
						<section className="flex w-[60%] flex-col justify-center gap-8 p-20">
							<section className="w-full max-w-xl">
								<p className="font-semibold">
									&quot;We are ex-Students of Dum Dum Krishna Kumar Hindu
									Academy. This is the Official Registered Association of Dum
									Dum Krishna Kumar Hindu Academy. Our Mission is Re-Unite our
									proudly and established Student from all over world to help
									our next Generation junior Students.&quot;
								</p>
							</section>
							<section className="text-sm">
								- Jana Babu, ex Physics Teacher,2016
							</section>
						</section>
						<section className="flex w-[40%] justify-center">
							<Image
								src={'/sir.png'}
								className="w-full max-w-96 rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
					</section>
				</section>
			</section>
			{/* <section className="w-full bg-stone-200">
				<section className="mx-auto flex w-full max-w-7xl flex-col gap-60 py-10">
					<h2>Our Teachers</h2>
				</section>
			</section> */}
			<Footer />
		</main>
	);
};

export default AboutPage;
