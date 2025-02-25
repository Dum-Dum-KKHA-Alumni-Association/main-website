import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Advanced form example using react-hook-form and Zod.',
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: SettingsLayoutProps) {
	return (
		<main className="pt-0 font-inter">
			<AppNavbar />
			{children}
			<AppFooter />
		</main>
	);
}
