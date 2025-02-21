import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const loginSchema = z.object({
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
});
export const signupSchema = z.object({
	fullName: z.string().min(2).max(50),
	madyamikYear: z.string().max(4),
	higherSecondaryYear: z.string().max(4),
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

export const forgetPasswordSchema = z.object({
	email: z.coerce.string().email().min(5),
});

export const resetPasswordSchema = z.object({
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

export const onboardSchema = z.object({
	// fullName: z.string().min(2).max(50),
	madyamikYear: z.string().max(4),
	higherSecondaryYear: z.string().max(4),
	dateOfBirth: z.date({
		required_error: 'A date of birth is required.',
	}),
	occupation: z.string().min(2).max(50),
	permanentAddress: z.string().min(2).max(50),
	sameAddress: z.boolean().default(false).optional(),
	deliveryAddress: z.string().min(2).max(50),
	primaryNumber: z
		.string({
			required_error: 'Phone number is required',
		})
		.refine((value) => isValidPhoneNumber(value), {
			message: 'Invalid phone number',
		}),
	sameNumber: z.boolean().default(false).optional(),
	whatsappNumber: z
		.string({
			required_error: 'Phone number is required',
		})
		.refine((value) => isValidPhoneNumber(value), {
			message: 'Invalid phone number',
		}),
});
