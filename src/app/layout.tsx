import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
	title: 'Dum Dum Krishna Kumar Hindu Academy Alumni Association',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ClerkProvider
					appearance={{
						elements: {
							formButtonPrimary:
								'bg-primary hover:bg-[#f3f4f6] hover:text-black',
						},
					}}
				>
					{children}
				</ClerkProvider>
			</body>
		</html>
	);
}
