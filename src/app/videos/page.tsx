import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import { VIDEOS_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Videos } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VideosPage = async () => {
	const videoData = await sanityFetch<Videos[]>({ query: VIDEOS_QUERY });
	function sortByISOString(arr: Videos[]) {
		return arr.sort(
			(a, b) =>
				new Date(a.publishedAt!).getTime() - new Date(b.publishedAt!).getTime()
		);
	}
	return (
		<section>
			<Navbar />
			<Heading name={'Videos'} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-5">
				<section className="grid w-full grid-cols-1 gap-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
					{sortByISOString(videoData)?.map(
						(video) =>
							video.thumbnail && (
								<Link
									key={video.link}
									target="_blank"
									href={video.link!}
									className="flex w-full flex-col"
								>
									<Image
										src={imageUrlFor(
											video.thumbnail as SanityImageSource
										).url()}
										width={1000}
										height={0}
										alt={video.thumbnail.alt!}
										className="rounded-lg"
									/>
									{/* <span className="mt-4 font-medium">{video.title}</span> */}
								</Link>
							)
					)}
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default VideosPage;
