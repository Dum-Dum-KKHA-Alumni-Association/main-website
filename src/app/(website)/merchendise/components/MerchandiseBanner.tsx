'use client';
import React from 'react';
import Image from 'next/image';

interface MerchandiseBannerProps {
	onExploreClick?: () => void;
	onBulkOrderClick?: () => void;
}

const MerchandiseBanner: React.FC<MerchandiseBannerProps> = ({
	onExploreClick,
}) => {
	return (
		<section className="w-full">
			<div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-[#eeeff1] text-neutral-900 sm:rounded-3xl">
				<div className="grid grid-cols-1 items-center gap-6 p-6 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-10">
					{/* Left Merchandise Image (Hanger / Studio Aesthetic) */}
					<div className="relative order-2 flex items-center justify-center lg:order-1 lg:col-span-5">
						<div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-sm sm:aspect-[4/3] sm:max-w-md sm:rounded-2xl">
							<Image
								src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
								alt="Official DDKKHAAA Collection"
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
								className="object-cover object-center transition-transform duration-700 hover:scale-105"
								priority
							/>
						</div>
					</div>

					{/* Right Content mirroring reference banner text */}
					<div className="order-1 flex flex-col items-start justify-center lg:order-2 lg:col-span-7 lg:pl-4">
						<div className="text-xs font-medium tracking-wide text-neutral-600 sm:text-sm">
							- Collections
						</div>

						<h1 className="mt-1.5 font-sora text-xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
							Explore The Various Collection of DDKKHAAA Store
						</h1>

						<p className="mt-2 max-w-lg font-sora text-xs leading-relaxed text-neutral-500 sm:text-sm">
							Don&apos;t miss out to shopping collection from us! You&apos;ll
							not be let down. Official apparel, mementos, and alumni heritage
							accessories.
						</p>

						<button
							onClick={onExploreClick}
							className="mt-5 rounded-lg bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 sm:text-sm"
						>
							Explore Collection
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MerchandiseBanner;
