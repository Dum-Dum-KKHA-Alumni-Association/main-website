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
	FormDescription,
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
import { Separator } from '@/components/ui/separator';
import { generateYearArray } from '@/lib/generateYearArray';
import { getToken } from '@/lib/getAccessToken';
import { profileFormSchema } from '@/schemas/SettingsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { useForm } from 'react-hook-form';

import { z } from 'zod';

export default function SettingsProfilePage() {
	const fetchUserData = async () => {
		const token = await getToken();
		const response = await axios(
			`${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
			{
				headers: {
					Authorization: ` Bearer ${token}`,
				},
			}
		);
		const data = response.data;

		return data.data.user;
	};

	// 1. Define your form.
	const form = useForm<z.infer<typeof profileFormSchema>>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: fetchUserData,
	});

	const { watch, getValues } = form;
	console.log(getValues());

	const madyamikYear = watch('madyamikYear');

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof profileFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div className="relative space-y-6 border-red-500 bg-white p-10 pb-16 font-baloo-da-2 md:block">
			{/* <div className="mx-auto flex w-full max-w-3xl flex-col space-y-8 border lg:flex-row lg:space-x-12 lg:space-y-0"></div> */}
			<Card className="mx-auto w-full max-w-3xl border-none shadow-none">
				<CardHeader>
					<CardTitle className={'text-3xl font-semibold'}>Profile</CardTitle>
					<CardDescription>Manage your Hashnode profile</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-6" />
					<section>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8"
							>
								<Card>
									<CardHeader></CardHeader>
								</Card>
								<FormField
									control={form.control}
									name="fullName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Full Name</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>
											<FormDescription>
												This is your public display name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="madyamikYear"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<span className="text-red-600">*</span> Madyamik Year
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
														<SelectItem key={year} value={year.toString()}>
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
														<SelectItem key={year} value={year.toString()}>
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
									name="primaryNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Primary Number</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>
											<FormDescription>
												This is your public display name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="whatsappNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Whatsapp Number</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>
											<FormDescription>
												This is your public display name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="permanentAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Permanent Address</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>
											<FormDescription>
												This is your public display name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="deliveryAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Delivery Address</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>
											<FormDescription>
												This is your public display name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div>
									<section className="flex flex-col space-y-2 py-6">
										<div className="text-3xl font-semibold leading-none tracking-tight">
											Social profiles
										</div>
										<p className="text-sm text-muted-foreground">
											The social links you add here will show up on your
											profile.
										</p>
									</section>
									<Separator />
									<section className="space-y-6 py-6">
										<FormField
											control={form.control}
											name="twitterUrl"
											render={({ field }) => (
												<FormItem>
													<FormLabel>X/Twitter</FormLabel>
													<FormControl>
														<Input
															placeholder="https://twitter.com/username"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="linkedinUrl"
											render={({ field }) => (
												<FormItem>
													<FormLabel>LinkedIn</FormLabel>
													<FormControl>
														<Input
															placeholder="https://www.linkdein.com/in/username"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="instagramUrl"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Instagram</FormLabel>
													<FormControl>
														<Input
															placeholder="https://instagram.com/username"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="facebookUrl"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Facebook</FormLabel>
													<FormControl>
														<Input
															placeholder="https://facebook.com/username"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</section>
								</div>
								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</section>
				</CardContent>
			</Card>
		</div>
	);
}
