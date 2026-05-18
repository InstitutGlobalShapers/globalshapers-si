
<script lang="ts">
	import { slide } from 'svelte/transition';
	import { inView } from '$lib/actions/animate.js';

	import ljCenter from '$lib/assets/lj-center.jpeg';
	import ljCity from '$lib/assets/lj-city.jpeg';
	import aleja from '$lib/assets/aleja.jpeg';
	import gas252 from '$lib/assets/gas252.webp';
	import poletna from '$lib/assets/poletna_sola.webp';
	import delavnice from '$lib/assets/delavnice_dogodki.webp';
	import webinar from '$lib/assets/webinar.png';
	import shapeTalk from '$lib/assets/shape_talk.webp';
	import globe from '$lib/assets/globe.png';
	import ursa from '$lib/assets/ursa-kamenik.jpg'
	import bled from '$lib/assets/bled.webp';
	import portoroz from '$lib/assets/portoroz.avif';
	import zajamniki from '$lib/assets/zajamniki.webp';

	import akrapovic from '$lib/assets/logos/akrapovic-logo.png';
	import eye from '$lib/assets/logos/eye-logo.png';
	import autoBrief from '$lib/assets/logos/autobrief-logo.jpeg';
	import gatom from '$lib/assets/logos/gatom-logo.png';
	import imactHub from '$lib/assets/logos/imact-hub-logo.png';
	import popri from '$lib/assets/logos/popri-logo.png';
	import preskok from '$lib/assets/logos/preskok-logo.svg';
	import tplj from '$lib/assets/logos/tplj-logo.png';
	import wef from '$lib/assets/logos/wef-logo.png';
	import xod from '$lib/assets/logos/xod-logo.webp';

	const logos = [akrapovic, eye, autoBrief, gatom, imactHub, popri, preskok, tplj, wef, xod];
	import { FORM_URL, WEBINAR_URL, WHATSAPP_URL, ACADEMY_DEADLINE, WEBINAR_DATES } from '$lib/constants';
	import { site } from '$lib/site';

	let heroCta: HTMLAnchorElement;
	let heroCtaVisible = $state(true);

	$effect(() => {
		const obs = new IntersectionObserver(([e]) => { heroCtaVisible = e.isIntersecting; });
		obs.observe(heroCta);
		return () => obs.disconnect();
	});

	let openFaq = $state<number | null>(null);
	const toggleFaq = (i: number) => (openFaq = openFaq === i ? null : i);

	let now = $state(new Date());
	$effect(() => {
		const id = setInterval(() => { now = new Date(); }, 1000);
		return () => clearInterval(id);
	});

	function pad(n: number) { return String(n).padStart(2, '0'); }

	function getTimeLeft(target: Date) {
		const diff = target.getTime() - now.getTime();
		if (diff <= 0) return null;
		const days = Math.floor(diff / 86400000);
		const hours = Math.floor((diff % 86400000) / 3600000);
		const minutes = Math.floor((diff % 3600000) / 60000);
		const seconds = Math.floor((diff % 60000) / 1000);
		return { days, hours, minutes, seconds };
	}

	const timeLeft = $derived(getTimeLeft(ACADEMY_DEADLINE));
	const nextWebinar = $derived(WEBINAR_DATES.find(d => d > now) ?? null);

	let ursakSection: HTMLElement;
	let ursakVisible = $state(false);
	$effect(() => {
		if (!ursakSection) return;
		const obs = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) { ursakVisible = true; obs.disconnect(); }
		}, { threshold: 0.4 });
		obs.observe(ursakSection);
		return () => obs.disconnect();
	});

	function formatWebinarDate(d: Date): string {
		return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' CET';
	}

	const willItems = [
		'Solve real marketing and sales problems for companies entering new markets',
		'Build and execute go-to-market strategies that drive actual revenue and growth',
		'Work directly with decision-makers and receive hands-on mentorship'
	];
	const wontItems = [
		'Have to prove yourself by doing coffee runs or filing documents',
		'Be treated like "just an intern" whose ideas are ignored and who is left out of important meetings',
		'Be stuck doing mindless data entry without seeing the big picture'
	];

	const specs = [
		{ label: 'Location', value: 'Ljubljana, Slovenia' },
		{ label: 'Academy sprint', value: 'Aug 1 – Sep 1, 2026\n4 weeks, on-site' },
		{ label: 'Internship', value: 'Aug 1 – Jan 31, 2027\non-site' },
		{ label: 'Who can apply', value: 'EU, UK, USA, Canada, Singapore\nAges 18–30' },
	];

	const steps = [
		{
			n: '1',
			title: 'The initial application',
			body: 'Fill out a quick online form to confirm your eligibility: country, age, and availability.',
			final: false
		},
		{
			n: '2',
			title: 'The assessments',
			body: 'Two parts: a self-assessment (working style and team fit), and a problem-solving challenge that tests raw research ability and adaptability. This is where you prove you belong in the top 1%. Note: copy-pasted AI answers result in automatic rejection.',
			final: false
		},
		{
			n: '3',
			title: 'The vibe check',
			body: "A quick, relaxed chat with our team. We already know you have the skills, so now we just want to meet the human behind them and make sure the program is a genuine fit.",
			final: false
		},
		{
			n: '★',
			title: 'The match: company interview',
			body: "Meet your potential host company. At this stage it's about finding the right mutual fit. Nail this, and you've officially claimed one of the 12 spots.",
			final: true
		}
	];

	const communityCards = [
		{
			title: 'Complete logistical support',
			body: 'Pre-arrival housing help, legal registrations, and handling administrative hurdles so you can focus entirely on your career.'
		},
		{
			title: 'No "lonely traveller" phase',
			body: "From day one, you're plugged into an instant network of high-achieving, like-minded young leaders."
		},
		{
			title: 'Full community perks',
			body: 'Direct mentorship from industry experts, specialised monthly workshops, and invite-only networking events.'
		},
		{
			title: 'Local buddy system',
			body: 'A local buddy from our institute to help you navigate and prosper in your new city and professional environment.'
		}
	];

	const faqs = [
		{
			q: 'Is there a catch? Do I have to pay for the Academy?',
			a: 'No. The 12 spots are fully funded scholarships.'
		},
		{
			q: 'Will the financial support I receive actually cover my living expenses?',
			a: 'Yes. The financial support provided during your 6-month internship is designed to cover your day-to-day living costs (rent, groceries, etc.) and more.'
		},
		{
			q: 'Does the Academy provide me with housing?',
			a: "No. Our Institute does not own dorms (yet*), but we will 100% help you sort out the living situation prior to your arrival, if you're selected."
		},
		{
			q: 'Which regions can apply for Shapers Academy?',
			a: 'Europe, USA, Canada, United Kingdom.'
		},
		{
			q: 'Do I need a visa?',
			a: 'Not if you are an EU citizen or can travel freely across the EU. If you are applying from the USA, UK, Canada, or Singapore, our team will guide you through the necessary visa and legal requirements once you are officially selected.'
		},
		{
			q: 'Is a university degree required to apply?',
			a: 'No, a university degree is not required. We firmly believe in equal opportunity for all, no matter your age or financial status. Whether you are in university, on a gap year, or pursuing another path, you are encouraged to apply. Since there are only 12 scholarships available, final selection will be highly competitive and based on the overall merit of your application.'
		},
		{
			q: "Can I apply if I'm over 30 years old?",
			a: 'No (in most cases), however we are willing to make an exception for an exceptional applicant.'
		},
		{
			q: 'Is prior experience in Marketing, Sales and Business development required to apply?',
			a: 'No. We look for potential, mindset, grit and your ability to think outside-the-box and we prioritize those more than prior technical mastery. The first 4-week intensive sprint of the Academy is designed to get you "market-ready" and able to tackle any problem that might come your way.'
		},
		{
			q: 'Can I do this alongside my university degree or another job?',
			a: 'Only if your current commitments are completely remote and you happen to be a productivity monster fueled by espresso and pure ambition. Otherwise, no. This is not a side-hustle. You are expected to be fully on-site in Ljubljana.'
		},
		{
			q: 'What kind of companies will I be working with?',
			a: "We partner with dynamic companies across a variety of industries. You won't be a forgotten cog in a massive corporate machine. We specifically select companies that align with our core value of empowering young talent meaning they are ready to give you real responsibility, high-stakes problems, and a seat at the table from day one."
		},
		{
			q: 'What happens if there is no fit with the company?',
			a: "If there's no fit with the host company, no worries. In that unfortunate case, you retain your scholarship and status as an accepted candidate. The second a new spot opens up in our network of partner companies, you'll be next in line to claim it."
		}
	];
