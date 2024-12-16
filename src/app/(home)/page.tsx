import Footer from '@/components/Footer';
import HeroSection from '@/app/(home)/HeroSection';
import Navbar from '@/components/Navbar';
import EventsSection from './EventsSection';
import BlogSection from './PublicationSection';
import AboutSection from './AboutSection';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<EventsSection />
			{/* <GallerySection /> */}
			<BlogSection />
			<Footer />
		</main>
	);
}
