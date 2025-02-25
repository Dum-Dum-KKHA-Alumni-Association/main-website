import OnboardProcessForm from './onboard-form';

export default async function OnboardPage() {
	return (
		<section className="flex w-full">
			<section className="mx-auto flex w-full max-w-[90rem] items-center justify-center gap-7 px-5 py-20">
				<OnboardProcessForm />
			</section>
		</section>
	);
}
