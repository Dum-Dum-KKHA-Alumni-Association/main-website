import { Separator } from '@/components/ui/separator';
import QRCode from 'react-qr-code';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const page = async () => {
	// const slug = (await params).slug;
	return (
		<section className="w-full">
			<section className="mx-auto flex h-auto w-full max-w-6xl flex-1 flex-col gap-6 px-5 md:px-10">
				<section className="my-10 flex w-full flex-col gap-8">
					<section className="flex flex-col">
						<div className="flex w-full justify-between text-3xl font-medium">
							<span>Booking Details</span>
							<section className="flex gap-4">
								<Button>Back</Button>
								<Button>Download</Button>
							</section>
						</div>
						{/* <p className="font-light">
							Celebrating Our Legacy, Reconnecting for the Future
						</p> */}
					</section>
					<Separator />
					<Card className="w-full">
						<CardHeader className="flex-col-reverse justify-between gap-6 md:flex-row">
							<section className="flex w-full flex-col gap-3">
								<span className="text-2xl font-semibold">
									Booking #3323323d2311
								</span>
								<span>
									<span className="text-lg font-bold">Booking Date:</span> Thu,
									May 02, 2024 02:04 pm
								</span>
								<span>
									<span className="text-lg font-bold">Event Date: </span>Thu,
									May 02, 2024 02:04 pm
								</span>{' '}
							</section>
							<section>
								<QRCode
									value={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}`}
								/>
							</section>
						</CardHeader>
						<CardContent>
							<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
								<section className="text-xl">
									<h5>Billing Details</h5>
									<section>
										<span className="text-lg font-bold">Name:</span>Tejodeep
										Mitra Roy
									</section>
									<section>
										<span className="text-lg font-bold">Email:</span>
										tejodeepmitraroy@gmail.com
									</section>
									<section>
										<span className="text-lg font-bold">Phone:</span>
										9748385241
									</section>
									<section>
										<span className="text-lg font-bold">Country:</span>
									</section>
									<section>
										<span className="text-lg font-bold">State:</span>
									</section>
									<section>
										<span className="text-lg font-bold">Address:</span>
									</section>
								</section>
								<section className="text-xl">
									<h5>Payment Info</h5>
									<section>
										<span className="text-lg font-bold">Event:</span>
										Remergencia 2025
									</section>
									<section>
										<span className="text-lg font-bold">Tax:</span>0
									</section>
									<section>
										<span className="text-lg font-bold">Total Paid:</span>
									</section>
									<section>
										<span className="text-lg font-bold">Payment Status:</span>
									</section>
									<section>
										<span className="text-lg font-bold">Payment Method:</span>
									</section>
								</section>
								<section className="text-xl">
									<h5>Organizer</h5>
									<section>
										<span className="text-lg font-bold">Name:</span>
										DDKKHAAA
									</section>
									<section>
										<span className="text-lg font-bold">Email:</span>
										ddkkhaaa@gmail.com
									</section>
									<section>
										<span className="text-lg font-bold">Phone:</span>
										+91 94324 28233
									</section>
									<section>
										<span className="text-lg font-bold">Country:</span>
										India
									</section>
									<section>
										<span className="text-lg font-bold">State:</span>
										West Bengal
									</section>
									<section>
										<span className="text-lg font-bold">Venue:</span>
									</section>
								</section>
							</section>
						</CardContent>
					</Card>
				</section>
			</section>
		</section>
	);
};

export default page;
