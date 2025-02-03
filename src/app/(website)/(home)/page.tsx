import Footer from '@/components/Footer';
import HeroSection from '@/app/(website)/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import InitiativeSection from './InitiativeSection';
import PublicationSection from './PublicationSection';
import AboutSection from './AboutSection';
import { sanityFetch } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/actions/queries';
import { HomePage } from '@/types/sanity';
import VideosSection from './Videos';
import RegistrationBanner from './RegistrationBanner';

export default async function Home() {
	const homePageData = await sanityFetch<HomePage>({ query: HOMEPAGE_QUERY });

	return (
		<main>
			<Navbar />
			<HeroSection hero={homePageData.hero!} />
			<RegistrationBanner
				heading={'Remergencia 2025'}
				description={
					'We are excited to announce ReMergencia 2025 and welcome your presence and any contribution of your choice for this grand special reunion celebration.'
				}
				url={'/remergencia-2025'}
			/>
			<AboutSection />
			{/* <Banner /> */}
			<InitiativeSection />
			<PublicationSection />
			{/* <Gallery gallery={homePageData.gallery} /> */}
			<VideosSection />
			{/* <Faq /> */}
			<Footer />
		</main>
	);
}
