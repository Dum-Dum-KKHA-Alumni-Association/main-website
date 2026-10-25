'use client';
import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MerchandiseBanner from './components/MerchandiseBanner';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import BulkOrderSection from './components/BulkOrderSection';
import {
	MERCHANDISE_PRODUCTS,
	AUDIENCE_TAGS,
} from './components/merchandiseData';
import { Product, CartItem, FilterState } from './types';
import {
	Search,
	ShoppingBag,
	Heart,
	SlidersHorizontal,
	ChevronDown,
	X,
} from 'lucide-react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';

export default function MerchendisePage() {
	// Filter State
	const [filters, setFilters] = useState<FilterState>({
		search: '',
		categories: [],
		collections: [],
		priceRange: [200, 3500],
		selectedSize: '',
		inStockOnly: false,
		sortBy: 'featured',
		audienceTag: 'all',
	});

	// Mobile filter sheet state
	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	// Modals & Drawers state
	const [selectedQuickViewProduct, setSelectedQuickViewProduct] =
		useState<Product | null>(null);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isWishlistOpen, setIsWishlistOpen] = useState(false);

	// Cart & Wishlist State
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [wishlist, setWishlist] = useState<Product[]>([]);

	const productGridRef = useRef<HTMLDivElement>(null);
	const bulkOrderRef = useRef<HTMLDivElement>(null);

	// Filter Actions
	const handleCategoryToggle = (categoryId: string) => {
		if (categoryId === 'all') {
			setFilters((prev) => ({ ...prev, categories: [] }));
			return;
		}
		setFilters((prev) => {
			const exists = prev.categories.includes(categoryId);
			return {
				...prev,
				categories: exists
					? prev.categories.filter((c) => c !== categoryId)
					: [...prev.categories, categoryId],
			};
		});
	};

	const handleCollectionToggle = (collectionId: string) => {
		setFilters((prev) => {
			const exists = prev.collections.includes(collectionId);
			return {
				...prev,
				collections: exists
					? prev.collections.filter((c) => c !== collectionId)
					: [...prev.collections, collectionId],
			};
		});
	};

	const handlePriceChange = (range: [number, number]) => {
		setFilters((prev) => ({ ...prev, priceRange: range }));
	};

	const handleSizeSelect = (size: string) => {
		setFilters((prev) => ({ ...prev, selectedSize: size }));
	};

	const handleStockToggle = () => {
		setFilters((prev) => ({ ...prev, inStockOnly: !prev.inStockOnly }));
	};

	const handleResetFilters = () => {
		setFilters({
			search: '',
			categories: [],
			collections: [],
			priceRange: [200, 3500],
			selectedSize: '',
			inStockOnly: false,
			sortBy: 'featured',
			audienceTag: 'all',
		});
		toast.success('Filters reset');
	};

	// Cart Operations
	const handleAddToCart = (
		product: Product,
		size?: string,
		color?: string,
		quantity = 1
	) => {
		const targetSize = size || product.sizes?.[0] || 'Standard';
		const targetColor = color || product.colors?.[0]?.name;

		setCartItems((prev) => {
			const existingIndex = prev.findIndex(
				(item) =>
					item.product.id === product.id && item.selectedSize === targetSize
			);

			if (existingIndex > -1) {
				const updated = [...prev];
				updated[existingIndex].quantity += quantity;
				return updated;
			} else {
				return [
					...prev,
					{
						product,
						selectedSize: targetSize,
						selectedColor: targetColor,
						quantity,
					},
				];
			}
		});

		toast.success(`Added ${product.name} to bag!`, {
			icon: '🛍️',
			style: {
				borderRadius: '8px',
				background: '#171717',
				color: '#fff',
			},
		});
	};

	const handleUpdateCartQuantity = (
		productId: string,
		size: string | undefined,
		delta: number
	) => {
		setCartItems(
			(prev) =>
				prev
					.map((item) => {
						if (item.product.id === productId && item.selectedSize === size) {
							const newQty = item.quantity + delta;
							return newQty > 0 ? { ...item, quantity: newQty } : null;
						}
						return item;
					})
					.filter(Boolean) as CartItem[]
		);
	};

	const handleRemoveCartItem = (
		productId: string,
		size: string | undefined
	) => {
		setCartItems((prev) =>
			prev.filter(
				(item) => !(item.product.id === productId && item.selectedSize === size)
			)
		);
		toast('Item removed');
	};

	const handleClearCart = () => {
		setCartItems([]);
		toast('Bag cleared');
	};

	// Wishlist Operations
	const handleToggleWishlist = (product: Product) => {
		const exists = wishlist.some((item) => item.id === product.id);
		if (exists) {
			setWishlist((prev) => prev.filter((item) => item.id !== product.id));
			toast('Removed from saved items');
		} else {
			setWishlist((prev) => [...prev, product]);
			toast.success('Saved to wishlist!', {
				icon: '❤️',
			});
		}
	};

	const handleMoveWishlistToCart = (product: Product) => {
		handleAddToCart(product);
		setWishlist((prev) => prev.filter((item) => item.id !== product.id));
	};

	const handleClearWishlist = () => {
		setWishlist([]);
		toast('Wishlist cleared');
	};

	// Filtered & Sorted Products
	const filteredProducts = useMemo(() => {
		return MERCHANDISE_PRODUCTS.filter((product) => {
			// Search filter
			if (filters.search) {
				const query = filters.search.toLowerCase();
				const matchesName = product.name.toLowerCase().includes(query);
				const matchesDesc = product.description.toLowerCase().includes(query);
				const matchesCategory = product.categoryLabel
					.toLowerCase()
					.includes(query);
				const matchesCollection = product.collection
					.toLowerCase()
					.includes(query);
				if (
					!matchesName &&
					!matchesDesc &&
					!matchesCategory &&
					!matchesCollection
				) {
					return false;
				}
			}

			// Category filter
			if (
				filters.categories.length > 0 &&
				!filters.categories.includes(product.category)
			) {
				return false;
			}

			// Collection filter
			if (
				filters.collections.length > 0 &&
				!filters.collections.includes(product.collection)
			) {
				return false;
			}

			// Price filter
			if (
				product.price < filters.priceRange[0] ||
				product.price > filters.priceRange[1]
			) {
				return false;
			}

			// Size filter
			if (filters.selectedSize) {
				const hasSize = product.sizes?.some(
					(s) =>
						s.toLowerCase().includes(filters.selectedSize.toLowerCase()) ||
						s === 'Free Size'
				);
				if (!hasSize) return false;
			}

			// Stock filter
			if (filters.inStockOnly && !product.inStock) {
				return false;
			}

			// Audience tag
			if (filters.audienceTag !== 'all') {
				if (filters.audienceTag === 'Reunion') {
					if (product.collection !== 'ReMergencia Collection') return false;
				} else if (
					product.audience !== 'All' &&
					product.audience !== filters.audienceTag &&
					product.audience !== 'Unisex'
				) {
					return false;
				}
			}

			return true;
		}).sort((a, b) => {
			if (filters.sortBy === 'price-low') return a.price - b.price;
			if (filters.sortBy === 'price-high') return b.price - a.price;
			if (filters.sortBy === 'rating') return b.rating - a.rating;
			if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
			return 0; // featured default order
		});
	}, [filters]);

	const totalCartQuantity = cartItems.reduce(
		(sum, item) => sum + item.quantity,
		0
	);

	const scrollToProducts = () => {
		productGridRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<main className="min-h-screen bg-white pb-20">
			<Navbar />

			{/* Main Container */}
			<div className="mx-auto w-full max-w-[86rem] px-4 pt-2 sm:px-6 lg:px-8">
				{/* Top Minimalist Filter Bar strictly mirroring reference top bar */}
				<div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/80 pb-4">
					{/* Left Pills: Clothing dropdown, New Arrivals, Sale */}
					<div className="flex flex-wrap items-center gap-2">
						<button
							onClick={() => handleCategoryToggle('polo-tshirts')}
							className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
						>
							<span>Clothing</span>
							<ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
						</button>

						<button
							onClick={() => handleCollectionToggle('Heritage 1933')}
							className={cn(
								'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
								filters.collections.includes('Heritage 1933')
									? 'border-neutral-900 bg-neutral-900 text-white'
									: 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
							)}
						>
							New Arrivals
						</button>

						<button
							onClick={() => handleCollectionToggle('ReMergencia Collection')}
							className={cn(
								'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
								filters.collections.includes('ReMergencia Collection')
									? 'border-neutral-900 bg-neutral-900 text-white'
									: 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
							)}
						>
							Sale
						</button>
					</div>

					{/* Middle Search Bar with search icon */}
					<div className="relative min-w-[200px] max-w-md flex-1">
						<input
							type="text"
							placeholder="Search..."
							value={filters.search}
							onChange={(e) =>
								setFilters((prev) => ({ ...prev, search: e.target.value }))
							}
							className="w-full rounded-full border border-neutral-200 bg-neutral-50/80 py-1.5 pl-4 pr-9 text-xs text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
						/>
						<Search className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
						{filters.search && (
							<button
								onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
								className="absolute right-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
							>
								<X className="h-3 w-3" />
							</button>
						)}
					</div>

					{/* Right Pills & Icons mirroring reference */}
					<div className="flex items-center gap-2">
						{AUDIENCE_TAGS.filter((t) => t.id !== 'all').map((tag) => (
							<button
								key={tag.id}
								onClick={() =>
									setFilters((prev) => ({
										...prev,
										audienceTag: prev.audienceTag === tag.id ? 'all' : tag.id,
									}))
								}
								className={cn(
									'hidden rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:inline-block',
									filters.audienceTag === tag.id
										? 'border-neutral-900 bg-neutral-900 text-white'
										: 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
								)}
							>
								{tag.label}
							</button>
						))}

						{/* Saved Items */}
						<button
							onClick={() => setIsWishlistOpen(true)}
							aria-label="Wishlist"
							className="relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
						>
							<Heart
								className={cn(
									'h-4 w-4 stroke-[1.8]',
									wishlist.length > 0 && 'fill-red-500 text-red-500'
								)}
							/>
							{wishlist.length > 0 && (
								<span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
									{wishlist.length}
								</span>
							)}
						</button>

						{/* Cart */}
						<button
							onClick={() => setIsCartOpen(true)}
							aria-label="Bag"
							className="relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
						>
							<ShoppingBag className="h-4 w-4 stroke-[1.8]" />
							{totalCartQuantity > 0 && (
								<span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
									{totalCartQuantity}
								</span>
							)}
						</button>
					</div>
				</div>

				{/* Top Hero Banner */}
				<div className="mb-8">
					<MerchandiseBanner onExploreClick={scrollToProducts} />
				</div>

				{/* Breadcrumb & Section Title mirroring reference: 'Home > Wink Collection', 'Wink Collection' */}
				<div ref={productGridRef} className="mb-6">
					<div className="text-xs text-neutral-400">
						<Link href="/" className="hover:text-neutral-700">
							Home
						</Link>
						<span className="mx-1.5">&gt;</span>
						<span className="font-medium text-neutral-700">
							DDKKHAAA Collection
						</span>
					</div>

					<div className="mt-1 flex items-center justify-between">
						<h2 className="font-sora text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
							DDKKHAAA Collection
						</h2>

						{/* Mobile Filter Sheet Trigger */}
						<Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
							<SheetTrigger asChild>
								<button className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 lg:hidden">
									<SlidersHorizontal className="h-3.5 w-3.5" />
									<span>Filters</span>
								</button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-full overflow-y-auto bg-white p-6 sm:max-w-xs"
							>
								<SheetHeader className="mb-4 text-left">
									<SheetTitle className="font-sora text-base font-bold">
										Filters
									</SheetTitle>
								</SheetHeader>
								<FilterSidebar
									filters={filters}
									onCategoryToggle={handleCategoryToggle}
									onCollectionToggle={handleCollectionToggle}
									onPriceChange={handlePriceChange}
									onSizeSelect={handleSizeSelect}
									onStockToggle={handleStockToggle}
									onResetFilters={handleResetFilters}
									totalResults={filteredProducts.length}
								/>
							</SheetContent>
						</Sheet>
					</div>
				</div>

				{/* 2-Column Responsive Layout strictly mirroring reference */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
					{/* Left Sidebar (Desktop) - 3 cols */}
					<div className="hidden lg:col-span-3 lg:block">
						<FilterSidebar
							filters={filters}
							onCategoryToggle={handleCategoryToggle}
							onCollectionToggle={handleCollectionToggle}
							onPriceChange={handlePriceChange}
							onSizeSelect={handleSizeSelect}
							onStockToggle={handleStockToggle}
							onResetFilters={handleResetFilters}
							totalResults={filteredProducts.length}
						/>
					</div>

					{/* Right 3-Column Products Grid - 9 cols */}
					<div className="lg:col-span-9">
						{filteredProducts.length === 0 ? (
							<div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 p-12 text-center">
								<h3 className="font-sora text-base font-semibold text-neutral-800">
									No products found
								</h3>
								<p className="mt-1 text-xs text-neutral-400">
									Try resetting your filters to view all merchandise.
								</p>
								<button
									onClick={handleResetFilters}
									className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800"
								>
									Reset Filters
								</button>
							</div>
						) : (
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
								{filteredProducts.map((product) => (
									<ProductCard
										key={product.id}
										product={product}
										isWishlisted={wishlist.some(
											(item) => item.id === product.id
										)}
										onToggleWishlist={handleToggleWishlist}
										onAddToCart={handleAddToCart}
										onQuickView={(p) => setSelectedQuickViewProduct(p)}
									/>
								))}
							</div>
						)}
					</div>
				</div>

				{/* Batch / Reunion Bulk Custom Order Section */}
				<div ref={bulkOrderRef}>
					<BulkOrderSection />
				</div>
			</div>

			{/* Quick View Modal */}
			<QuickViewModal
				product={selectedQuickViewProduct}
				isOpen={!!selectedQuickViewProduct}
				onClose={() => setSelectedQuickViewProduct(null)}
				isWishlisted={
					selectedQuickViewProduct
						? wishlist.some((item) => item.id === selectedQuickViewProduct.id)
						: false
				}
				onToggleWishlist={handleToggleWishlist}
				onAddToCart={handleAddToCart}
			/>

			{/* Slide-out Cart Drawer */}
			<CartDrawer
				isOpen={isCartOpen}
				onClose={() => setIsCartOpen(false)}
				cartItems={cartItems}
				onUpdateQuantity={handleUpdateCartQuantity}
				onRemoveItem={handleRemoveCartItem}
				onClearCart={handleClearCart}
			/>

			{/* Slide-out Wishlist Drawer */}
			<WishlistDrawer
				isOpen={isWishlistOpen}
				onClose={() => setIsWishlistOpen(false)}
				wishlistItems={wishlist}
				onRemoveWishlist={handleToggleWishlist}
				onMoveToCart={handleMoveWishlistToCart}
				onClearWishlist={handleClearWishlist}
			/>

			<Footer />
		</main>
	);
}
