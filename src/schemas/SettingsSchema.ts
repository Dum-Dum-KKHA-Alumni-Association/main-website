import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const profileFormSchema = z.object({
	fullName: z.string().min(2).max(50),
	madyamikYear: z.string().max(4),
	higherSecondaryYear: z.string().max(4),
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
	permanentAddress: z.string().min(2).max(50),
	deliveryAddress: z.string().min(2).max(50),
	dateOfBirth: z.date({
		required_error: 'A date of birth is required.',
	}),
	bloodGroup: z.string({
		required_error: 'A date of birth is required.',
	}),
	occupation: z.string().min(2).max(50),
	linkedin: z
		.string()
		.url()
		.refine((url) => url.startsWith('https://www.linkedin.com/'), {
			message: 'Please enter a LinkedIn Profile valid URL.',
		})
		.optional()
		.or(z.literal('')),
	instagram: z
		.string()
		.url()
		.refine((url) => url.startsWith('https://www.instagram.com/'), {
			message: 'Please enter a Instagram Profile valid URL.',
		})
		.optional()
		.or(z.literal('')),
	twitter: z
		.string()
		.url()
		.refine((url) => url.startsWith('https://x.com/'), {
			message: 'Please enter a Twitter Profile valid URL.',
		})
		.optional()
		.or(z.literal('')),
	facebook: z
		.string()
		.url()
		.refine((url) => url.startsWith('https://www.facebook.com/profile.php'), {
			message: 'Please enter a Facebook Profile valid URL.',
		})
		.optional()
		.or(z.literal('')),
});

export const accountSchema = z.object({
	membershipId: z.string().max(4),
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
});
