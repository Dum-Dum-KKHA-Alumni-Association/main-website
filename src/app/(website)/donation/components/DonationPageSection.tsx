'use client';
import React from 'react';

const DonationPageSection = () => {
	return (
		<section className="mx-auto w-full max-w-7xl px-5 py-16">
			<div className="mx-auto max-w-2xl">
				<h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
					Make a Donation
				</h1>

				<div className="rounded-lg border border-gray-200 bg-white p-8">
					{/* QR Code Section */}
					<div className="mb-8 flex flex-col items-center">
						<h2 className="mb-4 text-xl font-semibold text-gray-800">
							Scan QR Code to Donate
						</h2>
						<div className="relative">
							<img
								src="/assets/donation_qr_code.jpeg"
								alt="Donation QR Code"
								className="h-64 w-64"
							/>
							<button
								onClick={() => {
									const link = document.createElement('a');
									link.href = '/assets/donation_qr_code.jpeg';
									link.download = 'donation_qr_code.jpeg';
									link.click();
								}}
								className="absolute bottom-2 right-2 rounded-md bg-white/90 p-2 text-gray-700 shadow-sm transition-colors hover:bg-white"
								title="Download QR Code"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" y1="15" x2="12" y2="3" />
								</svg>
							</button>
						</div>
						<p className="mt-4 text-center text-gray-600">
							Scan using any UPI app (GPay, PhonePe, Paytm, etc.)
						</p>
					</div>

					{/* UPI ID Section */}
					<div className="mb-8">
						<h3 className="mb-3 text-lg font-semibold text-gray-800">UPI ID</h3>
						<div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
							<span className="text-lg font-medium text-gray-700">
								9432428233m@pnb
							</span>
							<button
								onClick={() => navigator.clipboard.writeText('9432428233m@pnb')}
								className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
							>
								Copy
							</button>
						</div>
					</div>

					{/* Bank Details Section */}
					<div>
						<h3 className="mb-4 text-lg font-semibold text-gray-800">
							Bank Details
						</h3>
						<div className="space-y-3">
							<div className="flex justify-between border-b border-gray-100 pb-3">
								<span className="font-medium text-gray-600">Bank:</span>
								<span className="text-gray-900">Punjab National Bank</span>
							</div>
							<div className="flex justify-between border-b border-gray-100 pb-3">
								<span className="font-medium text-gray-600">A/C No:</span>
								<span className="text-gray-900">0117200100014148</span>
							</div>
							<div className="flex justify-between border-b border-gray-100 pb-3">
								<span className="font-medium text-gray-600">A/C Name:</span>
								<span className="text-gray-900">
									Dum Dum Krishna Kumar Hindu Academy Alumni Association
								</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-600">IFSC:</span>
								<span className="text-gray-900">PUNB0011720</span>
							</div>
						</div>
					</div>
				</div>

				<p className="mt-6 text-center text-sm text-gray-500">
					Thank you for your generous contribution to our alumni association.
				</p>
			</div>
		</section>
	);
};

export default DonationPageSection;
