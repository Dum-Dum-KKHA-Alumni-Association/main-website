import React from 'react';

const Header = ({ name, paragraph }: { name: string; paragraph?: string }) => {
	return (
		<section className="flex w-full flex-col items-center gap-5 pb-10 lg:pb-14">
			<h2>{name}</h2>
			<div className="mx-auto flex w-full max-w-4xl justify-center px-5">
				<p className="text-center">{paragraph}</p>
			</div>
		</section>
	);
};

export default Header;
