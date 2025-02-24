export default function SignInLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="pt-0">
			{/* Include shared UI here e.g. a header or sidebar */}
			{/* <AuthNavbar /> */}
			{children}
		</main>
	);
}
