import { z } from 'zod';

export const bookingPreferenceSchema = z.object({
	merchandise: z.string({
		required_error: 'Merchandise field is required',
	}),

	foodPreference: z.string({
		required_error: 'Food Preference field is required',
	}),
	ticketQuantity: z.coerce.number(),
});
