import Image from 'next/image';
import React from 'react';

const Gallery = () => {
	return (
		<section className="w-full bg-foreground py-24">
			<section className="m-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5">
				<section>
					<h2 className="text-white">Gallery</h2>
				</section>
				<section className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
					<Image
						src={
							'https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/469837820_987046696787925_4095679786368803680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FUvlxbECtPcQ7kNvgFzoB_8&_nc_zt=23&_nc_ht=scontent.fccu2-1.fna&_nc_gid=AGcmHs0jlOb3XAUpK65VC-a&oh=00_AYA0oXDOdng9Xe_8RlUdjx_9j_KSDmLcEnJfJ3GhqfrEkw&oe=677C6C8A'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={
							'https://scontent.fccu2-2.fna.fbcdn.net/v/t39.30808-6/467768672_974718078020787_5402070218600781657_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Hl1IOco1BEoQ7kNvgEEjVHP&_nc_zt=23&_nc_ht=scontent.fccu2-2.fna&_nc_gid=AVYignJN5JrL3SALl6WP8-5&oh=00_AYBET0BBUOq5OtPowdWcQuOpavQ_kbQF6077MUAnTCj_0Q&oe=677C8083'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={
							'https://scontent.fccu2-2.fna.fbcdn.net/v/t39.30808-6/467737813_974718424687419_6635548993205318053_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0UhthcY8akoQ7kNvgFZesVO&_nc_zt=23&_nc_ht=scontent.fccu2-2.fna&_nc_gid=AbDpkXCOBRdaUsXyITVVKpd&oh=00_AYAxkpgpVHLIKWIxvijQeUuL9TvRYZSEBsuaLNCO4JZerQ&oe=677C6A56'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={
							'https://scontent.fccu2-3.fna.fbcdn.net/v/t39.30808-6/462586038_942652447894017_8651608575447746117_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ViEI2UI70kUQ7kNvgHPgMQr&_nc_zt=23&_nc_ht=scontent.fccu2-3.fna&_nc_gid=AKJ8t64KJKLljXhfg4qf7XH&oh=00_AYDKXtne-HUnflaup9qKz1hD4jGEb_Zd7H_WaJc3Wf_eqg&oe=677C7346'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={
							'https://scontent.fccu2-2.fna.fbcdn.net/v/t39.30808-6/459927468_922468759912386_7448873073747866659_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JMnp-OLZEo0Q7kNvgHfurEg&_nc_zt=23&_nc_ht=scontent.fccu2-2.fna&_nc_gid=Ar-AuTLD_JrDhgG1sIlRSNe&oh=00_AYAKcSJkFzgmqT7WLvwS73Eif_Ur5o2FGvVPQGrYmh1hlQ&oe=677C7A10'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
					<Image
						src={
							'https://scontent.fccu2-3.fna.fbcdn.net/v/t39.30808-6/456751356_907111621448100_1626804805983324163_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1GFaMC66eB0Q7kNvgFDanz7&_nc_zt=23&_nc_ht=scontent.fccu2-3.fna&_nc_gid=ACgLnoi_2tORwizPHSm8Hil&oh=00_AYDKtJg0fPXB1jAIx95JB-hmf4flyS7bT5Pvq38oo7ivxA&oe=677C524C'
						}
						width={1000}
						height={0}
						alt={'event'}
						className="aspect-square rounded-lg"
					/>
				</section>
			</section>
		</section>
	);
};

export default Gallery;
