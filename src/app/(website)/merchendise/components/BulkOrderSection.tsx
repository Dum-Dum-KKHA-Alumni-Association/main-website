'use client';

import { Button } from '@/components/ui/button';
import { Users, CheckCircle2, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const BulkOrderSection = () => {
	const handleWhatsAppInquiry = () => {
		const message = `Hello DDKKHAAA Alumni Association Team! 🎓\n\nI am organizing a Batch Reunion / Event and would like to inquire about customized bulk merchandise:\n- Batch Year:\n- Approximate Quantity:\n- Items of Interest (e.g. T-shirts, Mugs, Lapel Pins, Hoodies):\n- Required By Date:\n\nPlease share your bulk pricing catalogue and customization options. Thank you!`;
		const encoded = encodeURIComponent(message);
		window.open(`https://wa.me/919432428233?text=${encoded}`, '_blank');
	};

	return (
		<section className="my-12 w-full">
			<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-slate-900 to-indigo-950 p-8 text-white shadow-xl lg:p-12">
				{/* Background decorative elements */}
				<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="absolute -bottom-10 left-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

				<div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
					<div className="lg:col-span-8">
						<div className="flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
							<Users className="h-3.5 w-3.5 text-amber-400" />
							<span>Customized Reunion & Batch Orders</span>
						</div>

						<h2 className="mt-3 font-sora text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
							Planning a Batch Reunion or Special Alumni Event?
						</h2>

						<p className="mt-3 max-w-2xl font-sora text-sm leading-relaxed text-slate-300 sm:text-base">
							Get customized merchandise tailored for your specific graduating
							batch. Add custom batch year prints, commemorative slogans,
							personalized names, and batch colors with special association
							discounts.
						</p>

						<div className="mt-6 grid grid-cols-1 gap-3 text-xs text-slate-200 sm:grid-cols-2">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Custom Batch Year & Name Embroidery</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Exclusive Tiered Volume Discounts (15-40% off)</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Dedicated Association Coordination & Samples</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Delivered to Reunion Venue or School Campus</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
						<Button
							onClick={handleWhatsAppInquiry}
							className="h-12 w-full gap-2.5 rounded-xl bg-[#25D366] px-6 font-sora font-semibold text-white shadow-lg transition-all hover:bg-[#1EBE5D] active:scale-95 sm:w-auto"
						>
							<FaWhatsapp className="h-5 w-5" />
							<span>Inquire Batch Bulk Order</span>
						</Button>

						<a
							href="tel:+919432428233"
							className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
						>
							<PhoneCall className="h-3.5 w-3.5" />
							<span>Call Secretary: +91 94324 28233</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BulkOrderSection;
