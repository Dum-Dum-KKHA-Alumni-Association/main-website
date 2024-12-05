import React from 'react';

const AboutSection = () => {
	return (
		<section className="my-24 w-full">
			<section className="m-auto flex w-full max-w-[90rem] flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
						<span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
							About Us
						</span>{' '}
					</h2>
				</section>
				<section className="grid w-full grid-cols-1 gap-8 text-xl font-bold text-white md:grid-cols-3">
					<section className="flex w-full flex-col items-center rounded-lg bg-primary py-10">
						<span>2000+</span>
						<span>Alumni</span>
					</section>
					<section className="flex w-full flex-col items-center rounded-lg bg-primary py-10">
						<span>10+</span>
						<span>Events</span>
					</section>
					<section className="flex w-full flex-col items-center rounded-lg bg-primary py-10">
						<span>2000+</span>
						<span>Alumni</span>
					</section>
				</section>
			</section>
			<section></section>
		</section>
	);
};

export default AboutSection;
