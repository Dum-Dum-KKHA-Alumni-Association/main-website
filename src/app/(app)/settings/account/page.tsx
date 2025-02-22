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
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
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

import { Separator } from '@/components/ui/separator';
import { getToken } from '@/lib/getAccessToken';
import { accountSchema } from '@/schemas/SettingsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SettingsAccountPage() {
	const fetchUserData = async () => {
		const token = await getToken();
		const response = await axios(
			`${process.env.NEXT_PUBLIC_API_URL}/user/account`,
			{
				headers: {
					Authorization: ` Bearer ${token}`,
				},
			}
		);
		const user = response.data.data;
		console.log(response.data);

		return {
			membershipId: user.membershipId === null ? '' : user.membershipId,
			email: user.email === null ? '' : user.email,
			password: user.password === null ? '' : user.password,
		};
	};

	// 1. Define your form.
	const form = useForm<z.infer<typeof accountSchema>>({
		resolver: zodResolver(accountSchema),
		defaultValues: fetchUserData,
	});

	// const { setValue  } =form

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof accountSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="relative space-y-6 border-red-500 bg-white p-10 pb-16 font-baloo-da-2 md:block">
			{/* <div className="mx-auto flex w-full max-w-3xl flex-col space-y-8 border lg:flex-row lg:space-x-12 lg:space-y-0"></div> */}
			<Card className="mx-auto w-full max-w-3xl border-none shadow-none">
				<CardHeader>
					<CardTitle className={'text-3xl font-semibold'}>
						Account management
					</CardTitle>
					<CardDescription>Configure your account</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-6" />
					<section>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8"
							>
								<FormField
									control={form.control}
									name="membershipId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Member Id</FormLabel>
											<FormControl>
												<Input
													type="text"
													disabled
													placeholder="shadcn"
													{...field}
												/>
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
										<div className="text-xl font-semibold leading-none tracking-tight">
											Security Credentials
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
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<Input
															type="email"
															placeholder="shadcn"
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
															type="password"
															placeholder="shadcn"
															{...field}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</section>
								</div>

								<Button type="submit" className="rounded-full p-5 text-base">
									Submit
								</Button>
							</form>
						</Form>
					</section>
					<div className="mt-20">
						<section className="flex flex-col space-y-2 py-6">
							<div className="text-xl font-semibold leading-none tracking-tight text-destructive">
								Danger Area
							</div>
						</section>
						<Separator />
						<section className="space-y-6 py-6">
							<div>
								<div>Delete Account</div>

								<p className="mt-1 text-muted-foreground">
									Your Hashnode account administers these blogs:
									tejodeepmitraroy.hashnode.dev. Your personal data will be
									deleted permanently when you delete your account on Hashnode.
									This action is irreversible.
								</p>
							</div>
							<div>
								<Dialog>
									<DialogTrigger asChild>
										<Button
											variant={'destructive'}
											className="rounded-full p-5 text-base"
										>
											Delete Account
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Are you absolutely sure?</DialogTitle>
											<DialogDescription>
												This action cannot be undone. This will permanently
												delete your account and remove your data from our
												servers.
											</DialogDescription>
										</DialogHeader>
										<DialogFooter className="mt-10 sm:justify-end">
											<Button type="button" variant={'destructive'}>
												Delete Account
											</Button>

											<DialogClose asChild>
												<Button type="button">Close</Button>
											</DialogClose>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
						</section>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
