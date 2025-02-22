'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { Separator } from '@/components/ui/separator';
import { bookingPreferenceSchema } from '@/schemas/TicketSchema';
import { useCheckoutStore } from '@/store/checkoutStore';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const BuyTicketPage = () => {
	// const slug = (await params).slug;
	const addTicket = useCheckoutStore((state) => state.addTicket);
	const addItem = useCheckoutStore((state) => state.addItem);
	const router = useRouter();

	const form = useForm<z.infer<typeof bookingPreferenceSchema>>({
		resolver: zodResolver(bookingPreferenceSchema),
		defaultValues: {},
	});

	async function onSubmit(values: z.infer<typeof bookingPreferenceSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		try {
			addTicket({
				eventName: 'Remergencia',
				quantity: values.ticketQuantity,
				price: 323,
			});
			if (values.foodPreference === 'VEG') {
				addItem({
					itemName: 'VEG FOOD',
					quantity: values.ticketQuantity,
					price: 200,
				});
			} else {
				addItem({
					itemName: 'NONVEG FOOD',
					quantity: values.ticketQuantity,
					price: 200,
				});
			}
			if (values.merchandise) {
				addItem({
					itemName: `T-shirt ${values.merchandise}`,
					quantity: values.ticketQuantity,
					price: 200,
				});
			}

			router.push('/checkout/Remergencia');

			// const response = await axios.post(
			// 	`${process.env.NEXT_PUBLIC_API_URL}/event/booking`,
			// 	values,
			// 	{
			// 		withCredentials: true,
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 	}
			// );
			// const data = response.data;
			// if (data.statusCode === 409) {
			// 	return toast.error(data.message);
			// }
			// console.log(data);
			// toast.success(data.message);
		} catch (error) {
			console.log(error);
			toast.error('Error Happens, please try later!');
		}
	}
	return (
		<section className="w-full">
			<section className="w-full bg-white">
				<section className="mx-auto flex h-auto w-full max-w-6xl flex-1 flex-col px-5 md:px-10">
					<section className="mt-10 w-full">
						<section className="flex flex-col">
							<div className="w-full text-4xl font-medium">
								<span>Remergengia</span>
							</div>
						</section>
					</section>
					<section className="mt-4">
						<Badge>Event</Badge>
					</section>
				</section>
				<Separator className="my-6" />
			</section>
			<section className="mx-auto flex h-auto w-full max-w-6xl flex-1 flex-col px-5 md:px-10">
				<Card>
					<CardHeader>
						<CardTitle>Select Preferences</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<div className="flex flex-col gap-6">
									<FormField
										control={form.control}
										name="merchandise"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> T-shirt Size
												</FormLabel>

												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a size" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value={'S'}>S</SelectItem>
														<SelectItem value={'M'}>M</SelectItem>
														<SelectItem value={'L'}>L</SelectItem>
														<SelectItem value={'XL'}>XL</SelectItem>
														<SelectItem value={'XXL'}>XXL</SelectItem>
													</SelectContent>
												</Select>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="foodPreference"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Food
													Preference
												</FormLabel>

												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a Preference" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value={'VEG'}>Veg</SelectItem>
														<SelectItem value={'NONVEG'}>Non Veg</SelectItem>
													</SelectContent>
												</Select>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="ticketQuantity"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> How many
													tickets
												</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={String(field.value)}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select no of tickets" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value={'1'}>1</SelectItem>
														<SelectItem value={'2'}>2</SelectItem>
														<SelectItem value={'3'}>3</SelectItem>
														<SelectItem value={'4'}>4</SelectItem>
														<SelectItem value={'5'}>5</SelectItem>
														<SelectItem value={'6'}>6</SelectItem>
														<SelectItem value={'7'}>7</SelectItem>
														<SelectItem value={'8'}>8</SelectItem>
														<SelectItem value={'9'}>9</SelectItem>
														<SelectItem value={'10'}>10</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button type="submit" size={'lg'} className="w-full">
										Book Now
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</section>
		</section>
	);
};

export default BuyTicketPage;
