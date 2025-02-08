import { GALLERY_QUERY } from '@/sanity/actions/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { Gallery } from '@/types/sanity';
import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const galleryData: MetadataRoute.Sitemap = (
		await sanityFetch<Gallery[]>({ query: GALLERY_QUERY })
	).map((gallery) => ({
		url: `${baseUrl}/gallery/${gallery.slug?.current}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.9,
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${baseUrl}/remergencia-2025`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${baseUrl}/our-initiative`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/gallery`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.9,
		},
		...galleryData,
		{
			url: `${baseUrl}/videos`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/tnc`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/refund-policy`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}
