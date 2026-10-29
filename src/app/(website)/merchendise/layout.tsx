import CommingSoon from '@/components/CommingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title:
		'Official Alumni Merchandise | Dum Dum K.K. Hindu Academy Alumni Association',
	description:
		'Explore and buy official DDKKHAAA merchandise including heritage polos, hoodies, gold-plated lapel pins, sports jerseys, insulated mugs, and nostalgic alumni mementos.',
};

export default function MerchendiseLayout(
// 	{
// 	children,
// }: {
// 	children: React.ReactNode;
// }
) {
	return <>
	<CommingSoon/>
	{/* {children} */}
	</>;
}
