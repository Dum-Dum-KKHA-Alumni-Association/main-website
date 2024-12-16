import Image from 'next/image';
import React from 'react';

const EventsSection = () => {
	return (
		<section className="my-40 w-full">
			<section className="m-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="">Events</h2>
				</section>
				<section className="w-full max-w-3xl">
					Welcome to our alumni community! We are dedicated to fostering
					connections between past students and creating opportunities for
					networking and growth.
				</section>
				<section className="grid w-full grid-cols-1 gap-8 text-xl font-bold text-white md:grid-cols-2">
					{/* <section className="flex w-full flex-col items-center rounded-lg bg-primary py-10">
						<span>2000+</span>
						<span>Alumni</span>
					</section>
					<section className="flex w-full flex-col items-center rounded-lg bg-primary py-10">
						<span>10+</span>
						<span>Events</span>
					</section> */}
					<Image
						src={'/event.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-video rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-video rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-video rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-video rounded-lg"
					/>
				</section>
			</section>
		</section>
	);
};

export default EventsSection;
