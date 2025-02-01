import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { GALLERY_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryPage = async () => {
	const galleryData = await sanityFetch<Gallery[]>({ query: GALLERY_QUERY });
	return (
		<section>
			<Navbar />
			<Heading name={'Gallery'} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-5">
				{galleryData
					.sort(
						(a, b) =>
							new Date(b.publishedAt!).getTime() -
							new Date(a.publishedAt!).getTime()
					)
					?.map((gallery) => (
						<section key={gallery._id} className="flex flex-col gap-4">
							<Link href={`/gallery/${gallery.slug?.current}`}>
								<h4 className="flex items-center gap-3 text-xl">
									{gallery.title} <ArrowRight />
								</h4>
							</Link>
							<section className="mt-2 grid w-full grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
								{gallery.collections?.splice(0, 3).map((image) => (
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
												src={imageUrlFor(
													image.image as SanityImageSource
												).url()}
												width={1000}
												height={600}
												alt={image.alt!}
												className="h-auto max-h-[90vh] w-full rounded-md object-contain md:max-h-[80vh]"
											/>
										</DialogContent>
									</Dialog>
								))}
							</section>
							<section className="W-full flex items-center justify-center">
								<Link href={`/gallery/${gallery.slug?.current}`}>
									<Button className="p-5">
										See More <MoveRight />
									</Button>
								</Link>
							</section>
						</section>
					))}
			</section>

			<Footer />
		</section>
	);
};

export default GalleryPage;
