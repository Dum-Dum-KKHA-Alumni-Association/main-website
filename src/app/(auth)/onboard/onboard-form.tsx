'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { generateYearArray } from '@/lib/generateYearArray';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight, CalendarIcon } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import { motion } from 'motion/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import axios from 'axios';
import toast from 'react-hot-toast';
import { onboardSchema } from '@/schemas/AuthenticationSchema';
import { getToken } from '@/lib/getAccessToken';
import { useRouter } from 'next/navigation';

const OnboardProcessForm = () => {
	const [previousStep, setPreviousStep] = useState<number>(0);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const router = useRouter();
	const delta = currentStep - previousStep;

	const isOnboarded = useCallback(async () => {
		const token = await getToken();
		await axios(`${process.env.NEXT_PUBLIC_API_URL}/user/isOnboarded`, {
			headers: {
				Authorization: ` Bearer ${token}`,
			},
		});
	}, []);

	useEffect(() => {
		isOnboarded();
	}, [isOnboarded]);

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('onboarded') === 'true'
		) {
			router.push('/dashboard');
		}
	}, [router]);

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

	const steps = [
		{
			id: 'Step 1',
			name: 'Personal Info',
			fields: ['madyamikYear', 'higherSecondaryYear', 'occupation'],
		},
		{
			id: 'Step 2',
			name: 'Your Preference',
			fields: ['dateOfBirth', 'primaryNumber', 'whatsappNumber'],
		},

		{
			id: 'Step 3',
			name: 'your Address',
			fields: ['deliveryAddress', 'permanentAddress'],
		},
	];

	type OnboardFormSchemaTypes = z.infer<typeof onboardSchema>;
	const form = useForm<OnboardFormSchemaTypes>({
		resolver: zodResolver(onboardSchema),
		defaultValues: fetchUserData,
	});
	const {
		formState: { isValid },
		// reset,

		setValue,
		trigger,
		watch,
	} = form;

	const madyamikYear = watch('madyamikYear');

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
	async function onSubmit(values: OnboardFormSchemaTypes) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log('FormValues----->', values);
		const token = await getToken();

		const eventValue = {
			madyamikYear: values.madyamikYear,
			higherSecondaryYear: values.higherSecondaryYear,
			primaryNumber: values.primaryNumber,
			whatsappNumber: values.whatsappNumber,
			permanentAddress: values.permanentAddress,
			deliveryAddress: values.deliveryAddress,
			dateOfBirth: values.dateOfBirth,
			occupation: values.occupation,
		};

		console.log(eventValue);

		try {
			const data = await toast.promise(
				axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/user/onboard`,
					eventValue,
					{
						headers: {
							Authorization: ` Bearer ${token}`,
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
			localStorage.setItem('onboarded', 'true');
			router.push('/dashboard');
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

	type FieldName = keyof OnboardFormSchemaTypes;

	const nextStep = async () => {
		const fields = steps[currentStep].fields;

		const output = await trigger(fields as FieldName[], { shouldFocus: true });

		if (!output) return;
		if (currentStep < steps.length - 1) {
			setCurrentStep((state) => state + 1);
		}
	};
	return (
		<Card className="mx-auto w-full max-w-xl pb-10 font-sora shadow-lg">
			<CardHeader>
				<section>
					{/* <ol className="flex w-full items-center justify-center">
						<li className="flex w-full items-center text-blue-600 after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-blue-100 after:content-[''] dark:text-blue-500 dark:after:border-blue-800">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 lg:h-12 lg:w-12">
								<svg
									className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300 lg:h-4 lg:w-4"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 16 12"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 5.917 5.724 10.5 15 1.5"
									/>
								</svg>
							</span>
						</li>
						<li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-gray-100 after:content-[''] dark:after:border-gray-700">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-12 lg:w-12">
								<svg
									className="h-4 w-4 text-gray-500 dark:text-gray-100 lg:h-5 lg:w-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
								</svg>
							</span>
						</li>
						<li className="flex w-full items-center">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-12 lg:w-12">
								<svg
									className="h-4 w-4 text-gray-500 dark:text-gray-100 lg:h-5 lg:w-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20"
								>
									<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
								</svg>
							</span>
						</li>
					</ol> */}
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
									<strong>Step 1</strong>: Personal Details
								</div>
								{/* <FormField
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
								/> */}

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

								<FormField
									control={form.control}
									name="dateOfBirth"
									render={({ field }) => (
										<FormItem className="mt-1 flex flex-col gap-1">
											<FormLabel>
												<span className="text-red-600">*</span> Date of birth
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
											{/* <DatePicker selected={field.value} onSelect={field.onChange} /> */}

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
												<PhoneInputWithCountrySelect
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
												<span className="text-red-600">*</span> Whatsapp Number
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
									name="deliveryAddress"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<span className="text-red-600">*</span>Postal / Delivery
												Address
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
								Save & Continue
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
	);
};

export default OnboardProcessForm;
