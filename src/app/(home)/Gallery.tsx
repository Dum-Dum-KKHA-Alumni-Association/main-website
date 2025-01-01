import Image from 'next/image';
import React from 'react';

const Gallery = () => {
	return (
		<section className="w-full bg-foreground py-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="text-white">Gallery</h2>
				</section>
				<section className="grid w-full grid-cols-3 gap-6">
					<Image
						src={'/event.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={'/ddkkha.jpg'}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
				</section>
			</section>
		</section>
	);
};

export default Gallery;
