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
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

const RegistrationPage = () => {
	return (
		<section>
			<Navbar />
			<Heading name={'Registration'} />
			<section className="mx-auto mt-10 w-full max-w-7xl gap-8 px-5">
				<section className="flex w-full flex-col items-center justify-center">
					<h3 className="text-center text-2xl font-semibold">
						Register as Alumni
					</h3>
					<section className="flex w-full flex-col items-center justify-center text-center md:flex-row md:gap-4">
						<Link
							className="mt-5 w-full max-w-80"
							href={'https://forms.gle/iUpCUickwLo5hTdC9'}
							target="_blank"
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">Madhyamik</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2">
									<IoSchool className="text-[70px] text-blue-600" />
								</CardContent>
								<CardFooter className="flex w-full items-center justify-center">
									Students done Madhyamik 2026
								</CardFooter>
							</Card>
						</Link>
						<Link
							className="mt-5 w-full max-w-80"
							href={'https://forms.gle/Qe2Z3Vpwdzmx68V49'}
							target="_blank"
						>
							<Card className="w-full">
								<CardHeader className="flex w-full items-center pb-2">
									<CardTitle className="text-2xl">Higher Secondary</CardTitle>
								</CardHeader>
								<CardContent className="flex w-full items-center justify-center pb-2">
									<FaGraduationCap className="text-[70px] text-green-600" />
								</CardContent>
								<CardFooter className="flex w-full items-center justify-center">
									Students done HS 2026
								</CardFooter>
							</Card>
						</Link>
						{/* <Link
                            className="mt-5 w-full max-w-80"
                            href={'/registration/other'}
                            target="_blank"
                        >
                            <Card className="w-full">
                                <CardHeader className="flex w-full items-center pb-2">
                                    <CardTitle className="text-2xl">
                                        Other Students
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex w-full items-center justify-center pb-2">
                                    <FaGraduationCap className="text-[70px] text-purple-600" />
                                </CardContent>
                                <CardFooter className="flex w-full items-center justify-center">
                                    Before 2026 Previous Student
                                </CardFooter>
                            </Card>
                        </Link> */}
					</section>
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default RegistrationPage;
