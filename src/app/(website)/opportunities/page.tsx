'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {
	Briefcase,
	GraduationCap,
	HeartPulse,
	Scale,
	Cpu,
	Trophy,
	Palette,
	Landmark,
	HandHeart,
	Users,
	Search,
	Sparkles,
	CheckCircle2,
	ArrowRight,
	PlusCircle,
	MapPin,
	Mail,
	HelpCircle,
	Send,
	Flame,
	Check,
	SlidersHorizontal,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

// Types
type ForumCategory =
	| 'all'
	| 'business'
	| 'tech'
	| 'healthcare'
	| 'education'
	| 'legal'
	| 'sports'
	| 'media'
	| 'public_service'
	| 'social_impact';

interface Forum {
	id: string;
	title: string;
	category: ForumCategory;
	categoryName: string;
	badge: string;
	icon: React.ComponentType<{ className?: string }>;
	accentColor: string;
	tagline: string;
	description: string;
	keyInitiatives: string[];
	tags: string[];
	activeMembers: string;
	coordinators: string;
	whatsappLink?: string;
	opportunitiesCount: number;
}

interface OpportunityItem {
	id: string;
	forumId: string;
	forumName: string;
	title: string;
	type: 'Job' | 'Mentorship' | 'Partnership' | 'Pro-Bono' | 'Event';
	typeColor: string;
	postedBy: string;
	batch: string;
	location: string;
	date: string;
	description: string;
	contactEmail: string;
}

