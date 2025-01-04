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
	return (
		<section>
			<Navbar />
			<Heading name={'Videos'} />
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-5">
				<section className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{videoData.map(
						(video) =>
							video.image && (
								<Link
									key={video.link}
									target="_blank"
									href={video.link!}
									className="flex flex-col"
								>
									<Image
										src={imageUrlFor(video.image as SanityImageSource).url()}
										width={1000}
										height={0}
										alt={video.image.alt}
										className="rounded-lg"
									/>
									{/* <span className='font-medium mt-4'>{video.title}</span> */}
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
