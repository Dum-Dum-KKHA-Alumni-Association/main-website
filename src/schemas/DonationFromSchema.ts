import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';
export const donationFormSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.coerce.string().email().min(5),
	mobile: z
		.string({
			required_error: 'Phone number is required',
		})
		.refine((value) => isValidPhoneNumber(value), {
			message: 'Invalid phone number',
		}),
	whatsappNumber: z
		.string({
			required_error: 'Phone number is required',
		})
		.refine((value) => isValidPhoneNumber(value), {
			message: 'Invalid phone number',
		}),
	madyamikYear: z.string().max(4),
	higherSecondaryYear: z.string().max(4),
	dateOfBirth: z.date({
		required_error: 'A date of birth is required.',
	}),
	occupation: z.string().min(2).max(50),
	presentAddress: z.string().min(2).max(50),
	contactAddress: z.string().min(2).max(50),
});
