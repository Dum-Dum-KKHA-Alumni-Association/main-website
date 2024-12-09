import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'swiperjs.com',
			},
			{
				protocol: 'https',
				hostname: 'portal.ddkkha.com',
			},
		],
	},
};

export default nextConfig;
