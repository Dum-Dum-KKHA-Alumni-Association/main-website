'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { resetPasswordSchema } from '@/schemas/AuthenticationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const SignUpPage = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {},
	});

	async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/user/register`,
				values,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = response.data;

			if (data.statusCode === 409) {
				return toast.error(data.message);
			}

			console.log(data);
			toast.success(data.message);
			router.push('/sign-in');
		} catch (error) {
			console.log(error);
			toast.error('Error Happens, please try later!');
		}
	}
	return (
		<div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-xl">
				<div className={'flex flex-col gap-6'}>
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Reset You password </CardTitle>
							<CardDescription>Enter your new Password</CardDescription>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<div className="flex flex-col gap-4">
										<FormField
											control={form.control}
											name="password"
											render={({ field }) => (
												<FormItem>
													<FormLabel>New Password</FormLabel>
													<FormControl>
														<Input
															type="password"
															placeholder="new Password"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="confirmPassword"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Confirm Password</FormLabel>
													<FormControl>
														<Input
															type="password"
															placeholder="new Password"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>

										<Button type="submit" size={'lg'} className="mt-4 w-full">
											Sign In
										</Button>
									</div>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
