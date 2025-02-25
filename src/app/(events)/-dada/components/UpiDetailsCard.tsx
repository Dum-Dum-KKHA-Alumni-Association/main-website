'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import QRCode from 'react-qr-code';

const UpiDetailsCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<span className="underline">UPI Details :</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex w-full flex-col gap-3">
				<div className="flex w-full justify-center">
					<span className="flex items-center gap-2 font-semibold">
						9432428233m@pnb
						<CopyToClipboard text={'9432428233m@pnb'}>
							<LinkIcon size={16} />
						</CopyToClipboard>
					</span>
				</div>
				<div className={'flex w-full items-center justify-center'}>
					<Link
						href={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}`}
					>
						<QRCode
							className="h-32 w-32"
							value={`upi://pay?pa=${process.env.NEXT_PUBLIC_UPI_ID}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}`}
						/>
					</Link>
				</div>
				<section className="flex w-full flex-wrap items-center justify-center gap-2">
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
			</CardContent>
		</Card>
	);
};

export default UpiDetailsCard;
