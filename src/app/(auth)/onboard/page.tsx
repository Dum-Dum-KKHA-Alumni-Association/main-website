'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/schemas/AuthenticationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import logo from '../../../../public/logo.png';

export default function LoginPage() {
	const router = useRouter();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
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
			router.push('/dashboard');

			toast.success('Login Successfull');
		} catch (error) {
			console.log(error);
			toast.error('Error Happens, please try later!');
		}
	}
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<div className={'flex w-full flex-col gap-6'}>
					<Card className="overflow-hidden">
						<CardContent className="grid w-full p-0 md:grid-cols-2">
							<div className="flex w-full flex-col gap-6 space-y-8 p-6 md:p-8">
								<section className="flex w-full items-center justify-center text-center">
									{/* <h1 className="text-2xl font-bold">Welcome back</h1> */}
									<Image
										src={logo}
										height={0}
										width={40}
										alt="Logo"
										className="w-auto"
										priority={true}
									/>
									<div className="hidden flex-col font-baloo-da-2 text-sm font-bold leading-tight antialiased md:flex md:flex-row md:gap-2 md:text-lg lg:text-2xl">
										<span>DDKKHAAA</span>
									</div>
								</section>
								<section className="flex flex-col gap-6">
									<section>
										<p className="text-balance text-muted-foreground">
											Login to your DDKKHAAA account
										</p>
									</section>
									<section className="grid grid-cols-1 gap-4">
										<Link
											href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
										>
											<Button
												variant="outline"
												className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/85 hover:text-white"
											>
												<Image
													src={'/icons/google.png'}
													width={20}
													height={20}
													alt="google"
												/>
												<span>Login with Google</span>
											</Button>
										</Link>
									</section>
									<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
										<span className="relative z-10 bg-background px-2 text-muted-foreground">
											Or
										</span>
									</div>
								</section>

								<section className="flex flex-col gap-2 text-center text-sm">
									<p>
										By logging in or signing up using the options above, you
										agree to ddkkhaaa&apos;s Terms & Conditions and Privacy
										Policy
									</p>
								</section>
							</div>

							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="w-full space-y-8"
								>
									<div className="w-full p-6 md:p-8">
										<div className="flex w-full flex-col gap-6">
											<div className="flex w-full flex-col items-center text-center">
												<h1 className="text-2xl font-bold">Welcome back</h1>
												<p className="text-balance text-muted-foreground">
													Login to your DDKKHAAA account
												</p>
											</div>

											<div className="mt-6 grid grid-cols-1 gap-4">
												<Link
													href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
												>
													<Button
														variant="outline"
														className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/85 hover:text-white"
													>
														<Image
															src={'/icons/google.png'}
															width={20}
															height={20}
															alt="google"
														/>
														<span>Login with Google</span>
													</Button>
												</Link>
											</div>
											<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
												<span className="relative z-10 bg-background px-2 text-muted-foreground">
													Or
												</span>
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
																placeholder="shadcn"
																{...field}
																className="rounded-full"
															/>
														</FormControl>

														<FormMessage />
													</FormItem>
												)}
											/>

											{/* <FormField
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
											/> */}

											<Button type="submit" className="w-full rounded-full">
												Login
											</Button>

											<div className="flex flex-col gap-2 text-center text-sm">
												{/* <div>
													Don&apos;t have an account?{' '}
													<Link
														href="/sign-up"
														className="underline underline-offset-4"
													>
														Sign up
													</Link>
												</div> */}
												{/* <div className="flex flex-wrap items-start justify-center gap-1">
													<span>you forget your passsword? </span>
													<Link
														href="/forget-password"
														className="underline underline-offset-4"
													>
														forget password
													</Link>
												</div> */}
											</div>
										</div>
									</div>
								</form>
							</Form>
							<div className="relative hidden bg-muted md:block">
								<Image
									src="/assets/remagica.png"
									alt="Image"
									width={1000}
									height={0}
									className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
								/>
							</div>
						</CardContent>
					</Card>
					{/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
						By clicking continue, you agree to our{' '}
						<a href="/tnc">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>.
					</div> */}
				</div>
			</div>
		</div>
	);
}
