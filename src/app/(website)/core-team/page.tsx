'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GraduationCap, Calendar, Users } from 'lucide-react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';

interface Member {
	name: string;
	designation: string;
	passingYear: string;
	tenure: string;
	photo?: string;
	email?: string;
	linkedin?: string;
}

interface Committee {
	id: string;
	name: string;
	description: string;
	members: Member[];
}

const committees: Committee[] = [
	{
		id: 'executive',
		name: 'Executive Committee',
		description:
			'The executive body responsible for the overall vision, strategy, and operations of the Alumni Association.',
		members: [
			{
				name: 'Dr. Amitava Roy',
				designation: 'President',
				passingYear: '1985',
				tenure: '2024 - 2026',
				email: 'president@ddkkhaaa.com',
				linkedin: '#',
			},
			{
				name: 'Sri Subrata Sengupta',
				designation: 'Working President',
				passingYear: '1989',
				tenure: '2024 - 2026',
				email: 'working.president@ddkkhaaa.com',
				linkedin: '#',
			},
			{
				name: 'Sri Partha Sarathi Ghosh',
				designation: 'Senior Vice President',
				passingYear: '1990',
				tenure: '2024 - 2026',
				email: 'senior.vp@ddkkhaaa.com',
				linkedin: '#',
			},
			{
				name: 'Sri Indranil Mukherjee',
				designation: 'Associate Vice President',
				passingYear: '1993',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Joydeb Dutta',
				designation: 'Associate Vice President',
				passingYear: '1995',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Sandip Bhattacharya',
				designation: 'General Secretary',
				passingYear: '1998',
				tenure: '2024 - 2026',
				email: 'secretary@ddkkhaaa.com',
				linkedin: '#',
			},
			{
				name: 'Sri Sougata Mitra',
				designation: 'Joint Secretary',
				passingYear: '2002',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Ranajit Dey',
				designation: 'Treasurer',
				passingYear: '1996',
				tenure: '2024 - 2026',
				email: 'treasurer@ddkkhaaa.com',
			},
			{
				name: 'Sri Prosenjit Sen',
				designation: 'Convenor',
				passingYear: '2004',
				tenure: '2024 - 2026',
			},
		],
	},
	{
		id: 'sports',
		name: 'Sports Committee',
		description:
			'Organizes athletic meets, the annual football tournament, and other sporting activities for the alumni community.',
		members: [
			{
				name: 'Sri Abhishek Banerjee',
				designation: 'Convener',
				passingYear: '2008',
				tenure: '2024 - 2026',
				email: 'sports.convener@ddkkhaaa.com',
			},
			{
				name: 'Sri Sayantan Das',
				designation: 'Co-Convener',
				passingYear: '2012',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Rahul Bose',
				designation: 'Core Member',
				passingYear: '2014',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Pritam Saha',
				designation: 'Core Member',
				passingYear: '2016',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Sourav Pal',
				designation: 'Core Member',
				passingYear: '2018',
				tenure: '2024 - 2026',
			},
		],
	},
	{
		id: 'cultural',
		name: 'Cultural Committee',
		description:
			"Manages cultural events, festivals, Teacher's Day celebrations, and community gatherings.",
		members: [
			{
				name: 'Sri Anirban Roy',
				designation: 'Convener',
				passingYear: '2006',
				tenure: '2024 - 2026',
				email: 'cultural.convener@ddkkhaaa.com',
			},
			{
				name: 'Sri Debasish Chakraborty',
				designation: 'Co-Convener',
				passingYear: '2009',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Arnab Sen',
				designation: 'Core Member',
				passingYear: '2011',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Nilanjan Guha',
				designation: 'Core Member',
				passingYear: '2015',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Subhankar Dey',
				designation: 'Core Member',
				passingYear: '2017',
				tenure: '2024 - 2026',
			},
		],
	},
	{
		id: 'it-editorial',
		name: 'IT & Editorial Committee',
		description:
			'Maintains the website, association portal, communications, newsletters, and digital presence.',
		members: [
			{
				name: 'Sri Tejodeep Mitra Roy',
				designation: 'Convener & Tech Lead',
				passingYear: '2019',
				tenure: '2024 - 2026',
				email: 'it.admin@ddkkhaaa.com',
				linkedin: '#',
			},
			{
				name: 'Sri Srijan Sen',
				designation: 'Co-Convener',
				passingYear: '2020',
				tenure: '2024 - 2026',
			},
			{
				name: 'Sri Aniket Das',
				designation: 'Core Member',
				passingYear: '2021',
				tenure: '2024 - 2026',
			},
		],
	},
	{
		id: 'ex-committee',
		name: 'Ex-Committee Members',
		description:
			'Former executive committee members who continue to guide and support the association.',
		members: [
			{
				name: 'Sri Bimal Kumar Ghosh',
				designation: 'Ex-President',
				passingYear: '1980',
				tenure: '2022 - 2024',
			},
			{
				name: 'Sri Parthapratim Sen',
				designation: 'Ex-General Secretary',
				passingYear: '1991',
				tenure: '2022 - 2024',
			},
			{
				name: 'Sri Ashis Kumar Dhar',
				designation: 'Ex-Treasurer',
				passingYear: '1988',
				tenure: '2022 - 2024',
			},
		],
	},
];

