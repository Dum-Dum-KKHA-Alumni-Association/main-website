'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserProfile from './UserProfile';

const Navbar = () => {
	return (
		<div className="fixed z-50 w-full bg-primary font-sora">
			<div className="m-auto flex h-[5rem] w-full max-w-[90rem] items-center justify-between">
				<section className="flex items-center gap-5">
					<Link href={'/'}>
						<Image src={'/logo.png'} height={0} width={70} alt="Logo"></Image>
					</Link>
					<section className="flex items-center justify-evenly gap-5 text-white">
						<Link href={'/about'}>About</Link>
						<Link href={'/donation'}>Donation</Link>
						<Link href={'/events'}>Events</Link>
						<Link href={'/contact-us'}>Contact</Link>
					</section>
				</section>
				<section>
					<UserProfile />
				</section>
			</div>
		</div>
	);
};

export default Navbar;
