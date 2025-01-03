import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

const galleryImages: Array<{ image: string; title: string }> = [
	{
		title: '',
		image: '/gallery/1st-quiz-competition-2024.jpg',
	},
	// {
	// 	title: '',
	// 	image: '/gallery/biswatosh-sengupta.png',
	// },
	{
		title: '',
		image: '/gallery/debate-competition-2024.png',
	},
	// {
	// 	title: '',
	// 	image: '/gallery/dum-dum-subhasnagar-high-school.png',
	// },
	{
		title: '',
		image: '/gallery/debate-competition-2024-champions.png',
	},
];

const GalleryPage = () => {
	return (
		<>
			<section className="mx-auto mt-10 w-full max-w-7xl px-5">
				<h4>Teachers Day 2024</h4>
				<section className="mt-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{galleryImages.map((image, index) => (
						<Image
							key={index}
							src={image.image}
							width={1000}
							height={0}
							alt={image.title}
							className="aspect-square"
						/>
					))}
				</section>
			</section>
			<Footer />
		</>
	);
};

export default GalleryPage;
