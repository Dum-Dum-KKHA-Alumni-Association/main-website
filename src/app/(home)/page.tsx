import Footer from '@/components/Footer';
import HeroSection from '@/app/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import Banner from './Banner';
import Gallery from './Gallery';
import InitiativeSection from './InitiativeSection';
import Faq from './Faq';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<Banner />
			<InitiativeSection />
			<Gallery />
			<Faq />
			<Footer />
		</main>
	);
}
