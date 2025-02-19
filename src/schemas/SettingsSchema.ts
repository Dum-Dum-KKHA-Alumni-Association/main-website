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
	linkedinUrl: z
		.string()
		.url({ message: 'Please enter a valid URL.' })
		.optional(),
	instagramUrl: z
		.string()
		.url({ message: 'Please enter a valid URL.' })
		.optional(),
	twitterUrl: z
		.string()
		.url({ message: 'Please enter a valid URL.' })
		.optional(),
	facebookUrl: z
		.string()
		.url({ message: 'Please enter a valid URL.' })
		.optional(),
});

export const accountSchema = z.object({
	fullName: z.string().min(2).max(50),
	memberId: z.string().max(4),
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
});
