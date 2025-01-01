import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const publications: Array<{
	link: string;
	image: string;
	title: string;
	description: string;
}> = [
	{
		link: 'https://ddkkhaaa.blogspot.com/2024/11/08Pujo2024.html',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiZHGVdHpRFxDCpVefqwbcxiiAazI_7yqJWYqQO8ucDhtY9HNxVQR-Xgo8ZcAp0QtkwhAHymcIj21MIUbD-kk0Ssg2oMVZ90Nzuqo81Y2wIsLgTQXlBAqjxgUhEvl1Rj-4BD7dtpt_qZyS20A7ClTfUcqANfdPo42s6UpzXvfycyQsGcV3b_8Zy8hvsIVy/s320/%E0%A6%9A%E0%A6%BE%E0%A6%A6%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%20story.png',
		title: 'চাদরের কান্না',
		description:
			'চাদরের কান্না তুষার কান্তি মল্লিক, প্রাক্তনী খুব ছোটবেলার কথাআমার বিলক্ষণ মনে আছে। অ…',
	},
	{
		link: 'https://ddkkhaaa.blogspot.com/2022/01/baneshwarchakraborty.html',
		image:
			'https://blogger.googleusercontent.com/img/a/AVvXsEiWhWCnM9t867F308ofkOCYMCEbivy-HxpsLJaoFpQFFtbHWZwKUryF-7eG9Kp_s80edH7j8JhiyqzIh7cLwgA2zVgv5kuoNNIiAU7UEC3OPEK4MtsYROy5q5GU60Nwsz2OAv91-UnSOxKqPsKFsPS0khHiAJAkLnrKE8tpYZhS4OikKnLA-5S8uzyRtQ=w640-h480',
		title: 'বাণেশ্বর চক্রবর্তী, প্রাক্তন শিক্ষক',
		description:
			'১৯৮১ সালের জানুয়ারি মাসে যে তীর্থে সেবা করার সুযোগ পেয়েছিলাম,১৯৮৩ সালে সেই ... ',
	},
	{
		link: 'https://ddkkhaaa.blogspot.com/2022/01/dharabahik-chatrasiksakasamparka1.html',
		image:
			'https://blogger.googleusercontent.com/img/a/AVvXsEiusY1JF0KGGyV4-1dvbCHtRty7BxhAkEGWb-UN5Qmv2nOoKl95-qpv7R243VMXNlXOpyG2eFBa01qyERrvOCz1YoxvRhbbXws0ya_HPrOWZHO8ODqnBOU6Kuqd713MqTva9lKE6Mj1Pf5VYexN0RJXBbO4NdVpmQSlO--o3vWDH9-NSrARSTqr2_UPNA=w320-h218',
		title: 'ছাত্র শিক্ষক সম্পর্ক | গোপাল বিশ্বাস',
		description:
			'বিদ্যালয় পুণ্যতম মন্দির। এই সমিতির পুজো সুসম্পন্ন হয় ছাত্র-শিক্ষক-অভিভাবক-পরিচালন সমিতির ... ',
	},
	{
		link: 'https://ddkkhaaa.blogspot.com/2024/11/01Pujo2024.html',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2wxctqFInigxwZz6Rb5x6REgEXBYc6V56fsr_EsqqQ-zinOHUVq04U0AoQHl2X_r7ybMhrUaoAQU8LPNkqv0K67KMiKM3ZHYDFDqXN4Brgs-3Rx3luT5ubYymoAkQXa8_Ko66JbXw6TRFaKt3TO0lzkwbZusPXu1Pp27CR7FEUx7nqasy2BPxxw-Ipt6Z/w320-h320/mother%20chilld.png',
		title: `" মা " - ই পরম আশ্রয় | দিব্যেন্দুশেখর...`,
		description:
			'" মা " হলেন স্নেহ , ভালবাসা , মায়া-মমতার জীবন্ত বিগ্রহ । ত্যাগ , তিতিক্ষা , নিষ্ঠা --- সর্বোপরি স্বার্থহীন...',
	},
	{
		link: 'https://ddkkhaaa.blogspot.com/2022/01/sketch-arijitdas.html',
		image:
			'https://blogger.googleusercontent.com/img/a/AVvXsEgNuVuPF5zhZh9ZY51Uy1udwyD4eq8JMVPCc7xgMvzq8I8MpiDEejJB6ripSCdDfFjTr3iS73UAjo-DjiK3FaMGLHzkCt2fpJnbiPKNxsq5Z7Di4xUMGk56mY0Vqk-ZTdLqwdZR1X14mdV1C_sJB3mh5FF6xYfH3jCcm8-LIBxoWuZkMERPFRWq_lq5-g=w452-h640',
		title: `স্কেচ`,
		description:
			'" মা " হলেন স্নেহ , ভালবাসা , মায়া-মমতার জীবন্ত বিগ্রহ । ত্যাগ , তিতিক্ষা , নিষ্ঠা --- সর্বোপরি স্বার্থহীন...',
	},
	{
		link: 'https://ddkkhaaa.blogspot.com/2024/11/06Pujo2024.html',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpITCZxfjteqamPtf4uTAxxO6HtzPgqI40NP6-s6Qu-8XAgivEN5TYW_Bbmq9UHzsP7El-WcBZj2mjPoEsQO8isXs8_hmNEJ8pixqcOfCqe88UaMMaUIDe35p1q_LbTixB3Tpsw66onjvrFcg4gQgjWAaR49ew6zQZM2ea9TdhupNch-8rtLPX8MkKIDQQ/s320/%E0%A6%AB%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%9C%20%E0%A6%B6%E0%A6%9F%20%E0%A6%8F%E0%A6%95%E0%A6%9F%E0%A6%BF%20%E0%A6%AB%E0%A7%81%E0%A6%9F%E0%A6%AC%E0%A6%B2%20%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9A.png',
		title: `ফ্রিজ শট: একটি ফুটবল ম্যাচ`,
		description:
			'এখানে মেঘ গাভীর মতো না চড়লেও, বৃষ্টি যেন এখন সত্যি সত্যিই বারোমাস জুড়ে পরে। আমাদের...',
	},
];

const PublicationSection = () => {
	return (
		<section className="my-24 w-full" id={'magazine'}>
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between px-5">
				<Header
					name={'Our Magazines'}
					paragraph="Dum Dum K. K. Hindu Academy Alumni Association official magazine managed by alumni and former teachers."
				/>

				<section className="grid w-full grid-cols-1 gap-6 text-xl font-bold text-white md:grid-cols-3">
					{publications.map((publication) => (
						<Card key={publication.link}>
							<CardHeader className="px-3 pt-3">
								<Link href={publication.link} target="_black">
									<Image
										src={publication.image}
										width={1000}
										height={0}
										alt={'event'}
										className="aspect-square rounded-lg border object-cover"
									/>
								</Link>
							</CardHeader>
							<CardContent>
								<CardTitle className="leading-snug">
									{publication.title}
								</CardTitle>
								<CardDescription className="pt-2">
									{publication.description}
								</CardDescription>
							</CardContent>

							<CardFooter className="p-3">
								<Link
									href={'https://ddkkhaaa.blogspot.com/2024/11/08Pujo2024.html'}
									target="_black"
								>
									<Button variant={'outline'}>Read More</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</section>
				<section className="mt-14">
					<Link href={'https://ddkkhaaa.blogspot.com'}>
						<Button className="p-6">
							See more Publications <ArrowRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default PublicationSection;
