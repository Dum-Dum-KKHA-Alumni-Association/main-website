'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { getAllEvents } from '@/server/fetch/Events';
import {
	DDKEvent,
	EventCategory,
	DateConfidence,
	PaymentFilter,
	ViewMode,
} from './types';
import { INITIAL_EVENTS } from './data';
import { CalendarMonthView } from './components/CalendarMonthView';
import { DayWiseListView } from './components/DayWiseListView';
import { EventDetailModal } from './components/EventDetailModal';
import {
	Calendar as CalendarIcon,
	ListFilter,
	Search,
	Sparkles,
	CalendarDays,
	HeartPulse,
	Trophy,
	Users,
	HelpCircle,
	X,
	Info,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const CalenderPage = () => {
	// Active View Mode (Day-wise List View vs 30-Day Calendar View)
	const [viewMode, setViewMode] = useState<ViewMode>('calendar');

	// Filters State
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] =
		useState<EventCategory>('all');
	const [selectedConfidence, setSelectedConfidence] =
		useState<DateConfidence>('all');
	const [selectedPayment, setSelectedPayment] = useState<PaymentFilter>('all');

	// Modal State
	const [selectedEvent, setSelectedEvent] = useState<DDKEvent | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Fetch Server Events from API (fallback gracefully if offline)
	const { data: serverEventsData } = useQuery({
		queryKey: ['Events'],
		queryFn: getAllEvents,
		retry: false,
	});

	// Combined Events List
	const allEvents = useMemo(() => {
		const baseEvents = [...INITIAL_EVENTS];

		if (serverEventsData?.data && Array.isArray(serverEventsData.data)) {
			serverEventsData.data.forEach((serverEv: any) => {
				// Avoid duplicate if slug/id already exists
				const exists = baseEvents.some(
					(e) => e.id === serverEv.id || e.slug === serverEv.id
				);
				if (!exists && serverEv.title) {
					baseEvents.push({
						id: serverEv.id || `server-${Date.now()}`,
						slug: serverEv.id || `event-${Date.now()}`,
						title: serverEv.title,
						description: serverEv.description || 'Alumni community event.',
						category: 'reunion',
						categoryLabel: 'Association Event',
						badgeColor: {
							bg: 'bg-primary/10',
							text: 'text-primary',
							border: 'border-primary/20',
							dot: 'bg-primary',
						},
						date: serverEv.date || new Date().toISOString().split('T')[0],
						approximateDate: !serverEv.date,
						approximateDateLabel: serverEv.date ? undefined : 'Tentative Date',
						dateStatus: serverEv.date ? 'confirmed' : 'approximate',
						time: serverEv.time || '10:00 AM - 4:00 PM',
						location: serverEv.location || 'Dum Dum KKHA Campus',
						mode: (serverEv.mode as any) || 'Offline',
						paymentType: 'free',
						fee: 0,
						feeDescription: 'Free Entry for Alumni',
						paymentModes: ['Free Entry'],
						targetAudience: 'All Alumni & Friends',
						highlights: ['Community reunion', 'Networking & fellowship'],
						thumbnail: serverEv.thumbnail || '/assets/ddkkha.jpg',
						coordinator: {
							name: 'DDKKHAAA Secretariat',
							role: 'Organizing Committee',
							phone: '+91 94324 28233',
							whatsapp: '919432428233',
						},
						registrationOpen: true,
						registrationLink: `/events/${serverEv.id}`,
					});
				}
			});
		}

		return baseEvents;
	}, [serverEventsData]);

	// Filtered Events
	const filteredEvents = useMemo(() => {
		return allEvents.filter((ev) => {
			// Search query match
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase();
				const titleMatch = ev.title.toLowerCase().includes(query);
				const bengaliMatch = ev.bengaliTitle?.toLowerCase().includes(query);
				const locationMatch = ev.location.toLowerCase().includes(query);
				const descMatch = ev.description.toLowerCase().includes(query);
				const tagMatch = ev.highlights.some((h) =>
					h.toLowerCase().includes(query)
				);
				if (
					!titleMatch &&
					!bengaliMatch &&
					!locationMatch &&
					!descMatch &&
					!tagMatch
				) {
					return false;
				}
			}

			// Category filter
			if (selectedCategory !== 'all' && ev.category !== selectedCategory) {
				return false;
			}

			// Date Confidence filter
			if (selectedConfidence === 'confirmed' && ev.approximateDate) {
				return false;
			}
			if (selectedConfidence === 'approximate' && !ev.approximateDate) {
				return false;
			}

			// Payment filter
			if (selectedPayment === 'free' && ev.paymentType !== 'free') {
				return false;
			}
			if (selectedPayment === 'paid' && ev.paymentType === 'free') {
				return false;
			}

			return true;
		});
	}, [
		allEvents,
		searchQuery,
		selectedCategory,
		selectedConfidence,
		selectedPayment,
	]);

	// Handle Event Selection
	const handleSelectEvent = (event: DDKEvent) => {
		setSelectedEvent(event);
		setIsModalOpen(true);
	};

	// Reset all filters
	const handleResetFilters = () => {
		setSearchQuery('');
		setSelectedCategory('all');
		setSelectedConfidence('all');
		setSelectedPayment('all');
	};

	const hasActiveFilters =
		searchQuery.trim() !== '' ||
		selectedCategory !== 'all' ||
		selectedConfidence !== 'all' ||
		selectedPayment !== 'all';

	// Category tabs list
	const categories: { id: EventCategory; label: string }[] = [
		{ id: 'all', label: 'All Events' },
		{ id: 'reunion', label: '🎓 Annual Reunion' },
		{ id: 'teachers-day', label: '👨‍🏫 Teachers’ Day' },
		{ id: 'sports-day', label: '🏏 Sports & Cricket' },
		{ id: 'childrens-day', label: '🧸 Children’s Day' },
		{ id: 'health-camp', label: '🩺 Free Health Camps' },
		{ id: 'cultural', label: '💐 Cultural & Bijoya' },
		{ id: 'mentorship', label: '🚀 Youth Mentorship' },
		{ id: 'agm', label: '🏛️ AGM & Foundation Day' },
	];

	return (
		<main className="min-h-screen bg-background font-sora">
			<Navbar />

			{/* Hero Header Section */}
			<section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary/95 to-primary pb-16 pt-28 text-white md:pb-24 md:pt-36">
				{/* Background Grid Pattern */}
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />

				<div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6">
					<div className="flex flex-col items-center text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
							<CalendarDays className="h-4 w-4 text-amber-300" />
							<span>DDKKHAAA Official Calendar & Almanac</span>
						</div>

						<h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
							Annual Event Calendar
						</h1>
						<p className="mt-2 font-baloo-da-2 text-xl font-bold text-amber-300 md:text-2xl">
							দমদম কৃষ্ণ কুমার হিন্দু একাডেমি প্রাক্তনী সমিতি — বার্ষিক অনুষ্ঠান
							সূচি
						</p>

						<p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
							Explore all signature celebrations, Teachers’ Day, Bondhu Cholo
							Sports Meet, Children’s Day, Remergencia Reunion, and Free Health
							Camps with approximate schedules, fee breakdowns, and real-time
							registration details.
						</p>

						{/* Quick Stats Highlights */}
						<div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
								<div className="flex items-center justify-center gap-2 text-amber-300">
									<Sparkles className="h-5 w-5" />
									<span className="text-2xl font-black">
										{allEvents.length}+
									</span>
								</div>
								<p className="mt-1 text-xs font-medium text-slate-300">
									Published Events
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
								<div className="flex items-center justify-center gap-2 text-emerald-300">
									<HeartPulse className="h-5 w-5" />
									<span className="text-2xl font-black">2</span>
								</div>
								<p className="mt-1 text-xs font-medium text-slate-300">
									Free Health Camps
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
								<div className="flex items-center justify-center gap-2 text-cyan-300">
									<Trophy className="h-5 w-5" />
									<span className="text-2xl font-black">Dec `&apos;26</span>
								</div>
								<p className="mt-1 text-xs font-medium text-slate-300">
									Alumni Sports Meet
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
								<div className="flex items-center justify-center gap-2 text-purple-300">
									<Users className="h-5 w-5" />
									<span className="text-2xl font-black">Jan &apos;27</span>
								</div>
								<p className="mt-1 text-xs font-medium text-slate-300">
									Annual Grand Reunion
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Calendar Section */}
			<section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
				{/* Top Controls: View Mode Switcher & Summary */}
				<div className="flex flex-col justify-between gap-4 border-b pb-6 md:flex-row md:items-center">
					<div>
						<h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
							Calendar Explorer
						</h2>
						<p className="text-xs text-muted-foreground sm:text-sm">
							Switch between the 30-day interactive month calendar and the
							day-wise agenda timeline
						</p>
					</div>

					{/* 2 Types of View Switcher */}
					<div className="inline-flex rounded-xl border bg-muted/60 p-1 shadow-sm">
						<button
							type="button"
							onClick={() => setViewMode('calendar')}
							className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition sm:text-sm ${
								viewMode === 'calendar'
									? 'bg-background text-foreground shadow-sm'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							<CalendarIcon className="h-4 w-4 text-primary" />
							<span>30-Day Calendar View</span>
						</button>

						<button
							type="button"
							onClick={() => setViewMode('day-wise')}
							className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition sm:text-sm ${
								viewMode === 'day-wise'
									? 'bg-background text-foreground shadow-sm'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							<ListFilter className="h-4 w-4 text-primary" />
							<span>Day-wise List View</span>
						</button>
					</div>
				</div>

				{/* Search & Multi-Filter Bar */}
				<div className="mt-6 space-y-4 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
					<div className="flex flex-col gap-3 lg:flex-row lg:items-center">
						{/* Search Input */}
						<div className="relative flex-1">
							<Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search events by title, Bengali name, venue (e.g. Teachers Day, Cricket, Reunion)..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 text-xs sm:text-sm"
							/>
							{searchQuery && (
								<button
									onClick={() => setSearchQuery('')}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								>
									<X className="h-4 w-4" />
								</button>
							)}
						</div>

						{/* Quick Dropdown / Filter Toggles */}
						<div className="flex flex-wrap items-center gap-2">
							{/* Date Confidence Filter */}
							<select
								value={selectedConfidence}
								onChange={(e) =>
									setSelectedConfidence(e.target.value as DateConfidence)
								}
								className="h-10 rounded-lg border bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<option value="all">📅 All Dates (Any Confidence)</option>
								<option value="confirmed">✅ Confirmed Dates Only</option>
								<option value="approximate">
									~ Approximate / Tentative Only
								</option>
							</select>

							{/* Payment Filter */}
							<select
								value={selectedPayment}
								onChange={(e) =>
									setSelectedPayment(e.target.value as PaymentFilter)
								}
								className="h-10 rounded-lg border bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<option value="all">💳 All Fee Types</option>
								<option value="free">🎁 100% Free Entry Only</option>
								<option value="paid">🏷️ Paid / Contribution Events</option>
							</select>

							{hasActiveFilters && (
								<Button
									variant="ghost"
									size="sm"
									onClick={handleResetFilters}
									className="h-10 text-xs text-rose-600 hover:bg-rose-50 hover:text-rose-700 dark:hover:bg-rose-950/30"
								>
									<X className="mr-1 h-3.5 w-3.5" />
									Reset
								</Button>
							)}
						</div>
					</div>

					{/* Category Filter Pills (Scrollable on mobile) */}
					<div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1 pt-2">
						{categories.map((cat) => {
							const isSelected = selectedCategory === cat.id;
							return (
								<button
									key={cat.id}
									onClick={() => setSelectedCategory(cat.id)}
									className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
										isSelected
											? 'bg-primary text-primary-foreground shadow-sm'
											: 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
									}`}
								>
									{cat.label}
								</button>
							);
						})}
					</div>

					{/* Active Filter Indicators */}
					{hasActiveFilters && (
						<div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
							<span>Active Filters:</span>
							{searchQuery && (
								<Badge variant="secondary" className="gap-1">
									Search: &apos;{searchQuery}&apos;
									<X
										className="h-3 w-3 cursor-pointer"
										onClick={() => setSearchQuery('')}
									/>
								</Badge>
							)}
							{selectedCategory !== 'all' && (
								<Badge variant="secondary" className="gap-1">
									Category: {selectedCategory}
									<X
										className="h-3 w-3 cursor-pointer"
										onClick={() => setSelectedCategory('all')}
									/>
								</Badge>
							)}
							{selectedConfidence !== 'all' && (
								<Badge variant="secondary" className="gap-1">
									Confidence: {selectedConfidence}
									<X
										className="h-3 w-3 cursor-pointer"
										onClick={() => setSelectedConfidence('all')}
									/>
								</Badge>
							)}
							{selectedPayment !== 'all' && (
								<Badge variant="secondary" className="gap-1">
									Payment: {selectedPayment}
									<X
										className="h-3 w-3 cursor-pointer"
										onClick={() => setSelectedPayment('all')}
									/>
								</Badge>
							)}
							<span className="font-semibold text-foreground">
								({filteredEvents.length}{' '}
								{filteredEvents.length === 1 ? 'event' : 'events'} matching)
							</span>
						</div>
					)}
				</div>

				{/* Notice Banner about Approximate Dates */}
				<div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-900 dark:border-blue-900/40 dark:bg-blue-950/20 dark:text-blue-200">
					<Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
					<div className="leading-relaxed">
						<span className="font-bold">
							Alumni Community Advisory on Dates & Schedules:{' '}
						</span>
						Events marked with an approximate indicator (
						<strong>~ Approx. Date</strong>) reflect the official annual
						calendar window approved by the DDKKHAAA Executive Council. Exact
						dates, match draws, and reporting schedules are finalized 2 to 4
						weeks prior to each event.
					</div>
				</div>

				{/* Active View Container */}
				<div className="mt-8">
					{viewMode === 'calendar' ? (
						<CalendarMonthView
							events={filteredEvents}
							onSelectEvent={handleSelectEvent}
						/>
					) : (
						<DayWiseListView
							events={filteredEvents}
							onSelectEvent={handleSelectEvent}
							onResetFilters={handleResetFilters}
						/>
					)}
				</div>

				{/* Event Details Dialog Modal */}
				<EventDetailModal
					event={selectedEvent}
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>

				{/* FAQ & Guidelines for Alumni */}
				<section className="mt-20 rounded-3xl border bg-card p-6 shadow-sm md:p-10">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
							<HelpCircle className="h-5 w-5" />
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
								Frequently Asked Questions & Guidelines
							</h3>
							<p className="text-xs text-muted-foreground sm:text-sm">
								Important details regarding event participation, fees,
								approximate dates, and batch coordination
							</p>
						</div>
					</div>

					<Accordion type="single" collapsible className="mt-6 w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
								What does an &apos;Approximate Date&apos; mean on the DDKKHAAA
								Calendar?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Annual signature events such as the Grand Alumni Reunion,
								Teachers&apos; Day felicitation, or Bondhu Cholo Sports Meet
								follow seasonal milestones (e.g. the last Sunday of January,
								third weekend of December, etc.). The Executive Council
								publishes the approximate window early so alumni travelling from
								other cities or abroad can plan their leave. The exact date is
								confirmed 3 to 6 weeks in advance.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
								How are payments and registration fees handled?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Events requiring registration fees (e.g. Reunion buffet, sports
								jersey kit, or Bijoya feast) can be paid securely via UPI (ID:{' '}
								<code className="font-mono font-bold text-foreground">
									ddkkhaaa@sbi
								</code>
								), via our online portal, or on-spot at the association counter.
								All contributions are credited to the official Dum Dum Krishna
								Kumar Hindu Academy Alumni Association bank account.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3">
							<AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
								Are community health camps and Children&apos;s Day programs
								free?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Yes! All medical checkup camps, ECG screenings, cataract
								detection drives, blood donation camps, and student welfare
								initiatives are 100% free of charge for students, teachers,
								alumni, and local neighborhood residents. Alumni wishing to
								sponsor medical supplies or children&apos;s book hampers can
								contribute voluntarily.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-4">
							<AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
								Can a specific alumnus batch propose a cricket team or reunion
								adda?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Absolutely! We encourage every batch (from 1950s to recent
								passouts) to field cricket teams, organize batch anniversaries,
								or host career mentorship talks. Reach out to our General
								Secretary or Sports Secretary via the coordinator contact links
								provided in each event card.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</section>

			<Footer />
		</main>
	);
};

export default CalenderPage;
