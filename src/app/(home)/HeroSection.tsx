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
		<div className="relative aspect-[16/7] w-full">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation, EffectFade]}
				className="aspect-[16/7]"
			>
				<SwiperSlide>
					<Image
						width={1000}
						height={0}
						alt="image"
						className="w-full"
						src="/ddkkha.jpg"
					/>
				</SwiperSlide>
			</Swiper>
			{/* <div className='w-full h-full absolute bg-black'></div> */}
		</div>
	);
};

export default HeroSection;
