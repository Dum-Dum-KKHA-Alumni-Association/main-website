import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const MiniSideCallout = () => {
	return (
		<Link
			href={'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E'}
			className="fixed bottom-9 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-green-400 shadow-lg md:right-8 md:h-14 md:w-14"
		>
			<FaWhatsapp className="bg-green-400 text-2xl text-white md:text-3xl" />
		</Link>
	);
};

export default MiniSideCallout;
