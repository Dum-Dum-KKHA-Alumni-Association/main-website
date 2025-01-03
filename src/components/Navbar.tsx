'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { ArrowUpRight, Menu } from 'lucide-react';
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
import {
	FaSquareWhatsapp,
	FaSquareInstagram,
	FaSquareXTwitter,
} from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Button } from './ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion';
import logo from '../../public/logo.png';

const socialPlatform: {
	icon?: ReactNode;
	title: string;
	href: string;
	description: string;
}[] = [
	{
		icon: <FaSquareWhatsapp className="text-3xl text-green-400" />,
		title: 'Whats App Community',
		href: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		description: 'Follow our Official Whatsapp Channel',
	},
	{
		icon: <FaFacebookSquare className="text-3xl text-blue-600" />,
		title: 'Facebook Community',
		href: 'https://www.facebook.com/ddkkhaaaofficial',
		description: 'Follow our Official Facebook Page',
	},
	{
		icon: <IoLogoYoutube className="text-3xl text-red-600" />,
		title: 'Youtube',
		href: 'https://www.youtube.com/@ddkkhaaaofficial',
		description: 'Subscribe our Official Youtube Channel;',
	},
	{
		icon: <FaSquareInstagram className="text-3xl text-[#E1306C]" />,
		title: 'Instagram',
		href: 'https://www.instagram.com/ddkkhaaaofficial',
		description: 'Follow our Official Instagram Page',
	},
	{
		icon: <FaSquareXTwitter className="text-3xl text-black" />,
		title: 'X.com',
		href: 'https://x.com/ddkkhaaa',
		description: 'Follow our Official Twitter Page',
	},
];
// const donations: { title: string; href: string; description?: string }[] = [
// 	{
// 		title: 'Active Donation',
// 		href: '/donation/active',
// 	},
// 	{
// 		title: 'Expired Donations',
// 		href: '/donation/expired',
// 	},
// ];

// const events: { title: string; href: string; description?: string }[] = [
// 	{
// 		title: '🎉Upcoming Events',
// 		href: '/events/upcoming',
// 	},
// 	{
// 		title: 'Past Events',
// 		href: '/docs/primitives/hover-card',
// 	},
// ];

const Navbar = () => {
	return (
		<nav className="fixed top-0 z-50 w-full bg-background font-sora">
			<section className="mx-auto flex h-[4rem] w-full max-w-[90rem] items-center justify-between gap-3 px-5">
				<section className="m-auto flex h-[4rem] w-full items-center justify-between gap-3">
					<section className="flex w-full justify-between gap-8 md:w-auto">
						<Link href={'/'} className="flex items-center gap-3">
							<Image
								src={logo}
								height={0}
								width={40}
								alt="Logo"
								className="w-auto"
								priority={true}
							/>
							<div className="flex flex-col font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex-row md:gap-2 md:text-2xl">
								<span>Dum Dum K. K. Hindu Academy</span>
								<span>Alumni Association</span>
							</div>
						</Link>

						<Sheet>
							<SheetTrigger className={'md:hidden'}>
								<Menu />
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>
										<Link href={'/'} className="flex items-center gap-3">
											<Image
												src={'/logo.png'}
												height={0}
												width={40}
												alt="Logo"
												className="w-auto"
											/>
											<div className="flex flex-col font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex-row md:gap-2 md:text-2xl">
												<span>Dum Dum K. K. Hindu Academy</span>
												<span>Alumni Association</span>
											</div>
										</Link>
									</SheetTitle>
									<SheetDescription></SheetDescription>
								</SheetHeader>

								<div className="mt-3 flex w-full flex-1 flex-col items-start font-semibold">
									<Link href={'/'} className="w-full border-b py-2">
										Home
									</Link>
									<Link href={'/about'} className="w-full border-b py-2">
										About Us
									</Link>
									<Link href={'/donation'} className="w-full border-b py-2">
										Donation
									</Link>

									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger className="w-full py-2 text-base font-semibold">
												Events
											</AccordionTrigger>
											<AccordionContent className="flex flex-col tracking-wide text-blue-600">
												<Link
													href={'/events'}
													className="flex w-full items-center gap-2 py-2 pl-3"
												>
													Current Events <ArrowUpRight size={20} />
												</Link>
												<Link
													href={'/events'}
													className="flex w-full items-center gap-2 py-2 pl-3"
												>
													Upcoming Events <ArrowUpRight size={20} />
												</Link>
												<Link
													href={'/events'}
													className="flex w-full items-center gap-2 py-2 pl-3"
												>
													Previous Events <ArrowUpRight size={20} />
												</Link>
											</AccordionContent>
										</AccordionItem>
									</Accordion>

									<Link href={'/gallery'} className="w-full border-b py-2">
										Gallery
									</Link>
									<Link
										href={'https://ddkkhaaa.blogspot.com'}
										className="w-full border-b py-2"
									>
										Magazine
									</Link>
									<Link href={'/contact'} className="w-full border-b py-2">
										Contact
									</Link>
								</div>

								<SheetFooter className="mt-10">
									<Button className="w-full bg-[#FFD700]" variant={'outline'}>
										Join in
									</Button>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</section>
					{/*
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
							*/}
				</section>
			</section>
			<section className="w-full bg-secondary px-5 py-0.5">
				<section className="m-auto flex h-auto w-full max-w-[90rem] items-center justify-start gap-3 pl-16">
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/donation" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Donation
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Donation
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{donations.map((donation) => (
											<ListItem
												key={donation.title}
												title={donation.title}
												href={donation.href}
											>
												{donation.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem> */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Community</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{socialPlatform.map((platform) => (
											<ListItem
												key={platform.title}
												title={platform.title}
												href={platform.href}
												icon={platform.icon}
											>
												{platform.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
								<NavigationMenuTrigger>
									<Link href="/events" legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Events
										</NavigationMenuLink>
									</Link>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{events.map((event) => (
											<ListItem
												key={event.title}
												title={event.title}
												href={event.href}
											>
												{event.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem> */}

							<NavigationMenuItem>
								<Link href="/gallery" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Gallery
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
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</section>
			</section>
		</nav>
	);
};

export default Navbar;

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	{
		className?: string;
		icon?: React.ReactNode;
		title: string;
		children: React.ReactNode;
	} & React.ComponentPropsWithoutRef<'a'>
>(({ className, icon, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				{icon ? (
					<a
						ref={ref}
						className={cn(
							// 'block select-none flex space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							'flex select-none gap-2 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="flex w-1/6 items-center justify-center">{icon}</div>

						<div className="w-2/3">
							<div className="text-sm font-medium leading-none">{title}</div>
							<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
								{children}
							</p>
						</div>
					</a>
				) : (
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
				)}
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
