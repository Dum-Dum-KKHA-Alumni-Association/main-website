'use client';

import React, { useState } from 'react';
import { DDKEvent } from '../types';
import {
	ChevronLeft,
	ChevronRight,
	Calendar as CalendarIcon,
	Clock,
	MapPin,
	IndianRupee,
	Sparkles,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CalendarMonthViewProps {
	events: DDKEvent[];
	onSelectEvent: (event: DDKEvent) => void;
}

export const CalendarMonthView: React.FC<CalendarMonthViewProps> = ({
	events,
	onSelectEvent,
}) => {
	// Initialize with today or October 2026
	const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
	const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
		const today = new Date();
		return today.toISOString().split('T')[0];
	});

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth(); // 0-indexed

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// Calculate calendar grid days
	const firstDayIndex = new Date(year, month, 1).getDay();
	const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	const prevMonthDays = [];
	for (let i = firstDayIndex - 1; i >= 0; i--) {
		prevMonthDays.push({
			day: daysInPrevMonth - i,
			isCurrentMonth: false,
			dateStr: new Date(year, month - 1, daysInPrevMonth - i)
				.toISOString()
				.split('T')[0],
		});
	}

	const currentMonthDays = [];
	for (let i = 1; i <= daysInCurrentMonth; i++) {
		const monthPadded = String(month + 1).padStart(2, '0');
		const dayPadded = String(i).padStart(2, '0');
		currentMonthDays.push({
			day: i,
			isCurrentMonth: true,
			dateStr: `${year}-${monthPadded}-${dayPadded}`,
		});
	}

	// const totalGridCells = 35;                         // standard 5 weeks grid, extend to 42 if needed
	const remainingCells =
		(prevMonthDays.length + currentMonthDays.length > 35 ? 42 : 35) -
		(prevMonthDays.length + currentMonthDays.length);

	const nextMonthDays = [];
	for (let i = 1; i <= remainingCells; i++) {
		nextMonthDays.push({
			day: i,
			isCurrentMonth: false,
			dateStr: new Date(year, month + 1, i).toISOString().split('T')[0],
		});
	}

	const allGridDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

	// Navigation handlers
	const handlePrevMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const handleNextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const handleToday = () => {
		const today = new Date();
		setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
		setSelectedDateStr(today.toISOString().split('T')[0]);
	};

	// Helper to find events on a date
	const getEventsOnDate = (dateStr: string) => {
		return events.filter((e) => {
			if (e.date === dateStr) return true;
			if (e.endDate && dateStr >= e.date && dateStr <= e.endDate) return true;
			return false;
		});
	};

	const todayStr = new Date().toISOString().split('T')[0];

	// Selected date events
	const selectedDateEvents = getEventsOnDate(selectedDateStr);

	return (
		<div className="space-y-8 font-sora">
			{/* Calendar Controls & Month Header */}
			<div className="flex flex-col justify-between gap-4 rounded-2xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:p-6">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
						<CalendarIcon className="h-6 w-6" />
					</div>
					<div>
						<h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							{monthNames[month]} {year}
						</h2>
						<p className="text-xs text-muted-foreground sm:text-sm">
							30-Day Almanac & Event Scheduling Grid
						</p>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={handleToday}
						className="border-primary/30 text-xs font-semibold text-primary hover:bg-primary/10"
					>
						Today
					</Button>

					<div className="flex items-center rounded-lg border bg-muted/40 p-0.5">
						<Button
							variant="ghost"
							size="icon"
							onClick={handlePrevMonth}
							className="h-8 w-8 hover:bg-background"
							title="Previous Month"
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<span className="px-2 text-xs font-semibold text-foreground">
							{monthNames[month].slice(0, 3)}
						</span>
						<Button
							variant="ghost"
							size="icon"
							onClick={handleNextMonth}
							className="h-8 w-8 hover:bg-background"
							title="Next Month"
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>

			{/* Main Calendar Grid & Day Inspector Split */}
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
				{/* The Calendar Grid: 8 Cols on desktop */}
				<div className="overflow-hidden rounded-2xl border bg-card shadow-sm lg:col-span-8">
					{/* Weekday Row */}
					<div className="grid grid-cols-7 border-b bg-muted/50 text-center text-xs font-bold text-muted-foreground">
						{daysOfWeek.map((day, idx) => (
							<div
								key={day}
								className={`py-3 ${
									idx === 0 || idx === 6 ? 'text-primary' : ''
								}`}
							>
								{day}
							</div>
						))}
					</div>

					{/* Days Matrix */}
					<div className="grid auto-rows-fr grid-cols-7 divide-x divide-y border-b text-xs">
						{allGridDays.map((cell, idx) => {
							const dayEvents = getEventsOnDate(cell.dateStr);
							const isToday = cell.dateStr === todayStr;
							const isSelected = cell.dateStr === selectedDateStr;
							const hasEvents = dayEvents.length > 0;

							return (
								<button
									type="button"
									key={idx}
									onClick={() => setSelectedDateStr(cell.dateStr)}
									className={`group relative flex min-h-[96px] flex-col p-1.5 text-left transition sm:min-h-[110px] sm:p-2.5 ${
										!cell.isCurrentMonth
											? 'bg-slate-50/50 text-slate-400 dark:bg-slate-950/20 dark:text-slate-600'
											: 'bg-card text-foreground hover:bg-accent/40'
									} ${
										isSelected
											? 'z-10 bg-primary/5 ring-2 ring-inset ring-primary'
											: ''
									}`}
								>
									{/* Date number header */}
									<div className="flex w-full items-center justify-between">
										<span
											className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
												isToday
													? 'bg-primary font-bold text-primary-foreground shadow-sm'
													: isSelected
														? 'bg-primary/20 font-bold text-primary'
														: ''
											}`}
										>
											{cell.day}
										</span>

										{hasEvents && (
											<span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
												{dayEvents.length}
											</span>
										)}
									</div>

									{/* Event Chips within Day Cell */}
									<div className="mt-1.5 w-full flex-1 space-y-1 overflow-hidden">
										{dayEvents.slice(0, 2).map((ev) => (
											<div
												key={ev.id}
												onClick={(e) => {
													e.stopPropagation();
													onSelectEvent(ev);
												}}
												className={`w-full truncate rounded px-1.5 py-0.5 text-[10px] font-medium transition hover:scale-[1.02] ${ev.badgeColor.bg} ${ev.badgeColor.text} ${ev.badgeColor.border} border`}
												title={`${ev.title} (${ev.time})`}
											>
												<span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-current" />
												{ev.approximateDate && '~'}
												{ev.title}
											</div>
										))}

										{dayEvents.length > 2 && (
											<div className="text-[10px] font-semibold text-muted-foreground">
												+{dayEvents.length - 2} more
											</div>
										)}
									</div>
								</button>
							);
						})}
					</div>

					{/* Calendar Legend Bar */}
					<div className="flex flex-wrap items-center justify-between gap-3 bg-muted/30 p-3 text-xs text-muted-foreground">
						<div className="flex flex-wrap items-center gap-4">
							<span className="flex items-center gap-1.5">
								<span className="h-2 w-2 rounded-full bg-emerald-500" />
								Confirmed Date
							</span>
							<span className="flex items-center gap-1.5">
								<span className="h-2 w-2 rounded-full bg-amber-500" />~
								Approximate Date
							</span>
							<span className="flex items-center gap-1.5">
								<span className="h-2 w-2 rounded-full bg-cyan-500" />
								Free Entry
							</span>
							<span className="flex items-center gap-1.5">
								<span className="h-2 w-2 rounded-full bg-indigo-500" />
								Registration Fee
							</span>
						</div>
						<p className="text-[11px] italic">
							Click on any date to inspect details
						</p>
					</div>
				</div>

				{/* Selected Day Inspector Panel: 4 Cols on desktop */}
				<div className="flex flex-col space-y-4 lg:col-span-4">
					<div className="rounded-2xl border bg-card p-5 shadow-sm">
						<div className="border-b pb-4">
							<div className="flex items-center justify-between">
								<span className="text-xs font-bold uppercase tracking-wider text-primary">
									Date Inspector
								</span>
								{selectedDateStr === todayStr && (
									<Badge className="border-primary/20 bg-primary/10 text-[10px] text-primary">
										TODAY
									</Badge>
								)}
							</div>
							<h3 className="mt-1 text-xl font-bold tracking-tight text-foreground">
								{new Date(selectedDateStr + 'T00:00:00').toLocaleDateString(
									'en-IN',
									{
										weekday: 'long',
										month: 'long',
										day: 'numeric',
										year: 'numeric',
									}
								)}
							</h3>
						</div>

						{/* Events for this date */}
						<div className="mt-4 space-y-4">
							{selectedDateEvents.length > 0 ? (
								selectedDateEvents.map((ev) => (
									<div
										key={ev.id}
										className="group relative overflow-hidden rounded-xl border bg-slate-50/50 p-4 transition hover:border-primary hover:shadow-md dark:bg-slate-900/30"
									>
										<div className="flex items-start justify-between gap-2">
											<Badge
												className={`${ev.badgeColor.bg} ${ev.badgeColor.text} ${ev.badgeColor.border} border text-[11px] font-semibold`}
											>
												{ev.categoryLabel}
											</Badge>

											{ev.approximateDate ? (
												<Badge
													variant="outline"
													className="border-amber-400 bg-amber-50 text-[10px] text-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
												>
													~ Approx. Date
												</Badge>
											) : (
												<Badge
													variant="outline"
													className="border-emerald-400 bg-emerald-50 text-[10px] text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
												>
													Confirmed
												</Badge>
											)}
										</div>

										<h4 className="mt-2.5 text-base font-bold text-foreground transition group-hover:text-primary">
											{ev.title}
										</h4>
										{ev.bengaliTitle && (
											<p className="font-baloo-da-2 text-xs font-semibold text-muted-foreground">
												{ev.bengaliTitle}
											</p>
										)}

										<div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
											<div className="flex items-center gap-1.5">
												<Clock className="h-3.5 w-3.5 text-primary" />
												<span>{ev.time}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<MapPin className="h-3.5 w-3.5 text-primary" />
												<span className="truncate">{ev.location}</span>
											</div>
											<div className="flex items-center gap-1.5 font-semibold text-foreground">
												<IndianRupee className="h-3.5 w-3.5 text-emerald-600" />
												<span>
													{ev.fee === 0
														? 'Free Entry'
														: `₹${ev.fee} per person`}
												</span>
											</div>
										</div>

										<Button
											size="sm"
											onClick={() => onSelectEvent(ev)}
											className="mt-4 w-full gap-1.5 bg-primary text-xs font-bold text-primary-foreground shadow hover:bg-primary/90"
										>
											View Complete Details & Plan
											<ArrowRight className="h-3.5 w-3.5" />
										</Button>
									</div>
								))
							) : (
								<div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
										<CalendarIcon className="h-6 w-6" />
									</div>
									<h4 className="mt-3 text-sm font-semibold text-foreground">
										No Association Events on this Date
									</h4>
									<p className="mt-1 text-xs text-muted-foreground">
										No public celebrations or meetings are marked for this day.
									</p>
								</div>
							)}
						</div>
					</div>

					{/* Quick Upcoming Events Teaser */}
					<div className="rounded-2xl border bg-card p-5 shadow-sm">
						<div className="flex items-center gap-2">
							<Sparkles className="h-4 w-4 text-primary" />
							<h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
								Signature Annual Events
							</h4>
						</div>

						<div className="mt-3 divide-y text-xs">
							{events.slice(0, 3).map((ev) => (
								<div
									key={ev.id}
									onClick={() => onSelectEvent(ev)}
									className="cursor-pointer py-2.5 transition hover:text-primary"
								>
									<p className="font-semibold">{ev.title}</p>
									<p className="text-[11px] text-muted-foreground">
										{ev.approximateDate ? ev.approximateDateLabel : ev.date} •{' '}
										{ev.fee === 0 ? 'Free' : `₹${ev.fee}`}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
