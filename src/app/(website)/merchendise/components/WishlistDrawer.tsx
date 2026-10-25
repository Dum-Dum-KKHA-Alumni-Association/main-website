'use client';
import React from 'react';
import Image from 'next/image';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	wishlistItems: Product[];
	onRemoveWishlist: (product: Product) => void;
	onMoveToCart: (product: Product) => void;
	onClearWishlist: () => void;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
	isOpen,
	onClose,
	wishlistItems,
	onRemoveWishlist,
	onMoveToCart,
	onClearWishlist,
}) => {
	return (
		<Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<SheetContent className="flex w-full flex-col p-0 dark:bg-slate-900 sm:max-w-md">
				<SheetHeader className="border-b px-6 py-4 text-left dark:border-slate-800">
					<div className="flex items-center justify-between pr-6">
						<div className="flex items-center gap-2">
							<Heart className="h-5 w-5 fill-red-500 text-red-500" />
							<SheetTitle className="font-sora text-lg font-bold text-slate-900 dark:text-white">
								Saved Items ({wishlistItems.length})
							</SheetTitle>
						</div>
						{wishlistItems.length > 0 && (
							<button
								onClick={onClearWishlist}
								className="text-xs font-medium text-slate-400 transition-colors hover:text-red-500"
							>
								Clear
							</button>
						)}
					</div>
				</SheetHeader>

				{wishlistItems.length === 0 ? (
					<div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
							<Heart className="h-10 w-10 stroke-[1.5]" />
						</div>
						<h4 className="mt-4 font-sora text-base font-bold text-slate-800 dark:text-slate-200">
							No Saved Items Yet
						</h4>
						<p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-500">
							Tap the heart icon on any merchandise to save it for later review!
						</p>
						<Button
							onClick={onClose}
							className="mt-6 rounded-xl bg-primary px-6 font-sora text-xs font-semibold text-white"
						>
							Browse Merchandise
						</Button>
					</div>
				) : (
					<div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
						{wishlistItems.map((product) => (
							<div
								key={product.id}
								className="flex gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40"
							>
								<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-slate-900">
									<Image
										src={product.image}
										alt={product.name}
										fill
										className="object-cover object-center"
									/>
								</div>

								<div className="flex flex-1 flex-col justify-between">
									<div>
										<div className="flex items-start justify-between gap-1">
											<h4 className="line-clamp-1 font-sora text-xs font-bold text-slate-900 dark:text-white">
												{product.name}
											</h4>
											<button
												onClick={() => onRemoveWishlist(product)}
												className="text-slate-400 transition-colors hover:text-red-500"
											>
												<Trash2 className="h-3.5 w-3.5" />
											</button>
										</div>
										<p className="text-[11px] font-bold text-primary dark:text-blue-400">
											₹{product.price.toLocaleString('en-IN')}
										</p>
									</div>

									<Button
										onClick={() => {
											onMoveToCart(product);
										}}
										size="sm"
										className="mt-2 h-7 gap-1.5 rounded-lg bg-slate-950 text-[11px] font-semibold text-white hover:bg-primary dark:bg-white dark:text-slate-950"
									>
										<ShoppingBag className="h-3 w-3" />
										<span>Move to Bag</span>
									</Button>
								</div>
							</div>
						))}
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default WishlistDrawer;
