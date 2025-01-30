'use client';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, CalendarIcon } from 'lucide-react';
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
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { motion } from 'motion/react';
import QRCode from 'react-qr-code';
import { membershipFormSchema } from '@/schemas/MembershipFromSchema copy';

// import { DatePicker } from '@/components/ui/date-picker';

interface DonationFormProps {
	donationPageId: string;
	title: string;
	description: string;
	thumbnail: string;
}

const DonationForm: FC<DonationFormProps> = ({
	donationPageId,
	title,
	description,
	thumbnail,
}) => {
	const [previousStep, setPreviousStep] = useState<number>(0);
	const [currentStep, setCurrentStep] = useState<number>(2);
	const router = useRouter();
	const delta = currentStep - previousStep;

	const steps = [
		{
			id: 'Step 1',
			name: 'Amount & Personal Info',
			fields: [
				'amount',
				'firstName',
				'lastName',
				'email',
				'dateOfBirth',
				'primaryNumber',
				'whatsappNumber',
			],
		},
		{
			id: 'Step 2',
			name: 'School Details',
			fields: ['madyamikYear', 'higherSecondaryYear'],
		},
		{
			id: 'Step 3',
			name: 'Address',
			fields: ['occupation', 'presentAddress', 'contactAddress'],
		},
		{
			id: 'Step 4',
			name: 'Payment Method',
			fields: ['PhonePe', 'UPI'],
		},
	];

	type DonationFormTypes = z.infer<typeof membershipFormSchema>;
	const form = useForm<DonationFormTypes>({
		resolver: zodResolver(membershipFormSchema),
	});
	const {
		formState: { isValid },
		reset,
		getValues,
		trigger,
	} = form;

	// 2. Define a submit handler.
	async function onSubmit(values: DonationFormTypes) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log('FormValues----->', values);

		const donationValues = {
			donationPageId,
			fullName: values.fullName,

			email: values.email,
			primaryNumber: values.primaryNumber,
			whatsappNumber: values.whatsappNumber,
			madyamikYear: values.madyamikYear,
			higherSecondaryYear: values.higherSecondaryYear,
			dateOfBirth: values.dateOfBirth,
			occupation: values.occupation,
			presentAddress: values.permanentAddress,
			contactAddress: values.deliveryAddress,
			amount: values.amount,
		};

		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/donation`,
				donationValues,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			console.log(data);

			if (data.data && data.data.paymentPageUrl) {
				router.push(data.data.paymentPageUrl);
			}
			reset();
		} catch (error) {
			console.log(error);
			toast.error('Something error Happening');
		}
	}

	const prevStep = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((state) => state - 1);
		}
	};

	type FieldName = keyof DonationFormTypes;

	const nextStep = async () => {
		const fields = steps[currentStep].fields;

		const output = await trigger(fields as FieldName[], { shouldFocus: true });

		if (!output) return;
		if (currentStep < steps.length - 1) {
			setCurrentStep((state) => state + 1);
		}
	};
	return (
		<>
			<Card className="mx-auto w-full max-w-xl font-sora shadow-lg">
				<CardHeader className="px-0 pt-0">
					{thumbnail && (
						<Image
							src={thumbnail}
							width={1000}
							height={0}
							className="aspect-[16/7] w-full rounded-t-xl object-fill"
							alt={'Donation'}
						/>
					)}
					<section className="space-y-5 p-6 pb-0">
						<CardTitle>
							<h4>{title}</h4>
						</CardTitle>
						<CardDescription>{description}</CardDescription>
						<section className="flex w-full justify-end">
							{' '}
							<span>
								{' '}
								Step {currentStep + 1} / {steps.length}
							</span>
						</section>
						<Separator />
					</section>
				</CardHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<CardContent>
							{currentStep === 0 && (
								<motion.div
									initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									className="space-y-4"
								>
									<div className="text-base">
										<strong>Step 1</strong>: Your Details
									</div>
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
														HS/Matriculation Year
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
															{generateYearArray(1950).map((year) => (
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
									</div>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Full Name
												</FormLabel>
												<FormControl>
													<Input placeholder="Robert" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="primaryNumber"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Primary Number
													(For Sending OTP)
												</FormLabel>
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
									{/* <Checkbox /> */}
									<FormField
										control={form.control}
										name="whatsappNumber"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Whatsapp
													Number
												</FormLabel>
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
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Email
												</FormLabel>
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
										name="deliveryAddress"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span>Postal /
													Delivery Address
												</FormLabel>
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
									{/* <Checkbox /> */}
									<FormField
										control={form.control}
										name="permanentAddress"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Permanent
													Address
												</FormLabel>
												<FormControl>
													<Input
														placeholder="000,ABC Road ,state,Pincode"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>

									<div className={'grid grid-cols-2 gap-2'}>
										<FormField
											control={form.control}
											name="dateOfBirth"
											render={({ field }) => (
												<FormItem className="mt-1 flex flex-col gap-1">
													<FormLabel>
														<span className="text-red-600">*</span> Date of
														birth
													</FormLabel>
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
														<PopoverContent
															className="w-auto p-0"
															align="start"
														>
															<Calendar
																mode="single"
																selected={field.value}
																onSelect={field.onChange}
																disabled={(date) =>
																	date > new Date() ||
																	date < new Date('1900-01-01')
																}
																initialFocus
															/>
														</PopoverContent>
													</Popover>
													{/* <DatePicker selected={field.value} onSelect={field.onChange} /> */}

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="bloodGroup"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> Blood Group
													</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select your Blood group" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value={'A+'}>A+</SelectItem>
															<SelectItem value={'A-'}>A-</SelectItem>
															<SelectItem value={'B+'}>B+</SelectItem>
															<SelectItem value={'B-'}>B-</SelectItem>
															<SelectItem value={'AB+'}>AB+</SelectItem>
															<SelectItem value={'AB-'}>AB-</SelectItem>
															<SelectItem value={'O+'}>O+</SelectItem>
															<SelectItem value={'O-'}>O+</SelectItem>
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
										name="occupation"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Occupation
												</FormLabel>
												<FormControl>
													<Input
														placeholder="ex: Goverment Employee"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>
							)}
							{currentStep === 1 && (
								<motion.div
									initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									className="space-y-4"
								>
									<div className="text-base">
										<strong>Step 2</strong>: Your Preference
									</div>
									<div className={'grid grid-cols-3 gap-2'}>
										<FormField
											control={form.control}
											name="merchandise"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> Merchandise
													</FormLabel>

													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select a Tshirt" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value={'Tshirt'}>Tshirt</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="size"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> Size
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
											name="sleeve"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> Sleeves
													</FormLabel>

													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Tshirt Sleeves" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value={'Half'}>
																Half Sleeve
															</SelectItem>
															{/* <SelectItem value={'Full'}>
																Full Sleeve
															</SelectItem> */}
														</SelectContent>
													</Select>

													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className={'grid grid-cols-2 gap-2'}>
										<FormField
											control={form.control}
											name="attend"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> Will Come
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
															<SelectItem value={'Only You'}>
																Only You
															</SelectItem>
															<SelectItem value={'With Family'}>
																With Family
															</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="noOfFamily"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														<span className="text-red-600">*</span> No of Family
														Members
													</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select members" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value={'1'}>1</SelectItem>
															<SelectItem value={'2'}>2</SelectItem>
															<SelectItem value={'3'}>3</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
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
									{/* <div className="text-sm">
										{' '}
										eg. If you didn&apos;t pass out Madhyamik/HS from K. K.
										Hindu Academy. Then select <strong>NA</strong>.
									</div> */}
									{/* <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2"> */}

									{/* </div> */}
								</motion.div>
							)}

							{currentStep === 2 && (
								<motion.div
									initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									className="space-y-4"
								>
									<div className="text-base">
										<strong>Step 1</strong>: Fill the amount you wish to donate
									</div>
									<FormField
										control={form.control}
										name="amount"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Donation
													Amount (INR)
												</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="₹ in Rupees"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="text-base">
										<strong>Step 5</strong>: Payments Method
									</div>
									<div className="w-full">
										<FormField
											control={form.control}
											name="paymentMethod"
											render={({ field }) => (
												<FormItem className="space-y-3">
													<FormLabel>Select Payment Method</FormLabel>
													<FormControl>
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue={field.value}
															className="flex flex-col space-y-1"
														>
															<FormItem className="flex flex-col justify-start space-x-3 space-y-0">
																<div className="flex space-x-3">
																	<FormControl>
																		<RadioGroupItem value="upi" />
																	</FormControl>
																	<FormLabel className="flex flex-col font-normal">
																		UPI QR Code
																	</FormLabel>
																</div>
																<section>
																	{' '}
																	<QRCode
																		value={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}&am=${getValues('amount')}&tn=Demo%20Transaction`}
																	/>
																</section>
																<section>UPI ID:9432428233m@pnb</section>
															</FormItem>
															{/* <FormItem className="flex items-center space-x-3 space-y-0">
																<FormControl>
																	<RadioGroupItem value="payment-gateway" />
																</FormControl>
																<FormLabel className="font-normal">
																	Phone Pe Payment Gateway
																</FormLabel>
															</FormItem> */}
															<FormItem className="flex items-center space-x-3 space-y-0">
																<FormControl>
																	<RadioGroupItem value="payment-gateway" />
																</FormControl>
																<FormLabel className="font-normal">
																	Bank Details
																</FormLabel>
															</FormItem>
														</RadioGroup>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</motion.div>
							)}
						</CardContent>
						<CardFooter className="flex justify-between">
							{currentStep > 0 && (
								<Button onClick={() => prevStep()} variant={'outline'}>
									<ArrowLeft />
									Previous
								</Button>
							)}
							{currentStep !== 3 ? (
								<Button onClick={() => nextStep()}>
									Next
									<ArrowRight />
								</Button>
							) : (
								<Button disabled={!isValid} type="submit">
									Donate
								</Button>
							)}
						</CardFooter>
					</form>
				</Form>
			</Card>
		</>
	);
};

export default DonationForm;
