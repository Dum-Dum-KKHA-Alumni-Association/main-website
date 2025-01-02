import Footer from '@/components/Footer';
import HeroSection from '@/app/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import Banner from './Banner';
import Gallery from './Gallery';
import InitiativeSection from './InitiativeSection';
import Faq from './Faq';
import PublicationSection from './PublicationSection';
import AboutSection from './AboutSection';
import SpeechSection from './SpeechSection';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<Banner />
			<InitiativeSection />
			<SpeechSection />
			<Gallery />
			<PublicationSection />
			<Faq />
			<Footer />
		</main>
	);
}
