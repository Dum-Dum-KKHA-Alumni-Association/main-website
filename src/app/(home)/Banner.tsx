'use client';
import { CalendarCheck2, Clock, GraduationCap } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Banner = () => {
	return (
		<section className="mx-auto my-20 flex w-full max-w-7xl flex-col gap-20 px-5">
			<section className="mf:flex-row flex w-full flex-col gap-7">
				<div className="w-full text-5xl font-bold md:w-1/2">
					<motion.div
						initial={{ opacity: 0, y: '30%' }}
						whileInView={{ opacity: 1, y: '0' }}
						transition={{
							type: 'tween',
						}}
						viewport={{ margin: '-150px', once: true }}
					>
						Celebrate Your Legacy,
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: '30%' }}
						whileInView={{ opacity: 1, y: '0' }}
						transition={{
							type: 'tween',
							delay: 0.5,
						}}
						viewport={{ margin: '-150px', once: true }}
					>
						Inspire Future
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: '30%' }}
						whileInView={{ opacity: 1, y: '0' }}
						transition={{
							type: 'tween',
							delay: 0.8,
						}}
						viewport={{ margin: '-150px', once: true }}
					>
						Generations
					</motion.div>
				</div>
				<div className="flex w-full flex-col justify-between md:w-1/2">
					<section className="w-full text-lg font-medium">
						Join our vibrant alumni community and reconnect with old friends.
						Share your journey and contribute to the legacy of our school.
					</section>
					<section className="mt-6 flex w-full gap-3 md:mt-0">
						<Link href={'/members'} className="w-1/3">
							<Button className="w-full p-6">Join</Button>
						</Link>
					</section>
				</div>
			</section>
			<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center rounded-xl py-10 antialiased drop-shadow-lg transition-colors duration-500 ease-in-out hover:shadow-primary"
				>
					<span>
						<GraduationCap size={50} />
					</span>
					<span className="mt-2 text-5xl font-medium">200+</span>
					<span>Total active Alumines</span>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
						delay: 0.3,
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center rounded-xl py-10 antialiased transition-colors duration-500 ease-in-out hover:bg-primary hover:text-white"
				>
					<span>
						<CalendarCheck2 size={50} />
					</span>
					<span className="mt-2 text-5xl font-medium">4</span>
					<span>Total Events</span>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: '30%' }}
					whileInView={{ opacity: 1, y: '0' }}
					transition={{
						type: 'spring',
						delay: 0.6,
					}}
					viewport={{ margin: '-150px', once: true }}
					className="flex w-full flex-col items-center rounded-xl py-10 antialiased transition-colors duration-500 ease-in-out hover:bg-primary hover:text-white"
				>
					<span>
						<Clock size={50} />
					</span>
					<span className="mt-2 text-5xl font-medium">5</span>
					<span>Years of Legacy</span>
				</motion.section>
			</section>
		</section>
	);
};

export default Banner;
