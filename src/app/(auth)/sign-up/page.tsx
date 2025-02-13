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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { generateYearArray } from '@/lib/generateYearArray';

import { signupSchema } from '@/schemas/AuthenticationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const SignUpPage = () => {
	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {},
	});
	const { watch } = form;

	const madyamikYear = watch('madyamikYear');

	async function onSubmit(values: z.infer<typeof signupSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/user/login`,
				values,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = response.data;
			console.log(data);
			toast.success('Register Successful');
		} catch (error) {
			console.log(error);
			toast.error('Error Happens, please try later!');
		}
	}
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-xl">
				<div className={'flex flex-col gap-6'}>
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Register yourself</CardTitle>
							<CardDescription>
								Enter your email below to login to your account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<div className="flex flex-col gap-6">
										<FormField
											control={form.control}
											name="fullName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Full Name</FormLabel>
													<FormControl>
														<Input placeholder="shadcn" {...field} />
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<div className={'grid grid-cols-2 gap-2'}>
											<FormField
												control={form.control}
												name="madyamikYear"
												render={({ field }) => (
													<FormItem>
														<FormLabel>
															<span className="text-red-600">*</span> Madyamik
															Year
														</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<FormControl>
																<SelectTrigger>
																	<SelectValue placeholder="Select a year" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value={'NA'}>NA</SelectItem>
																{generateYearArray(1949).map((year) => (
																	<SelectItem
																		key={year}
																		value={year.toString()}
																	>
																		{year}
																	</SelectItem>
																))}
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="higherSecondaryYear"
												render={({ field }) => (
													<FormItem>
														<FormLabel>
															<span className="text-red-600">*</span>{' '}
															H.S/Matriculation Year
														</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<FormControl>
																<SelectTrigger>
																	<SelectValue placeholder="Select a year" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value={'NA'}>NA</SelectItem>
																{generateYearArray(
																	madyamikYear !== 'NA'
																		? parseInt(madyamikYear) + 2
																		: 1950
																).map((year) => (
																	<SelectItem
																		key={year}
																		value={year.toString()}
																	>
																		{year}
																	</SelectItem>
																))}
															</SelectContent>
														</Select>

														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<Input
															type={'email'}
															placeholder="example@gmail.com"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="password"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Password</FormLabel>
													<FormControl>
														<Input
															type={'password'}
															placeholder="shadcn"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>

										<Button type="submit" className="w-full">
											Login
										</Button>
										{/* <Button variant="outline" className="w-full">
											Login with Google
										</Button> */}
									</div>
									<div className="mt-4 text-center text-sm">
										have an account?{' '}
										<Link
											href="/sign-in"
											className="underline underline-offset-4"
										>
											Sign in
										</Link>
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
