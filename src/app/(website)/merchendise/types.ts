export interface Product {
	id: string;
	name: string;
	slug: string;
	category:
		| 'polo-tshirts'
		| 'hoodies-sweatshirts'
		| 'jackets-outerwear'
		| 'lapel-pins-badges'
		| 'caps-accessories'
		| 'drinkware-mugs'
		| 'stationery-mementos'
		| 'gift-sets';
	categoryLabel: string;
	collection:
		| 'Heritage 1933'
		| 'ReMergencia Collection'
		| 'Bandhu Chol Sports'
		| 'Everyday Alumni'
		| 'Executive Edition';
	price: number;
	originalPrice: number;
	rating: number;
	reviewsCount: number;
	image: string;
	additionalImages?: string[];
	description: string;
	fullDescription: string;
	features: string[];
	sizes?: string[];
	colors?: { name: string; hex: string }[];
	badge?: string;
	badgeVariant?:
		'default' | 'secondary' | 'destructive' | 'outline' | 'amber' | 'emerald';
	inStock: boolean;
	stockCount: number;
	audience?: 'All' | 'Men' | 'Women' | 'Unisex' | 'Alumni' | 'Youth';
	material?: string;
}

export interface CartItem {
	product: Product;
	selectedSize?: string;
	selectedColor?: string;
	quantity: number;
}

export interface FilterState {
	search: string;
	categories: string[];
	collections: string[];
	priceRange: [number, number];
	selectedSize: string;
	inStockOnly: boolean;
	sortBy: 'featured' | 'price-low' | 'price-high' | 'name-asc' | 'rating';
	audienceTag: string;
}
