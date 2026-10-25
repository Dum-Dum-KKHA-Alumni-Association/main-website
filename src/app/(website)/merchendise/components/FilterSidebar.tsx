'use client';
import { useState } from 'react';
import { CATEGORIES, COLLECTIONS } from './merchandiseData';
import { FilterState } from '../types';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface FilterSidebarProps {
	filters: FilterState;
	onCategoryToggle: (categoryId: string) => void;
	onCollectionToggle: (collectionId: string) => void;
	onPriceChange: (range: [number, number]) => void;
	onSizeSelect: (size: string) => void;
	onStockToggle: () => void;
	onResetFilters: () => void;
	totalResults: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
	filters,
	onCategoryToggle,
	onCollectionToggle,
	onPriceChange,
	// onResetFilters,
}) => {
	const [showMoreCollections, setShowMoreCollections] = useState(false);
	const [showMoreCategories, setShowMoreCategories] = useState(false);

	const visibleCollections = showMoreCollections
		? COLLECTIONS
		: COLLECTIONS.slice(0, 5);

	const visibleCategories = showMoreCategories
		? CATEGORIES.filter((c) => c.id !== 'all')
		: CATEGORIES.filter((c) => c.id !== 'all').slice(0, 6);

	return (
		<aside className="w-full space-y-7 text-neutral-900">
			{/* Brand / Collection Section mirroring reference */}
			<div>
				<div className="flex items-center justify-between pb-3">
					<h3 className="font-sora text-sm font-bold text-neutral-900">
						Brand / Edition
					</h3>
					<button
						onClick={() => {
							COLLECTIONS.forEach((c) => {
								if (filters.collections.includes(c.id)) {
									onCollectionToggle(c.id);
								}
							});
						}}
						className="text-xs text-neutral-400 transition-colors hover:text-neutral-900"
					>
						Reset
					</button>
				</div>

				<div className="space-y-2.5">
					{visibleCollections.map((col, idx) => {
						const isChecked = filters.collections.includes(col.id);
						// Sample counter display matching reference
						const count = [42, 28, 16, 12, 8][idx % 5];

						return (
							<label
								key={col.id}
								onClick={() => onCollectionToggle(col.id)}
								className="group flex cursor-pointer items-center justify-between text-xs transition-colors"
							>
								<div className="flex items-center gap-2.5">
									<div
										className={cn(
											'flex h-4 w-4 items-center justify-center rounded border transition-colors',
											isChecked
												? 'border-neutral-900 bg-neutral-900 text-white'
												: 'border-neutral-300 bg-white group-hover:border-neutral-500'
										)}
									>
										{isChecked && <Check className="h-3 w-3 stroke-[3]" />}
									</div>
									<span
										className={cn(
											'font-sora text-xs',
											isChecked
												? 'font-bold text-neutral-900'
												: 'font-medium text-neutral-600'
										)}
									>
										{col.label}
									</span>
								</div>
								<span className="text-[11px] text-neutral-400">{count}</span>
							</label>
						);
					})}

					{COLLECTIONS.length > 5 && (
						<button
							onClick={() => setShowMoreCollections(!showMoreCollections)}
							className="mt-3 inline-block rounded bg-neutral-900 px-3 py-1 text-[11px] font-medium text-white transition-all hover:bg-neutral-800"
						>
							{showMoreCollections ? 'Show less' : 'Show more'}
						</button>
					)}
				</div>
			</div>

			{/* Category Section mirroring reference */}
			<div>
				<div className="flex items-center justify-between pb-3">
					<h3 className="font-sora text-sm font-bold text-neutral-900">
						Category
					</h3>
					<button
						onClick={() => onCategoryToggle('all')}
						className="text-xs text-neutral-400 transition-colors hover:text-neutral-900"
					>
						Reset
					</button>
				</div>

				<div className="space-y-2.5">
					{visibleCategories.map((cat) => {
						const isChecked = filters.categories.includes(cat.id);

						return (
							<label
								key={cat.id}
								onClick={() => onCategoryToggle(cat.id)}
								className="group flex cursor-pointer items-center justify-between text-xs transition-colors"
							>
								<div className="flex items-center gap-2.5">
									<div
										className={cn(
											'flex h-4 w-4 items-center justify-center rounded border transition-colors',
											isChecked
												? 'border-neutral-900 bg-neutral-900 text-white'
												: 'border-neutral-300 bg-white group-hover:border-neutral-500'
										)}
									>
										{isChecked && <Check className="h-3 w-3 stroke-[3]" />}
									</div>
									<span
										className={cn(
											'font-sora text-xs',
											isChecked
												? 'font-bold text-neutral-900'
												: 'font-medium text-neutral-600'
										)}
									>
										{cat.label}
									</span>
								</div>
								<span className="text-[11px] text-neutral-400">
									{cat.count * 6}
								</span>
							</label>
						);
					})}

					{CATEGORIES.length > 6 && (
						<button
							onClick={() => setShowMoreCategories(!showMoreCategories)}
							className="mt-3 inline-block rounded bg-neutral-900 px-3 py-1 text-[11px] font-medium text-white transition-all hover:bg-neutral-800"
						>
							{showMoreCategories ? 'Show less' : 'Show more'}
						</button>
					)}
				</div>
			</div>

			{/* Price Section mirroring reference */}
			<div>
				<div className="flex items-center justify-between pb-3">
					<h3 className="font-sora text-sm font-bold text-neutral-900">
						Price
					</h3>
					<button
						onClick={() => onPriceChange([200, 3500])}
						className="text-xs text-neutral-400 transition-colors hover:text-neutral-900"
					>
						Reset
					</button>
				</div>

				<div className="space-y-3 pt-1">
					<Slider
						min={200}
						max={3500}
						step={50}
						value={[filters.priceRange[0], filters.priceRange[1]]}
						onValueChange={(val) => onPriceChange([val[0], val[1] ?? 3500])}
						className="py-1"
					/>

					{/* Price ticks mirroring reference image bottom row */}
					<div className="flex items-center justify-between text-[11px] font-medium text-neutral-500">
						<span>₹200</span>
						<span>₹500</span>
						<span>₹1.5k</span>
						<span>₹3.5k</span>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default FilterSidebar;
