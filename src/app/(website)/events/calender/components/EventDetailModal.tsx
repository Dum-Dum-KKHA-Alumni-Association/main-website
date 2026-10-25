'use client';

import React, { useState } from 'react';
import { DDKEvent } from '../types';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
	Calendar,
	Clock,
	MapPin,
	IndianRupee,
	Users,
	Sparkles,
	CheckCircle2,
	Phone,
	Share2,
	Download,
	ExternalLink,
	Copy,
	Check,
	AlertCircle,
	ArrowUpRight,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface EventDetailModalProps {
	event: DDKEvent | null;
	isOpen: boolean;
	onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
	event,
	isOpen,
	onClose,
}) => {
	const [copiedUpi, setCopiedUpi] = useState(false);

	if (!event) return null;

	const handleCopyUpi = () => {
		if (event.upiId) {
			navigator.clipboard.writeText(event.upiId);
			setCopiedUpi(true);
			toast.success('UPI ID copied to clipboard!');
			setTimeout(() => setCopiedUpi(false), 2000);
		}
	};

	const generateGoogleCalendarUrl = () => {
		const [year, month, day] = event.date.split('-');
		const startDateStr = `${year}${month}${day}T090000Z`;
		const endDateStr = `${year}${month}${day}T180000Z`;

		const titleEncoded = encodeURIComponent(event.title);
		const detailsEncoded = encodeURIComponent(
			`${event.description}\n\nVenue: ${event.location}\nFee: ${event.feeDescription}\nCoordinator: ${event.coordinator.name} (${event.coordinator.phone})`
		);
		const locationEncoded = encodeURIComponent(event.location);

		return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titleEncoded}&dates=${startDateStr}/${endDateStr}&details=${detailsEncoded}&location=${locationEncoded}`;
	};

	const downloadIcsFile = () => {
		const [year, month, day] = event.date.split('-');
		const icsContent = [
			'BEGIN:VCALENDAR',
			'VERSION:2.0',
			'PRODID:-//DDKKHAAA//Alumni Event Calendar//EN',
			'CALSCALE:GREGORIAN',
			'METHOD:PUBLISH',
			'BEGIN:VEVENT',
			`UID:${event.id}-${Date.now()}@ddkkhaaa.org`,
			`DTSTAMP:${year}${month}${day}T000000Z`,
			`DTSTART:${year}${month}${day}T040000Z`,
			`DTEND:${year}${month}${day}T140000Z`,
			`SUMMARY:${event.title}`,
			`DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
			`LOCATION:${event.location}`,
			'STATUS:CONFIRMED',
			'END:VEVENT',
			'END:VCALENDAR',
		].join('\r\n');

		const blob = new Blob([icsContent], {
			type: 'text/calendar;charset=utf-8',
		});
		const link = document.createElement('a');
		link.href = window.URL.createObjectURL(blob);
		link.setAttribute('download', `${event.slug}.ics`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success('iCal (.ics) downloaded successfully');
	};

	const handleShareWhatsApp = () => {
		const shareText = encodeURIComponent(
			`*${event.title}* (${event.bengaliTitle || ''})\n` +
				`📅 Date: ${event.approximateDate ? event.approximateDateLabel : event.date}\n` +
				`⏰ Time: ${event.time}\n` +
				`📍 Venue: ${event.location}\n` +
				`💳 Fee: ${event.feeDescription}\n\n` +
				`Organized by: Dum Dum Krishna Kumar Hindu Academy Alumni Association (DDKKHAAA)\n` +
				`Contact: ${event.coordinator.name} (${event.coordinator.phone})`
		);
		window.open(`https://wa.me/?text=${shareText}`, '_blank');
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-h-[92vh] w-[95vw] max-w-3xl overflow-y-auto p-0 font-sora sm:rounded-2xl">
				{/* Modal Header Banner */}
				<div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-900">
					<Image
						src={event.thumbnail || '/assets/ddkkha.jpg'}
						alt={event.title}
						fill
						className="object-cover opacity-60"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

					<div className="absolute bottom-4 left-5 right-5 space-y-2 text-white">
						<div className="flex flex-wrap items-center gap-2">
							<Badge
								className={`${event.badgeColor.bg} ${event.badgeColor.text} ${event.badgeColor.border} border font-medium`}
							>
								{event.categoryLabel}
							</Badge>

							<Badge
								variant="outline"
								className="border-white/30 bg-black/40 text-white backdrop-blur-sm"
							>
								{event.mode} Mode
							</Badge>

							{event.approximateDate ? (
								<Badge className="border-amber-400/40 bg-amber-500/20 text-amber-200">
									Approximate Date
								</Badge>
							) : (
								<Badge className="border-emerald-400/40 bg-emerald-500/20 text-emerald-200">
									Confirmed Date
								</Badge>
							)}

							{event.paymentType === 'free' ? (
								<Badge className="border-cyan-400/40 bg-cyan-500/20 text-cyan-200">
									Free Entry
								</Badge>
							) : (
								<Badge className="border-indigo-400/40 bg-indigo-500/20 text-indigo-200">
									₹{event.fee} / Per Participant
								</Badge>
							)}
						</div>

						<h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
							{event.title}
						</h2>
						{event.bengaliTitle && (
							<p className="font-baloo-da-2 text-lg font-semibold text-amber-300">
								{event.bengaliTitle}
							</p>
						)}
					</div>
				</div>

				{/* Modal Body */}
				<div className="space-y-6 p-6">
					{/* Approximate notice advisory */}
					{event.approximateDate && (
						<div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
							<AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
							<div className="text-sm">
								<p className="font-semibold">
									Tentative / Approximate Schedule Notice
								</p>
								<p className="mt-0.5 text-xs text-amber-800 dark:text-amber-300/90">
									{event.statusNotice ||
										'This event is slated for the indicated window. The exact date, schedule, and reporting time will be finalized by the DDKKHAAA Executive Council 2-3 weeks in advance.'}
								</p>
								{event.approximateDateLabel && (
									<p className="mt-1 font-mono text-xs font-semibold text-amber-950 dark:text-amber-100">
										Published Estimate: {event.approximateDateLabel}
									</p>
								)}
							</div>
						</div>
					)}

					{/* Date, Time & Location Quick Grid */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex items-start gap-3 rounded-xl border bg-slate-50/80 p-3.5 dark:bg-slate-900/40">
							<Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Date & Window
								</p>
								<p className="mt-0.5 text-sm font-semibold">
									{event.approximateDate
										? event.approximateDateLabel || event.date
										: new Date(event.date).toLocaleDateString('en-IN', {
												weekday: 'short',
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
								</p>
								{event.endDate && (
									<p className="text-xs text-muted-foreground">
										Through:{' '}
										{new Date(event.endDate).toLocaleDateString('en-IN', {
											month: 'short',
											day: 'numeric',
										})}
									</p>
								)}
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-xl border bg-slate-50/80 p-3.5 dark:bg-slate-900/40">
							<Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Scheduled Time
								</p>
								<p className="mt-0.5 text-sm font-semibold">{event.time}</p>
								{event.timeNote && (
									<p className="text-xs text-muted-foreground">
										{event.timeNote}
									</p>
								)}
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-xl border bg-slate-50/80 p-3.5 dark:bg-slate-900/40 sm:col-span-2 lg:col-span-1">
							<MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Venue Location
								</p>
								<p className="mt-0.5 text-sm font-semibold">{event.location}</p>
								{event.venueLandmark && (
									<p className="text-xs text-muted-foreground">
										Landmark: {event.venueLandmark}
									</p>
								)}
								{event.mapLink && (
									<a
										href={event.mapLink}
										target="_blank"
										rel="noreferrer"
										className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
									>
										Open in Google Maps <ExternalLink className="h-3 w-3" />
									</a>
								)}
							</div>
						</div>
					</div>

					{/* Description */}
					<div className="space-y-2">
						<h3 className="text-base font-bold text-foreground">
							About this Event & Purpose
						</h3>
						<p className="text-sm leading-relaxed text-muted-foreground">
							{event.description}
						</p>
					</div>

					{/* Key Program Highlights */}
					{event.highlights && event.highlights.length > 0 && (
						<div className="space-y-3 rounded-xl border bg-primary/5 p-4 dark:bg-primary/10">
							<div className="flex items-center gap-2">
								<Sparkles className="h-5 w-5 text-primary" />
								<h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
									Key Event Highlights & Agenda
								</h3>
							</div>
							<ul className="grid grid-cols-1 gap-2 text-sm text-foreground sm:grid-cols-2">
								{event.highlights.map((highlight, index) => (
									<li key={index} className="flex items-start gap-2">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										<span className="text-xs sm:text-sm">{highlight}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					<Separator />

					{/* Payment, Inclusions & Contributions Section */}
					<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/30">
						<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<IndianRupee className="h-5 w-5" />
								</div>
								<div>
									<h4 className="text-base font-bold text-foreground">
										Registration Fee & Payment Details
									</h4>
									<p className="text-xs text-muted-foreground">
										{event.paymentType === 'free'
											? 'Free Community Event — No entry charge required'
											: 'Standard Contribution / Registration Fee'}
									</p>
								</div>
							</div>

							<div className="text-left sm:text-right">
								<span className="text-2xl font-black text-primary">
									{event.fee === 0 ? 'FREE' : `₹${event.fee}`}
								</span>
								{event.fee > 0 && (
									<span className="text-xs text-muted-foreground">
										{' '}
										/ attendee
									</span>
								)}
							</div>
						</div>

						<p className="mt-3 text-xs font-medium leading-normal text-foreground sm:text-sm">
							{event.feeDescription}
						</p>

						{/* Inclusions */}
						{event.inclusions && event.inclusions.length > 0 && (
							<div className="mt-4 space-y-2 border-t pt-3">
								<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
									What is included with your registration:
								</p>
								<div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
									{event.inclusions.map((item, idx) => (
										<div
											key={idx}
											className="flex items-center gap-2 text-xs text-foreground"
										>
											<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
											<span>{item}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Payment Modes & UPI */}
						<div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-background p-3 text-xs">
							<div className="space-y-1">
								<span className="font-semibold text-muted-foreground">
									Accepted Modes:{' '}
								</span>
								<span className="font-medium text-foreground">
									{event.paymentModes.join(' • ')}
								</span>
							</div>

							{event.upiId && (
								<div className="flex items-center gap-2">
									<span className="font-semibold text-muted-foreground">
										UPI:
									</span>
									<code className="rounded bg-slate-100 px-2 py-0.5 font-mono font-bold text-foreground dark:bg-slate-800">
										{event.upiId}
									</code>
									<Button
										variant="ghost"
										size="icon"
										className="h-7 w-7 text-primary hover:bg-primary/10"
										onClick={handleCopyUpi}
										title="Copy UPI ID"
									>
										{copiedUpi ? (
											<Check className="h-3.5 w-3.5 text-emerald-600" />
										) : (
											<Copy className="h-3.5 w-3.5" />
										)}
									</Button>
								</div>
							)}
						</div>
					</div>

					{/* Coordinator & Contact */}
					<div className="flex flex-col items-start justify-between gap-4 rounded-xl border p-4 sm:flex-row sm:items-center">
						<div className="flex items-center gap-3">
							<div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white shadow-sm">
								{event.coordinator.name.charAt(0)}
							</div>
							<div>
								<div className="flex items-center gap-2">
									<h4 className="text-sm font-bold">
										{event.coordinator.name}
									</h4>
									{event.coordinator.batch && (
										<Badge variant="secondary" className="text-[10px]">
											{event.coordinator.batch}
										</Badge>
									)}
								</div>
								<p className="text-xs text-muted-foreground">
									{event.coordinator.role}
								</p>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-2">
							<a
								href={`tel:${event.coordinator.phone}`}
								className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
							>
								<Phone className="h-3.5 w-3.5 text-primary" />
								<span>{event.coordinator.phone}</span>
							</a>

							<a
								href={`https://wa.me/${event.coordinator.whatsapp}?text=${encodeURIComponent(
									`Hello, I would like to inquire about the event "${event.title}"`
								)}`}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-green-700"
							>
								<FaWhatsapp className="h-4 w-4" />
								<span>WhatsApp</span>
							</a>
						</div>
					</div>

					{/* Target Audience & Expected Turnout */}
					<div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
						<span className="flex items-center gap-1.5">
							<Users className="h-4 w-4 text-primary" />
							Target Audience:{' '}
							<strong className="text-foreground">
								{event.targetAudience}
							</strong>
						</span>
						{event.expectedAttendees && (
							<span>
								Expected Turnout:{' '}
								<strong className="text-foreground">
									{event.expectedAttendees}
								</strong>
							</span>
						)}
					</div>

					{/* Action Buttons & Calendar Sync */}
					<div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
						<div className="flex flex-wrap gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() =>
									window.open(generateGoogleCalendarUrl(), '_blank')
								}
								className="gap-1.5 text-xs font-medium"
							>
								<Calendar className="h-3.5 w-3.5 text-primary" />
								Google Calendar
							</Button>

							<Button
								variant="outline"
								size="sm"
								onClick={downloadIcsFile}
								className="gap-1.5 text-xs font-medium"
							>
								<Download className="h-3.5 w-3.5" />
								Download .ICS
							</Button>

							<Button
								variant="outline"
								size="sm"
								onClick={handleShareWhatsApp}
								className="gap-1.5 text-xs font-medium text-green-700 hover:text-green-800"
							>
								<Share2 className="h-3.5 w-3.5" />
								Share Event
							</Button>
						</div>

						{event.registrationOpen ? (
							<Button
								asChild
								className="bg-primary text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90"
							>
								<Link href={event.registrationLink || `/events/${event.slug}`}>
									Register Now <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
								</Link>
							</Button>
						) : (
							<Button
								disabled
								variant="secondary"
								className="cursor-not-allowed text-xs font-medium text-muted-foreground"
							>
								Registration Not Open Yet
							</Button>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
