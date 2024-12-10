import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';
export const donationFormSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	email: z.coerce.string().email().min(5),
	primaryNumber: z
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
	gender: z.string(),
	occupation: z.string().min(2).max(50),
	presentAddress: z.string().min(2).max(50),
	contactAddress: z.string().min(2).max(50),
	amount: z
		.string()
		.min(1)
		.transform((data) => Number(data) || 0),
});
