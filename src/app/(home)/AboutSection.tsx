'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import { CalendarCheck2, Clock, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
	about?: string;
}
const AboutSection: FC<AboutSectionProps> = ({ about }) => {
	return (
		<section className="mt-0 w-full bg-primary py-12 md:my-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between px-5">
				<h2 className="text-center text-4xl font-medium text-slate-300">
					We are Alumins of Dum Dum K. K. Hindu Academy
				</h2>
				<p className="mt-7 w-full max-w-6xl text-center font-mono text-lg leading-relaxed text-slate-400 md:text-2xl">
					{about}
				</p>
			</section>
			<section className="mx-auto mt-7 grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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

					<span className="my-2 text-5xl font-medium">1000+</span>
					<span className="text-lg">Total Registered Alumines</span>
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
			</section>
		</section>
	);
};

export default AboutSection;
