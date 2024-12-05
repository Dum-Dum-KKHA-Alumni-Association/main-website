import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<GallerySection />

			<Footer />
		</main>
	);
}
