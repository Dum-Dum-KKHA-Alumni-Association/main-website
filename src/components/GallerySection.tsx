import React from 'react';

const GallerySection = () => {
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
			</section>
		</section>
	);
};

export default GallerySection;