// Forums Data
const FORUMS_DATA: Forum[] = [
	{
		id: 'business',
		title: 'Business & Entrepreneurs Guild',
		category: 'business',
		categoryName: 'Business & Startups',
		badge: 'High Impact',
		icon: Briefcase,
		accentColor:
			'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
		tagline:
			'Empowering alumni-owned ventures, business commerce, and startup collaborations.',
		description:
			'A dedicated hub uniting business founders, merchants, startup creators, exporters, and corporate leaders. We drive mutual B2B referrals, vendor partnerships, seed pitch sessions, and commercial growth among alumni.',
		keyInitiatives: [
			'Monthly Alumni Business Connect & Referral Exchanges',
			'Exclusive Alumni-to-Alumni B2B Supplier Directory',
			'Early-stage Venture Pitch & Angel Mentor Sessions',
			'SME Tax, Trade & Banking Advisory Clinics',
		],
		tags: [
			'#Entrepreneurs',
			'#B2BReferrals',
			'#Startups',
			'#Commerce',
			'#Investments',
			'#SME',
		],
		activeMembers: '380+ Alumni',
		coordinators: 'Led by Commerce & Industrialist Alumni Wing',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 14,
	},
	{
		id: 'tech',
		title: 'IT, Software & Deep Tech Forum',
		category: 'tech',
		categoryName: 'IT & Engineering',
		badge: 'Most Active',
		icon: Cpu,
		accentColor:
			'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
		tagline:
			'Bridging software engineers, cloud architects, AI researchers, and tech pioneers globally.',
		description:
			'Connecting technology professionals across Bengaluru, Hyderabad, Pune, Kolkata, Silicon Valley, and beyond. Designed to exchange internal job referrals, mentor junior engineers, conduct tech hackathons, and build open projects.',
		keyInitiatives: [
			'Internal Job Referrals across FAANG, Unicorns & Global IT MNCs',
			'Technical Mock Interviews & Resume Review for Graduating Students',
			'Generative AI, Cloud & Cybersecurity Knowledge Masterclasses',
			'Open Source Initiatives & Student Tech Fellowship Program',
		],
		tags: [
			'#SoftwareEngineering',
			'#ArtificialIntelligence',
			'#CloudDevOps',
			'#TechCareers',
			'#WebDevelopment',
		],
		activeMembers: '520+ Alumni',
		coordinators: 'Led by Software Architects & Engineering Alumni',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 22,
	},
	{
		id: 'healthcare',
		title: 'Health & Medical Sciences Forum',
		category: 'healthcare',
		categoryName: 'Healthcare & Medicine',
		badge: 'Humanitarian',
		icon: HeartPulse,
		accentColor:
			'from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400',
		tagline:
			'Promoting mutual wellness, second opinions, emergency care, and school health checkups.',
		description:
			'An esteemed guild of alumni physicians, surgeons, dental surgeons, pharmacists, and healthcare administrators providing mutual healthcare consultations, medical guidance, and free social camps for the school community.',
		keyInitiatives: [
			'Free Annual Medical Checkup & Eye Camps at Dum Dum KKHA School',
			'Emergency Medical Assistance & Rapid Blood Donor Network',
			'Second Opinion Consultations for Alumni Families & Teachers',
			'Mental Wellness & Preventive Lifestyle Webinars',
		],
		tags: [
			'#Doctors',
			'#ClinicalCare',
			'#EmergencyBlood',
			'#SchoolHealthCamp',
			'#Wellness',
		],
		activeMembers: '210+ Alumni',
		coordinators: 'Led by Senior Medical Alumni & Hospital Consultants',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 9,
	},
	{
		id: 'education',
		title: 'Educators, Researchers & Academics Forum',
		category: 'education',
		categoryName: 'Education & Research',
		badge: 'Academic Pride',
		icon: GraduationCap,
		accentColor:
			'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
		tagline:
			'Nurturing academic excellence, research grants, and high-school to university pathways.',
		description:
			'Bringing together university professors, school educators, scientists, and researchers to mentor younger alumni and students toward stellar academic careers, competitive exams, and international higher education.',
		keyInitiatives: [
			'Career Guidance & Subject Mentoring for Classes 10 & 12 Students',
			'Competitive Exam Guidance (JEE, NEET, CUET, NET, GATE)',
			'Global Scholarship & Research Fellowship Application Support',
			'Annual Teacher Appreciation Program & Pedagogical Seminars',
		],
		tags: [
			'#Academics',
			'#Professors',
			'#ResearchScholars',
			'#HigherEd',
			'#CompetitiveExams',
		],
		activeMembers: '290+ Alumni',
		coordinators: 'Led by College Professors & School Mentors',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 11,
	},
	{
		id: 'legal',
		title: 'Legal, Governance & Compliance Forum',
		category: 'legal',
		categoryName: 'Law & Governance',
		badge: 'Advisory Guild',
		icon: Scale,
		accentColor:
			'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400',
		tagline:
			'Defending justice, civil liberties, legal compliance, and corporate dispute guidance.',
		description:
			'Comprising advocates of Calcutta High Court & Supreme Court, corporate legal counsels, company secretaries, and patent attorneys. Provides trusted guidance on legal matters, enterprise disputes, property rights, and pro-bono aid.',
		keyInitiatives: [
			'Pro-Bono Legal Clinic for Underprivileged Alumni & School Staff',
			'Corporate Contracts, IPR & Startup Compliance Masterclasses',
			'Legal Internship Openings & Junior Advocate Mentorship',
			'Property Verification & Civic Law Awareness Sessions',
		],
		tags: [
			'#Advocates',
			'#HighCourt',
			'#CorporateLaw',
			'#IPR',
			'#ProBono',
			'#LegalAid',
		],
		activeMembers: '175+ Alumni',
		coordinators: 'Led by High Court Advocates & Corporate Legal Heads',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 6,
	},
	{
		id: 'sports',
		title: 'Sports, Athletics & Fitness Forum',
		category: 'sports',
		categoryName: 'Sports & Fitness',
		badge: 'Vibrant Spirit',
		icon: Trophy,
		accentColor:
			'from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-400',
		tagline:
			'Igniting sporting camaraderie through inter-batch football, cricket, and athletic tournaments.',
		description:
			'Reviving the timeless sporting heritage of Dum Dum KK Hindu Academy. Organizes the flagship annual alumni football cup, cricket leagues, marathon teams, and sponsors training equipment for promising school athletes.',
		keyInitiatives: [
			'Annual DDKKHAAA Inter-Batch Football Cup & Cricket Tournaments',
			'Sports Kit & Training Sponsorship for Current School Athletes',
			'Weekend Sports & Fitness Meetups for Alumni & Families',
			'Alumni representation in District & Veteran Football Leagues',
		],
		tags: [
			'#Football',
			'#Cricket',
			'#Athletics',
			'#AlumniCup',
			'#FitnessCommunity',
		],
		activeMembers: '440+ Alumni',
		coordinators: 'Led by the Sports & Athletics Standing Committee',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 8,
	},
	{
		id: 'media',
		title: 'Media, Arts, Literature & Culture Forum',
		category: 'media',
		categoryName: 'Media & Creative Arts',
		badge: 'Creative Wing',
		icon: Palette,
		accentColor:
			'from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400',
		tagline:
			'Celebrating literature, journalism, cinema, photography, design, and Bengali culture.',
		description:
			'Uniting journalists, authors, filmmakers, actors, musicians, photographers, graphic designers, and cultural organizers. Manages the prestigious Uttoron alumni magazine, documentary archives, and celebration galas.',
		keyInitiatives: [
			'Annual Souvenir Publication "Uttoron" & Literary Compilations',
			'Documentary Projects Preserving School & Heritage History',
			'Creative Industry Portfolio Reviews & Media Job Openings',
			'Cultural Gatherings, Musical Evenings & Drama Stage Shows',
		],
		tags: [
			'#Journalism',
			'#Literature',
			'#FilmProduction',
			'#Photography',
			'#Uttoron',
			'#GraphicDesign',
		],
		activeMembers: '260+ Alumni',
		coordinators: 'Led by Cultural Committee & Editorial Heads',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 7,
	},
	{
		id: 'public_service',
		title: 'Public Administration & Civil Services Forum',
		category: 'public_service',
		categoryName: 'Civil Services & Defense',
		badge: 'National Service',
		icon: Landmark,
		accentColor:
			'from-slate-500/20 to-sky-500/10 border-slate-500/30 text-slate-700 dark:text-slate-300',
		tagline:
			'Guiding future civil servants, defense personnel, and administrative leaders toward nation-building.',
		description:
			'A dedicated network of alumni in administrative services (WBCS, IAS, IPS), central government departments, defense forces, and municipal administration providing structured mentorship for competitive public service examinations.',
		keyInitiatives: [
			'WBCS & UPSC Free Mentorship Circles for Passionate Alumni',
			'Interactive Mock Interviews by Serving & Retired Officers',
			'Seminars on Public Policy, Good Governance & Administrative Ethics',
			'Guidance on Career Opportunities in Armed Forces & Police Service',
		],
		tags: [
			'#CivilServices',
			'#WBCS',
			'#UPSC',
			'#DefenseForces',
			'#PublicAdministration',
		],
		activeMembers: '130+ Alumni',
		coordinators: 'Led by Serving & Former Administrative Alumni',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 5,
	},
	{
		id: 'social_impact',
		title: 'Social Impact & School Welfare Guild',
		category: 'social_impact',
		categoryName: 'Social Impact & Welfare',
		badge: 'Giving Back',
		icon: HandHeart,
		accentColor:
			'from-emerald-600/20 to-teal-600/10 border-emerald-600/30 text-emerald-700 dark:text-emerald-300',
		tagline:
			'Driving school infrastructure upgrades, student scholarships, and disaster relief programs.',
		description:
			'The philanthropic arm dedicated to uplifting our alma mater. From funding classroom smartboards and lab infrastructure to supporting disadvantaged students with tuition scholarships and organizing emergency disaster response squads.',
		keyInitiatives: [
			'Student Tuition & Educational Book Sponsorship Drive',
			'School Science Lab & Smart Classroom Upgrade Projects',
			'Emergency Flood, Cyclone & Medical Relief Mobilization',
			'Winter Clothing & Tree Plantation Social Drives in Dum Dum',
		],
		tags: [
			'#SchoolWelfare',
			'#Scholarships',
			'#DisasterRelief',
			'#Philanthropy',
			'#SmartClassroom',
		],
		activeMembers: '350+ Alumni',
		coordinators: 'Led by the Social Welfare & Alumni Executive Body',
		whatsappLink: 'https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E',
		opportunitiesCount: 10,
	},
];

