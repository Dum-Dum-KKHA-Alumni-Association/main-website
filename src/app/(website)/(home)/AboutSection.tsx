'use client';
import React from 'react';
// import { motion } from 'motion/react';
// import { CalendarCheck2, Clock, GraduationCap } from 'lucide-react';

const AboutSection = () => {
	return (
		<section className="mt-0 w-full bg-primary py-12 md:my-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between px-5 py-10">
				<h2 className="text-center text-xl font-medium text-slate-300 lg:text-4xl">
					Dum Dum K. K. Hindu Academy Alumni Association
				</h2>
				<p className="mt-7 w-full max-w-7xl text-center font-mono text-lg leading-relaxed text-slate-400 md:text-2xl">
					We, the alumni of Dum Dum Krishna Kumar Hindu Academy, proffer a
					cordial welcome to our formally constituted Alumni Association. Herein
					is convened a gathering consecrated to the noble purpose of uniting
					our spirited fraternity upon a singular platform, cultivating avenues
					of mutual succor and advancement through the principles of
					self-reliance.
				</p>
				<p className="mt-7 w-full max-w-7xl text-center font-mono text-lg leading-relaxed text-slate-400 md:text-2xl">
					This august association functions not solely as a ledger of alumni
					records but as a fulcrum for undertakings and enterprises that elevate
					the welfare of its members. With unwavering resolve, we endeavor to
					venerate our revered alma mater whilst rendering service to the
					loftier cause of social edification, interweaving the strands of our
					bygone and contemporary epochs into a resplendent fabric of collective
					ascent and unified endeavor.
				</p>
			</section>
			{/* <section className="mx-auto mt-7 grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center justify-end rounded-xl py-10 text-slate-300 antialiased transition-colors duration-500 ease-in-out"
				>
					<GraduationCap size={50} />

					<span className="my-2 text-5xl font-medium">10000+</span>
					<span className="text-lg">Total Alumines</span>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
						delay: 0.3,
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center justify-end rounded-xl py-10 text-slate-300 antialiased transition-colors duration-500 ease-in-out"
				>
					<Clock size={45} />

					<span className="my-2 text-5xl font-medium">92</span>
					<span className="text-lg">Years of Legacy</span>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
						delay: 0.6,
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center justify-end rounded-xl py-10 text-slate-300 antialiased transition-colors duration-500 ease-in-out"
				>
					<CalendarCheck2 size={40} />

					<span className="my-2 text-5xl font-medium">5</span>
					<span className="text-lg">Active Communities</span>
				</motion.section>
			</section> */}
		</section>
	);
};

export default AboutSection;
