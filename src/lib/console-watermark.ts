'use client';

export function showConsoleWatermark() {
	if (typeof window === 'undefined') return;

	console.log(
		'%cDeveloped by %cTejodeep Mitra Roy & Pritam Majumder',
		'color: #60a5fa; font-size: 13px; font-weight: bold;',
		'color: #ffffff; font-size: 13px; font-weight: bold;'
	);

	console.log(
		'%cPlanner: %cDebojit Mitra Roy',
		'color: #a78bfa; font-size: 13px; font-weight: bold;',
		'color: #e5e7eb; font-size: 13px;'
	);

	console.log(
		'%cDesigned & Initiated by %cMitanko Roy',
		'color: #34d399; font-size: 13px; font-weight: bold;',
		'color: #ffffff; font-size: 13px; font-weight: bold;'
	);

	console.log(
		'%cMANAGED BY DDKKHAAA IT & COMMUNICATION TEAM',
		'background: #dc2626; color: #ffffff; font-size: 14px; font-weight: bold; padding: 8px 12px; border-radius: 5px;'
	);
}
