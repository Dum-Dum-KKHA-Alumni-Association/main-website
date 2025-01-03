import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';

export default function ContactLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar />
			<Heading name={'Gallery'} />
			{children}
		</main>
	);
}
