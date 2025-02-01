import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { INITIATIVE_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { MoveRight } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InitiativeSection = async () => {
	const galleryData = await sanityFetch<Gallery[]>({ query: INITIATIVE_QUERY });

	console.log(galleryData);
	return (
		<section className="my-20 w-full lg:my-40">
			<section className="m-auto flex w-full max-w-6xl flex-col items-center justify-between px-5">
				<Header
					name="Our Initiatives"
					paragraph="Welcome to our alumni community! We are dedicated to fostering connections between past students and creating opportunities for networking and growth."
				/>
				<section className="grid w-full grid-cols-1 gap-x-4 gap-y-8 text-xl font-bold text-white md:grid-cols-2">
					{galleryData.splice(0, 2)?.map((gallery) => (
						<Link
							key={gallery.slug?.current}
							href={`/gallery/${gallery.slug?.current}`}
							className="relative aspect-[4/3] w-full rounded-lg border"
						>
							{gallery.thumbnail && (
								<Image
									src={imageUrlFor(
										gallery.thumbnail as SanityImageSource
									).url()}
									width={1000}
									height={0}
									alt={gallery.title!}
									className="aspect-[4/3] rounded-lg"
								/>
							)}

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
				<section className="mt-10 flex w-full items-center justify-center">
					<Link href={`/our-initiative`}>
						<Button className="p-5">
							See More <MoveRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default InitiativeSection;
