'use client';

import React from 'react';
import { DDKEvent } from '../types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Clock,
	MapPin,
	IndianRupee,
	ArrowRight,
	Calendar as CalendarIcon,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

interface DayWiseListViewProps {
	events: DDKEvent[];
	onSelectEvent: (event: DDKEvent) => void;
	onResetFilters?: () => void;
}

export const DayWiseListView: React.FC<DayWiseListViewProps> = ({
	events,
	onSelectEvent,
	onResetFilters,
}) => {
	// Sort events chronologically by date
	const sortedEvents = [...events].sort((a, b) => {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	// Group by Month & Year
	const groupedByMonth: { [key: string]: DDKEvent[] } = {};
	sortedEvents.forEach((ev) => {
		const d = new Date(ev.date + 'T00:00:00');
		const monthKey = d.toLocaleDateString('en-IN', {
			month: 'long',
			year: 'numeric',
		});
		if (!groupedByMonth[monthKey]) {
			groupedByMonth[monthKey] = [];
		}
		groupedByMonth[monthKey].push(ev);
	});

	if (sortedEvents.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-card/50 p-12 text-center font-sora shadow-sm">
				<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
					<CalendarIcon className="h-8 w-8" />
				</div>
				<h3 className="mt-4 text-xl font-bold text-foreground">
					No Events Found Matching Your Filter
				</h3>
				<p className="mt-2 max-w-md text-sm text-muted-foreground">
					We couldn&apos;t find any scheduled events for the selected criteria.
					Try adjusting your category, date confidence, or payment filters.
				</p>
				{onResetFilters && (
					<Button
						onClick={onResetFilters}
						variant="outline"
						className="mt-6 font-semibold"
					>
						Reset All Filters
					</Button>
				)}
			</div>
		);
	}

	return (
		<div className="space-y-12 font-sora">
			{Object.entries(groupedByMonth).map(([monthYear, monthEvents]) => (
				<section key={monthYear} className="space-y-5">
					{/* Month Group Header */}
					<div className="sticky top-20 z-10 flex items-center justify-between rounded-xl border border-slate-200/80 bg-background/90 px-4 py-3 shadow-sm backdrop-blur-md dark:border-slate-800">
						<div className="flex items-center gap-3">
							<div className="h-3 w-3 rounded-full bg-primary" />
							<h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
								{monthYear}
							</h3>
						</div>
						<Badge variant="secondary" className="text-xs font-semibold">
							{monthEvents.length}{' '}
							{monthEvents.length === 1 ? 'Event' : 'Events'}
						</Badge>
					</div>

					{/* Events in this Month */}
					<div className="space-y-5">
						{monthEvents.map((ev) => {
							const evDate = new Date(ev.date + 'T00:00:00');
							const dayOfWeek = evDate.toLocaleDateString('en-IN', {
								weekday: 'short',
							});
							const dayOfMonth = evDate.getDate();
							const monthShort = evDate.toLocaleDateString('en-IN', {
								month: 'short',
							});

							return (
								<div
									key={ev.id}
									className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:border-primary hover:shadow-md"
								>
									<div className="grid grid-cols-1 md:grid-cols-12">
										{/* Left Date Column */}
										<div className="flex flex-row items-center justify-between border-b bg-slate-50 p-4 text-center dark:bg-slate-900/60 md:flex-col md:justify-center md:border-b-0 md:border-r md:p-6 lg:col-span-3">
											<div className="space-y-0.5">
												<span className="text-xs font-bold uppercase tracking-widest text-primary">
													{dayOfWeek}
												</span>
												<div className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
													{dayOfMonth}
												</div>
												<span className="text-xs font-semibold uppercase text-muted-foreground">
													{monthShort} {evDate.getFullYear()}
												</span>
											</div>

											{/* Approximate vs Confirmed Badge */}
											<div className="mt-0 md:mt-4">
												{ev.approximateDate ? (
													<Badge
														variant="outline"
														className="border-amber-400 bg-amber-50 text-[11px] font-medium text-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
													>
														~ Approx. Date
													</Badge>
												) : (
													<Badge
														variant="outline"
														className="border-emerald-400 bg-emerald-50 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
													>
														Confirmed
													</Badge>
												)}
											</div>
										</div>

										{/* Main Details Body */}
										<div className="flex flex-1 flex-col justify-between p-5 md:p-6 lg:col-span-9">
											<div className="space-y-3">
												{/* Header Tags */}
												<div className="flex flex-wrap items-center gap-2">
													<Badge
														className={`${ev.badgeColor.bg} ${ev.badgeColor.text} ${ev.badgeColor.border} border text-xs font-semibold`}
													>
														{ev.categoryLabel}
													</Badge>

													<Badge variant="outline" className="text-xs">
														{ev.mode} Mode
													</Badge>

													{ev.paymentType === 'free' ? (
														<Badge className="border-cyan-200 bg-cyan-50 text-xs text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300">
															Free Entry
														</Badge>
													) : (
														<Badge className="border-indigo-200 bg-indigo-50 text-xs text-indigo-800 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
															₹{ev.fee} / Per Alumnus
														</Badge>
													)}

													{ev.registrationOpen && (
														<Badge className="bg-emerald-600 text-xs text-white">
															Registrations Open
														</Badge>
													)}
												</div>

												{/* Title and Bengali Subtitle */}
												<div>
													<h3
														onClick={() => onSelectEvent(ev)}
														className="cursor-pointer text-xl font-bold tracking-tight text-foreground transition group-hover:text-primary md:text-2xl"
													>
														{ev.title}
													</h3>
													{ev.bengaliTitle && (
														<p className="mt-0.5 font-baloo-da-2 text-base font-semibold text-amber-600 dark:text-amber-400">
															{ev.bengaliTitle}
														</p>
													)}
												</div>

												{/* Approximate Notice if applicable */}
												{ev.approximateDate && ev.approximateDateLabel && (
													<p className="text-xs font-medium text-amber-700 dark:text-amber-300">
														Estimated Schedule: {ev.approximateDateLabel}
													</p>
												)}

												{/* Description */}
												<p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
													{ev.description}
												</p>

												{/* Details Grid */}
												<div className="grid grid-cols-1 gap-2 pt-1 text-xs text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
													<div className="flex items-center gap-2">
														<Clock className="h-4 w-4 shrink-0 text-primary" />
														<span className="font-medium text-foreground">
															{ev.time}
														</span>
													</div>

													<div className="flex items-center gap-2">
														<MapPin className="h-4 w-4 shrink-0 text-primary" />
														<span className="truncate">{ev.location}</span>
													</div>

													<div className="flex items-center gap-2">
														<IndianRupee className="h-4 w-4 shrink-0 text-emerald-600" />
														<span className="font-semibold text-foreground">
															{ev.fee === 0
																? 'Free of Cost'
																: `₹${ev.fee} per attendee`}
														</span>
													</div>
												</div>

												{/* Key Highlights Chips */}
												{ev.highlights && ev.highlights.length > 0 && (
													<div className="flex flex-wrap gap-1.5 pt-1">
														{ev.highlights.slice(0, 3).map((hl, i) => (
															<span
																key={i}
																className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
															>
																• {hl}
															</span>
														))}
													</div>
												)}
											</div>

											{/* Card Footer: Coordinator & Action Buttons */}
											<div className="mt-5 flex flex-col justify-between gap-3 border-t pt-4 sm:flex-row sm:items-center">
												<div className="flex items-center gap-2 text-xs text-muted-foreground">
													<span>
														Coordinator:{' '}
														<strong className="text-foreground">
															{ev.coordinator.name}
														</strong>
													</span>
													<a
														href={`https://wa.me/${ev.coordinator.whatsapp}?text=${encodeURIComponent(
															`Hello, inquiring about: ${ev.title}`
														)}`}
														target="_blank"
														rel="noreferrer"
														className="text-green-600 hover:text-green-700"
														title="Chat on WhatsApp"
													>
														<FaWhatsapp className="h-4 w-4" />
													</a>
												</div>

												<div className="flex flex-wrap items-center gap-2">
													<Button
														variant="outline"
														size="sm"
														onClick={() => onSelectEvent(ev)}
														className="text-xs font-semibold"
													>
														View Details
													</Button>

													<Button
														size="sm"
														onClick={() => onSelectEvent(ev)}
														className="gap-1.5 bg-primary text-xs font-bold text-primary-foreground shadow hover:bg-primary/90"
													>
														Register / Book Spot
														<ArrowRight className="h-3.5 w-3.5" />
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			))}
		</div>
	);
};
