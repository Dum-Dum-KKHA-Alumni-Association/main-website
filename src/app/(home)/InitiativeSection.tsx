import Header from '@/components/Header';
import { GALLERY_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InitiativeSection = async () => {
	const galleryData = await sanityFetch<Gallery[]>({ query: GALLERY_QUERY });

	console.log(galleryData);
	return (
		<section className="my-40 w-full">
			<section className="m-auto flex w-full max-w-6xl flex-col items-center justify-between px-5">
				<Header
					name="Our Initiative"
					paragraph="Welcome to our alumni community! We are dedicated to fostering connections between past students and creating opportunities for networking and growth."
				/>
				<section className="grid w-full grid-cols-1 gap-8 text-xl font-bold text-white md:grid-cols-2">
					{galleryData?.map((gallery) => (
						<Link
							key={gallery.slug?.current}
							href={`/gallery/${gallery.slug?.current}`}
							className="relative w-full rounded-lg border"
						>
							<Image
								src={imageUrlFor(gallery.thumbnail as SanityImageSource).url()}
								width={1000}
								height={0}
								alt={gallery.title!}
								className="aspect-[4/3] rounded-lg"
							/>
							<section className="absolute bottom-0 w-full">
								<section className="relative h-full w-full">
									<div className="relative z-20 p-3 font-sora text-xl font-medium">
										{gallery.title}
									</div>
									<div className="absolute top-0 z-0 h-full w-full rounded-b-lg bg-black opacity-80 blur-sm"></div>
								</section>
							</section>
						</Link>
					))}
				</section>
			</section>
		</section>
	);
};

export default InitiativeSection;