// Sample Opportunities Listed on the Board
const OPPORTUNITIES_DATA: OpportunityItem[] = [
	{
		id: 'opp-1',
		forumId: 'tech',
		forumName: 'IT & Deep Tech Forum',
		title: 'Senior Full-Stack Developer (Next.js & Node.js) - Alumni Referral',
		type: 'Job',
		typeColor:
			'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
		postedBy: 'Subhamoy Ghosh',
		batch: 'Batch of 2012',
		location: 'Kolkata / Remote Hybrid',
		date: 'Posted 2 days ago',
		description:
			'Our enterprise software firm in Sector V is expanding its engineering squad. Seeking alumni developers with 3+ years experience in React/Next.js and microservices. Direct internal referral with priority interview rounds.',
		contactEmail: 'subhamoy.tech@alumni-network.com',
	},
	{
		id: 'opp-2',
		forumId: 'business',
		forumName: 'Business & Entrepreneurs Guild',
		title: 'Seeking Packaging & Logistics Partner for E-Commerce Brand',
		type: 'Partnership',
		typeColor:
			'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
		postedBy: 'Rajiv Mukherjee',
		batch: 'Batch of 2004',
		location: 'Dum Dum / Kolkata',
		date: 'Posted 3 days ago',
		description:
			'Looking to partner with an alumni-owned packaging manufacturing unit or third-party logistics supplier for our growing FMCG and giftware brand. Long-term commercial agreement with prompt billing cycles.',
		contactEmail: 'rajiv.biz@ddkkhaaa.com',
	},
	{
		id: 'opp-3',
		forumId: 'education',
		forumName: 'Educators & Academics Forum',
		title: 'Free NEET & JEE Physics Mentorship for Class 11-12 Students',
		type: 'Mentorship',
		typeColor:
			'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300',
		postedBy: 'Prof. Dr. Tapas Sengupta',
		batch: 'Batch of 1996',
		location: 'Online Weekend Sessions',
		date: 'Posted 4 days ago',
		description:
			'Offering free bi-weekly problem-solving masterclasses in Mechanics & Electrodynamics for students and young alumni preparing for engineering and medical entrance tests. 10 spots open.',
		contactEmail: 'tapas.academic@ddkkhaaa.com',
	},
	{
		id: 'opp-4',
		forumId: 'healthcare',
		forumName: 'Health & Medical Sciences Forum',
		title: 'Monthly Specialist Medical Consultation Clinic for Alumni Families',
		type: 'Pro-Bono',
		typeColor:
			'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300',
		postedBy: 'Dr. Debabrata Roy (MD, Cardiology)',
		batch: 'Batch of 1991',
		location: 'Dum Dum KKHA School Campus / Telemedicine',
		date: 'Posted 1 week ago',
		description:
			'Free second opinion and cardiology advice clinic hosted on the first Sunday of every month. Open to all registered alumni members, their parents, and retired school faculty members.',
		contactEmail: 'health.care@ddkkhaaa.com',
	},
	{
		id: 'opp-5',
		forumId: 'sports',
		forumName: 'Sports & Athletics Forum',
		title: 'DDKKHAAA Annual Cricket Premier League 2026 - Team Registrations',
		type: 'Event',
		typeColor:
			'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
		postedBy: 'Sports Standing Committee',
		batch: 'All Batches',
		location: 'Dum Dum Park Ground',
		date: 'Upcoming Next Month',
		description:
			'Inter-batch 10-over cricket extravaganza celebrating alumni camaraderie. 8 batch squads will compete for the championship trophy. Limited roster slots per decade cohort.',
		contactEmail: 'sports@ddkkhaaa.com',
	},
	{
		id: 'opp-6',
		forumId: 'legal',
		forumName: 'Legal & Governance Forum',
		title: 'Startup Legal Check & Trademark Registration Advisory Session',
		type: 'Pro-Bono',
		typeColor:
			'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
		postedBy: 'Adv. Souvik Banerjee',
		batch: 'Batch of 2008',
		location: 'Calcutta High Court Chambers / Virtual',
		date: 'Active Program',
		description:
			'Complimentary 45-minute advisory on IP filing, founder agreements, and trademark protection for alumni entrepreneurs starting new businesses in West Bengal and beyond.',
		contactEmail: 'souvik.legal@ddkkhaaa.com',
	},
];

