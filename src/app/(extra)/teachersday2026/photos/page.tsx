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

const AmaderTeachersPage = () => {
	return (
		<section>
			<Navbar />
			<Heading name={'আমাদের শিক্ষক দিবস 2026 Photos'} />
			<section className="mx-auto mt-10 w-full max-w-7xl gap-8 px-5">
				<section className="flex w-full flex-col items-center justify-center">
					<h3 className="text-center text-2xl font-semibold"></h3>
					<section className="flex w-full flex-col items-center justify-center pt-5 text-center md:flex-row md:gap-4">
						<Link
							className="mt-5 w-full max-w-80"
							href={
								'https://drive.google.com/drive/folders/19D1S-4YCMW3JQC3IitHlzAtMEyizLtEf'
							}
							target="_blank"
						>
							<Card className="opacity-80">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">
										আমাদের শিক্ষক দিবস 2026
									</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2"></CardContent>
								<CardFooter className="mt-4 flex w-full items-center justify-center text-center text-lg font-bold text-blue-700">
									Click Here
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

export default AmaderTeachersPage;
