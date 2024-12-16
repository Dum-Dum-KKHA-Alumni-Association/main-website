import React from 'react';

const AboutSection = () => {
	return (
		<section className="my-24 w-full">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="">About Us</h2>
				</section>
				<section className="w-full max-w-3xl">
					Welcome to our alumni community! We are dedicated to fostering
					connections between past students and creating opportunities for
					networking and growth.
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
			{/* <section className="m-auto mt-40 flex w-full max-w-[90rem] flex-col items-center justify-between gap-10 px-5">
				<section className="w-full border flex">
					<section className="w-[60%] border border-blue-600"> </section>
					<section className="w-[40%] border border-red-600 aspect-[3/4]"> <Image/> </section>
				</section>
			</section> */}
		</section>
	);
};

export default AboutSection;