const CATEGORY_TABS: { id: ForumCategory; label: string }[] = [
	{ id: 'all', label: 'All Forums' },
	{ id: 'business', label: 'Business & Startups' },
	{ id: 'tech', label: 'IT & Tech' },
	{ id: 'healthcare', label: 'Healthcare' },
	{ id: 'education', label: 'Education & Research' },
	{ id: 'legal', label: 'Law & Governance' },
	{ id: 'sports', label: 'Sports & Fitness' },
	{ id: 'media', label: 'Media & Arts' },
	{ id: 'public_service', label: 'Civil Services' },
	{ id: 'social_impact', label: 'School Welfare' },
];

const OpportunitiesPage = () => {
	// Search and Category Filter
	const [searchQuery, setSearchQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState<ForumCategory>('all');

	// Active Forum for Modal Details / Joining
	const [selectedForum, setSelectedForum] = useState<Forum | null>(null);
	const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
	const [joinSuccess, setJoinSuccess] = useState(false);

	// Join Form Inputs
	const [joinFormData, setJoinFormData] = useState({
		fullName: '',
		batchYear: '',
		phone: '',
		email: '',
		profession: '',
		forumId: '',
		note: '',
	});

	// Share Opportunity Modal
	const [isShareOpportunityOpen, setIsShareOpportunityOpen] = useState(false);
	const [opportunitySubmitted, setOpportunitySubmitted] = useState(false);
	const [oppFormData, setOppFormData] = useState({
		title: '',
		type: 'Job',
		forumId: 'business',
		organization: '',
		location: '',
		email: '',
		description: '',
	});

	// Filtered Forums
	const filteredForums = useMemo(() => {
		return FORUMS_DATA.filter((forum) => {
			const matchesCategory =
				activeCategory === 'all' || forum.category === activeCategory;
			const query = searchQuery.trim().toLowerCase();
			const matchesSearch =
				!query ||
				forum.title.toLowerCase().includes(query) ||
				forum.description.toLowerCase().includes(query) ||
				forum.tags.some((tag) => tag.toLowerCase().includes(query)) ||
				forum.categoryName.toLowerCase().includes(query);

			return matchesCategory && matchesSearch;
		});
	}, [searchQuery, activeCategory]);

	// Open Join Dialog for a specific Forum
	const handleOpenJoinDialog = (forum: Forum) => {
		setSelectedForum(forum);
		setJoinFormData((prev) => ({
			...prev,
			forumId: forum.id,
		}));
		setJoinSuccess(false);
		setIsJoinDialogOpen(true);
	};

	// Handle Join Form Submit
	const handleJoinSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setJoinSuccess(true);
	};

	// Handle Opportunity Post Submit
	const handleOpportunitySubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setOpportunitySubmitted(true);
	};

	return (
		<main className="min-h-screen bg-slate-50/60 dark:bg-slate-950">
			<Navbar />

			{/* HERO SECTION */}
			<section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pb-16 pt-28 lg:pt-36">
				{/* Decorative Background Elements */}
				<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
					<div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
				</div>

				<div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
					<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
						<Sparkles className="h-4 w-4 text-primary" />
						<span>DDKKHAAA Professional & Interest Guilds</span>
					</div>

					<h1 className="mt-6 font-sora text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
						Alumni Forums & Opportunities
					</h1>

					<p className="mx-auto mt-5 max-w-3xl font-inter text-base text-muted-foreground sm:text-xl">
						A social and professional community empowering Dum Dum Krishna Kumar
						Hindu Academy alumni to thrive side-by-side. Connect across diverse
						industries, share valuable career opportunities, and mentor the next
						generation.
					</p>

					{/* Action Buttons */}
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<a href="#forums-directory">
							<Button size="lg" className="gap-2 font-semibold shadow-md">
								Explore Forums <ArrowRight className="h-4 w-4" />
							</Button>
						</a>

						<Button
							variant="outline"
							size="lg"
							className="gap-2 border-primary/30 bg-background/80 font-semibold backdrop-blur hover:bg-primary/5"
							onClick={() => setIsShareOpportunityOpen(true)}
						>
							<PlusCircle className="h-4 w-4 text-primary" />
							Share an Opportunity
						</Button>

						<a
							href="https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="ghost"
								size="lg"
								className="gap-2 text-green-600 hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950/40"
							>
								<FaWhatsapp className="h-5 w-5" />
								Join WhatsApp Channel
							</Button>
						</a>
					</div>

					{/* Metric Highlights Bar */}
					<div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-border/80 bg-background/90 p-5 shadow-sm backdrop-blur sm:grid-cols-4">
						<div className="flex flex-col items-center border-b border-border/60 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
							<span className="font-sora text-2xl font-bold text-primary sm:text-3xl">
								9+
							</span>
							<span className="text-xs font-medium text-muted-foreground sm:text-sm">
								Specialized Forums
							</span>
						</div>
						<div className="flex flex-col items-center border-b border-border/60 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
							<span className="font-sora text-2xl font-bold text-primary sm:text-3xl">
								2,500+
							</span>
							<span className="text-xs font-medium text-muted-foreground sm:text-sm">
								Alumni Connected
							</span>
						</div>
						<div className="flex flex-col items-center sm:border-r">
							<span className="font-sora text-2xl font-bold text-primary sm:text-3xl">
								85+
							</span>
							<span className="text-xs font-medium text-muted-foreground sm:text-sm">
								Opportunities Exchanged
							</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-sora text-2xl font-bold text-primary sm:text-3xl">
								1933
							</span>
							<span className="text-xs font-medium text-muted-foreground sm:text-sm">
								Timeless Legacy
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* WHY JOIN SECTION - MUTUAL GROWTH PILLARS */}
			<section className="border-y border-border/60 bg-background py-14">
				<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="font-sora text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Why Connect Through Our Forums?
						</h2>
						<p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
							Building a self-sustaining ecosystem where alumni uplift each
							other across careers, ventures, and personal life stages.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<div className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
								<Briefcase className="h-6 w-6" />
							</div>
							<h3 className="mt-4 font-sora text-lg font-semibold text-foreground">
								Business & Career Growth
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Tap into trusted alumni networks for high-value business leads,
								supplier partnerships, and priority internal corporate job
								referrals.
							</p>
						</div>

						<div className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
								<GraduationCap className="h-6 w-6" />
							</div>
							<h3 className="mt-4 font-sora text-lg font-semibold text-foreground">
								Mentorship & Guidance
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Senior alumni actively coach recent graduates and students with
								career roadmaps, mock interviews, and competitive exam
								strategies.
							</p>
						</div>

						<div className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 transition group-hover:bg-rose-600 group-hover:text-white">
								<HeartPulse className="h-6 w-6" />
							</div>
							<h3 className="mt-4 font-sora text-lg font-semibold text-foreground">
								Pro-Bono Support
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Alumni doctors, legal experts, tax consultants, and advisors
								extend consultation aid to fellow schoolmates and retired
								teachers.
							</p>
						</div>

						<div className="group rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
								<Users className="h-6 w-6" />
							</div>
							<h3 className="mt-4 font-sora text-lg font-semibold text-foreground">
								Lifelong Camaraderie
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Transcend batch divides. Meet alumni across 7 decades over
								sports cups, cultural soirees, and regular regional chapter
								meetups.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FORUMS DIRECTORY SECTION */}
			<section id="forums-directory" className="py-16">
				<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
						<div>
							<div className="flex items-center gap-2 text-sm font-semibold text-primary">
								<SlidersHorizontal className="h-4 w-4" />
								<span>Explore Guilds</span>
							</div>
							<h2 className="mt-1 font-sora text-3xl font-bold tracking-tight text-foreground">
								Alumni Guilds Directory
							</h2>
							<p className="mt-1 text-sm text-muted-foreground">
								Choose your sector, join the active discussion circle, and
								participate in initiatives.
							</p>
						</div>

						{/* Search Input */}
						<div className="relative w-full max-w-md">
							<Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search forums (e.g. IT, Legal, Health, Sports)..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full bg-background pl-10 pr-4 shadow-sm"
							/>
							{searchQuery && (
								<button
									onClick={() => setSearchQuery('')}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
								>
									Clear
								</button>
							)}
						</div>
					</div>

					{/* Category Filter Pills */}
					<div className="mt-8 flex flex-wrap gap-2 overflow-x-auto pb-2">
						{CATEGORY_TABS.map((tab) => {
							const isActive = activeCategory === tab.id;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveCategory(tab.id)}
									className={`rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
										isActive
											? 'bg-primary text-primary-foreground shadow-sm'
											: 'border border-border/80 bg-background text-muted-foreground hover:bg-muted/80 hover:text-foreground'
									}`}
								>
									{tab.label}
								</button>
							);
						})}
					</div>

					{/* Forum Cards Grid */}
					{filteredForums.length === 0 ? (
						<div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
							<HelpCircle className="mx-auto h-12 w-12 text-muted-foreground/60" />
							<h3 className="mt-4 font-sora text-lg font-semibold text-foreground">
								No forums matched your search
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Try searching for terms like &quot;Tech&quot;, &quot;Law&quot;,
								&quot;Business&quot;, or reset your category filter.
							</p>
							<Button
								variant="outline"
								className="mt-5"
								onClick={() => {
									setSearchQuery('');
									setActiveCategory('all');
								}}
							>
								Reset Filters
							</Button>
						</div>
					) : (
						<div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
							{filteredForums.map((forum) => {
								const IconComponent = forum.icon;
								return (
									<Card
										key={forum.id}
										className="group flex flex-col justify-between border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
									>
										<CardHeader className="pb-3">
											<div className="flex items-start justify-between gap-3">
												<div
													className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${forum.accentColor}`}
												>
													<IconComponent className="h-6 w-6" />
												</div>
												<Badge
													variant="secondary"
													className="text-xs font-medium"
												>
													{forum.badge}
												</Badge>
											</div>

											<CardTitle className="mt-4 font-sora text-xl font-bold text-foreground">
												{forum.title}
											</CardTitle>

											<CardDescription className="line-clamp-2 text-xs font-medium text-primary">
												{forum.tagline}
											</CardDescription>
										</CardHeader>

										<CardContent className="space-y-4 pb-4">
											<p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
												{forum.description}
											</p>

											{/* Key Initiatives preview */}
											<div className="rounded-lg bg-muted/40 p-3">
												<span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
													Core Initiatives
												</span>
												<ul className="mt-2 space-y-1.5">
													{forum.keyInitiatives.slice(0, 2).map((item, idx) => (
														<li
															key={idx}
															className="flex items-start gap-2 text-xs text-foreground/90"
														>
															<CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
															<span className="line-clamp-1">{item}</span>
														</li>
													))}
												</ul>
											</div>

											{/* Hashtags */}
											<div className="flex flex-wrap gap-1.5 pt-1">
												{forum.tags.slice(0, 3).map((tag, idx) => (
													<span
														key={idx}
														className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
													>
														{tag}
													</span>
												))}
											</div>

											{/* Stats Row */}
											<div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
												<div className="flex items-center gap-1.5">
													<Users className="h-3.5 w-3.5 text-primary" />
													<span>{forum.activeMembers}</span>
												</div>
												<div className="flex items-center gap-1.5">
													<Flame className="h-3.5 w-3.5 text-amber-500" />
													<span>{forum.opportunitiesCount} Opportunities</span>
												</div>
											</div>
										</CardContent>

										<CardFooter className="flex items-center gap-2 border-t border-border/50 pt-3">
											<Button
												className="w-full gap-2 font-medium"
												onClick={() => handleOpenJoinDialog(forum)}
											>
												Join Forum <ArrowRight className="h-4 w-4" />
											</Button>
											{forum.whatsappLink && (
												<a
													href={forum.whatsappLink}
													target="_blank"
													rel="noopener noreferrer"
													title="Open WhatsApp Group"
												>
													<Button
														variant="outline"
														size="icon"
														className="shrink-0 text-green-600 hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950/40"
													>
														<FaWhatsapp className="h-4 w-4" />
													</Button>
												</a>
											)}
										</CardFooter>
									</Card>
								);
							})}
						</div>
					)}
				</div>
			</section>

			{/* OPPORTUNITIES & NOTICEBOARD SECTION */}
			<section className="border-t border-border/60 bg-muted/20 py-16">
				<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
					<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
						<div>
							<div className="flex items-center gap-2 text-sm font-semibold text-primary">
								<Briefcase className="h-4 w-4" />
								<span>Live Noticeboard</span>
							</div>
							<h2 className="mt-1 font-sora text-3xl font-bold tracking-tight text-foreground">
								Featured Alumni Opportunities
							</h2>
							<p className="mt-1 text-sm text-muted-foreground">
								Jobs, partnerships, pro-bono consultations, and mentorship
								programs shared by alumni members.
							</p>
						</div>

						<Button
							onClick={() => setIsShareOpportunityOpen(true)}
							className="gap-2 font-semibold shadow-sm"
						>
							<PlusCircle className="h-4 w-4" />
							Post Opportunity
						</Button>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{OPPORTUNITIES_DATA.map((opp) => (
							<div
								key={opp.id}
								className="flex flex-col justify-between rounded-xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
							>
								<div>
									<div className="flex items-center justify-between gap-2">
										<span
											className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${opp.typeColor}`}
										>
											{opp.type}
										</span>
										<span className="text-[11px] text-muted-foreground">
											{opp.date}
										</span>
									</div>

									<h3 className="mt-3 font-sora text-base font-bold text-foreground">
										{opp.title}
									</h3>

									<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
										<span className="flex items-center gap-1">
											<Users className="h-3.5 w-3.5 text-primary" />
											{opp.postedBy} ({opp.batch})
										</span>
										<span className="flex items-center gap-1">
											<MapPin className="h-3.5 w-3.5 text-muted-foreground" />
											{opp.location}
										</span>
									</div>

									<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
										{opp.description}
									</p>
								</div>

								<div className="mt-5 border-t border-border/60 pt-4">
									<div className="flex items-center justify-between">
										<span className="text-[11px] font-medium text-primary">
											{opp.forumName}
										</span>
										<a
											href={`mailto:${opp.contactEmail}?subject=Inquiry regarding Alumni Opportunity: ${encodeURIComponent(
												opp.title
											)}`}
											className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
										>
											<Mail className="h-3.5 w-3.5" />
											Connect
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* PROPOSE A NEW FORUM / BECOME A LEAD CALLOUT */}
			<section className="mx-auto my-16 max-w-7xl px-5 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/95 to-slate-900 p-8 text-white shadow-xl sm:p-12">
					<div className="relative z-10 max-w-3xl">
						<Badge className="bg-white/20 text-white backdrop-blur hover:bg-white/30">
							Calling All Visionaries
						</Badge>
						<h2 className="mt-4 font-sora text-2xl font-bold tracking-tight text-white sm:text-4xl">
							Have an Industry or Passion Forum in Mind?
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
							Don&apos;t see your professional domain listed? Whether it&apos;s
							Aerospace, Architecture, Finance & Chartered Accountancy,
							Hospitality, or Agriculture — collaborate with the DDKKHAAA
							Executive Committee to establish a new chapter and lead its
							activities.
						</p>

						<div className="mt-6 flex flex-wrap gap-4">
							<a
								href="mailto:contact@ddkkhaaa.com?subject=Proposal%20for%20New%20Alumni%20Forum"
								className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-primary shadow transition hover:bg-white/90"
							>
								<Mail className="h-4 w-4" />
								Propose a Forum Chapter
							</a>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
							>
								Contact Core Committee
							</a>
						</div>
					</div>

					{/* Subtle Background Pattern */}
					<div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
				</div>
			</section>

			{/* FAQ SECTION */}
			<section className="border-t border-border/60 bg-background py-16">
				<div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
							<HelpCircle className="h-4 w-4" />
							<span>Common Questions</span>
						</div>
						<h2 className="mt-2 font-sora text-3xl font-bold tracking-tight text-foreground">
							Frequently Asked Questions
						</h2>
						<p className="mt-2 text-sm text-muted-foreground">
							Everything you need to know about joining and contributing to
							DDKKHAAA Forums.
						</p>
					</div>

					<Accordion
						type="single"
						collapsible
						className="mt-10 w-full space-y-3"
					>
						<AccordionItem
							value="item-1"
							className="rounded-lg border border-border/70 px-4"
						>
							<AccordionTrigger className="font-sora text-sm font-semibold hover:no-underline sm:text-base">
								Who is eligible to join these specialized forums?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Any alumnus or alumna who studied at Dum Dum Krishna Kumar Hindu
								Academy is warmly welcomed to join one or more forums
								corresponding to their professional vocation, hobbies, or areas
								of community service.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-2"
							className="rounded-lg border border-border/70 px-4"
						>
							<AccordionTrigger className="font-sora text-sm font-semibold hover:no-underline sm:text-base">
								Is there any fee or subscription to participate?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								No! Participation in DDKKHAAA professional forums is completely
								free for all alumni. While formal alumni association membership
								is encouraged to support association operations, forum
								discussions and job exchanges are open to empower all alumni.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-3"
							className="rounded-lg border border-border/70 px-4"
						>
							<AccordionTrigger className="font-sora text-sm font-semibold hover:no-underline sm:text-base">
								How do forum members communicate and coordinate?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Each forum maintains a dedicated WhatsApp Community subgroup,
								conducts regular virtual webinars/sync-ups, and organizes
								periodic in-person meetups at the school premises or in Kolkata
								city centers.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-4"
							className="rounded-lg border border-border/70 px-4"
						>
							<AccordionTrigger className="font-sora text-sm font-semibold hover:no-underline sm:text-base">
								Can I join more than one forum?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Yes, absolutely! Many alumni participate in both their industry
								forum (such as IT or Business) alongside passion wings like
								Sports, Media & Culture, or Social Welfare.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-5"
							className="rounded-lg border border-border/70 px-4"
						>
							<AccordionTrigger className="font-sora text-sm font-semibold hover:no-underline sm:text-base">
								How can I share a job opening or business requirement?
							</AccordionTrigger>
							<AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
								Simply click the &quot;Post Opportunity&quot; button on this
								page, or post directly inside the respective forum&apos;s
								WhatsApp channel. Our forum coordinators verify details to
								maintain trust and authenticity.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			{/* DIALOG: JOIN A FORUM */}
			<Dialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen}>
				<DialogContent className="max-w-md sm:max-w-lg">
					<DialogHeader>
						<DialogTitle className="font-sora text-xl font-bold">
							{joinSuccess
								? 'Welcome Aboard!'
								: `Join ${selectedForum?.title || 'Forum'}`}
						</DialogTitle>
						<DialogDescription>
							{joinSuccess
								? 'Your membership request has been submitted to the forum coordinators.'
								: 'Fill in your details below to connect with fellow alumni in this sector.'}
						</DialogDescription>
					</DialogHeader>

					{joinSuccess ? (
						<div className="space-y-4 py-4 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
								<Check className="h-8 w-8" />
							</div>
							<p className="text-sm text-muted-foreground">
								Thank you, <strong>{joinFormData.fullName || 'Alumnus'}</strong>
								! You will receive an invitation to join the official forum
								subgroup shortly.
							</p>

							{selectedForum?.whatsappLink && (
								<div className="pt-2">
									<a
										href={selectedForum.whatsappLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-green-700"
									>
										<FaWhatsapp className="h-5 w-5" />
										Join WhatsApp Community Channel
									</a>
								</div>
							)}

							<div className="pt-4">
								<Button
									variant="outline"
									onClick={() => setIsJoinDialogOpen(false)}
								>
									Close
								</Button>
							</div>
						</div>
					) : (
						<form onSubmit={handleJoinSubmit} className="space-y-4 py-2">
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div>
									<label className="text-xs font-semibold text-foreground">
										Full Name *
									</label>
									<Input
										required
										placeholder="e.g. Sourav Roy"
										value={joinFormData.fullName}
										onChange={(e) =>
											setJoinFormData({
												...joinFormData,
												fullName: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
								<div>
									<label className="text-xs font-semibold text-foreground">
										Passing Batch / Year *
									</label>
									<Input
										required
										placeholder="e.g. 2012"
										value={joinFormData.batchYear}
										onChange={(e) =>
											setJoinFormData({
												...joinFormData,
												batchYear: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div>
									<label className="text-xs font-semibold text-foreground">
										WhatsApp Number *
									</label>
									<Input
										required
										type="tel"
										placeholder="+91 98765 43210"
										value={joinFormData.phone}
										onChange={(e) =>
											setJoinFormData({
												...joinFormData,
												phone: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
								<div>
									<label className="text-xs font-semibold text-foreground">
										Email Address *
									</label>
									<Input
										required
										type="email"
										placeholder="name@example.com"
										value={joinFormData.email}
										onChange={(e) =>
											setJoinFormData({
												...joinFormData,
												email: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
							</div>

							<div>
								<label className="text-xs font-semibold text-foreground">
									Current Profession / Organization
								</label>
								<Input
									placeholder="e.g. Senior Software Engineer at Tech Corp / Founder at XYZ"
									value={joinFormData.profession}
									onChange={(e) =>
										setJoinFormData({
											...joinFormData,
											profession: e.target.value,
										})
									}
									className="mt-1"
								/>
							</div>

							<div>
								<label className="text-xs font-semibold text-foreground">
									How would you like to participate?
								</label>
								<Textarea
									placeholder="Tell us what you hope to achieve (networking, mentoring juniors, finding business leads, offering help, etc.)"
									value={joinFormData.note}
									onChange={(e) =>
										setJoinFormData({ ...joinFormData, note: e.target.value })
									}
									className="mt-1 text-xs"
									rows={3}
								/>
							</div>

							<DialogFooter className="pt-3">
								<Button
									type="button"
									variant="outline"
									onClick={() => setIsJoinDialogOpen(false)}
								>
									Cancel
								</Button>
								<Button type="submit" className="gap-2">
									<Send className="h-4 w-4" />
									Submit & Join
								</Button>
							</DialogFooter>
						</form>
					)}
				</DialogContent>
			</Dialog>

			{/* DIALOG: SHARE AN OPPORTUNITY */}
			<Dialog
				open={isShareOpportunityOpen}
				onOpenChange={setIsShareOpportunityOpen}
			>
				<DialogContent className="max-w-md sm:max-w-lg">
					<DialogHeader>
						<DialogTitle className="font-sora text-xl font-bold">
							{opportunitySubmitted
								? 'Opportunity Submitted!'
								: 'Share an Opportunity with Alumni'}
						</DialogTitle>
						<DialogDescription>
							{opportunitySubmitted
								? 'Your submission has been received and will be broadcast to the community noticeboard.'
								: 'Post jobs, internships, business referral needs, mentorship programs, or events.'}
						</DialogDescription>
					</DialogHeader>

					{opportunitySubmitted ? (
						<div className="space-y-4 py-4 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
								<Check className="h-8 w-8" />
							</div>
							<p className="text-sm text-muted-foreground">
								Thank you for giving back to the community! Your opportunity has
								been posted to the alumni channel.
							</p>
							<div className="pt-2">
								<Button
									onClick={() => {
										setOpportunitySubmitted(false);
										setIsShareOpportunityOpen(false);
									}}
								>
									Done
								</Button>
							</div>
						</div>
					) : (
						<form onSubmit={handleOpportunitySubmit} className="space-y-4 py-2">
							<div>
								<label className="text-xs font-semibold text-foreground">
									Opportunity Title *
								</label>
								<Input
									required
									placeholder="e.g. Senior Frontend Developer / Seeking B2B Printing Partner"
									value={oppFormData.title}
									onChange={(e) =>
										setOppFormData({ ...oppFormData, title: e.target.value })
									}
									className="mt-1"
								/>
							</div>

							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div>
									<label className="text-xs font-semibold text-foreground">
										Opportunity Type *
									</label>
									<select
										aria-label="Opportunity Type"
										className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
										value={oppFormData.type}
										onChange={(e) =>
											setOppFormData({ ...oppFormData, type: e.target.value })
										}
									>
										<option value="Job">Job Opening</option>
										<option value="Mentorship">Mentorship / Training</option>
										<option value="Partnership">Business Partnership</option>
										<option value="Pro-Bono">Pro-Bono Advice Clinic</option>
										<option value="Event">Event / Tournament</option>
									</select>
								</div>
								<div>
									<label className="text-xs font-semibold text-foreground">
										Related Forum *
									</label>
									<select
										aria-label="Related Forum"
										className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
										value={oppFormData.forumId}
										onChange={(e) =>
											setOppFormData({
												...oppFormData,
												forumId: e.target.value,
											})
										}
									>
										{FORUMS_DATA.map((f) => (
											<option key={f.id} value={f.id}>
												{f.title}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div>
									<label className="text-xs font-semibold text-foreground">
										Organization / Firm
									</label>
									<Input
										placeholder="e.g. Acme Tech Solutions"
										value={oppFormData.organization}
										onChange={(e) =>
											setOppFormData({
												...oppFormData,
												organization: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
								<div>
									<label className="text-xs font-semibold text-foreground">
										Location
									</label>
									<Input
										placeholder="e.g. Kolkata / Remote / Hybrid"
										value={oppFormData.location}
										onChange={(e) =>
											setOppFormData({
												...oppFormData,
												location: e.target.value,
											})
										}
										className="mt-1"
									/>
								</div>
							</div>

							<div>
								<label className="text-xs font-semibold text-foreground">
									Contact Email / URL *
								</label>
								<Input
									required
									type="text"
									placeholder="hr@example.com or link to apply"
									value={oppFormData.email}
									onChange={(e) =>
										setOppFormData({ ...oppFormData, email: e.target.value })
									}
									className="mt-1"
								/>
							</div>

							<div>
								<label className="text-xs font-semibold text-foreground">
									Description & Requirements *
								</label>
								<Textarea
									required
									placeholder="Provide brief details on roles, scope of work, eligibility, or how alumni can participate..."
									value={oppFormData.description}
									onChange={(e) =>
										setOppFormData({
											...oppFormData,
											description: e.target.value,
										})
									}
									className="mt-1 text-xs"
									rows={3}
								/>
							</div>

							<DialogFooter className="pt-3">
								<Button
									type="button"
									variant="outline"
									onClick={() => setIsShareOpportunityOpen(false)}
								>
									Cancel
								</Button>
								<Button type="submit" className="gap-2">
									<Send className="h-4 w-4" />
									Post Opportunity
								</Button>
							</DialogFooter>
						</form>
					)}
				</DialogContent>
			</Dialog>

			<Footer />
		</main>
	);
};

export default OpportunitiesPage;
