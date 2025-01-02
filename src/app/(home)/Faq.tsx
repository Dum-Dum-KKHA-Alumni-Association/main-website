import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

const faqs: Array<{ question: string; answer: string }> = [
	{
		question: 'Is it styled?',
		answer:
			'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
	},
];

const Faq = () => {
	return (
		<section className="mx-auto flex w-full max-w-7xl flex-col px-5 py-16 md:flex-row md:py-24">
			<section className="flex w-full flex-col gap-5 pr-20 md:w-1/2">
				<h2>FAQ</h2>
				<p>
					We face Common problems and Queries from our Alumines. So We Answer
					most common Queries{' '}
				</p>
			</section>
			<section className="w-full md:w-1/2">
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={faq.question} value={`item-${index}`}>
							<AccordionTrigger className="text-lg">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</section>
	);
};

export default Faq;
