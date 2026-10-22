'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
	Heart,
	ShoppingBag,
	Star,
	Check,
	Truck,
	ShieldCheck,
	Plus,
	Minus,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

interface QuickViewModalProps {
	product: Product | null;
	isOpen: boolean;
	onClose: () => void;
	isWishlisted?: boolean;
	onToggleWishlist?: (product: Product) => void;
	onAddToCart?: (
		product: Product,
		size?: string,
		color?: string,
		quantity?: number
	) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
	product,
	isOpen,
	onClose,
	isWishlisted = false,
	onToggleWishlist,
	onAddToCart,
}) => {
	const [selectedSize, setSelectedSize] = useState<string>('');
	const [selectedColor, setSelectedColor] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(1);
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

	useEffect(() => {
		if (product) {
			setSelectedSize(product.sizes?.[0] || '');
			setSelectedColor(product.colors?.[0]?.name || '');
			setQuantity(1);
			setActiveImageIndex(0);
		}
	}, [product]);

	if (!product) return null;

	const allImages = product.additionalImages?.length
		? product.additionalImages
		: [product.image];

	const handleAdd = () => {
		onAddToCart?.(product, selectedSize, selectedColor, quantity);
		onClose();
	};

	const handleWhatsAppOrder = () => {
		const message = `Hello DDKKHAAA Merchandise Team! 🎓\n\nI want to order:\n- Item: ${product.name}\n- Price: ₹${product.price}\n- Selected Size: ${selectedSize || 'Standard'}\n- Color: ${selectedColor || 'Default'}\n- Quantity: ${quantity}\n- Total: ₹${product.price * quantity}\n\nPlease confirm availability and payment/delivery details. Thank you!`;
		const encoded = encodeURIComponent(message);
		window.open(`https://wa.me/919432428233?text=${encoded}`, '_blank');
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 dark:bg-slate-900 sm:rounded-2xl">
				<div className="grid grid-cols-1 md:grid-cols-2">
					{/* Left Image Section */}
					<div className="flex flex-col bg-slate-50 p-6 dark:bg-slate-800/60">
						<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white shadow-inner dark:bg-slate-900">
							<Image
								src={allImages[activeImageIndex] || product.image}
								alt={product.name}
								fill
								className="object-cover object-center transition-all duration-300"
							/>
							{product.badge && (
								<Badge className="absolute left-3 top-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
									{product.badge}
								</Badge>
							)}
						</div>

						{/* Thumbnails if multiple */}
						{allImages.length > 1 && (
							<div className="mt-3 flex gap-2">
								{allImages.map((img, idx) => (
									<button
										key={idx}
										onClick={() => setActiveImageIndex(idx)}
										className={cn(
											'relative h-14 w-14 overflow-hidden rounded-lg border-2 transition-all',
											activeImageIndex === idx
												? 'border-primary ring-2 ring-primary/30'
												: 'border-transparent opacity-70 hover:opacity-100'
										)}
									>
										<Image
											src={img}
											alt=""
											fill
											className="object-cover object-center"
										/>
									</button>
								))}
							</div>
						)}

						{/* Trust badges */}
						<div className="mt-6 space-y-2 rounded-xl bg-white/70 p-3 text-xs text-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
							<div className="flex items-center gap-2">
								<ShieldCheck className="h-4 w-4 text-emerald-500" />
								<span>100% Genuine Association Certified Merchandise</span>
							</div>
							<div className="flex items-center gap-2">
								<Truck className="h-4 w-4 text-blue-500" />
								<span>Available for School Pickup or Doorstep Courier</span>
							</div>
						</div>
					</div>

					{/* Right Content Details */}
					<div className="flex flex-col justify-between p-6 sm:p-7">
						<div>
							<DialogHeader className="p-0 text-left">
								<div className="flex items-center justify-between">
									<span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400">
										{product.collection}
									</span>
									<div className="flex items-center gap-1 text-xs">
										<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
										<span className="font-bold">{product.rating}</span>
										<span className="text-slate-400">
											({product.reviewsCount} reviews)
										</span>
									</div>
								</div>
								<DialogTitle className="mt-1 font-sora text-xl font-bold leading-snug text-slate-900 dark:text-white">
									{product.name}
								</DialogTitle>
							</DialogHeader>

							{/* Price */}
							<div className="mt-3 flex items-baseline gap-2.5">
								<span className="font-sora text-2xl font-extrabold text-slate-950 dark:text-white">
									₹{product.price.toLocaleString('en-IN')}
								</span>
								{product.originalPrice > product.price && (
									<>
										<span className="text-sm text-slate-400 line-through">
											₹{product.originalPrice.toLocaleString('en-IN')}
										</span>
										<span className="rounded-md bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">
											Save ₹{product.originalPrice - product.price}
										</span>
									</>
								)}
							</div>

							{/* Material / Summary */}
							<p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
								{product.fullDescription}
							</p>

							{/* Features list */}
							{product.features?.length > 0 && (
								<div className="mt-3.5 space-y-1">
									{product.features.slice(0, 3).map((feat, i) => (
										<div
											key={i}
											className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400"
										>
											<Check className="h-3 w-3 text-primary" />
											<span>{feat}</span>
										</div>
									))}
								</div>
							)}

							{/* Color selection if available */}
							{product.colors && product.colors.length > 0 && (
								<div className="mt-4">
									<label className="text-xs font-bold text-slate-800 dark:text-slate-200">
										Color:{' '}
										<span className="font-normal text-slate-500">
											{selectedColor}
										</span>
									</label>
									<div className="mt-2 flex gap-2">
										{product.colors.map((c) => (
											<button
												key={c.name}
												onClick={() => setSelectedColor(c.name)}
												title={c.name}
												className={cn(
													'relative h-6 w-6 rounded-full border-2 transition-all',
													selectedColor === c.name
														? 'scale-110 border-primary ring-2 ring-primary/40'
														: 'border-white hover:scale-105'
												)}
												style={{ backgroundColor: c.hex }}
											/>
										))}
									</div>
								</div>
							)}

							{/* Size selection */}
							{product.sizes && product.sizes.length > 0 && (
								<div className="mt-4">
									<div className="flex items-center justify-between">
										<label className="text-xs font-bold text-slate-800 dark:text-slate-200">
											Size / Option:
										</label>
										<span className="text-[11px] text-slate-400">
											Standard Fit
										</span>
									</div>
									<div className="mt-2 flex flex-wrap gap-2">
										{product.sizes.map((s) => (
											<button
												key={s}
												onClick={() => setSelectedSize(s)}
												className={cn(
													'rounded-lg px-3 py-1.5 text-xs font-semibold transition-all',
													selectedSize === s
														? 'bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950'
														: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
												)}
											>
												{s}
											</button>
										))}
									</div>
								</div>
							)}

							{/* Quantity selector */}
							<div className="mt-4 flex items-center gap-3">
								<label className="text-xs font-bold text-slate-800 dark:text-slate-200">
									Quantity:
								</label>
								<div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700">
									<button
										onClick={() => setQuantity((q) => Math.max(1, q - 1))}
										className="flex h-8 w-8 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
									>
										<Minus className="h-3.5 w-3.5" />
									</button>
									<span className="w-10 text-center text-xs font-bold">
										{quantity}
									</span>
									<button
										onClick={() => setQuantity((q) => q + 1)}
										className="flex h-8 w-8 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
									>
										<Plus className="h-3.5 w-3.5" />
									</button>
								</div>
								<span className="text-xs font-medium text-emerald-600">
									In Stock ({product.stockCount} left)
								</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
							<div className="flex gap-2">
								<Button
									onClick={handleAdd}
									className="h-11 flex-1 gap-2 rounded-xl bg-slate-950 font-sora font-semibold text-white hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
								>
									<ShoppingBag className="h-4 w-4" />
									<span>
										Add to Cart (₹
										{(product.price * quantity).toLocaleString('en-IN')})
									</span>
								</Button>

								<Button
									variant="outline"
									size="icon"
									onClick={() => onToggleWishlist?.(product)}
									className={cn(
										'h-11 w-11 rounded-xl',
										isWishlisted && 'border-red-200 bg-red-50 text-red-500'
									)}
								>
									<Heart
										className={cn(
											'h-5 w-5',
											isWishlisted && 'fill-red-500 text-red-500'
										)}
									/>
								</Button>
							</div>

							<Button
								onClick={handleWhatsAppOrder}
								variant="outline"
								className="h-10 gap-2 rounded-xl border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300"
							>
								<FaWhatsapp className="h-4 w-4 text-emerald-600" />
								<span>Direct Inquire / Order on WhatsApp</span>
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default QuickViewModal;
