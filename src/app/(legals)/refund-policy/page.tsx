import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

const RefundPolicyPage = () => {
	return (
		<main>
			<Navbar />

			<section className="mx-auto h-auto w-full max-w-6xl px-5 py-20">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h1>Refund Policy</h1>
					<span>Last updated: December 20,2024 </span>
				</section>
				<Separator className="my-4" />
				<div className="">
					<p>
						This policy applies to any donations or payments made through Dum
						Dum Krishna Kumar Hindu Academy Alumni Association, specifically for
						society events.
					</p>
					<div className="my-5 flex flex-col gap-3">
						<h4>1. Donations for Events</h4>

						<ol className="list-disc pl-6">
							<li>
								Donations made to support events organized by [Society Name] are
								generally non-refundable.
							</li>
							<li>
								Refunds for donations will only be considered in the following
								cases:
								<ol className="list-disc pl-6">
									<li>The event is canceled by the society.</li>
									<li>A duplicate payment was made unintentionally.</li>
								</ol>
							</li>
						</ol>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>2. Requesting a Refund</h4>
						To request a refund:
						<ol className="list-disc pl-6">
							<li>
								Contact us at [Insert Contact Email] with your payment details
								and reason for the refund request.
							</li>
							<li>
								Provide proof of payment (e.g., transaction ID or receipt).
							</li>
						</ol>
					</div>

					<div className="my-5 flex flex-col gap-3">
						<h4>3. Refund Processing</h4>
						We collect personal information when you:
						<ol className="list-disc pl-6">
							<li>
								Approved refunds will be processed within [Insert Timeframe,
								e.g., 7–10 business days].
							</li>
							<li>
								Refunds will be issued using the same payment method used for
								the original transaction.
							</li>
						</ol>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>4. Non-Refundable Contributions</h4>
						<ol className="list-disc pl-6">
							<li>
								Donations made specifically for charitable causes, general
								funds, or community support are non-refundable.
							</li>
						</ol>
					</div>
					<p>
						If you have further questions about refunds, please reach out to us
						at{' '}
						<Link
							className="text-semibold text-primary"
							href={'mailto:ddkkhaaahelp@gmail.com'}
						>
							ddkkhaaahelp@gmail.com
						</Link>
						.
					</p>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default RefundPolicyPage;
