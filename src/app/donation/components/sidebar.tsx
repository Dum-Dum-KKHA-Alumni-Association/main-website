import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const Sidebar = () => {
	return (
		<section>
			<Card>
				<CardHeader>
					<CardTitle>
						<h4>Categories</h4>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-1 flex-col gap-3">
					<Button className="flex w-full justify-between py-5 text-lg">
						<span>All</span>
						<span>363</span>
					</Button>
					<Button
						className="flex w-full justify-between py-5 text-lg"
						variant={'outline'}
					>
						<span>All</span>
						<span>363</span>
					</Button>
					<Button
						className="flex w-full justify-between py-5 text-lg"
						variant={'outline'}
					>
						<span>All</span>
						<span>363</span>
					</Button>
				</CardContent>
			</Card>
		</section>
	);
};

export default Sidebar;
