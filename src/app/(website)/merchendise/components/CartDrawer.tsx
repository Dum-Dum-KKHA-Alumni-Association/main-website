'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { CartItem } from '../types';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import toast from 'react-hot-toast';

interface CartDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	cartItems: CartItem[];
	onUpdateQuantity: (
		productId: string,
		size: string | undefined,
		delta: number
	) => void;
	onRemoveItem: (productId: string, size: string | undefined) => void;
	onClearCart: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
	isOpen,
	onClose,
	cartItems,
	onUpdateQuantity,
	onRemoveItem,
	onClearCart,
}) => {
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);
	const [customerName, setCustomerName] = useState('');
	const [batchYear, setBatchYear] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [deliveryType, setDeliveryType] = useState<'campus' | 'courier'>(
		'campus'
	);

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.product.price * item.quantity,
		0
	);
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	const handleSendWhatsAppOrder = () => {
		if (cartItems.length === 0) {
			toast.error('Your cart is empty');
			return;
		}

		let itemsText = '';
		cartItems.forEach((item, index) => {
			itemsText += `${index + 1}. *${item.product.name}*\n   - Size: ${item.selectedSize || 'Standard'}\n   - Qty: ${item.quantity} x ₹${item.product.price} = ₹${item.product.price * item.quantity}\n`;
		});

		const message = `🎓 *DDKKHAAA ALUMNI MERCHANDISE ORDER*\n-----------------------------------\n${itemsText}\n*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n*Delivery Method:* ${deliveryType === 'campus' ? '🏫 Free School Campus Pickup' : '📦 Doorstep Courier'}\n\n*Buyer Details:*\n- *Name:* ${customerName || 'Alumnus / Friend'}\n- *Batch Year:* ${batchYear || 'N/A'}\n- *Phone:* ${phone || 'Provided via WhatsApp'}\n- *Address:* ${address || (deliveryType === 'campus' ? 'Campus Pickup' : 'N/A')}\n-----------------------------------\nPlease confirm order processing and payment options. Thank you!`;

		const encoded = encodeURIComponent(message);
		window.open(`https://wa.me/919432428233?text=${encoded}`, '_blank');
		toast.success('Opening WhatsApp with your order details!');
	};

	return (
		<Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<SheetContent className="flex w-full flex-col p-0 dark:bg-slate-900 sm:max-w-md">
				{/* Top Sheet Header */}
				<SheetHeader className="border-b px-6 py-4 text-left dark:border-slate-800">
					<div className="flex items-center justify-between pr-6">
						<div className="flex items-center gap-2">
							<ShoppingBag className="h-5 w-5 text-primary" />
							<SheetTitle className="font-sora text-lg font-bold text-slate-900 dark:text-white">
								Your Bag ({totalItems})
							</SheetTitle>
						</div>
						{cartItems.length > 0 && (
							<button
								onClick={onClearCart}
								className="text-xs font-medium text-slate-400 transition-colors hover:text-red-500"
							>
								Clear All
							</button>
						)}
					</div>
				</SheetHeader>

				{/* Body Content */}
				{cartItems.length === 0 ? (
					<div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
							<ShoppingBag className="h-10 w-10 stroke-[1.5]" />
						</div>
						<h4 className="mt-4 font-sora text-base font-bold text-slate-800 dark:text-slate-200">
							Your Bag is Empty
						</h4>
						<p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-500">
							Explore our association merchandise and wear your Dum Dum K.K.
							Hindu Academy alumni pride!
						</p>
						<Button
							onClick={onClose}
							className="mt-6 rounded-xl bg-primary px-6 font-sora text-xs font-semibold text-white"
						>
							Start Shopping
						</Button>
					</div>
				) : (
					<div className="flex flex-1 flex-col overflow-hidden">
						{/* Cart Items List */}
						<div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
							{cartItems.map((item, idx) => (
								<div
									key={`${item.product.id}-${item.selectedSize}-${idx}`}
									className="flex gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40"
								>
									{/* Thumbnail */}
									<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-slate-900">
										<Image
											src={item.product.image}
											alt={item.product.name}
											fill
											className="object-cover object-center"
										/>
									</div>

									{/* Info */}
									<div className="flex flex-1 flex-col justify-between">
										<div>
											<div className="flex items-start justify-between gap-1">
												<h4 className="line-clamp-1 font-sora text-xs font-bold text-slate-900 dark:text-white">
													{item.product.name}
												</h4>
												<button
													onClick={() =>
														onRemoveItem(item.product.id, item.selectedSize)
													}
													className="text-slate-400 transition-colors hover:text-red-500"
													title="Remove item"
												>
													<Trash2 className="h-3.5 w-3.5" />
												</button>
											</div>

											<div className="mt-0.5 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
												{item.selectedSize && (
													<span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-semibold dark:bg-slate-700">
														Size: {item.selectedSize}
													</span>
												)}
												<span>₹{item.product.price} each</span>
											</div>
										</div>

										{/* Quantity and Line Total */}
										<div className="mt-2 flex items-center justify-between">
											<div className="flex items-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
												<button
													onClick={() =>
														onUpdateQuantity(
															item.product.id,
															item.selectedSize,
															-1
														)
													}
													className="flex h-6 w-6 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
												>
													<Minus className="h-3 w-3" />
												</button>
												<span className="w-7 text-center text-xs font-bold">
													{item.quantity}
												</span>
												<button
													onClick={() =>
														onUpdateQuantity(
															item.product.id,
															item.selectedSize,
															1
														)
													}
													className="flex h-6 w-6 items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>

											<span className="font-sora text-xs font-bold text-slate-900 dark:text-white">
												₹
												{(item.product.price * item.quantity).toLocaleString(
													'en-IN'
												)}
											</span>
										</div>
									</div>
								</div>
							))}

							{/* Quick Checkout info form toggle */}
							{showCheckoutForm && (
								<div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/80">
									<h5 className="font-sora text-xs font-bold text-slate-900 dark:text-white">
										Buyer Details for Order Receipt
									</h5>

									<input
										type="text"
										placeholder="Full Name / Alumnus Name"
										value={customerName}
										onChange={(e) => setCustomerName(e.target.value)}
										className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900"
									/>

									<div className="grid grid-cols-2 gap-2">
										<input
											type="text"
											placeholder="Batch Year (e.g., 2014)"
											value={batchYear}
											onChange={(e) => setBatchYear(e.target.value)}
											className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900"
										/>
										<input
											type="tel"
											placeholder="Phone / WhatsApp"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900"
										/>
									</div>

									<div className="flex gap-2">
										<button
											type="button"
											onClick={() => setDeliveryType('campus')}
											className={`flex-1 rounded-lg border p-2 text-center text-[11px] font-semibold transition-all ${
												deliveryType === 'campus'
													? 'border-primary bg-primary/10 text-primary'
													: 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400'
											}`}
										>
											🏫 School Pickup
										</button>
										<button
											type="button"
											onClick={() => setDeliveryType('courier')}
											className={`flex-1 rounded-lg border p-2 text-center text-[11px] font-semibold transition-all ${
												deliveryType === 'courier'
													? 'border-primary bg-primary/10 text-primary'
													: 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400'
											}`}
										>
											📦 Doorstep Courier
										</button>
									</div>

									{deliveryType === 'courier' && (
										<textarea
											rows={2}
											placeholder="Complete Delivery Address & Pincode"
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900"
										/>
									)}
								</div>
							)}
						</div>

						{/* Footer with Totals and Order CTAs */}
						<div className="border-t bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/90">
							<div className="space-y-1.5 text-xs">
								<div className="flex justify-between text-slate-500 dark:text-slate-400">
									<span>Subtotal</span>
									<span>₹{subtotal.toLocaleString('en-IN')}</span>
								</div>
								<div className="flex justify-between text-slate-500 dark:text-slate-400">
									<span>Delivery</span>
									<span className="font-semibold text-emerald-600">
										{deliveryType === 'campus'
											? 'Free (School Campus)'
											: 'Standard Courier'}
									</span>
								</div>
								<div className="flex justify-between border-t pt-2 text-sm font-bold text-slate-900 dark:border-slate-800 dark:text-white">
									<span>Total Amount</span>
									<span className="font-sora text-base">
										₹{subtotal.toLocaleString('en-IN')}
									</span>
								</div>
							</div>

							<div className="mt-4 flex flex-col gap-2">
								<Button
									onClick={handleSendWhatsAppOrder}
									className="h-11 w-full gap-2 rounded-xl bg-[#25D366] font-sora font-semibold text-white shadow-md hover:bg-[#1EBE5D] active:scale-95"
								>
									<FaWhatsapp className="h-5 w-5" />
									<span>Order Directly via WhatsApp</span>
								</Button>

								<Button
									variant="outline"
									onClick={() => setShowCheckoutForm(!showCheckoutForm)}
									className="h-9 w-full rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300"
								>
									{showCheckoutForm
										? 'Hide Delivery Details'
										: '+ Add Batch & Delivery Information'}
								</Button>
							</div>

							<p className="mt-2.5 text-center text-[10px] text-slate-400">
								All orders directly managed by Dum Dum K.K. Hindu Academy Alumni
								Association.
							</p>
						</div>
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default CartDrawer;