const getGradientClass = (name: string) => {
	const gradients = [
		'from-blue-600 to-indigo-800 dark:from-blue-500 dark:to-indigo-700',
		'from-emerald-600 to-teal-800 dark:from-emerald-500 dark:to-teal-700',
		'from-purple-600 to-violet-800 dark:from-purple-500 dark:to-violet-700',
		'from-amber-600 to-orange-800 dark:from-amber-500 dark:to-orange-700',
		'from-rose-600 to-pink-800 dark:from-rose-500 dark:to-pink-700',
		'from-cyan-600 to-blue-800 dark:from-cyan-500 dark:to-blue-700',
	];
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}
	const index = Math.abs(hash) % gradients.length;
	return gradients[index];
};

const getInitials = (name: string) => {
	const cleanName = name.replace(/^(Dr\.|Sri|Smt\.|Mrs\.|Mr\.)\s+/i, '');
	const parts = cleanName.split(' ');
	if (parts.length >= 2) {
		return (parts[0][0] + parts[1][0]).toUpperCase();
	}
	return parts[0] ? parts[0].slice(0, 2).toUpperCase() : 'AA';
};

// Check if a member holds a key leadership/executive officer position
const isLeadership = (designation: string) => {
	const lower = designation.toLowerCase();
	return (
		lower.includes('president') ||
		lower.includes('secretary') ||
		lower.includes('treasurer') ||
		lower.includes('convener') ||
		lower.includes('convenor') ||
		lower.includes('vp')
	);
};

