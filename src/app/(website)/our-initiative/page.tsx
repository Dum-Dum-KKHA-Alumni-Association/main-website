import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { INITIATIVE_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurInitiativePage = async () => {
	const initiativeData = await sanityFetch<Gallery[]>({
		query: INITIATIVE_QUERY,
	});

	// function filterByISOString(arr: Gallery[], targetYear: number) {
	// 	return arr
	// 		.filter(
	// 			(item) => new Date(item.publishedAt!).getUTCFullYear() === targetYear
	// 		)
	// 		.sort(
	// 			(a, b) =>
	// 				new Date(a.publishedAt!).getTime() -
	// 				new Date(b.publishedAt!).getTime()
	// 		);
	// }
	function sortByISOString(arr: Gallery[]) {
		return arr.sort(
			(a, b) =>
				new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
		);
	}
	return (
		<section>
			<Navbar />
			<Heading name={'Initiatives'} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-7 px-5">
				<Header
					name="Our Initiatives"
					paragraph="Welcome to our alumni community! We are dedicated to fostering connections between past students and creating opportunities for networking and growth."
				/>

				{/* <section className="w-full rounded-md border border-primary bg-primary px-5 py-1">
					<h4 className="text-3xl text-background">2024</h4>
				</section> */}
				<section className="grid w-full grid-cols-1 gap-x-5 gap-y-7 text-xl font-bold text-white md:grid-cols-3">
					{sortByISOString(initiativeData).map(
						(gallery) =>
							gallery.thumbnail && (
								<Link
									key={gallery.slug?.current}
									href={`/gallery/${gallery.slug?.current}`}
									className="relative w-full rounded-lg border"
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
							)
					)}
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default OurInitiativePage;
