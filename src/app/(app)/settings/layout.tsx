import { Metadata } from 'next';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Advanced form example using react-hook-form and Zod.',
};

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return <Sidebar>{children}</Sidebar>;
}
