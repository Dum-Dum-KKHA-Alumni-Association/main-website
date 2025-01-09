import Footer from '@/components/Footer';
import HeroSection from '@/app/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import Banner from './Banner';
import Gallery from './Gallery';
import InitiativeSection from './InitiativeSection';
import PublicationSection from './PublicationSection';
import AboutSection from './AboutSection';
import { sanityFetch } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/actions/queries';
import { HomePage } from '@/types/sanity';

export default async function Home() {
	const homePageData = await sanityFetch<HomePage>({ query: HOMEPAGE_QUERY });

	return (
		<main>
			<Navbar />
			<HeroSection hero={homePageData.hero!} />
			<AboutSection />
			<Banner />
			<InitiativeSection />
			<PublicationSection />
			<Gallery gallery={homePageData.gallery} />
			{/* <Faq /> */}
			<Footer />
		</main>
	);
}
