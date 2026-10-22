'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
	product: Product;
	isWishlisted?: boolean;
	onToggleWishlist?: (product: Product) => void;
	onAddToCart?: (product: Product) => void;
	onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	isWishlisted = false,
	onToggleWishlist,
	onAddToCart,
	onQuickView,
}) => {
	return (
		<div className="group flex flex-col justify-between bg-transparent">
			{/* Top Image Container mirroring reference design */}
			<div
				onClick={() => onQuickView?.(product)}
				className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-[#eceef0] transition-all duration-300 sm:rounded-3xl"
			>
				<Image
					src={product.image}
					alt={product.name}
					fill
					sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
				/>

				{/* Quick View Hover Button (Desktop) */}
				<button
					onClick={(e) => {
						e.stopPropagation();
						onQuickView?.(product);
					}}
					className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-neutral-800 opacity-0 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white active:scale-95 group-hover:opacity-100 sm:flex"
				>
					<Eye className="h-3 w-3" />
					<span>Quick View</span>
				</button>
			</div>

			{/* Product Info Section */}
			<div className="mt-3 flex flex-1 flex-col justify-between">
				<div>
					{/* Title */}
					<h3
						onClick={() => onQuickView?.(product)}
						className="line-clamp-1 cursor-pointer font-sora text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-600 sm:text-base"
						title={product.name}
					>
						{product.name}
					</h3>

					{/* Subtitle / Description (2 lines in muted grey) */}
					<p className="mt-0.5 line-clamp-2 font-sora text-xs leading-relaxed text-neutral-500">
						{product.description}
					</p>
				</div>

				{/* Bottom Action Row mirroring reference card */}
				<div className="mt-3 flex items-center justify-between gap-2">
					{/* Black Price Pill Button */}
					<button
						onClick={() => onAddToCart?.(product)}
						className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95"
					>
						₹{product.price.toLocaleString('en-IN')}
					</button>

					{/* Heart and Bag Icons */}
					<div className="flex items-center gap-2">
						<button
							onClick={() => onToggleWishlist?.(product)}
							aria-label="Wishlist"
							className={cn(
								'flex h-7 w-7 items-center justify-center rounded-full transition-colors',
								isWishlisted
									? 'text-red-500'
									: 'text-neutral-600 hover:text-red-500'
							)}
						>
							<Heart
								className={cn(
									'h-4 w-4 stroke-[1.8]',
									isWishlisted && 'fill-red-500 text-red-500'
								)}
							/>
						</button>

						<button
							onClick={() => onAddToCart?.(product)}
							aria-label="Add to Bag"
							className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-600 transition-colors hover:text-neutral-900"
						>
							<ShoppingBag className="h-4 w-4 stroke-[1.8]" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