const MembershipPage = () => {
	return (
		<section className="min-h-screen bg-slate-50/50 pb-20 dark:bg-slate-900/50">
			<Navbar />
			<Heading name={'Committee Members'} />

			<div className="mx-auto mt-10 w-full max-w-7xl px-5">
				{/* Intro Section */}
				<div className="mb-12 flex flex-col items-center text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary dark:bg-primary/20 dark:text-primary-foreground">
						<Users className="h-4 w-4" />
						<span>Our Administration</span>
					</div>
					<p className="max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
						Meet the dedicated alumni guiding the Dum Dum Krishna Kumar Hindu
						Academy Alumni Association. Our committees collaborate to support
						events, network growth, sports, and community outreach.
					</p>
				</div>

				<Tabs defaultValue="executive" className="w-full">
					<div className="mb-10 flex justify-center">
						<TabsList className="grid h-auto w-full max-w-4xl grid-cols-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 sm:grid-cols-2 md:grid-cols-5">
							{committees.map((committee) => (
								<TabsTrigger
									key={committee.id}
									value={committee.id}
									className="rounded-lg py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-white"
								>
									{committee.name}
								</TabsTrigger>
							))}
						</TabsList>
					</div>

					{committees.map((committee) => {
						// Separate leadership members from general members
						const leaders = committee.members.filter((m) =>
							isLeadership(m.designation)
						);
						const generalMembers = committee.members.filter(
							(m) => !isLeadership(m.designation)
						);

						return (
							<TabsContent
								key={committee.id}
								value={committee.id}
								className="space-y-12"
							>
								{/* Committee Info Banner */}
								<div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
									<h4 className="text-xl font-bold text-slate-900 dark:text-white">
										About the {committee.name}
									</h4>
									<p className="max-w-4xl text-slate-600 dark:text-slate-400">
										{committee.description}
									</p>
								</div>

								{/* Leadership Grid */}
								{leaders.length > 0 && (
									<div className="space-y-6">
										<div className="flex items-center gap-3">
											<div className="h-1 w-8 rounded bg-primary" />
											<h5 className="text-lg font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
												Executive Officers & Leadership
											</h5>
										</div>
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
											{leaders.map((member, idx) => (
												<Card
													key={idx}
													className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-950"
												>
													<CardContent className="flex flex-col items-center p-6 text-center">
														{/* Avatar representation */}
														<div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr p-1 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50">
															{member.photo ? (
																<Image
																	src={member.photo}
																	alt={member.name}
																	width={96}
																	height={96}
																	className="rounded-full object-cover"
																/>
															) : (
																<div
																	className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr ${getGradientClass(
																		member.name
																	)} text-2xl font-bold text-white shadow-inner`}
																>
																	{getInitials(member.name)}
																</div>
															)}
														</div>

														{/* Badge */}
														<span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
															{member.designation}
														</span>

														{/* Name */}
														<h4 className="text-lg font-extrabold leading-tight text-slate-900 dark:text-white">
															{member.name}
														</h4>

														{/* Stats / Details */}
														<div className="mt-4 flex w-full flex-col items-center gap-1.5 border-t border-slate-100 pt-4 dark:border-slate-800">
															<span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
																<GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
																Class of {member.passingYear}
															</span>
															<span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
																<Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
																Tenure: {member.tenure}
															</span>
														</div>

														{/* Contact details */}
														{(member.email || member.linkedin) && (
															<div className="mt-4 flex items-center justify-center gap-4">
																{member.email && (
																	<a
																		href={`mailto:${member.email}`}
																		title="Email Member"
																		className="rounded-full bg-slate-50 p-2 text-slate-400 transition-all hover:bg-primary/10 hover:text-primary dark:bg-slate-900 dark:text-slate-500 dark:hover:bg-primary/20 dark:hover:text-primary-foreground"
																	>
																		<FaEnvelope className="h-4 w-4" />
																	</a>
																)}
																{member.linkedin && (
																	<a
																		href={member.linkedin}
																		target="_blank"
																		rel="noopener noreferrer"
																		title="LinkedIn Profile"
																		className="rounded-full bg-slate-50 p-2 text-slate-400 transition-all hover:bg-primary/10 hover:text-primary dark:bg-slate-900 dark:text-slate-500 dark:hover:bg-primary/20 dark:hover:text-primary-foreground"
																	>
																		<FaLinkedin className="h-4 w-4" />
																	</a>
																)}
															</div>
														)}
													</CardContent>
												</Card>
											))}
										</div>
									</div>
								)}

								{/* Committee Members Grid */}
								{generalMembers.length > 0 && (
									<div className="space-y-6">
										<div className="flex items-center gap-3">
											<div className="h-1 w-8 rounded bg-slate-400" />
											<h5 className="text-lg font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
												Committee Members
											</h5>
										</div>
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
											{generalMembers.map((member, idx) => (
												<Card
													key={idx}
													className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
												>
													<CardContent className="flex flex-col items-center p-5 text-center">
														{/* Avatar representation */}
														<div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr p-0.5 ring-2 ring-slate-100 transition-all duration-300 group-hover:ring-primary/30">
															{member.photo ? (
																<Image
																	src={member.photo}
																	alt={member.name}
																	width={80}
																	height={80}
																	className="rounded-full object-cover"
																/>
															) : (
																<div
																	className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr ${getGradientClass(
																		member.name
																	)} text-xl font-bold text-white shadow-inner`}
																>
																	{getInitials(member.name)}
																</div>
															)}
														</div>

														{/* Badge */}
														<span className="mb-3 inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
															{member.designation}
														</span>

														{/* Name */}
														<h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
															{member.name}
														</h4>

														{/* Stats / Details */}
														<div className="mt-3.5 flex w-full flex-col items-center gap-1 border-t border-slate-50 pt-3 dark:border-slate-800">
															<span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
																<GraduationCap className="h-3.5 w-3.5 text-blue-600/70 dark:text-blue-400/70" />
																Class of {member.passingYear}
															</span>
															<span className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
																<Calendar className="h-3 w-3 text-emerald-600/70 dark:text-emerald-400/70" />
																Tenure: {member.tenure}
															</span>
														</div>
													</CardContent>
												</Card>
											))}
										</div>
									</div>
								)}
							</TabsContent>
						);
					})}
				</Tabs>
			</div>

			<Footer />
		</section>
	);
};

export default MembershipPage;
