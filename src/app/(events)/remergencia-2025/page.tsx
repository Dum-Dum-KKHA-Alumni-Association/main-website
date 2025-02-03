import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { Separator } from '@/components/ui/separator';
import { ArrowUpRight, CalendarDays, MapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import BankDetailsCard from './components/BankDetailsCard';
import UpiDetailsCard from './components/UpiDetailsCard';

const AboutPage = () => {
	return (
		<main className="pt-8 lg:pt-[3rem]">
			<Navbar />
			<section className="mx-auto flex w-full max-w-[90rem] flex-col px-5 lg:mt-16">
				<Image
					src={'/banners/remergencia-2025-website-banner.jpg'}
					width={1000}
					height={0}
					className="mx-auto w-full rounded-2xl"
					alt={'ReMergencia-2025'}
				/>

				<section className="relative mx-auto my-20 mt-10 flex w-full max-w-7xl flex-col items-center justify-center">
					<section className="flex w-full flex-col items-start justify-between gap-6 md:flex-row">
						<section className="flex w-full flex-col items-start gap-6">
							<div className="flex">
								<h2>ReMergencia 2025</h2>
							</div>
							<div className="flex flex-col items-start justify-center gap-3 md:flex-row">
								<section className="flex flex-col gap-5">
									<span className="flex items-center justify-center gap-2">
										<CalendarDays />
										1st - 2nd Mar 2025
									</span>
								</section>
								{/* <Separator orientation={'vertical'} /> */}

								<Link
									href={'https://maps.app.goo.gl/wKKCQH9MkogxgXr17'}
									className="flex gap-2"
								>
									<MapIcon />
									Dum Dum Rabindra Bhaban
								</Link>
							</div>
						</section>
					</section>
					<section className="mt-8">
						<p className="font-bold italic">
							Registration is mandatory for every reunion participant.
						</p>
					</section>

					<Separator className="mt-14" />

					<section className="mt-8 w-full">
						<p className="text-lg md:text-xl">
							Guess what? It’s finally happening! 🎉
						</p>
						<p className="mt-8 text-lg md:text-xl">
							We’re unveiling the ultimate curtain of our
							<b> Grand Reunion Festival—ReMergencia 2025!</b> It’s gonna be
							lit, and we want YOU there to celebrate with us!
						</p>
						<p className="mt-8 text-lg md:text-xl">
							No fixed donation—just chip in whatever feels right. Every little
							bit helps keep the magic alive! You can send your contribution
							through the official<b> Bank Account</b> or <b>UPI ID</b> below.
						</p>
						<p className="mt-8 text-lg font-semibold italic">
							(After your contribution, take a screenshot and complete the
							registration form.)
						</p>
						{/* <p className="text-lg md:text-xl">
							We are excited to announce our official grand reunion festival,
							ReMergencia 2025. Your support and presence would mean a lot to us
							as we come together for this special celebration.
						</p>
						<p className="mt-8 text-lg md:text-xl">
							If you’d like to contribute, you are welcome to donate any amount
							of your choice. There is no fixed contribution—your support, in
							any capacity, will be greatly appreciated.
						</p>
						<p className="mt-8 text-lg md:text-xl">
							Please find the official bank account and UPI ID below for your
							donation:
						</p>
						 */}
					</section>
					<section className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
						<BankDetailsCard />
						<UpiDetailsCard />
					</section>
					<section className="mt-8 w-full">
						<Link
							// href={'/remergencia-2025/register-online'}
							href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL!}
							target="_blank"
							className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 p-2 text-xl font-bold md:p-5"
						>
							Register Now
							<ArrowUpRight size={32} />
						</Link>
					</section>
					<section className="mt-8 w-full">
						<p className="text-center text-xl font-semibold md:text-left">
							Let’s make this reunion one for the books! See you there!
						</p>
						<p className="mt-8 text-xl">
							For any support or quary:{' '}
							<Link className="font-bold" href={'https://wa.me/919432428233'}>
								https://wa.me/919432428233
							</Link>
						</p>
					</section>
				</section>
			</section>
			<section className="w-full">
				<iframe
					src={process.env.NEXT_PUBLIC_EVENT_LOCATION_URL}
					width="600"
					height="450"
					className="aspect-video w-full"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>

			<Footer />
		</main>
	);
};

export default AboutPage;
