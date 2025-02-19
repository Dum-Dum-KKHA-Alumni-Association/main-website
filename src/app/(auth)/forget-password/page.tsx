'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { forgetPasswordSchema } from '@/schemas/AuthenticationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

export default function ForgetPasswordPage() {
	const [messageSend, setMessageSend] = useState<boolean>(false);

	const form = useForm<z.infer<typeof forgetPasswordSchema>>({
		resolver: zodResolver(forgetPasswordSchema),
		defaultValues: {},
	});

	async function onSubmit(values: z.infer<typeof forgetPasswordSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/user/forget-password`,
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

			setMessageSend(true);
		} catch (error) {
			console.log(error);
			toast.error('Error Happens, please try later!');
		}
	}
	return (
		<div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-xl">
				<div className={'flex flex-col gap-6'}>
					{messageSend ? (
						<Card>
							<CardHeader className="flex items-center">
								<Image
									src={'/icons/checked.png'}
									width={50}
									height={50}
									alt="Checked Icon"
								/>
							</CardHeader>
							<CardContent className="flex items-center justify-center">
								<h4>Check your Email </h4>
							</CardContent>
							<CardFooter className="flex items-center justify-center">
								Message was successfully send your email address.
							</CardFooter>
						</Card>
					) : (
						<Card>
							<CardHeader>
								<CardTitle className="text-2xl">Forget Password</CardTitle>
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
												name="email"
												render={({ field }) => (
													<FormItem>
														{/* <FormLabel>Email</FormLabel> */}
														<FormControl>
															<Input
																type={'email'}
																placeholder="Enter your Email"
																{...field}
															/>
														</FormControl>

														<FormMessage />
													</FormItem>
												)}
											/>
											<Button type="submit" size={'lg'} className="w-full">
												Send
											</Button>
										</div>
									</form>
								</Form>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}
