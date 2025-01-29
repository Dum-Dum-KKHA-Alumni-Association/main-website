import { Button } from '@/components/ui/button';
import { VIDEOS_QUERY } from '@/sanity/actions/queries';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { sanityFetch } from '@/sanity/lib/client';
import { Videos } from '@/types/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VideosSection = async () => {
	const videoData = await sanityFetch<Videos[]>({ query: VIDEOS_QUERY });
	function sortByISOString(arr: Videos[]) {
		return arr.sort(
			(a, b) =>
				new Date(a.publishedAt!).getTime() - new Date(b.publishedAt!).getTime()
		);
	}
	return (
		<section className="w-full bg-foreground py-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="text-white">Our Videos</h2>
				</section>
				<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
					{sortByISOString(videoData)
						?.splice(0, 3)
						.map(
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

					{/*  */}
				</section>

				<Link href={'/videos'} className="mt-8">
					<Button className="flex items-center justify-center p-6">
						View More Videos
						<ArrowRight />{' '}
					</Button>
				</Link>
			</section>
		</section>
	);
};

export default VideosSection;
