import React from 'react';

import { SidebarNav } from '@/app/(app)/extras/components/sidebar-nav';

import { CircleUser, MoveLeft, Settings } from 'lucide-react';
import Link from 'next/link';
import AppNavbar from '@/components/AppNavbar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const sidebarNavItems = [
	{
		title: 'Profile',
		href: '/settings',
		icon: <CircleUser />,
	},
	// {
	// 	title: 'Email Notification',
	// 	href: '/settings/email',
	// 	icon: <MdOutlineMarkEmailUnread />,
	// },
	// {
	// 	title: 'Appearance',
	// 	href: '/settings/appearance',
	// 	icon: <CircleUser />,
	// },
	// {
	// 	title: 'Notifications',
	// 	href: '/settings/notifications',
	// 	icon: <CircleUser />,
	// },
	{
		title: 'Account Management',
		href: '/settings/account',
		icon: <Settings />,
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
					<section className="space-y-3 p-3">
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
