'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
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
// import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import QRCode from 'react-qr-code';
import { membershipFormSchema } from '@/schemas/EventBookingFormSchema';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';
import Link from 'next/link';

// import { DatePicker } from '@/components/ui/date-picker';

interface DonationFormProps {
	title: string;
}

const RegistrationForm: FC<DonationFormProps> = ({
	// eventId,
	title,
}) => {
	const [previousStep, setPreviousStep] = useState<number>(0);
	const [currentStep, setCurrentStep] = useState<number>(0);

	const delta = currentStep - previousStep;

	const steps = [
		{
			id: 'Step 1',
			name: 'Personal Info',
			fields: [
				'madyamikYear',
				'higherSecondaryYear',
				'fullName',
				'primaryNumber',
				'whatsappNumber',
				'email',
				'deliveryAddress',
				'permanentAddress',
				'dateOfBirth',
			],
		},
		{
			id: 'Step 2',
			name: 'Your Preference',
			fields: [
				'merchandise',
				'size',
				'sleeve',
				'attend',
				'noOfFamily',
				'foodPreference',
			],
		},

		{
			id: 'Step 3',
			name: 'Payment Method',
			fields: ['amount', 'paymentMethod'],
		},
	];

	type DonationFormTypes = z.infer<typeof membershipFormSchema>;
	const form = useForm<DonationFormTypes>({
		resolver: zodResolver(membershipFormSchema),
		defaultValues: {
			amount: 0,
		},
	});
	const {
		formState: { isValid },
		// reset,
		getValues,
		setValue,
		trigger,
		watch,
	} = form;

	const madyamikYear = watch('madyamikYear');

	const attend = watch('attend');
	const paymentMethod = watch('paymentMethod');

	const sameNumber = watch('sameNumber');
	const sameAddress = watch('sameAddress');

	//////////////////////////////////////////
	// Same Phone Number Logic
	const sameNumberLogic = useCallback(() => {
		const primaryNumber = watch('primaryNumber');
		if (sameNumber) {
			setValue('whatsappNumber', primaryNumber);
		} else {
			setValue('whatsappNumber', '');
		}
	}, [setValue, watch, sameNumber]);

	const sameAddressLogic = useCallback(() => {
		const deliveryAddress = watch('deliveryAddress');

		if (sameAddress) {
			setValue('permanentAddress', deliveryAddress);
		} else {
			setValue('permanentAddress', '');
		}
	}, [setValue, watch, sameAddress]);

	useEffect(() => {
		sameNumberLogic();
		sameAddressLogic();
	}, [sameAddressLogic, sameNumberLogic]);

	//////////////////////////////////////////////////

	// 2. Define a submit handler.
	async function onSubmit(values: DonationFormTypes) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log('FormValues----->', values);

		const eventValue = {
			fullName: values.fullName,
			madyamikYear: values.madyamikYear,
			higherSecondaryYear: values.higherSecondaryYear,
			primaryNumber: values.primaryNumber,
			whatsappNumber: values.whatsappNumber,
			email: values.email,
			permanentAddress: values.permanentAddress,
			deliveryAddress: values.deliveryAddress,
			merchandiseType: values.merchandise,
			merchandiseSize: values.size,
			merchandiseSleeves: values.sleeve,
			foodPreference: values.foodPreference,
			persons: values.attend === 'Only You' ? 1 : 1 + Number(values.noOfFamily),
			dateOfBirth: values.dateOfBirth,
			bloodGroup: values.bloodGroup,
			occupation: values.occupation,
			amount: values.amount,
			paymentMethod: values.paymentMethod,
			transactionProof: values.transactionProof,
		};

		console.log(eventValue);

		try {
			const data = await toast.promise(
				axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/events/booking`,
					eventValue,
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				),
				{
					loading: 'Loading',
					success: 'Form Submitted Successfully',
					error: 'Error while Submitting',
				}
			);

			console.log(data);
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
			<Card className="mx-auto w-full max-w-xl pb-10 font-sora shadow-lg">
				<CardHeader className="px-0 pt-0">
					{/* {thumbnail && (
						<Image
							src={thumbnail}
							width={1000}
							height={0}
							className="aspect-[16/7] w-full rounded-t-xl object-fill"
							alt={'Donation'}
						/>
					)} */}
					<section className="p-6">
						{/*<CardDescription>{description}</CardDescription> */}
						<section className="flex w-full items-center justify-between">
							<CardTitle>
								<h4>{title}</h4>
							</CardTitle>{' '}
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

									<Separator />

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
									<FormField
										control={form.control}
										name="sameNumber"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel>
														Primary Number and Whatsapp Number are same
													</FormLabel>
												</div>
											</FormItem>
										)}
									/>
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

									<Separator />

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
									<Separator />
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

									<FormField
										control={form.control}
										name="sameAddress"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel>
														Postal / Delivery Address and Permanent Address Both
														are Same
													</FormLabel>
												</div>
											</FormItem>
										)}
									/>

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
									{/* {sameAddress ? (
									) : (
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
															value={''}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									)} */}

									<Separator />
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
										{attend === 'With Family' && (
											<FormField
												control={form.control}
												name="noOfFamily"
												render={({ field }) => (
													<FormItem>
														<FormLabel>
															<span className="text-red-600">*</span> No of
															Family Members
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
										)}
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
										<strong>Step 3</strong>: your Contributon
									</div>
									<FormField
										control={form.control}
										name="amount"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<div className="flex flex-col gap-3">
														<div>
															<span className="text-red-600">*</span>{' '}
															Contribution Amount (INR)
														</div>
														<div className="w-full space-x-3 text-base">
															<Badge
																variant="outline"
																onClick={() => setValue('amount', 500)}
															>
																₹500
															</Badge>
															<Badge
																variant="outline"
																onClick={() => setValue('amount', 1000)}
															>
																₹1000
															</Badge>
															<Badge
																variant="outline"
																onClick={() => setValue('amount', 2000)}
															>
																₹2000
															</Badge>
															<Badge
																variant="outline"
																onClick={() => setValue('amount', 5000)}
															>
																₹5000
															</Badge>
															<Badge
																variant="outline"
																onClick={() => setValue('amount', 10000)}
															>
																₹10000
															</Badge>
														</div>
													</div>
												</FormLabel>
												<FormControl>
													<Input
														type={'number'}
														placeholder="Write your contribution Amount"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="text-base">
										<strong>Step 4</strong>: Payment Methods
									</div>

									<FormField
										control={form.control}
										name="paymentMethod"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<span className="text-red-600">*</span> Payment Method
												</FormLabel>

												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a Payment Method" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value={'upi'}>UPI/QR Code</SelectItem>
														<SelectItem value={'bankTransfer'}>
															Bank Transfer
														</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className={'w-full'}>
										{paymentMethod === 'upi' && (
											<div className="flex w-full flex-col items-center justify-center gap-4">
												<section className="hidden md:flex">
													{' '}
													<QRCode
														value={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}&am=${getValues('amount')}&tn=Demo%20Transaction`}
													/>
												</section>
												<section className="md:hidden">
													<Link
														href={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}&am=${getValues('amount')}&tn=Demo%20Transaction`}
													>
														<Button className="p-4 text-2xl">
															Pay With UPI
														</Button>
													</Link>
												</section>

												<section>UPI ID:9432428233m@pnb</section>
												<section className="flex w-full items-center justify-center gap-2">
													<Image
														src={'/icons/bhim.png'}
														width={50}
														height={0}
														alt={'Bhim Upi Logo'}
													></Image>
													<Image
														src={'/icons/google-pay.png'}
														width={50}
														height={0}
														alt={'Bhim Upi Logo'}
													></Image>
													<Image
														src={'/icons/phone-pe.png'}
														width={50}
														height={0}
														alt={'Bhim Upi Logo'}
													></Image>
													<Image
														src={'/icons/amazon-pay.png'}
														width={150}
														height={0}
														alt={'Bhim Upi Logo'}
													></Image>
													<Image
														src={'/icons/mobikwik.png'}
														width={100}
														height={0}
														alt={'Bhim Upi Logo'}
													></Image>
												</section>
											</div>
										)}
										{paymentMethod === 'bankTransfer' && (
											<section className="w-full gap-1 p-4">
												<div className="text-xl font-bold">
													Bank Information
												</div>

												<div>Bank: Punjab National Bank</div>
												<div>IFSC: PUNB0011720</div>
												<div>
													{' '}
													A/C Name: Dum Dum Krishna Kumar Hindu Academy Alumni
													Association
												</div>
												<div>A/C No: 0117200100014148</div>
											</section>
										)}
									</div>
									<FormField
										control={form.control}
										name="transactionProof"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Upload Transaction Proof (in jpg)</FormLabel>
												<FormControl>
													<Input
														type={'file'}
														id="transactionProof"
														placeholder="Write your contribution Amount"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
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
							{currentStep !== steps.length - 1 ? (
								<Button onClick={() => nextStep()}>
									Next
									<ArrowRight />
								</Button>
							) : (
								<Button disabled={!isValid} type="submit">
									Submit
								</Button>
							)}
						</CardFooter>
					</form>
				</Form>
			</Card>
		</>
	);
};

export default RegistrationForm;
