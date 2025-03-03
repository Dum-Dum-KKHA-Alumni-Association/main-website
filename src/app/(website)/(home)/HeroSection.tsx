'use client';
import React, { FC } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
	hero: {
		image?: string;
		title?: string;
		url?: string;
	}[];
}

const HeroSection: FC<HeroSectionProps> = ({ hero }) => {
	console.log(hero);
	return (
		<section className="relative flex w-full flex-1 lg:pt-14">
			<section className="mx:px-5 mx-auto w-full max-w-[90rem] rounded-xl">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation, EffectFade]}
					className="aspect-auto w-full border lg:aspect-[16/7] lg:rounded-xl"
				>
					{hero?.map((hero) => (
						<SwiperSlide key={hero.image}>
							{hero.url ? (
								<Link href={hero.url || '#'}>
									<Image
										width={2000}
										height={0}
										alt="image"
										className="h-full w-full lg:h-auto lg:object-cover"
										src={hero?.image || ''}
									/>
								</Link>
							) : (
								<Image
									width={2000}
									height={0}
									alt="image"
									className="h-full w-full lg:h-auto lg:object-cover"
									src={hero?.image || ''}
								/>
							)}

							{/*
						
						<section className="absolute top-0 h-full w-full bg-black opacity-50" />
						<section className="absolute top-0 flex h-full w-full items-center justify-center text-white">
							<h1>Welcome Back Alumni</h1>
							</section>
							*/}
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</section>
	);
};

export default HeroSection;
