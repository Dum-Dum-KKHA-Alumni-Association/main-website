import React from 'react';
import { Separator } from './ui/separator';
import { SidebarNav } from '@/app/(app)/extras/components/sidebar-nav';
import { Button } from './ui/button';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import AppNavbar from './AppNavbar';

const sidebarNavItems = [
	{
		title: 'Profile',
		href: '/dashboard',
	},
	{
		title: 'Account',
		href: '/dashboard/account',
	},
	{
		title: 'Appearance',
		href: '/dashboard/appearance',
	},
	{
		title: 'Notifications',
		href: '/dashboard/notifications',
	},
	{
		title: 'Display',
		href: '/dashboard/display',
	},
];

const Sidebar = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<section className="flex h-screen w-full flex-col">
			<AppNavbar />
			<section className="flex flex-1 overflow-hidden">
				<aside className="relative min-w-72 bg-white">
					<section className="p-3">
						<span className="text-xs font-medium">USER SETTINGS</span>
						<SidebarNav items={sidebarNavItems} />
					</section>
					<section className="absolute bottom-0 w-full border-t p-3 py-5">
						<Link href={'/'}>
							<Button
								variant={'ghost'}
								size={'lg'}
								className="w-full justify-start"
							>
								<MoveLeft /> Back to Home
							</Button>
						</Link>
					</section>
				</aside>
				<Separator orientation={'vertical'} />
				<section className="w-full overflow-y-auto overflow-x-hidden">
					{children}
				</section>
			</section>
		</section>
	);
};

export default Sidebar;
