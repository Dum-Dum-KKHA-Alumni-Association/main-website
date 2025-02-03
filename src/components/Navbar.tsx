'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
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
	FaWhatsapp,
	FaYoutube,
	FaFacebookF,
	FaXTwitter,
	FaVideo,
	FaImages,
} from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import logo from '../../public/logo.png';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion';
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from 'motion/react';
import { useAnimation } from 'motion/react';

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
		title: 'Facebook ',
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
		title: 'X.com (Twitter)',
		href: 'https://x.com/ddkkhaaa',
		description: 'Follow our Official Twitter Page',
	},
];

const gallery: {
	title: string;
	href: string;
	icon?: ReactNode;
	description: string;
}[] = [
	{
		title: 'Photos',
		href: '/gallery',
		icon: <FaImages className="text-3xl text-green-400" />,
		description: '',
	},
	{
		title: 'Videos',
		href: '/videos',
		icon: <FaVideo className="text-3xl text-[#E1306C]" />,
		description: '',
	},
];

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

// const initiative: { title: string; href: string; description?: string }[] = [
// 	{
// 		title: 'Disaster Relief',
// 		href: '/our-initiative/disaster-relief',
// 	},
// 	{
// 		title: 'Teachers Day 2024',
// 		href: '/our-initiative/teachers-day-2024',
// 	},
// 	{
// 		title: 'Bijoyer Adda 2024',
// 		href: '/our-initiative/bijoyer-adda-2024',
// 	},
// 	{
// 		title: 'Children Day 2024',
// 		href: '/our-initiative/children-day-2024',
// 	},
// 	{
// 		title: 'Bondu Cholo Sports Meeting 2024',
// 		href: '/our-initiative/bondu-cholo-sports-meeting-2024',
// 	},
// ];

