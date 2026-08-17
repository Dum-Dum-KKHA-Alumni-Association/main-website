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
import Link from 'next/link';

import { IoSchool } from 'react-icons/io5';

const BonduCholMeet2026Page = () => {
	return (
		<section>
			<Navbar />
			<Heading name={'Bondu Chol Sports Meet 2026 '} />
			<section className="mx-auto mt-10 w-full max-w-7xl gap-8 px-5">
				<section className="flex w-full flex-col items-center justify-center">
					<h3 className="text-center text-2xl font-semibold">
						Bondu Chol Sports Meet 2026
					</h3>
					<section className="flex w-full flex-col items-center justify-center text-center md:flex-row md:gap-4">
						<Link
							className="mt-5 w-full max-w-80"
							href={
								'https://docs.google.com/forms/d/e/1FAIpQLScAmAhUwsyoVxCcs1yinpzHP78HlUcY1OFvs_3V8f5uw5_fgA/viewform'
							}
							target="_blank"
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">
										Alumni Football Tournament
									</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2">
									<IoSchool className="text-[70px] text-blue-600" />
								</CardContent>
								<CardFooter className="flex w-full items-center justify-center">
									Registration
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

export default BonduCholMeet2026Page;
