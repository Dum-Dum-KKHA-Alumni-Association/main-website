import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface GalleryProps {
	gallery?: string[];
}

const Gallery: FC<GalleryProps> = ({ gallery }) => {
	return (
		<section className="w-full bg-foreground py-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="text-white">Gallery</h2>
				</section>
				<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
					{gallery?.map((image) => (
						<Image
							key={image}
							src={image}
							width={1000}
							height={0}
							alt={'event'}
							className="aspect-square rounded-lg"
						/>
					))}

					{/*  */}
				</section>

				<Link href={'/gallery'} className="mt-14">
					<Button className="flex items-center justify-center p-6">
						View More Pictures
						<ArrowRight />{' '}
					</Button>
				</Link>
			</section>
		</section>
	);
};

export default Gallery;
