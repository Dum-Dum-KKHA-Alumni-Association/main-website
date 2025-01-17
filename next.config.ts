import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'blogger.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'scontent.fccu2-*.fna.fbcdn.net',
			},
			{
				protocol: 'https',
				hostname: 'portal.ddkkha.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: `/images/**`,
			},
		],
	},
};

export default nextConfig;
