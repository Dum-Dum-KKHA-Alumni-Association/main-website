'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
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
	FaSquareWhatsapp,
	FaSquareInstagram,
	FaSquareXTwitter,
} from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import logo from '../../public/logo.png';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion';
import { Separator } from './ui/separator';

import UserProfileAvatar from './UserProfileAvatar';
import { Button } from './ui/button';

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

const AppNavbar = () => {
	return (
		<header className="sticky top-0 w-full bg-white font-sora">
			<section className="mx-auto flex h-[4rem] w-full items-center justify-between gap-3 px-5">
				<section className="flex w-full justify-start gap-2 lg:w-auto">
					<Sheet>
						<SheetTrigger className={'lg:hidden'}>
							<Menu />
						</SheetTrigger>
						<SheetContent side={'left'}>
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
									🎉 Reunion 2025 🎉
								</Link>
								<Link href={'/'} className="w-full border-b py-2">
									Home
								</Link>
								<Link href={'/about'} className="w-full border-b py-2">
									About Us
								</Link>
								<Link href={'/our-initiative'} className="w-full border-b py-2">
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
								<Link href={'/opportunities'} className="w-full border-b py-2">
									Opportunities
								</Link>
								<Link href={'/contact'} className="w-full border-b py-2">
									Contact
								</Link>
							</div>
						</SheetContent>
					</Sheet>
					<section className="flex gap-3">
						<Link href={'/dashboard'} className="flex items-center gap-3">
							<Image
								src={logo}
								height={0}
								width={40}
								alt="Logo"
								className="w-auto"
								priority={true}
							/>
							<div className="hidden flex-col font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex md:flex-row md:gap-2 md:text-lg lg:text-2xl">
								<span>DDKKHAAA</span>
							</div>
						</Link>
						<Separator orientation={'vertical'} className="py-2" />
						<nav className="flex h-full items-center gap-2">
							<Link href={'/dashboard'}>
								<Button variant={'ghost'} className="text-primary">
									Home
								</Button>
							</Link>
							<Link href={'/dashboard/events'}>
								<Button variant={'ghost'} className="text-foreground/85">
									Events
								</Button>
							</Link>
							{/* <Link href={'/dashboard/community'}>
								<Button variant={'ghost'}>Community</Button>
							</Link> */}
						</nav>
					</section>
				</section>

				<UserProfileAvatar />
			</section>
			<Separator />
		</header>
	);
};

export default AppNavbar;
