'use client';

import { useEffect } from 'react';

let watermarkShown = false;

export default function ConsoleWatermark() {
	useEffect(() => {
		if (watermarkShown) return;
		watermarkShown = true;

		console.log(
			'%cDeveloped by Tejodeep Mitra Roy & Pritam Majumder',
			'background:#1e1b4b;color:white;font-size:16px;font-weight:bold;padding:10px;border-radius:6px;'
		);

		console.log(
			'%cPlanner: Debojit Mitra Roy',
			'background:#1e1b4b;color:white;font-size:16px;font-weight:bold;padding:10px;border-radius:6px;'
		);

		console.log(
			'%cDesigned & Initiated by Mitanka Roy',
			'background:#1e1b4b;color:white;font-size:16px;font-weight:bold;padding:10px;border-radius:6px;'
		);

		console.log(
			'%cMANAGED BY DDKKHAAA IT & COMMUNICATION TEAM',
			'background:#dc2626;color:white;font-size:14px;font-weight:bold;padding:8px;border-radius:6px;'
		);
	}, []);

	return null;
}
