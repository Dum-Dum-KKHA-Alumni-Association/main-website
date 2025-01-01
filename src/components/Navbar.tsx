'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const components: { title: string; href: string; description: string }[] = [
	{
		title: '🎉Upcoming Events',
		href: '/events/upcoming',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'Past Events',
		href: '/docs/primitives/hover-card',
		description:
			'For sighted users to preview content available behind a link.',
	},
	{
		title: 'Progress',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'Scroll-area',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.',
	},
	{
		title: 'Tabs',
		href: '/docs/primitives/tabs',
		description:
			'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	},
	{
		title: 'Tooltip',
		href: '/docs/primitives/tooltip',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
	},
];

const events: { title: string; href: string; description?: string }[] = [
	{
		title: '🎉Upcoming Events',
		href: '/events/upcoming',
	},
	{
		title: 'Past Events',
		href: '/docs/primitives/hover-card',
	},
];

const Navbar = () => {
	return (
		<nav className="fixed top-0 z-50 w-full border-b bg-background font-sora">
			<section className="m-auto flex h-[4rem] w-full max-w-[90rem] items-center justify-between gap-3 px-5">
				<section className="flex w-full justify-between gap-8 md:w-auto">
					<Link href={'/'} className="flex items-center gap-3">
						<Image
							src={'/longLogo.png'}
							height={0}
							width={50}
							alt="Logo"
							className=""
						/>
					</Link>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href="https://ddkkhaaa.blogspot.com"
									legacyBehavior
									passHref
								>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Magazine
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="/donation" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Community
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Events</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{events.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="/donation" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Donation
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Sheet>
						<SheetTrigger className={'md:hidden'}>
							<Menu />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<Link href={'/'}>Home</Link>
								<Link href={'/about'}>About</Link>
								<Link href={'/donation'}>Donation</Link>
								<Link href={'/events'}>Events</Link>
								<Link href={'/contact-us'}>Contact</Link>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</section>
				<section className="hidden gap-3 md:flex">
					<Button className="border-[#FFD700]" variant={'outline'}>
						{' '}
						Join in
					</Button>
					<Button className="bg-[#FFD700] font-semibold text-secondary">
						{' '}
						Log in
					</Button>
				</section>
			</section>
			<section className="m-auto flex h-[4rem] w-full max-w-[90rem] items-center justify-between gap-3 border-b px-5">
				<section className="flex w-full justify-between gap-8 md:w-auto">
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href="https://ddkkhaaa.blogspot.com"
									legacyBehavior
									passHref
								>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Magazine
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="/donation" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Community
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Events</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{events.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="/donation" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Donation
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Sheet>
						<SheetTrigger className={'md:hidden'}>
							<Menu />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<Link href={'/'}>Home</Link>
								<Link href={'/about'}>About</Link>
								<Link href={'/donation'}>Donation</Link>
								<Link href={'/events'}>Events</Link>
								<Link href={'/contact-us'}>Contact</Link>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</section>
				<section className="hidden gap-3 md:flex">
					<Button className="border-[#FFD700]" variant={'outline'}>
						{' '}
						Join in
					</Button>
					<Button className="bg-[#FFD700] font-semibold text-secondary">
						{' '}
						Log in
					</Button>
				</section>
			</section>
		</nav>
	);
};

export default Navbar;

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
