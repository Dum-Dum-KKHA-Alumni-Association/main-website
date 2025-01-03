import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { GALLERY_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';

// const galleryImages: Array<{ image: string; title: string }> = [
// 	{
// 		title: '',
// 		image: '/gallery/1st-quiz-competition-2024.jpg',
// 	},
// 	// {
// 	// 	title: '',
// 	// 	image: '/gallery/biswatosh-sengupta.png',
// 	// },
// 	{
// 		title: '',
// 		image: '/gallery/debate-competition-2024.png',
// 	},
// 	// {
// 	// 	title: '',
// 	// 	image: '/gallery/dum-dum-subhasnagar-high-school.png',
// 	// },
// 	{
// 		title: '',
// 		image: '/gallery/debate-competition-2024-champions.png',
// 	},
// ];

const GalleryPage = async () => {
	const galleryData = await sanityFetch<Gallery[]>({ query: GALLERY_QUERY });
	return (
		<section>
			<Navbar />
			<Heading name={'Gallery'} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-5">
				{galleryData?.map((gallery) => (
					<section key={gallery._id} className="flex flex-col gap-4">
						<h4>{gallery.title}</h4>
						<section className="mt-2 grid w-full grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
							{gallery.collections?.map((image) => (
								<Image
									key={image._key}
									src={imageUrlFor(image.image as SanityImageSource).url()}
									width={1000}
									height={0}
									alt={image.title!}
									className="aspect-[4/3] rounded-md"
								/>
							))}
						</section>
					</section>
				))}
			</section>
			<Footer />
		</section>
	);
};

export default GalleryPage;
