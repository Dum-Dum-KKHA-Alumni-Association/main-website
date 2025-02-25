import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Advanced form example using react-hook-form and Zod.',
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function AccountsLayout({ children }: SettingsLayoutProps) {
	return <>{children}</>;
}
