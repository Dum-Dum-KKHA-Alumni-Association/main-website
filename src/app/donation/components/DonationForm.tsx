'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { donationFormSchema } from '@/schemas/DonationFromSchema';
import Image from 'next/image';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { generateYearArray } from '@/lib/generateYearArray';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const DonationForm = () => {
	const form = useForm<z.infer<typeof donationFormSchema>>({
		resolver: zodResolver(donationFormSchema),
		defaultValues: {
			name: '',
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof donationFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Card className="mx-auto w-full max-w-xl font-sora shadow-lg">
			<CardHeader className="px-0 pt-0">
				<Image
					src={'/ddkkha.jpg'}
					width={1000}
					height={0}
					className="aspect-[16/7] w-full rounded-t-xl object-fill"
					alt={'Donation'}
				/>
				<section className="space-y-5 p-6">
					<CardTitle>
						<h4>Grand Reunion of DDKKHA Alumnies</h4>
					</CardTitle>
					<CardDescription>
						This is donation for upcomming 19 january 2025. A grand reunion of
						all ex-students and teachers
					</CardDescription>
				</section>
			</CardHeader>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<CardContent className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input placeholder="Tejodeep Mitra Roy" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="example@email.com"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="mobile"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											{...field}
											international
											defaultCountry="IN"
											id="phone"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
										/>
									</FormControl>
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
										<PhoneInput
											{...field}
											international
											defaultCountry="IN"
											id="phone"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
							<FormField
								control={form.control}
								name="madyamikYear"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Madyamik Year</FormLabel>
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
												{generateYearArray(1964).map((year) => (
													<SelectItem key={year} value={year.toString()}>
														{year}
													</SelectItem>
												))}
												<SelectItem value={'NA'}>NA</SelectItem>
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
										<FormLabel>Higher Secondary Year</FormLabel>
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
												{generateYearArray(1964).map((year) => (
													<SelectItem key={year} value={year.toString()}>
														{year}
													</SelectItem>
												))}
												<SelectItem value={'NA'}>NA</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="dateOfBirth"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Date of birth</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={'outline'}
													className={cn(
														'w-full pl-3 text-left font-normal',
														!field.value && 'text-muted-foreground'
													)}
												>
													{field.value ? (
														format(field.value, 'PPP')
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date('1900-01-01')
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>
										Your date of birth is used to calculate your age.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="presentAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Present Address</FormLabel>
									<FormControl>
										<Input
											placeholder="000,dum dum cantonment, Kolkata -700065"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="contactAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Contact Address</FormLabel>
									<FormControl>
										<Input
											placeholder="000,dum dum cantonment, Kolkata -700065"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="occupation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Occupation</FormLabel>
									<FormControl>
										<Input placeholder="ex: Goverment Employee" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full p-7 text-xl">
							Donate
						</Button>
					</CardContent>
				</form>
			</Form>
		</Card>
	);
};

export default DonationForm;
