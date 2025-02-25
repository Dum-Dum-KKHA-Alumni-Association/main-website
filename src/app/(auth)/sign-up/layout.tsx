import AuthNavbar from '@/components/AuthNavbar';

export default function SignUpLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="md:pt-0">
			{/* Include shared UI here e.g. a header or sidebar */}
			<AuthNavbar />
			{children}
		</main>
	);
}
