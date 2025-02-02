import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
});
export const signupFormSchema = z.object({
	fullName: z.string().min(2).max(50),
	madyamikYear: z.string().max(4),
	higherSecondaryYear: z.string().max(4),
	email: z.coerce.string().email().min(5),
	password: z.string().min(8),
});
