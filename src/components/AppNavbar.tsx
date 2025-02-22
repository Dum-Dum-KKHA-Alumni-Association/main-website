'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import logo from '../../public/logo.png';

import { Separator } from './ui/separator';

import UserProfileAvatar from './UserProfileAvatar';
import { Button } from './ui/button';

const AppNavbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full bg-white font-sora">
			<section className="mx-auto flex h-[4rem] w-full items-center justify-between gap-3 border px-5">
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
										<p className="flex flex-col items-start font-baloo-da-2 text-lg font-bold leading-tight antialiased md:flex-row md:gap-2 md:text-2xl">
											DDKKHAAA
										</p>
									</Link>
								</SheetTitle>
								<SheetDescription></SheetDescription>
							</SheetHeader>

							<div className="mt-3 flex w-full flex-1 flex-col items-start font-semibold">
								{/* <Link
									href={'/remergencia-2025'}
									className="mb-5 flex h-[3rem] w-full items-center justify-center rounded-md bg-blue-950 text-white"
								>
									🎉 Reunion 2025 🎉
								</Link> */}
								<Link href={'/dashboard'} className="w-full border-b py-2">
									Home
								</Link>
								<Link
									href={'/dashboard/events'}
									className="w-full border-b py-2"
								>
									Events
								</Link>
								<Link
									href={'/dashboard/communities'}
									className="w-full border-b py-2"
								>
									Communities
								</Link>

								{/* <Accordion type="single" collapsible className="w-full">
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
								</Accordion> */}

								{/* <Link href={'/gallery'} className="w-full border-b py-2">
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
								</Link> */}
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
						<nav className="hidden h-full items-center gap-2 md:flex">
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
