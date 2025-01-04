import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
	return (
		<main className="flex w-full flex-1 flex-col">
			<Navbar />
			<section className="bg-background py-32 dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
					<div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
						<h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
							404
						</h1>
						<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
							Something&apos;s missing.
						</p>
						<p className="mb-4 text-center text-lg font-light text-gray-500 dark:text-gray-400">
							Sorry, we can&apos;t find that page. You&apos;ll find lots to
							explore on the home page.{' '}
						</p>
						<Link href="/">
							<Button>
								Back to Homepage <ArrowRight />
							</Button>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default NotFound;
