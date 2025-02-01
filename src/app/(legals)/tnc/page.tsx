import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const TnCPage = () => {
	return (
		<main>
			<Navbar />

			<section className="mx-auto h-auto w-full max-w-4xl px-5 py-20">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h1>Terms & Condition</h1>
					<span>Last updated: December 20,2024 </span>
				</section>
				<Separator className="my-4" />
				<div className="">
					<p>
						Welcome to Dum Dum Krishna Kumar Hindu Academy Alumni Association!
						By accessing or using our website, you agree to abide by the
						following terms and conditions.
					</p>
					<div className="my-5 flex flex-col gap-3">
						<h4>1. Acceptance of Terms</h4>
						<p>
							By using our website, you acknowledge that you have read,
							understood, and agree to these Terms and Conditions. If you do not
							agree, please refrain from using our website.
						</p>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>2. Use of Website</h4>

						<ol className="list-disc pl-6">
							<li>
								The website is intended for members and visitors of [Society
								Name].
							</li>
							<li>
								Users are responsible for providing accurate and updated
								information during registration or interactions.
							</li>
							<li>
								Unauthorized use, such as hacking, data scraping, or other
								harmful activities, is strictly prohibited.
							</li>
						</ol>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>3. Membership and Content Posting</h4>

						<ol className="list-disc pl-6">
							<li>
								Members can post content related to society events, discussions,
								or other activities.
							</li>
							<li>
								Inappropriate, offensive, or illegal content will be removed,
								and offending users may face suspension.
							</li>
						</ol>
					</div>

					<div className="my-5 flex flex-col gap-3">
						<h4>4. Intellectual Property</h4>
						<p>
							All content, including text, images, and design elements on this
							website, is owned by Dum Dum Krishna Kumar Hindu Academy Alumni
							Association or its licensors and is protected by copyright laws.
						</p>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>5. Liability Disclaimer</h4>
						<p>
							The website is provided on an &quot;as-is&quot; basis. Dum Dum
							Krishna Kumar Hindu Academy Alumni Association is not responsible
							for any damages or losses resulting from website usage.
						</p>
					</div>
					<div className="my-5 flex flex-col gap-3">
						<h4>6. Changes to Terms</h4>
						<p>
							We reserve the right to update these terms at any time. Users will
							be notified of significant changes.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default TnCPage;
