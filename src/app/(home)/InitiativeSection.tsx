import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const InitiativeSection = () => {
	return (
		<section className="my-40 w-full">
			<section className="m-auto flex w-full max-w-6xl flex-col items-center justify-between px-5">
				<Header
					name="Our Initiative"
					paragraph="Welcome to our alumni community! We are dedicated to fostering connections between past students and creating opportunities for networking and growth."
				/>
				<section className="grid w-full grid-cols-1 gap-8 text-xl font-bold text-white md:grid-cols-2">
					<section className="relative w-full rounded-lg border">
						<Image
							src={'/event.jpg'}
							width={1000}
							height={0}
							alt={'event'}
							className="aspect-video rounded-lg"
						/>
						<section className="absolute bottom-0 w-full">
							<section className="relative h-full w-full">
								<div className="relative z-20 p-3">Teachers Day & reunion</div>
								<div className="absolute top-0 z-0 h-full w-full rounded-b-lg bg-black opacity-80 blur-sm"></div>
							</section>
						</section>
					</section>
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

export default InitiativeSection;
