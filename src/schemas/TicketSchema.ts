import { z } from 'zod';

export const bookingPreferenceSchema = z.object({
	merchandise: z.string().min(1, 'Merchandise field is required'),

	foodPreference: z.string().min(1, 'Food Preference field is required'),
	ticketQuantity: z.number(),
});

export type BookingPreferenceInput = z.input<typeof bookingPreferenceSchema>;
