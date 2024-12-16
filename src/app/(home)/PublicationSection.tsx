import { Button } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PublicationSection = () => {
	return (
		<section className="my-24 w-full">
			<section className="m-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="">Latest Publications</h2>
				</section>
				<section className="w-full max-w-3xl">
					Welcome to our alumni community! We are dedicated to fostering
					connections between past students and creating opportunities for
					networking and growth.
				</section>
				<section className="grid w-full grid-cols-1 gap-8 text-xl font-bold text-white md:grid-cols-3">
					<Card className="">
						<CardHeader className="px-3 pt-3">
							{' '}
							<Image
								src={'/ddkkha.jpg'}
								width={1000}
								height={0}
								alt={'event'}
								className="rounded-lg"
							/>
							<CardTitle className="pt-3">চাদরের কান্না</CardTitle>
							<CardDescription>
								খুব ছোটবেলার কথা আমার বিলক্ষণ মনে আছে। অভাব আর দারিদ্র আমার
								কপালে যেন চিরচিহ্ন দিয়ে গেছে। বাবা ছিলেন জনমজুর।...
							</CardDescription>
						</CardHeader>

						<CardFooter className="p-3">
							<Link href={'/blog/232'}>
								<Button>Read More</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="">
						<CardHeader className="px-3 pt-3">
							{' '}
							<Image
								src={'/ddkkha.jpg'}
								width={1000}
								height={0}
								alt={'event'}
								className="rounded-lg"
							/>
							<CardTitle className="pt-3">চাদরের কান্না</CardTitle>
							<CardDescription>
								খুব ছোটবেলার কথা আমার বিলক্ষণ মনে আছে। অভাব আর দারিদ্র আমার
								কপালে যেন চিরচিহ্ন দিয়ে গেছে। বাবা ছিলেন জনমজুর।...
							</CardDescription>
						</CardHeader>

						<CardFooter className="p-3">
							<Link href={'/blog/232'}>
								<Button>Read More</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="">
						<CardHeader className="px-3 pt-3">
							{' '}
							<Image
								src={'/ddkkha.jpg'}
								width={1000}
								height={0}
								alt={'event'}
								className="rounded-lg"
							/>
							<CardTitle className="pt-3">চাদরের কান্না</CardTitle>
							<CardDescription>
								খুব ছোটবেলার কথা আমার বিলক্ষণ মনে আছে। অভাব আর দারিদ্র আমার
								কপালে যেন চিরচিহ্ন দিয়ে গেছে। বাবা ছিলেন জনমজুর।...
							</CardDescription>
						</CardHeader>

						<CardFooter className="p-3">
							<Link href={'/blog/232'}>
								<Button>Read More</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="">
						<CardHeader className="px-3 pt-3">
							{' '}
							<Image
								src={'/ddkkha.jpg'}
								width={1000}
								height={0}
								alt={'event'}
								className="rounded-lg"
							/>
							<CardTitle className="pt-3">চাদরের কান্না</CardTitle>
							<CardDescription>
								খুব ছোটবেলার কথা আমার বিলক্ষণ মনে আছে। অভাব আর দারিদ্র আমার
								কপালে যেন চিরচিহ্ন দিয়ে গেছে। বাবা ছিলেন জনমজুর।...
							</CardDescription>
						</CardHeader>

						<CardFooter className="p-3">
							<Link href={'/blog/232'}>
								<Button>Read More</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="">
						<CardHeader className="px-3 pt-3">
							{' '}
							<Image
								src={'/ddkkha.jpg'}
								width={1000}
								height={0}
								alt={'event'}
								className="rounded-lg"
							/>
							<CardTitle className="pt-3">চাদরের কান্না</CardTitle>
							<CardDescription>
								খুব ছোটবেলার কথা আমার বিলক্ষণ মনে আছে। অভাব আর দারিদ্র আমার
								কপালে যেন চিরচিহ্ন দিয়ে গেছে। বাবা ছিলেন জনমজুর।...
							</CardDescription>
						</CardHeader>

						<CardFooter className="p-3">
							<Link href={'/blog/232'}>
								<Button>Read More</Button>
							</Link>
						</CardFooter>
					</Card>
				</section>
			</section>
		</section>
	);
};

export default PublicationSection;
