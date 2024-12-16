'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 w-full bg-primary font-sora">
			<div className="m-auto flex h-[5rem] w-full max-w-[90rem] items-center justify-between">
				<section className="flex w-full items-center justify-between gap-5 p-5">
					<section className="">
						<Link href={'/'} className="flex items-center gap-3">
							<Image
								src={'/logo.png'}
								height={0}
								width={50}
								alt="Logo"
								className="lg:hidden"
							/>
							<Image
								src={'/longLogo.png'}
								height={0}
								width={600}
								alt="Logo"
								className="hidden lg:flex"
							/>
						</Link>
					</section>
					<Sheet>
						<SheetTrigger className={'md:hidden'}>
							<Menu />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								{/* <SheetTitle>Are you absolutely sure?</SheetTitle>
								<SheetDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</SheetDescription> */}
								<Link href={'/'}>Home</Link>
								<Link href={'/about'}>About</Link>
								<Link href={'/donation'}>Donation</Link>
								<Link href={'/events'}>Events</Link>
								<Link href={'/contact-us'}>Contact</Link>
							</SheetHeader>
						</SheetContent>
					</Sheet>
					<section className="hidden w-full max-w-[21rem] items-center gap-4 text-lg text-white md:flex">
						<Link href={'/about'}>About</Link>
						<Link href={'/donation'}>Donation</Link>
						<Link href={'/events'}>Events</Link>
						<Link href={'/contact-us'}>Contact</Link>
					</section>
					{/* <section className="w-full max-w-[21rem]">
						{/* <UserProfile /> 
						<Button>Login</Button>
					</section> */}
				</section>
			</div>
		</div>
	);
};

export default Navbar;
