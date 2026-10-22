export type EventCategory =
	| 'all'
	| 'reunion'
	| 'teachers-day'
	| 'sports-day'
	| 'childrens-day'
	| 'health-camp'
	| 'cultural'
	| 'mentorship'
	| 'agm';

export type DateConfidence = 'all' | 'confirmed' | 'approximate';

export type PaymentFilter = 'all' | 'free' | 'paid';

export type ViewMode = 'calendar' | 'day-wise';

export interface EventCoordinator {
	name: string;
	role: string;
	batch?: string;
	phone: string;
	whatsapp: string;
}

export interface DDKEvent {
	id: string;
	slug: string;
	title: string;
	bengaliTitle?: string;
	description: string;
	category: EventCategory;
	categoryLabel: string;
	badgeColor: {
		bg: string;
		text: string;
		border: string;
		dot: string;
	};

	// Date and Confidence
	date: string; // ISO format: YYYY-MM-DD
	endDate?: string; // Optional for multi-day events
	approximateDate: boolean; // true if date is tentative/approximate
	approximateDateLabel?: string; // e.g. "Approx. 1st Week of September 2026"
	dateStatus: 'confirmed' | 'approximate' | 'tentative';
	statusNotice?: string; // Guidance note for alumni regarding confirmation timeline

	// Time details
	time: string; // e.g. "10:00 AM - 5:00 PM"
	isTentativeTime?: boolean;
	timeNote?: string;

	// Venue
	location: string;
	venueLandmark?: string;
	mapLink?: string;
	mode: 'Offline' | 'Online' | 'Hybrid';

	// Payment / Fees
	paymentType: 'free' | 'paid' | 'voluntary';
	fee: number; // 0 if free, or amount in INR
	feeDescription: string;
	paymentModes: string[];
	upiId?: string;
	inclusions?: string[];

	// Participation
	targetAudience: string;
	expectedAttendees?: string;
	highlights: string[];
	thumbnail?: string;
	bannerImage?: string;

	// Coordinator & Registration
	coordinator: EventCoordinator;
	registrationOpen: boolean;
	registrationLink?: string;
}
