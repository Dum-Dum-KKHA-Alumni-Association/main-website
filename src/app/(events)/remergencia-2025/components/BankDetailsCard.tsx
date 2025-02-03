'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkIcon } from 'lucide-react';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const BankDetailsCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="underline">Bank Details</CardTitle>
			</CardHeader>
			<CardContent className="flex w-full flex-col gap-1">
				<span className="flex gap-2">
					<span className="font-semibold">A/C No:</span>
					<span className="flex gap-4">
						0117200100014148
						<CopyToClipboard text={'0117200100014148'}>
							<LinkIcon size={16} />
						</CopyToClipboard>
					</span>
				</span>
				<span className="">
					<span className="w-fit font-semibold">A/C Name:</span> Dum Dum Krishna
					Kumar Hindu Academy Alumni Association{' '}
				</span>
				<span className="flex gap-2">
					<span className="font-semibold">IFSC:</span>{' '}
					<span className="flex gap-4">
						PUNB0011720{' '}
						<CopyToClipboard text={'PUNB0011720'}>
							<LinkIcon size={16} />
						</CopyToClipboard>
					</span>
				</span>
				<span className="flex gap-2">
					<span className="font-semibold">Bank:</span>{' '}
					<span className="flex gap-4">
						Punjab National Bank{' '}
						<CopyToClipboard text={'Punjab National Bank'}>
							<LinkIcon size={16} />
						</CopyToClipboard>
					</span>
				</span>
				<span className="flex gap-2">
					<span className="font-semibold">Branch:</span>{' '}
					<span className="flex gap-4">
						PNB Dum Dum{' '}
						<CopyToClipboard text={'PNB Dum Dum'}>
							<LinkIcon size={16} />
						</CopyToClipboard>
					</span>
				</span>
			</CardContent>
		</Card>
	);
};

export default BankDetailsCard;
