'use client';
import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<section className="relative flex w-full flex-1 p-5 pt-14">
			<section className="mx-auto w-full max-w-[90rem] rounded-xl border">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation, EffectFade]}
					className="aspect-[16/8] w-full rounded-xl"
				>
					<SwiperSlide>
						<Image
							width={1000}
							height={0}
							alt="image"
							className="w-full"
							src="/ddkkha.jpg"
						/>
						{/*
						
						<section className="absolute top-0 h-full w-full bg-black opacity-50" />
						<section className="absolute top-0 flex h-full w-full items-center justify-center text-white">
							<h1>Welcome Back Alumni</h1>
						</section>
							*/}
					</SwiperSlide>
				</Swiper>
			</section>
			<section className=""></section>
		</section>
	);
};

export default HeroSection;
