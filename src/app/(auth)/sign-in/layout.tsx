import Navbar from '@/components/Navbar';

export default function SignInLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar />
			{children}
		</main>
	);
}
