import AuthNavbar from '@/components/AuthNavbar';

export default function SignInLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			{/* Include shared UI here e.g. a header or sidebar */}
			<AuthNavbar />
			{children}
		</main>
	);
}
