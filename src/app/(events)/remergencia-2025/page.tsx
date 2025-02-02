import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { ArrowUpRight, CalendarDays, MapIcon } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QRCode from 'react-qr-code';

const AboutPage = () => {
	return (
		<main className="pt-8 md:pt-[3rem]">
			<Navbar />
			<section className="mx-auto flex w-full max-w-[90rem] flex-col px-5 lg:my-16">
				<Image
					src={
						'https://ddkkhaaa-app.s3.ap-south-1.amazonaws.com/Images/REmergencia%202025%20Website%20Banner.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGNM6U4TWBV5C%2F20250202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250202T202053Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiB6s1TFYYMzLcA9Y1Un7MPZXBqQIz92T9GAAtsVzFr4zQIgLvqXBHFXookRoOvobrk3HxLCHrdrrja6jDnCz4Fy8sMq8QII9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzNDMyMTgyMTk4MzciDPUI%2Bb4T8j2YTxkYairFArLwCd0bT5k65QzQ72JKtohVs1ixs0yKB3uxF99TibqCQV6Xe%2BGI%2FRi7kFYmETJUsSxm4pYeyclBIpKaMLJlq4%2BlMoI%2Ffoay7t8OR3SgFimPaSny6MPAYHyAW87nkXop%2FCuZxUcFTEobl7uL4TUcd4maGvUQ0p720hw8LUnEqaKKTgzeP%2BtIKGInAtnFSnxQSU10FoR6sCR79YWLweAHCSC%2FWZiAJIAIPK60XLnR%2BYjEhYsJEyipmPnUR8ZZ8x5yq0fDoEWHoZgA2Z9ZVUfaaB0hX7YM1R2vDxRqCLYBqqQhKxalpsfbz9izaKdFLws3mJ%2FcZCSqpxrBIBJ2MKNKGCRTXJY4epeYPgt8%2FQ7JByEJ4OfumkfrjyYheJY1kwjGrJrGigj71MHnj6HVCd7%2BRz1tYE69P9Ek0rNzWlVotAy5QwROSBcwu7T%2BvAY6tAIcJ%2F5cXwZR4Ef251VEy19hk6uUE1PEg%2FVel7OmL3e5WjfpFkLHSGdxzyMdj5GwsY8%2BKCzXuAVlA12eNUzkZq9bOX8Gc8PFGP4%2FIE8gjgWhwDUIoGf89HTTsIRraWWS%2F8HtnXzCAvhwwYsmYFjdJ0fQcB77fP2uAKX9hFdNhloKzjHo9OPVbIEGzpWtL8MnqiVnHHhdWp6E6LfN%2FpJtUR6tL1dgWDbnMCRWEg3VlppH0iQCH1RQzLPwuObU9nu92sy6FGa33rKSC0Wjfg7OH8AMjBuxwQDw6ZEnm694skR7IRqVP4TcLcpoEr3Fn0%2B7MTOLOZw7u9BgLxB8S4vHpKwkSpo2%2BRYjwSOOdW4nCZgaCO6DyDEwy0E4lPMJQ6FT8V2%2FpL6pg12CJKEWwVMAbXqQZOuoqQ%3D%3D&X-Amz-Signature=ec84b546df2c9d4ed6de695fce4195398c97653ff96b270cf729d3b455444e9f&X-Amz-SignedHeaders=host&response-content-disposition=inline'
					}
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
								<section className="flex gap-2">
									<MapIcon />
									Dum Dum Rabindra Bhaban
								</section>
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
						<p className="text-base font-bold italic">
							(After giving your contribution, kindly take a screenshot and
							proceed to fill out the registration form.)
						</p>
					</section>
					<section className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Bank Details</CardTitle>
							</CardHeader>
							<CardContent className="flex w-full flex-col font-semibold">
								<span>Bank: Punjab National Bank</span>
								<span>IFSC: PUNB0011720</span>
								<span>
									A/C Name: Dum Dum Krishna Kumar Hindu Academy Alumni
									Association
								</span>
								<span>A/C No: 0117200100014148</span>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>UPI Details</CardTitle>
							</CardHeader>
							<CardContent className="flex w-full flex-col gap-3">
								<div className="flex w-full justify-center">
									<span className="font-semibold">9432428233m@pnb</span>
								</div>
								<div className={'flex w-full items-center justify-center'}>
									<Link
										href={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}`}
									>
										<QRCode
											className="h-32 w-32"
											value={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}`}
										/>
									</Link>
								</div>
								<section className="flex w-full flex-wrap items-center justify-center gap-2">
									<Image
										src={'/icons/bhim.png'}
										width={50}
										height={0}
										alt={'Bhim Upi Logo'}
									></Image>
									<Image
										src={'/icons/google-pay.png'}
										width={50}
										height={0}
										alt={'Bhim Upi Logo'}
									></Image>
									<Image
										src={'/icons/phone-pe.png'}
										width={50}
										height={0}
										alt={'Bhim Upi Logo'}
									></Image>
									<Image
										src={'/icons/amazon-pay.png'}
										width={150}
										height={0}
										alt={'Bhim Upi Logo'}
									></Image>
									<Image
										src={'/icons/mobikwik.png'}
										width={100}
										height={0}
										alt={'Bhim Upi Logo'}
									></Image>
								</section>
							</CardContent>
						</Card>
					</section>
					<section className="mt-8 w-full">
						<Link
							href={'/remergencia-2025/register-online'}
							className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 p-2 text-xl font-bold md:p-5"
						>
							Registration
							<ArrowUpRight size={32} />
						</Link>
					</section>
					<section className="mt-8 w-full">
						<p className="text-center text-xl font-semibold md:text-left">
							Thank you for your generosity and support in making ReMergencia
							2025 a memorable event!
						</p>
						<p className="mt-8 text-xl">
							For any support or quary:{' '}
							<Link className="font-bold" href={'https://wa.me/919432428233'}>
								https://wa.me/919432428233
							</Link>
						</p>
					</section>
				</section>

				{/* Teacher Sppeches */}
				{/* <section className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-10 lg:pb-20">
					<section className="mt-10 flex w-full flex-col justify-between lg:flex-row">
						<section className="flex w-full justify-start lg:w-[50%]">
							<Image
								src={'/assets/about-2.jpg'}
								className="aspect-square w-full max-w-md rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
						<section className="flex flex-col justify-center gap-8 pt-10 sm:px-10 lg:w-[50%]">
							<section className="w-full lg:max-w-xl">
								<p className="text-center text-lg lg:text-left">
									Each branch and tendril of this grand arboreal entity
									proclaims its glories far and wide, transcending the confines
									of national boundaries. Amongst its illustrious progeny, a
									cadre of distinguished alumni, having but recently traversed
									its hallowed gates, conceived a unifying aegis beneath which
									all might assemble. The realization of this noble aspiration
									finds its embodiment in the Dum Dum Krishna Kumar Hindu
									Academy Alumni Association. What commenced in the year 2019 as
									a humble aggregation of aspirations now vociferously asserts
									its commitment to social obligations, surpassing the ephemeral
									bounds of mere camaraderie.
								</p>
							</section>
						</section>
					</section>
					<section className="mt-10 flex w-full flex-col-reverse justify-between lg:flex-row">
						<section className="flex flex-col justify-center gap-8 pt-10 sm:px-10 lg:w-[50%]">
							<section className="w-full lg:max-w-xl">
								<p className="text-center text-lg lg:text-left">
									Observances such as Disaster Relief, Teacher&apos;s Day,
									Bijayar Adda, Children&apos;s Day, and the Bandhu Chol Sports
									Festival serve as sanctuaries for this confluence of unity and
									duty. Through the zealous participation and steadfast
									cooperation of its alumni, the endeavors of the Dum Dum
									Krishna Kumar Hindu Academy Alumni Association shall
									indubitably ascend to loftier pinnacles, advancing with
									irrepressible vigor into the annals of posterity.
								</p>
							</section>
						</section>
						<section className="flex justify-end lg:w-[50%]">
							<Image
								src={'/assets/about-3.jpg'}
								className="aspect-square w-full max-w-md rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
					</section>
				</section> */}
			</section>

			<Footer />
		</main>
	);
};

export default AboutPage;
