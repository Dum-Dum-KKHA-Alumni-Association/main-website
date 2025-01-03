import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';

import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
	return (
		<main className="pt-10 md:pt-[4rem]">
			<Navbar />
			{/* <Heading name={'About'} /> */}
			<section className="mx-auto flex w-full max-w-7xl flex-col px-5 lg:my-16">
				{/* aboutUs */}
				<section className="flex w-full flex-col items-center gap-16">
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						className="mx-auto w-full max-w-6xl rounded-2xl"
						alt={'dwa'}
					/>
					<section className="flex flex-col items-center gap-5">
						<h2>About Us</h2>
						<section className="w-full max-w-4xl sm:px-10">
							<p className="text-center text-lg">
								In the year 1933, the collective vision of five illustrious
								luminaries—Sri Karunakishore Kargupta, Dr. Surendramohan
								Gangopadhyay, Dr. Binodbihari Dutta, Bijoy Kumar Sen, and Dr.
								Niranjan Chattopadhyay—culminated in a noble enterprise, wrought
								through their perspicacity and unwavering devotion to service.
								That nascent bud, tenderly nurtured amidst the inexorable march
								of time, has blossomed into a resplendent arboreal colossus, now
								venerated as the Dum Dum Krishna Kumar Hindu Academy.
							</p>
						</section>
					</section>
				</section>

				{/* Teacher Sppeches */}
				<section className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-10 lg:pb-20">
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
									Observances such as Teacher&apos;s Day, Bijayar Adda,
									Children&apos;s Day, and the Bandhu Chal Sports Festival serve
									as sanctuaries for this confluence of unity and duty. Through
									the zealous participation and steadfast cooperation of its
									alumni, the endeavors of the Dum Dum Krishna Kumar Hindu
									Academy Alumni Association shall indubitably ascend to loftier
									pinnacles, advancing with irrepressible vigor into the annals
									of posterity.
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
				</section>
				{/* <section className="flex w-full flex-col gap-10 pb-20">
					<section className="mt-10 flex w-full justify-between">
						<section className="flex w-[40%] justify-center">
							<Image
								src={'/assets/about-2.jpg'}
								className="aspect-square w-full max-w-md rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
						<section className="flex w-[60%] flex-col justify-center gap-8 p-20">
							<section className="w-full max-w-xl">
								<p className="text-xl font-semibold font-baloo-da-2 ">
									সন ১৯৩৩, পাঁচ কালজয়ী ব্যক্তিত্ব শ্রী করুণাকিশোর করগুপ্ত, ড.
									সুরেন্দ্রমোহন গঙ্গোপাধ্যায়, ড. বিনোদবিহারী দত্ত, বিজয় কুমার
									সেন ও ড. নিরঞ্জন চট্টোপাধ্যায়ের দূরদর্শিতা ও অক্লান্ত
									সেবাব্রতে জন্ম নেয় যৌথ এক স্বপ্নের সম্মিলিত রূপদান। কালের
									চাকার দ্রূতগামীয় সেই ছোট্ট কুঁড়ি আজ মহীরূহ। আজকের দমদম
									কৃষ্ণকুমার হিন্দু একাডেমী।
								</p>
							</section>
						</section>
					</section>
					<section className="mt-10 flex w-full justify-between">
						<section className="flex w-[60%] flex-col justify-center gap-8 p-20">
							<section className="w-full max-w-xl">
								<p className="text-lg">
									সেই মহীরূহের এক একটি শাখা-প্রশাখা আজ দেশের দরবার পেরিয়ে সারা
									বিশ্বে নিজের জয়ডঙ্কা বাজিয়ে চলেছে অনবরত। তেমনই কিছু কৃতি
									প্রাক্তনী সদ্য স্কুলগেট পেরিয়ে স্বপ্ন দেখলো ছড়িয়ে ছিটিয়ে থাকা
									সব্বাইকে এক ছাতার তলায় আনার। সেই ভাবনারই ফসল আজকের দমদম
									কৃষ্ণকুমার হিন্দু একাডেমী অ্যালামনাই অ্যাসোসিয়েশন। ২০১৯ শে
									ছোট্ট কিছু ইচ্ছের সমাহার, আজ শুধু পুনর্মিলনের বেড়া ডিঙিয়ে
									সোচ্চারে জানান দিচ্ছে নিজের সামাজিক দায়বদ্ধতার। শিক্ষক দিবস,
									বিজয়ার আড্ডা, শিশু দিবস, বন্ধু চল - ক্রীড়া উৎসব তাই যেন সেই
									ঐকতান ও দায়বদ্ধতার মহামিলনের ক্ষেত্র।

									
								</p>
							</section>
						</section>
						<section className="flex w-[40%] justify-center">
							<Image
								src={'/assets/about-3.jpg'}
								className="aspect-square w-full max-w-md rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
					</section>
					<section className="mt-10 flex w-full justify-between">
						<section className="flex w-[40%] justify-center">
							<Image
								src={'/assets/about-2.jpg'}
								className="aspect-square w-full max-w-md rounded-lg"
								width={1000}
								height={0}
								alt={''}
							/>
						</section>
						<section className="flex w-[60%] flex-col justify-center gap-8 p-20">
							<section className="w-full max-w-xl">
								<p className="text-lg">
									সকল প্রাক্তনীর ঐকান্তিক উপস্থিতি ও সহযোগিতায় দমদম কৃষ্ণকুমার
									হিন্দু একাডেমী অ্যালামনাই অ্যাসোসিয়েশনের এই অভিযান ভবিষ্যতেও
									দুর্দমবেগে ধাবমান হতেই থাকবে, হতেই থাকবে।
								</p>
							</section>
						</section>
					</section>
				</section> */}
			</section>

			<Footer />
		</main>
	);
};

export default AboutPage;
