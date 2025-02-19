import AppNavbar from '@/components/AppNavbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Advanced form example using react-hook-form and Zod.',
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<main className="pt-0">
			<AppNavbar />
			{children}
		</main>
	);
}
