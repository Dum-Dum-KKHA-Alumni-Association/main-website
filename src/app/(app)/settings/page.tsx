'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { Separator } from '@/components/ui/separator';
import { generateYearArray } from '@/lib/generateYearArray';
import { cn } from '@/lib/utils';
import { profileFormSchema } from '@/schemas/SettingsSchema';
import { getUser, updateUserDetails } from '@/utils/apis/user-apis';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, Image } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SettingsProfilePage() {
	const fetchUserData = async () => {
		const user = await getUser();
		console.log(user);

		if (user) {
			return {
				id: user.id,
				fullName: user.fullName === null ? '' : user.fullName,
				avatar: user.avatar,
				madyamikYear: user.madyamikYear === null ? '' : user.madyamikYear,
				higherSecondaryYear:
					user.higherSecondaryYear === null ? '' : user.higherSecondaryYear,
				primaryNumber: user.primaryNumber === null ? '' : user.primaryNumber,
				whatsappNumber: user.whatsappNumber === null ? '' : user.whatsappNumber,
				permanentAddress:
					user.permanentAddress === null ? '' : user.permanentAddress,
				deliveryAddress:
					user.deliveryAddress === null ? '' : user.deliveryAddress,
				dateOfBirth:
					user.dateOfBirth === null ? new Date() : new Date(user.dateOfBirth),
				bloodGroup: user.bloodGroup === null ? '' : user.bloodGroup,
				occupation: user.occupation === null ? '' : user.occupation,
				linkedin: user.linkedin === null ? '' : user.linkedin,
				instagram: user.instagram === null ? '' : user.instagram,
				twitter: user.twitter === null ? '' : user.twitter,
				facebook: user.facebook === null ? '' : user.facebook,
			};
		} else {
			return {
				id: '',
				fullName: '',
				avatar: '',
				madyamikYear: '',
				higherSecondaryYear: '',
				primaryNumber: '',
				whatsappNumber: '',
				permanentAddress: '',
				deliveryAddress: '',
				dateOfBirth: new Date(),
				bloodGroup: '',
				occupation: '',
				linkedin: '',
				instagram: '',
				twitter: '',
				facebook: '',
			};
		}
	};

	// 1. Define your form.
	const form = useForm<z.infer<typeof profileFormSchema>>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: fetchUserData,
	});

	const {
		watch,
		// getValues,
		formState: { isDirty },
	} = form;
	// console.log("Get values--->",getValues());

	const madyamikYear = watch('madyamikYear');

	// console.log('isDirty', isDirty);
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof profileFormSchema>) {
		await updateUserDetails(values);
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
									<CardHeader className="flex-row gap-7">
										<Avatar className="h-20 w-20">
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<section className="flex flex-col gap-3">
											<div>
												<Button className="p-3">
													<Image />
													Change Image
												</Button>
											</div>
											<span className="text-sm">PNG, JPEG: 500 x 500 px</span>
										</section>
									</CardHeader>
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
												value={field.value}
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
												value={field.value}
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
									name="bloodGroup"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<span className="text-red-600">*</span> Blood Group
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
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
											name="twitter"
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
											name="linkedin"
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
											name="instagram"
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
											name="facebook"
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
								{isDirty && (
									<div className="fixed bottom-8 flex w-[400px] items-center justify-between rounded-full border border-primary bg-background bg-white p-3">
										<span>Save Changes</span>
										<div className={'flex gap-3'}>
											<Button type="submit">Save</Button>
											<Button variant={'destructive'}>Discard</Button>
										</div>
									</div>
								)}
							</form>
						</Form>
					</section>
				</CardContent>
			</Card>
		</div>
	);
}
