'use client';
import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut } from 'lucide-react';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './ui/drawer';
import { getUser } from '@/utils/apis/user-apis';
import { useRouter } from 'next/navigation';
import { logOutUser } from '@/utils/apis/auth-apis';

const UserProfileAvatar = () => {
	const [user, setUser] = useState<any>({});
	const router = useRouter();

	const getUserDetails = useCallback(async () => {
		const userData = await getUser();
		console.log('userData from token=====>', userData);
		setUser(userData);
	}, []);
	useEffect(() => {
		getUserDetails();
	}, [getUserDetails]);

	const logOutHandle = async () => {
		try {
			await logOutUser();
			router.push('/sign-in');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="gap-3 md:flex">
			{/* {user.avatar ? (
				<> */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild className={'hidden md:flex'}>
					<Avatar>
						<AvatarImage src={user?.avatar} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align={'end'} className="w-72">
					<DropdownMenuLabel className="flex w-full items-center gap-2">
						<Avatar className="h-12 w-12">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span className="font-sora text-base font-medium">
								TEJODEEP MITRA ROY
							</span>
							<span className="font-sora text-sm font-light">
								mId:3389209090232
							</span>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<Link href={'/dashboard'}>
							<DropdownMenuItem>
								Dashboard
								{/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
							</DropdownMenuItem>
						</Link>
						{/* <DropdownMenuItem>
										Billing
										<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
									</DropdownMenuItem> */}
						<Link href={'/settings'}>
							<DropdownMenuItem>
								Edit Profile
								{/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
							</DropdownMenuItem>
						</Link>
						<Link href={'/settings/account'}>
							<DropdownMenuItem>
								Settings
								{/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
							</DropdownMenuItem>
						</Link>
						{/* <DropdownMenuItem>
										Keyboard shortcuts
										<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
										</DropdownMenuItem> */}
					</DropdownMenuGroup>
					{/* <DropdownMenuSeparator />
								<DropdownMenuGroup className='space-y-2'>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuSub>
								<DropdownMenuSubTrigger>
								Invite users
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
								<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Message</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>More...</DropdownMenuItem>
								</DropdownMenuSubContent>
								</DropdownMenuPortal>
									</DropdownMenuSub>
									<DropdownMenuItem>
										New Team
										<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
										</DropdownMenuItem>
										</DropdownMenuGroup> */}
					<DropdownMenuSeparator />
					<DropdownMenuItem>GitHub</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuItem disabled>API</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => logOutHandle()}
						className="text-destructive hover:text-destructive"
					>
						<LogOut />
						Log out
						{/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Drawer>
				<DrawerTrigger asChild className={'flex md:hidden'}>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Are you absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			{/* </>
			) : (
				<>
					{/* <Link href={'/sign-in'}>
						<Button className="border-[#FFD700]" variant={'outline'}>
							{' '}
							Sign Up for Membership
						</Button>
					</Link> 
					<Link href={'/sign-in'}>
						<Button className="bg-[#FFD700] font-semibold text-secondary hover:text-[#FFD700]">
							{' '}
							Log in
						</Button>
					</Link>
				</>
			)} */}
		</section>
	);
};

export default UserProfileAvatar;
