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
import { Separator } from '@/components/ui/separator';
import { useCheckoutStore } from '@/store/checkoutStore';

import React from 'react';

const BuyTicketPage = () => {
	const ticket = useCheckoutStore((state) => state.ticket);
	const items = useCheckoutStore((state) => state.items);
	const subtotal = useCheckoutStore((state) => state.subtotal);
	const payableAmount = useCheckoutStore((state) => state.payableAmount);

	console.log(ticket);

	// const addTicket = useCheckoutStore(state=>state.addTicket)
	// const router = useRouter();
	// // const slug = (await params).slug;
	// const form = useForm<z.infer<typeof signupSchema>>({
	// 	resolver: zodResolver(signupSchema),
	// 	defaultValues: {},
	// });

	// async function onSubmit(values: z.infer<typeof signupSchema>) {
	// 	// Do something with the form values.
	// 	// ✅ This will be type-safe and validated.
	// 	console.log(values);

	// 	try {
	// 		// const response = await axios.post(
	// 		// 	`${process.env.NEXT_PUBLIC_API_URL}/event/booking`,
	// 		// 	values,
	// 		// 	{
	// 		// 		withCredentials: true,
	// 		// 		headers: {
	// 		// 			'Content-Type': 'application/json',
	// 		// 		},
	// 		// 	}
	// 		// );
	// 		// const data = response.data;

	// 		// if (data.statusCode === 409) {
	// 		// 	return toast.error(data.message);
	// 		// }

	// 		// console.log(data);
	// 		// toast.success(data.message);
	// 		router.push();
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error('Error Happens, please try later!');
	// 	}
	// }
	return (
		<section className="w-full">
			<section className="w-full bg-white">
				<section className="mx-auto flex h-auto w-full max-w-6xl flex-1 flex-col px-5">
					<section className="mt-10 w-full">
						<section className="flex flex-col">
							<div className="w-full text-4xl font-medium">
								<span>Billing Details</span>
							</div>
						</section>
					</section>
				</section>
				<Separator className="my-6" />
			</section>
			<section className="mx-auto flex h-auto w-full max-w-6xl gap-6 px-5">
				{/* <Card className="w-full">
					<CardHeader className="rounded-t-md bg-primary text-white">
						<CardTitle>Select Preferences</CardTitle>
						<CardDescription className="text-white">
							Send tickets to tejodeepmitraroy2002@gmail.com
						</CardDescription>
					</CardHeader>
					<CardContent className="border p-0">
						<Tabs defaultValue="account" className="flex w-[400px]">
							<TabsList className="flex h-fit flex-col rounded-none border p-0">
								<TabsTrigger className="rounded-none" value="account">
									Account
								</TabsTrigger>
								<TabsTrigger value="password">Password</TabsTrigger>
							</TabsList>
							<TabsContent value="account">
								Make changes to your account here.
							</TabsContent>
							<TabsContent value="password">
								Change your password here.
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card> */}
				{/* <div className="flex h-fit w-[500px] flex-col gap-7"> */}
				<div className="mx-auto flex h-fit w-[500px] flex-col gap-7">
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Order Summary</CardTitle>
							<CardDescription>Ticket Info</CardDescription>

							<div className="w-full">
								<div>
									<h5>{ticket.eventName}</h5>
								</div>
							</div>

							<Separator />
						</CardHeader>
						<CardContent className="space-y-2 text-sm">
							<div className="flex w-full justify-between">
								<span>Total Tickets({ticket.quantity})</span>
								<span>{ticket.quantity * ticket.price}</span>
							</div>
							<div className="flex w-full flex-col gap-2">
								{items.map((item) => (
									<div
										key={item.itemName}
										className="flex w-full justify-between"
									>
										<span>
											{item.itemName}({item.quantity})
										</span>
										<span>{item.quantity * item.price}</span>
									</div>
								))}
							</div>
							<Separator />
							<div className="flex w-full justify-between">
								<span>Subtotal</span>
								<span>{subtotal}</span>
							</div>
						</CardContent>
						<CardFooter className="justify-between rounded-b-sm bg-yellow-200 p-6">
							<span>Amount Payable</span>
							<span className="text-bold">Rs.{payableAmount}</span>
						</CardFooter>
					</Card>
					<Button size={'lg'} className="w-full justify-between">
						<span>TOTAL: Rs.{payableAmount}</span>
						<span>PROCEED</span>
					</Button>
				</div>
			</section>
		</section>
	);
};

export default BuyTicketPage;
