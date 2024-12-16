import React from 'react';

const Heading = ({ name }: { name: string }) => {
	return (
		<div className="w-full">
			<div className="w-full bg-slate-200 py-10 lg:py-14">
				<div className="mx-auto flex w-full max-w-[90rem] justify-center px-5 lg:justify-start">
					<h1>{name}</h1>
				</div>
			</div>
		</div>
	);
};

export default Heading;