const Navbar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [scrollingUp, setScrollingUp] = useState(true);
	const controls = useAnimation();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollingUp(currentScrollY < lastScrollY);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	useEffect(() => {
		controls.start({ y: scrollingUp ? 0 : '-35%' });
	}, [scrollingUp, controls]);

	return (
		<motion.nav
			initial={{ y: 0 }}
			animate={controls}
			transition={{ duration: 0.3 }}
			className="fixed top-0 z-50 w-full bg-background font-sora"
		>
			<section className="flex w-full items-center justify-center bg-primary px-5">
				<section className="mx-auto flex w-full max-w-[90rem] justify-between py-2 text-background">
					<section className="flex w-fit flex-row gap-4">
						<Link
							href={'https://wa.me/919432428233'}
							className="flex w-fit items-center gap-1.5"
						>
							<FaWhatsapp className="flex h-5 w-5 items-center justify-center" />
							<div className="space-y-0.5 text-sm">
								<div>+91 94324 28233</div>
							</div>
						</Link>
						<Link
							target="_blank"
							href={'mailto:ddkkhaaa@gmail.com'}
							className="hidden w-fit items-center gap-1.5 md:flex"
						>
							<MdOutlineEmail className="flex h-5 w-5 items-center justify-center" />
							<div className="space-y-0.5 text-sm">
								<div>ddkkhaaa@gmail.com</div>
							</div>
						</Link>
					</section>
					<section className="flex w-fit justify-center gap-2 text-background lg:gap-3">
						<Link
							href={'https://www.youtube.com/@ddkkhaaaofficial'}
							target="_blank"
							className="group flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background p-0.5 hover:bg-primary md:h-8 md:w-8"
						>
							<FaYoutube className="fill-primary text-base group-hover:bg-primary group-hover:fill-background md:text-xl" />
						</Link>
						<Link
							href={'https://www.facebook.com/ddkkhaaaofficial'}
							target="_blank"
							className="group flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background p-1 hover:bg-primary md:h-8 md:w-8"
						>
							<FaFacebookF className="fill-primary text-base group-hover:bg-primary group-hover:fill-background md:text-xl" />
						</Link>
						<Link
							href={'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E'}
							target="_blank"
							className="group flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background p-0.5 hover:bg-primary md:h-8 md:w-8"
						>
							<FaWhatsapp className="fill-primary text-base group-hover:bg-primary group-hover:fill-background md:text-xl" />
						</Link>
						<Link
							href={'https://www.instagram.com/ddkkhaaaofficial'}
							target="_blank"
							className="group flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background p-0.5 hover:bg-primary md:h-8 md:w-8"
						>
							<IoLogoInstagram className="fill-primary text-base group-hover:bg-primary group-hover:fill-background md:text-xl" />
						</Link>
						<Link
							href={'https://x.com/ddkkhaaa'}
							target="_blank"
							className="group flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background p-1 hover:bg-primary md:h-8 md:w-8"
						>
							<FaXTwitter className="fill-primary text-base group-hover:bg-primary group-hover:fill-background md:text-xl" />
						</Link>
					</section>
				</section>
			</section>
			<section className="mx-auto flex h-[4rem] w-full max-w-[90rem] items-center justify-between gap-3 px-5">
				<section className="m-auto flex h-[4rem] w-full items-center justify-between gap-3">
					<section className="flex w-full justify-between gap-8 lg:w-auto">
						<Link href={'/'} className="flex items-center gap-3">
							<Image
								src={logo}
								height={0}
								width={40}
								alt="Logo"
								className="w-auto"
								priority={true}
							/>
							<div className="flex flex-col font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex-row md:gap-2 md:text-lg lg:text-2xl">
								<span>Dum Dum K. K. Hindu Academy</span>
								<span>Alumni Association</span>
							</div>
						</Link>

						<Sheet>
							<SheetTrigger className={'lg:hidden'}>
								<Menu />
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>
										<Link href={'/'} className="flex items-center gap-3">
											<Image
												src={logo}
												height={0}
												width={40}
												alt="Logo"
												className="w-auto"
											/>
											<p className="flex flex-col items-start font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex-row md:gap-2 md:text-2xl">
												Dum Dum K. K. Hindu Academy Alumni Association
											</p>
										</Link>
									</SheetTitle>
									<SheetDescription></SheetDescription>
								</SheetHeader>

								<div className="mt-3 flex w-full flex-1 flex-col items-start font-semibold">
									<Link
										href={'/remergencia-2025'}
										className="mb-5 flex h-[3rem] w-full items-center justify-center rounded-md bg-blue-950 text-white"
									>
										ReMergencia 2025 🎉🎉
									</Link>
									<Link href={'/'} className="w-full border-b py-2">
										Home
									</Link>
									<Link href={'/about'} className="w-full border-b py-2">
										About Us
									</Link>
									<Link
										href={'/our-initiative'}
										className="w-full border-b py-2"
									>
										Initiatives
									</Link>
									<Link
										href={'/remergencia-2025'}
										className="w-full border-b py-2"
									>
										ReMergencia 2025
									</Link>
									<Link
										href={'https://ddkkhaaa.blogspot.com'}
										target={'_blank'}
										className="w-full border-b py-2"
									>
										Magazine
									</Link>

									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger className="w-full py-2 text-base font-semibold">
												Community
											</AccordionTrigger>
											<AccordionContent className="flex flex-col tracking-wide text-blue-600">
												{socialPlatform.map((social) => (
													<Link
														key={social.title}
														href={social.href}
														target="_blank"
														className="flex w-full items-center gap-2 py-2 pl-3"
													>
														{social.icon}
														{social.title}
														<ArrowUpRight size={20} />
													</Link>
												))}
											</AccordionContent>
										</AccordionItem>
									</Accordion>

									<Link href={'/gallery'} className="w-full border-b py-2">
										Gallery
									</Link>
									<Link href={'/videos'} className="w-full border-b py-2">
										Video
									</Link>
									<Link
										href={'/opportunities'}
										className="w-full border-b py-2"
									>
										Opportunities
									</Link>
									<Link href={'/contact'} className="w-full border-b py-2">
										Contact
									</Link>
								</div>

								{/* <SheetFooter className="mt-10">
									<Button className="w-full bg-[#FFD700]" variant={'outline'}>
										Join in
									</Button>
								</SheetFooter> */}
							</SheetContent>
						</Sheet>
					</section>

					{/* <section className="hidden gap-3 md:flex">
						<Link href={"/sign-in"}>
						<Button className="border-[#FFD700]" variant={'outline'}>
							{' '}
							Sign Up for Membership
						</Button>
						</Link>
						<Link href={"/sign-in"}>
						<Button className="bg-[#FFD700] font-semibold text-secondary">
							{' '}
							Log in
						</Button>
						</Link>
					</section> */}
				</section>
			</section>
			<section className="w-full bg-secondary px-5 py-0.5">
				<section className="m-auto flex h-auto w-full max-w-[90rem] items-center justify-start gap-3 xl:pl-16">
					<NavigationMenu className="hidden lg:flex">
						<NavigationMenuList className="gap-2">
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/our-initiative" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Initiatives
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							{/* <NavigationMenuItem>
								<Link href="/events" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Events
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem> */}
							<NavigationMenuItem>
								<Link href="/remergencia-2025" legacyBehavior passHref>
									<NavigationMenuLink
										className={
											navigationMenuTriggerStyle() +
											'bg-red-500 hover:bg-red-500'
										}
									>
										<span>ReMergencia 2025</span>
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
							{/* <NavigationMenuItem>
								<Link href="/videos" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Videos
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem> */}
							{/* <NavigationMenuItem>
								<Link href="/gallery" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Gallery
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem> */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="mx-3">
									Gallery
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{gallery.map((platform) => (
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
							<NavigationMenuItem>
								<Link
									href="https://ddkkhaaa.blogspot.com"
									target={'_blank'}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Magazine
									</NavigationMenuLink>
								</Link>
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
								<Link href="/opportunities" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Opportunities
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
		</motion.nav>
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
