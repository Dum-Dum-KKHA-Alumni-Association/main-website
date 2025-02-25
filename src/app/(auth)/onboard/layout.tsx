import AppNavbar from '@/components/AppNavbar';
export default function OnboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="pt-0 font-inter">
			{/* Include shared UI here e.g. a header or sidebar */}
			<AppNavbar />
			{children}
		</main>
	);
}
