import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
						<Dialog key={image._key}>
							<DialogTrigger>
								<Image
									src={imageUrlFor(image.image as SanityImageSource)
										.quality(20)
										.url()}
									width={1000}
									height={0}
									alt={image.alt!}
									className="aspect-square rounded-md object-cover"
								/>
							</DialogTrigger>
							<DialogContent className="flex w-full max-w-6xl items-center justify-center p-2 sm:p-4">
								<Image
									src={imageUrlFor(image.image as SanityImageSource).url()}
									width={1000}
									height={600}
									alt={image.alt!}
									className="h-auto max-h-[90vh] w-full rounded-md object-contain md:max-h-[80vh]"
								/>
							</DialogContent>
						</Dialog>
					))}
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default page;
