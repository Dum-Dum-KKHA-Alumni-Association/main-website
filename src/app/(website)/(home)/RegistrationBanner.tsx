'use client';

import React, { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface RegistrationBanner {
	heading: string;
	description: string;
	url: string;
}

const RegistrationBanner: FC<RegistrationBanner> = ({
	heading,
	description,
	url,
}) => {
	return (
		<section className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-20 px-5">
			<section className="flex w-full flex-col gap-7 md:flex-row">
				<div className="w-full text-5xl font-bold md:w-1/2">
					<motion.div
						initial={{ opacity: 0, y: '30%' }}
						whileInView={{ opacity: 1, y: '0' }}
						transition={{
							type: 'tween',
						}}
						viewport={{ margin: '-150px', once: true }}
					>
						{heading}
					</motion.div>
				</div>
				<div className="flex w-full flex-col justify-between gap-10 md:w-1/2">
					<section className="w-full text-lg font-medium">
						{description}
					</section>
					<section className="flex w-full gap-3 md:mt-0">
						<Link href={url} className="w-full md:w-1/3">
							<Button className="w-full bg-yellow-500 p-6 text-lg font-bold text-primary hover:text-yellow-500">
								Join
							</Button>
						</Link>
					</section>
				</div>
			</section>
		</section>
	);
};

export default RegistrationBanner;