</script>

<svelte:head>
	<meta
		name="description"
		content="A fully funded 4-week skill sprint + 6-month paid internship in Ljubljana. Only 12 spots available."
	/>
</svelte:head>

<section class="bg-[linear-gradient(to_bottom,#dbeafe_0%,#eff6ff_40%,#fff_100%)] flex min-h-screen flex-col px-6 pt-28 text-center md:pt-32">
	<div class="hero-in mx-auto flex w-full max-w-3xl flex-1 flex-col">
		<div>
			<h1 class="mb-10 text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--gs-primary)] md:text-[2.75rem]">
				International career accelerator for the <span class="text-[var(--gs-accent)] drop-shadow-[0_0_10px_color-mix(in_srgb,var(--gs-accent)_50%,transparent)]">top 1%</span>
			</h1>

			<p class="mx-auto mb-10 max-w-2xl text-lg text-[var(--gs-primary)]">
				Shapers Academy is a <strong>6-month paid internship abroad</strong> where you fast-track your career. No fluff, just real business challenges.
			</p>

			<div class="logo-carousel-mask my-12 overflow-hidden" role="region">
				<div class="carousel-track flex w-max items-center gap-16">
					{#each [...logos, ...logos] as logo, i (i)}
						<img src={logo} alt="Partner company" class="h-7 w-auto max-w-[100px] object-contain opacity-70 grayscale" />
					{/each}
				</div>
			</div>

			<a
				bind:this={heroCta}
				// eslint-disable-next-line svelte/no-navigation-without-resolve
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-lg bg-[var(--gs-accent)] px-9 py-[13px] text-[0.9375rem] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
			>
				Claim your spot
			</a>
			<p class="mt-6 mb-8 text-sm text-slate-500">Only 12 spots available · Applications close {ACADEMY_DEADLINE.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
		</div>

		<div class="mt-auto flex justify-center">
			<img src={globe} alt="Global reach" class="w-full max-w-xxl drop-shadow-xl" />
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">The offer</p>
			<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Not your typical internship</h2>
			<p class="mt-2 mb-8 max-w-3xl text-[0.9375rem] leading-relaxed text-slate-600">
				Shapers Academy is designed to allow selected participants to completely bypass the entry-level struggle or in some cases, completely switch career paths.
			</p>
		</div>

		<div class="mt-8 grid gap-4 md:grid-cols-2">
			<div use:inView={{ delay: 0 }}>
				<div class="h-full rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg" style="background:var(--gs-accent); border:1px solid var(--gs-positive-border)">
					<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-white" >You will</p>
					{#each willItems as item (item)}
						<div class="flex gap-3 py-3 last:pb-0">
							<span class="mt-0.5 shrink-0 text-sm text-white">✓</span>
							<p class="text-[0.8125rem] leading-relaxed text-white">{item}</p>
						</div>
					{/each}
				</div>
			</div>
			<div use:inView={{ delay: 100 }}>
				<div class="h-full rounded-xl border border-red-100 bg-white p-6">
					<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-red-400">You won't</p>
					{#each wontItems as item (item)}
						<div class="flex gap-3 py-3 last:border-0 last:pb-0">
							<span class="mt-0.5 shrink-0 text-sm text-red-400">✕</span>
							<p class="text-[0.8125rem] leading-relaxed text-slate-500">{item}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div class="mb-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
			<div use:inView>
				<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Overview</p>
				<h2 class="mb-4 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Programme at a glance</h2>
				<p class="max-w-2xl text-[0.9375rem] leading-relaxed text-slate-500">
					A fully funded scholarship combining a 4-week intensive skill sprint with a 6-month paid internship in Ljubljana. You'll work on real marketing, sales, and business development challenges at a partner company. Only 12 scholarships are awarded, going to the top 1% of applicants.
				</p>
			</div>

			{#if timeLeft}
				<div use:inView={{ delay: 100 }} class="shrink-0">
					<p class="mb-3 text-[0.6rem] font-semibold uppercase tracking-widest text-slate-400">Applications close in</p>
					<div class="flex gap-6">
						{#each [{ v: timeLeft.days, l: 'days' }, { v: timeLeft.hours, l: 'hrs' }, { v: timeLeft.minutes, l: 'min' }, { v: timeLeft.seconds, l: 'sec' }] as unit (unit.l)}
							<div>
								<p class="text-xl font-bold tabular-nums text-[var(--gs-accent)]">{pad(unit.v)}</p>
								<p class="text-[0.6rem] font-semibold uppercase tracking-widest text-slate-400">{unit.l}</p>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<p class="shrink-0 text-sm font-semibold text-red-500">Applications closed</p>
			{/if}
		</div>

		<div use:inView={{ delay: 60 }} class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-4">
			{#each specs as spec (spec.label)}
				<div class="bg-white px-6 py-7 transition-colors duration-200 hover:bg-blue-50/60">
					<p class="mb-2 text-[0.6rem] font-semibold uppercase tracking-widest text-slate-400">{spec.label}</p>
					<p class="whitespace-pre-line text-sm font-semibold leading-snug text-[var(--gs-primary)]">{spec.value}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Your tutor</p>
			<h2 class="mb-8 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Meet Urša Kamenik</h2>
		</div>
		<div use:inView={{ delay: 80 }} class="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
			<div class="flex flex-col md:flex-row">
				<div class="shrink-0 md:w-80">
					<img src={ursa} alt="Urša Kamenik" class="h-64 w-full object-cover object-top md:h-full" />
				</div>
				<div bind:this={ursakSection} class="flex flex-1 flex-col justify-between p-8" class:hl-active={ursakVisible}>
					<div>
						<p class="mb-0.5 text-lg font-semibold text-[var(--gs-primary)]">Urša Kamenik</p>
						<p class="mb-5 text-sm font-medium text-slate-400">Business Consultant & Mentor · Head of Sales, Erudio Group</p>
						<p class="mb-6 text-[0.9375rem] leading-relaxed text-slate-600">
							Urša is a master strategist in <span class="hl hl-1">business development</span> and <span class="hl hl-2">market expansion</span>, leading initiatives to propel businesses into new markets and optimize their operational frameworks.
							<br>
							<br>
							With over <span class="hl hl-3">200 projects</span>, 150+ strategic consulting sessions, and <span class="hl hl-5">32+ clients</span> guided through her <span class="italic">Back to the Roots</span> programme, she navigates complex business environments effectively.
							Fluent in <span class="hl hl-6">6 languages</span> with <span class="hl hl-7">two master's</span> degrees, she brings a truly global perspective.
						</p>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-5">
						<p class="mb-3 text-[0.6875rem] font-semibold uppercase tracking-wide text-slate-400">Expertise</p>
						<div class="flex flex-wrap gap-2">
							{#each ['Business development', 'Market expansion', 'Strategic consulting', 'Sales strategy', 'Market analysis', 'Team leadership', 'Event management'] as tag (tag)}
								<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-blue-50 px-[10px] py-0.5 text-xs font-medium text-blue-800">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-slate-50">
	<div class="px-6 py-14">
		<div class="mx-auto max-w-4xl">
			<div use:inView>
				<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Your base</p>
				<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Ljubljana, Slovenia</h2>
				<p class="mt-3 mb-7 max-w-3xl text-[0.9375rem] leading-relaxed text-slate-600">
					Slovenia's capital is one of Europe's best-kept secrets. Safe, beautiful, and packed with opportunity, Ljubljana is compact and walkable with a thriving young professional scene. Just a 2-hour drive from Vienna, Venice, and Zagreb, it sits at the very heart of the continent. Slovenia ranks among the world's 10 safest countries, making it the ideal launchpad for your international career.
				</p>
				<div class="flex flex-wrap gap-2">
					{#each ['2h drive from Vienna, Venice & Zagreb', '300 sunny days / year', 'Top 10 safest countries in the world', 'Thriving expat community'] as tag (tag)}
						<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-[13px] py-1 text-xs font-medium text-blue-800">{tag}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3">
		<img src={aleja} alt="Ljubljana center" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={ljCity} alt="Ljubljana city" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={ljCenter} alt="Aleja street" class="col-span-2 aspect-[2/1] w-full object-cover md:col-span-1 md:aspect-[4/3]" loading="lazy" />
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl" use:inView>
		<p class="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-(--gs-accent)">Beyond Ljubljana</p>
		<h2 class="mb-6 text-2xl font-semibold leading-tight tracking-[-0.01em] text-(--gs-primary)">Your Backyard</h2>
		<p class="text-[0.9375rem] leading-relaxed text-slate-600">
			Most capitals make you choose. City life or nature. Ljubljana gives you both. An hour in any direction and you're somewhere completely different. Bled's lake. Pokljuka's forests. The Adriatic in Portorož. Alpine caves. Wine hills. Ljubljana just happens to sit in the middle of all of it. Small enough to bike across, big enough to never get bored.
		</p>
		<div class="mt-6 flex flex-wrap gap-2">
			{#each ['Bled in 45 min', 'Alps on your doorstep', 'Adriatic coast in 1h','4 countries within 2h'] as tag (tag)}
				<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-3.25 py-1 text-xs font-medium text-blue-800">{tag}</span>
			{/each}
		</div>
	</div>
</section>
<div class="grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3">
	<img src={bled} alt="Bled" class="aspect-4/3 w-full object-cover" loading="lazy" />
	<img src={zajamniki} alt="Zajamniki" class="aspect-4/3 w-full object-cover" loading="lazy" />
	<img src={portoroz} alt="Portorož" class="col-span-2 aspect-2/1 w-full object-cover md:col-span-1 md:aspect-4/3" loading="lazy" />
</div>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Application process</p>
			<h2 class="mb-10 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">How it works</h2>
		</div>
		<div class="max-w-3xl">
			{#each steps as step, i (step.n)}
				<div use:inView={{ delay: i * 80 }} class="flex gap-8 py-6">
					<div
						class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white {step.final ? 'shadow-[0_0_20px_rgba(30,64,175,0.55)]' : ''}"
						style="background-color: {step.final ? '#2563eb' : ['#93c5fd','#60a5fa','#3b82f6'][i]}"
					>
						{step.n}
					</div>
					<div>
						<p class="mb-1.5 text-sm font-semibold text-[var(--gs-primary)]">
							{step.title}
						</p>
						<p class="text-[0.8125rem] leading-relaxed text-slate-600">{step.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-slate-50">
	<div class="grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-4">
		<img src={delavnice} alt="Workshops and events" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={shapeTalk} alt="Shape Talk event" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={poletna} alt="Shapers summer school" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={gas252} alt="Global Shapers community" class="aspect-[4/3] w-full object-cover" loading="lazy" />
	</div>
	<div class="px-6 py-14">
		<div class="mx-auto max-w-4xl">
			<div use:inView>
				<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Community support</p>
				<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">You won't be navigating this alone</h2>
				<p class="mt-3 mb-3 max-w-3xl text-[0.9375rem] leading-relaxed text-slate-600">
					Most international programs drop you in a new country and leave you to navigate bureaucracy,
					logistics, and housing on your own. Not this one.
				</p>
				<p class="mb-8 max-w-3xl text-[0.9375rem] leading-relaxed text-slate-600">
					When you get selected, <span class="font-medium text-slate-800">Global Shapers Ljubljana</span>,
					a global network of young leaders, steps in as your
					immediate local community.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each communityCards as card, i (card.title)}
					<div use:inView={{ delay: i * 70 }}>
						<div class="h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
							<p class="mb-2 text-sm font-semibold text-[var(--gs-primary)]">{card.title}</p>
							<p class="text-[0.8125rem] leading-relaxed text-slate-600">{card.body}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-[var(--gs-primary)] px-6 py-6">
	<div class="mx-auto max-w-4xl">
		<div class="flex flex-col gap-8 md:flex-row md:items-center">

			<div class="flex-1" use:inView>
				<p class="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-widest text-blue-200">
					Free info session
				</p>
				<h2 class="mb-3 text-xl font-semibold text-white">Still on the fence?</h2>
				<p class="max-w-lg text-[0.9375rem] leading-relaxed text-blue-200">
					Join our free live webinar where we walk through the full programme, answer every question
					you have, and help you figure out if Shapers Academy is the right move for you.
				</p>
				{#if nextWebinar}
					<div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-blue-300">
						<span>{formatWebinarDate(nextWebinar)}</span>
					</div>
				{/if}
				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href={WEBINAR_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block whitespace-nowrap rounded-lg border border-white-200 px-7 py-3 mt-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
				>
					Reserve your spot →
				</a>
			</div>
			<!-- TODO: Replace with webinar.jpg once available -->
			<div class="shrink-0 md:w-80">
				<img src={webinar} alt="Live webinar" class="h-full min-h-[220px] w-full rounded-md object-cover" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<section class="px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<h2 class="mb-8 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Frequently asked questions</h2>
		</div>
		<div class="max-w-3xl">
			{#each faqs as faq, i (faq.q)}
				<div use:inView={{ delay: i * 30 }} class="border-b border-slate-200 last:border-0">
					<button
						class="flex w-full items-start justify-between gap-4 py-4 text-left cursor-pointer"
						onclick={() => toggleFaq(i)}
					>
						<span class="text-[0.8125rem] font-medium leading-relaxed text-slate-800">{faq.q}</span>
						<span
							class="mt-0.5 shrink-0 text-base leading-none text-slate-400 transition-transform duration-200"
							class:rotate-45={openFaq === i}
						>+</span>
					</button>
					{#if openFaq === i}
						<div transition:slide={{ duration: 220 }}>
							<p class="pb-4 text-[0.8125rem] leading-relaxed text-slate-600">{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-[var(--gs-primary)] px-6 pt-20 pb-16">
	<div use:inView class="mx-auto max-w-4xl">
		<div class="mb-12 text-center">
			<h2 class="mb-3 text-3xl font-semibold tracking-tight text-white">
				12 spots. One shot at the top 1%.
			</h2>
			<p class="mb-6 text-[0.9375rem] text-blue-300">Applications close {ACADEMY_DEADLINE.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

			{#if timeLeft}
				<div class="mb-8 flex justify-center gap-6">
					{#each [{ v: timeLeft.days, l: 'days' }, { v: timeLeft.hours, l: 'hrs' }, { v: timeLeft.minutes, l: 'min' }, { v: timeLeft.seconds, l: 'sec' }] as unit (unit.l)}
						<div class="text-center">
							<p class="text-3xl font-bold tabular-nums text-white">{pad(unit.v)}</p>
							<p class="text-[0.6875rem] font-semibold uppercase tracking-wide text-blue-400">{unit.l}</p>
						</div>
					{/each}
				</div>
			{/if}

			<a
				// eslint-disable-next-line svelte/no-navigation-without-resolve
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-lg bg-white px-9 py-3.5 text-[0.9375rem] font-semibold text-blue-900 transition-opacity hover:opacity-90"
			>
				Apply now →
			</a>
		</div>

		<div class="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2">
			<div>
				<p class="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-blue-400">Get in touch</p>
				<p class="mb-4 text-sm leading-relaxed text-blue-200">Questions about the program? Reach out directly to our team.</p>
				<a
					href={`mailto:${site.contactEmail}`}
					class="text-sm text-white underline underline-offset-2 hover:text-blue-200"
				>
					{site.contactEmail}
				</a>
			</div>
			<div>
				<p class="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-blue-400">Stay updated</p>
				<p class="mb-4 text-sm leading-relaxed text-blue-200">Join our WhatsApp channel for the latest news and updates.</p>
				<a
					href={WHATSAPP_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-lg border border-white-200 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
				>
					Join WhatsApp channel →
				</a>
			</div>
		</div>
	</div>
</section>

<div
	class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-100 bg-white px-4 py-3 shadow-lg shadow-black/5 sm:hidden"
	style="transition: transform 500ms ease-in-out, opacity 500ms ease-in-out; transform: {heroCtaVisible ? 'translateY(100%)' : 'translateY(0)'}; opacity: {heroCtaVisible ? '0' : '1'};"
>
	<a
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		href={FORM_URL}
		target="_blank"
		rel="noopener noreferrer"
		class="block w-full rounded-lg bg-[var(--gs-accent)] py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
	>
		Claim your spot
	</a>
</div>

<style>
	.hl {
		background-image: linear-gradient(#2563eb, #2563eb);
		background-repeat: no-repeat;
		background-size: 0% 2px;
		background-position: 0 100%;
		padding-bottom: 1px;
		transition: background-size 0.85s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.hl-active .hl   { background-size: 100% 2px; }
	.hl-active .hl-1 { transition-delay: 0.15s; }
	.hl-active .hl-2 { transition-delay: 0.75s; }
	.hl-active .hl-3 { transition-delay: 1.35s; }
	.hl-active .hl-4 { transition-delay: 1.95s; }
	.hl-active .hl-5 { transition-delay: 2.55s; }
	.hl-active .hl-6 { transition-delay: 3.15s; }
	.hl-active .hl-7 { transition-delay: 3.75s; }

	.logo-carousel-mask {
		-webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
		mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
	}

	@keyframes carousel-scroll {
		from { transform: translateX(0); }
		to { transform: translateX(-50%); }
	}

	.carousel-track {
		animation: carousel-scroll 30s linear infinite;
	}

</style>
