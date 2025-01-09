import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { Specific_Gallery_Series } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import Image from 'next/image';

import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const collectionData = await sanityFetch<Gallery>({
		query: Specific_Gallery_Series((await params).slug),
	});

	console.log(collectionData);
	return (
		<section>
			<Navbar />
			<Heading name={collectionData.title!} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-5">
				<section className="mt-2 grid w-full grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
					{collectionData.collections?.map((image) => (
						<Image
							key={image._key}
							src={imageUrlFor(image.image as SanityImageSource)
								.quality(20)
								.url()}
							width={1000}
							height={0}
							alt={image.alt!}
							className="aspect-square rounded-md object-cover"
						/>
					))}
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default page;
