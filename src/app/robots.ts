import { GALLERY_QUERY } from '@/sanity/actions/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import type { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
	const gallerySlugUrls: string[] = (
		await sanityFetch<Gallery[]>({ query: GALLERY_QUERY })
	).map((gallery) => `/gallery/${gallery.slug?.current}`);
	return {
		rules: {
			userAgent: '*',
			allow: [
				'/',
				'/remergencia-2025',
				'/about',
				'/our-initiative',
				'/videos',
				'/contact',
				'/gallery',
				...gallerySlugUrls,
				'/privacy-policy',
				'/tnc',
				'/refund-policy',
			],
			disallow: [
				'/sign-in',
				'/sign-up',
				'/dashboard',
				'/donation',
				'/events',
				'/membership',
				'/opportunity',
			],
		},
		sitemap: 'https://www.ddkkhaaa.org/sitemap.xml',
	};
}
