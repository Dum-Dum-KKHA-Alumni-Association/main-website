import React from 'react';

const Heading = ({ name }: { name: string }) => {
	return (
		<section className="w-full pt-10">
			<div className="w-full bg-slate-200 py-10 text-center lg:py-14">
				<div className="mx-auto flex w-full max-w-[90rem] justify-center px-5 lg:justify-start">
					<h2>{name}</h2>
				</div>
			</div>
		</section>
	);
};

export default Heading;
