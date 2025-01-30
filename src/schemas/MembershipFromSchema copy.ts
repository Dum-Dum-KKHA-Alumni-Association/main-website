import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';
export const membershipFormSchema = z
	.object({
		fullName: z.string().min(2).max(50),
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
		merchandise: z.string({
			required_error: 'Merchandise field is required',
		}),
		size: z.string({
			required_error: 'Merchandise field is required',
		}),
		sleeve: z.string({
			required_error: 'Merchandise field is required',
		}),
		foodPreference: z.string({
			required_error: 'Food Preference field is required',
		}),
		attend: z.string({
			required_error: 'Program Attend field is required',
		}),
		noOfFamily: z.string({
			required_error: 'Program Attend field is required',
		}),
		madyamikYear: z.string().max(4),
		higherSecondaryYear: z.string().max(4),
		dateOfBirth: z.date({
			required_error: 'A date of birth is required.',
		}),
		bloodGroup: z.string({
			required_error: 'A date of birth is required.',
		}),
		occupation: z.string().min(2).max(50),
		permanentAddress: z.string().min(2).max(50),
		deliveryAddress: z.string().min(2).max(50),
		amount: z
			.string()
			.min(1)
			.transform((data) => Number(data) || 0),
		paymentMethod: z.string().min(2),
	})
	.refine(
		(data) => {
			const { madyamikYear, higherSecondaryYear } = data;

			if (madyamikYear === 'NA' && higherSecondaryYear === 'NA') return false;

			return true;
		},
		{
			message:
				"Invalid year combination. If First Year is 'NA', Second Year must be one of the allowed years. Both fields cannot be 'NA'.",
			path: ['higherSecondaryYear'], // Attach error to the secondYear field
		}
	);
