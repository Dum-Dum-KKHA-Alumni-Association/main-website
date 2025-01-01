import Footer from '@/components/Footer';
import HeroSection from '@/app/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import Banner from './Banner';
import Gallery from './Gallery';
import InitiativeSection from './InitiativeSection';
import Faq from './Faq';
import PublicationSection from './PublicationSection';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<Banner />
			<InitiativeSection />
			<Gallery />
			<PublicationSection />
			<Faq />
			<Footer />
		</main>
	);
}
