import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import {
	FaSquareInstagram,
	FaSquareWhatsapp,
	FaSquareXTwitter,
} from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const ContactPage = () => {
	return (
		<section>
			<Navbar />
			<Heading name={'Contact Us'} />
			<section className="mx-auto mt-10 w-full max-w-7xl gap-10 px-5">
				<section className="flex w-full flex-col items-center justify-center">
					<h3 className="text-2xl font-semibold">Contact Us</h3>
					<section className="flex w-full flex-col items-center justify-center md:flex-row md:gap-4">
						<Link
							className="mt-5 w-full max-w-[300px]"
							target="_blank"
							href={'mailto:ddkkhaaa@gmail.com'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">Email</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2">
									<Image
										src={'/gmail.png'}
										width={70}
										height={70}
										alt={'gmail Logo'}
									/>
								</CardContent>
								<CardFooter className="flex w-full items-center justify-center">
									ddkkhaaa@gmail.com
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full max-w-[300px]"
							target="_blank"
							href={'https://wa.me/919432428233'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">Whatsapp</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2">
									<FaSquareWhatsapp className="text-[70px] text-green-400" />
								</CardContent>
								<CardFooter className="flex w-full items-center justify-center">
									919432428233
								</CardFooter>
							</Card>
						</Link>
					</section>
				</section>
				<section className="mt-16 flex flex-col items-center">
					<h3 className="text-2xl font-semibold">Follow Our Socials</h3>
					<section className="mt-6 grid w-full max-w-[300px] grid-cols-1 sm:max-w-none sm:grid-cols-2 sm:gap-x-7 md:grid-cols-3 lg:grid-cols-5">
						<Link
							className="mt-5 w-full"
							target="_blank"
							href={'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									{/* <CardTitle className="text-2xl">Email</CardTitle> */}
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-4">
									<FaSquareWhatsapp className="text-6xl text-green-400" />
								</CardContent>
								<CardFooter className="flex w-full justify-center text-center text-lg font-medium">
									Whatsapp
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full"
							target="_blank"
							href={'https://www.facebook.com/ddkkhaaaofficial'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									{/* <CardTitle className="text-2xl">Email</CardTitle> */}
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-4">
									<FaFacebookSquare className="text-6xl text-blue-600" />
								</CardContent>
								<CardFooter className="flex w-full justify-center text-center text-lg font-medium">
									<span>Facebook </span>
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full"
							target="_blank"
							href={'https://www.youtube.com/@ddkkhaaaofficial'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									{/* <CardTitle className="text-2xl">Email</CardTitle> */}
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-4">
									<IoLogoYoutube className="text-6xl text-red-600" />
								</CardContent>
								<CardFooter className="flex w-full justify-center text-center text-lg font-medium">
									Youtube
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full"
							target="_blank"
							href={'https://www.instagram.com/ddkkhaaaofficial'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									{/* <CardTitle className="text-2xl">Email</CardTitle> */}
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-4">
									<FaSquareInstagram className="text-6xl text-[#E1306C]" />
								</CardContent>
								<CardFooter className="flex w-full justify-center text-center text-lg font-medium">
									<span>Instagram</span>
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full"
							target="_blank"
							href={'https://x.com/ddkkhaaa'}
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									{/* <CardTitle className="text-2xl">Email</CardTitle> */}
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-4">
									<FaSquareXTwitter className="text-6xl text-black" />
								</CardContent>
								<CardFooter className="flex w-full justify-center text-center text-lg font-medium">
									<span>Twitter</span>
								</CardFooter>
							</Card>
						</Link>
					</section>
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default ContactPage;
