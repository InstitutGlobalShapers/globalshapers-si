<script lang="ts">
	import { slide } from 'svelte/transition';
	import { inView } from '$lib/actions/animate.js';

	import oldTown from '$lib/assets/old-town.jpg';
	import gas25 from '$lib/assets/gas25.webp';
	import gas252 from '$lib/assets/gas252.webp';
	import poletna from '$lib/assets/poletna_sola.webp';
	import delavnice from '$lib/assets/delavnice_dogodki.webp';
	import shapeTalk from '$lib/assets/shape_talk.webp';

	const FORM_URL = 'https://docs.google.com/forms/d/1C3Niai_lcougUfLNecKx7BAbfg4dMUTPac46vsorGQc/viewform';
	const WEBINAR_URL = FORM_URL;

	let openFaq = $state<number | null>(null);
	const toggleFaq = (i: number) => (openFaq = openFaq === i ? null : i);

	const willItems = [
		'Solve real marketing and sales problems for companies entering new markets',
		'Build and execute go-to-market strategies that drive actual revenue and growth',
		'Work directly with decision-makers and receive hands-on mentorship'
	];
	const wontItems = [
		'Have to prove yourself by doing coffee runs or filing documents',
		'Be treated like "just an intern" whose ideas are ignored',
		'Be stuck doing mindless data entry without seeing the big picture'
	];

	const stats = [
		{ value: '12', label: 'fully funded scholarships' },
		{ value: '6 months', label: 'paid internship abroad' },
		{ value: '800€ – 1050€', label: 'monthly support' }
	];

	const specs = [
		{ label: 'Location', value: 'Ljubljana, Slovenia' },
		{ label: 'Academy sprint', value: 'Jul 1 – Aug 1, 2026 · 4 weeks, on-site' },
		{ label: 'Internship', value: 'Jul 1 – Jan 31, 2027 · on-site' },
		{ label: 'Who can apply', value: 'EU, UK, USA, Canada, Singapore · Ages 18–30' },
	];

	const steps = [
		{
			n: '1',
			title: 'The initial application',
			body: 'Fill out a quick online form to confirm your eligibility — country, age, and availability.',
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
			body: "A quick, relaxed chat with our team. We already know you have the skills — now we just want to meet the human behind them and make sure the program is a genuine fit.",
			final: false
		},
		{
			n: '★',
			title: 'The match — company interview',
			body: "Meet your potential host company. At this stage it's about finding the right mutual fit. Nail this, and you've officially claimed one of the 12 spots.",
			final: true
		}
	];

	const communityCards = [
		{
			title: 'Complete logistical support',
			body: 'Pre-arrival housing help, legal registrations, and handling administrative hurdles so you can focus entirely on your career.',
			tag: 'Avg. rent 300€–500€/mo'
		},
		{
			title: 'No "lonely traveller" phase',
			body: "From day one, you're plugged into an instant network of high-achieving, like-minded young leaders.",
			tag: null
		},
		{
			title: 'Full community perks',
			body: 'Direct mentorship from industry experts, specialised monthly workshops, and invite-only networking events.',
			tag: null
		},
		{
			title: 'Local buddy system',
			body: 'A local buddy from our institute to help you navigate and prosper in your new city and professional environment.',
			tag: null
		}
	];

	const faqs = [
		{
			q: 'Is there a catch? Do I have to pay for the Academy?',
			a: 'No. The 12 spots are fully funded scholarships.'
		},
		{
			q: 'What is the monthly stipend?',
			a: 'The financial support is designed to fully cover your day-to-day living costs in Ljubljana — rent, groceries, and more. Exact figures are shared with accepted participants.'
		},
		{
			q: 'Will the financial support cover my living expenses?',
			a: 'Yes. The financial support during the 6-month internship is designed to cover day-to-day living costs (rent, groceries, etc.) and more.'
		},
		{
			q: 'Does the Academy provide housing?',
			a: 'No. The Institute does not own dorms (yet), but will 100% help you sort out the living situation prior to your arrival if selected. Average rent in Ljubljana is 300€ – 500€/month for a room in a shared flat.'
		},
		{
			q: 'Which regions can apply?',
			a: 'Europe, USA, Canada, United Kingdom, Singapore.'
		},
		{
			q: 'Do I need a visa?',
			a: 'Not if you can travel freely within Europe without a visa. If applying from the USA, UK, Canada, or Singapore, our team will guide you through visa and legal requirements once officially selected.'
		},
		{
			q: "Can I apply if I'm over 30?",
			a: 'No, in most cases — however exceptions can be made for exceptional applicants.'
		},
		{
			q: 'Is prior experience in Marketing, Sales, or Business Development required?',
			a: "No. We look for potential, mindset, grit, and the ability to think outside the box. The 4-week intensive sprint is designed to get you market-ready."
		},
		{
			q: 'Can I do this alongside my degree or another job?',
			a: "Only if your current commitments are fully remote and you're a productivity monster. Otherwise, no. This is fully on-site in Ljubljana."
		},
		{
			q: 'What kind of companies will I be working with?',
			a: 'Dynamic companies across various industries that align with our core value of empowering young talent — ready to give you real responsibility, high-stakes problems, and a seat at the table from day one.'
		},
		{
			q: 'What happens if there is no fit with the company?',
			a: "You retain your scholarship and status as an accepted candidate. The moment a new spot opens in our partner network, you'll be next in line."
		}
	];
</script>

<svelte:head>
	<meta
		name="description"
		content="A fully funded 4-week skill sprint + 6-month paid internship in Ljubljana. Only 12 spots. Applications close May 20, 2026."
	/>
</svelte:head>

<section class="bg-[linear-gradient(to_bottom,#dbeafe_0%,#eff6ff_40%,#fff_100%)] px-6 pb-20 pt-28 text-center md:pt-32">
	<div class="hero-in mx-auto max-w-3xl">
		<div class="mb-7 flex flex-wrap items-center justify-center gap-2">
			<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-[13px] py-1 text-xs font-medium text-blue-800">World Economic Forum Network</span>
			<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-[13px] py-1 text-xs font-medium text-blue-800">Fully funded scholarship</span>
			<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-[13px] py-1 text-xs font-medium text-blue-800">Ljubljana, Slovenia</span>
		</div>

		<h1 class="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--gs-primary)] md:text-[2.75rem]">
			The international career accelerator<br class="hidden md:block" />
			for the <span class="text-[var(--gs-accent)]">top 1%</span>
		</h1>

		<p class="mx-auto mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
			The program consists of an in-person 4-week skill sprint in marketing, sales, and business
			strategy, led by a high-level industry expert, paired alongside a paid 6-month internship
			abroad at a company where you can fast-track your career.
		</p>
		<p class="mx-auto mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
			No unnecessary lectures and no fluff. With our industry expert guiding you from day one, you
			step into a real business, tackle live company challenges, and hardwire your skills through
			actual execution.
		</p>
		<p class="mx-auto mb-6 max-w-xl text-[0.9375rem] font-medium text-[var(--gs-primary)]">
			Shapers Academy is not only here to help you develop and fast-track your career — it's here to
			help you shape it.
		</p>

		<a
			href={FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block rounded-lg bg-[var(--gs-accent)] px-9 py-[13px] text-[0.9375rem] font-semibold text-white no-underline transition-opacity duration-150 hover:opacity-90"
		>
			Apply for a scholarship →
		</a>
		<p class="mt-4 text-sm text-slate-500">12 spots available · Applications close May 20, 2026</p>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView class="text-left">
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">The offer</p>
			<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Not your typical internship</h2>
			<p class="mx-auto mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
				We've all seen it: brilliant young people who are theoretically overqualified but lack the raw
				experience and high-level skills that top-tier companies actually demand.
			</p>
			<p class="mx-auto mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
				The program is designed to allow selected participants to completely bypass the entry-level
				struggle — or in some cases, completely switch career paths.
			</p>
		</div>

		<div class="mt-8 grid gap-4 md:grid-cols-2">
			<div use:inView={{ delay: 0 }}>
				<div class="h-full rounded-xl border border-green-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
					<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-green-700">You will</p>
					{#each willItems as item (item)}
						<div class="flex gap-3 border-b border-slate-100 py-3 last:border-0 last:pb-0">
							<span class="mt-0.5 shrink-0 text-sm text-green-500">✓</span>
							<p class="text-[0.8125rem] leading-relaxed text-slate-700">{item}</p>
						</div>
					{/each}
				</div>
			</div>
			<div use:inView={{ delay: 100 }}>
				<div class="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
					<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">You won't</p>
					{#each wontItems as item (item)}
						<div class="flex gap-3 border-b border-slate-100 py-3 last:border-0 last:pb-0">
							<span class="mt-0.5 shrink-0 text-sm text-slate-300">✕</span>
							<p class="text-[0.8125rem] leading-relaxed text-slate-500">{item}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<p use:inView={{ delay: 80 }} class="mt-8 text-center text-[0.9375rem] font-medium text-[var(--gs-primary)]">
			By the time you finish the 6-month paid internship, you'll have a proven track record of international success.
		</p>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Quick facts</p>
			<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Programme at a glance</h2>
			<p class="mt-3 mb-10 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
				Only 12 scholarships are available. Why 12? Because we're only looking for the top 1% of applicants.
				<br>
				During your internship, you'll receive a monthly stipend designed to fully cover your living expenses in Ljubljana, allowing you to focus entirely on gaining experience and accelerating your career.
				<br>
				Focus areas are marketing, sales, and business development — but the skills you learn are highly transferable and applicable across various roles and industries.
			</p>
		</div>
		<div class="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
			{#each stats as stat, i (stat.value)}
				<div
					use:inView={{ delay: i * 80 }}
					class="rounded-xl border border-blue-100 bg-blue-50 px-6 py-8 text-center"
				>
					<p class="text-3xl font-bold tracking-tight text-[var(--gs-primary)]">{stat.value}</p>
					<p class="mt-2 text-xs font-medium text-slate-500">{stat.label}</p>
				</div>
			{/each}
		</div>

		<dl class="grid gap-x-16 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each specs as spec, i (spec.label)}
				<div use:inView={{ delay: 240 + i * 50 }}>
					<dt class="text-[0.6875rem] font-semibold uppercase tracking-wide text-slate-500">
						{spec.label}
					</dt>
					<dd class="mt-1 text-sm font-medium text-[var(--gs-primary)]">{spec.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-slate-50">
	<div class="grid grid-cols-3 gap-px bg-slate-200">
		<img src={oldTown} alt="Ljubljana old town" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={gas25} alt="Shapers program in Ljubljana" class="aspect-[4/3] w-full object-cover" loading="lazy" />
		<img src={gas252} alt="Global Shapers Ljubljana" class="aspect-[4/3] w-full object-cover" loading="lazy" />
	</div>
	<div class="px-6 py-14">
		<div class="mx-auto max-w-4xl">
			<div use:inView>
				<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Your base</p>
				<h2 class="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Ljubljana, Slovenia</h2>
				<p class="mt-3 mb-7 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
					Slovenia's capital sits at the centre of Europe — 2 hours from Vienna, Venice, and Zagreb.
					Compact, walkable, and cosmopolitan, with a vibrant young professional scene and a cost of
					living that lets your stipend go further.
				</p>
				<div class="flex flex-wrap gap-2">
					{#each ['✈ 2h from Vienna & Venice', '☀ 300 days of sun / year', '⌂ Rent 300€ – 500€/mo', '⊙ Tight expat community'] as tag (tag)}
						<span class="inline-flex items-center rounded-full border-[0.5px] border-[#bfdbfe] bg-white px-[13px] py-1 text-xs font-medium text-blue-800">{tag}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">Application process</p>
			<h2 class="mb-10 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">How it works</h2>
		</div>
		<div class="max-w-2xl">
			{#each steps as step, i (step.n)}
				<div use:inView={{ delay: i * 80 }} class="flex gap-5 border-b border-slate-100 py-6 last:border-0">
					<div
						class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.8125rem] font-semibold text-white {step.final ? 'bg-[var(--gs-primary)]' : 'bg-[var(--gs-accent)]'}"
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
	<div class="grid grid-cols-4 gap-px bg-slate-200">
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
				<p class="mt-3 mb-3 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
					Most international programs drop you in a new country and leave you to navigate bureaucracy,
					logistics, and housing on your own. Not this one.
				</p>
				<p class="mb-8 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
					When you get selected, <span class="font-medium text-slate-800">Global Shapers Ljubljana</span>
					— part of the World Economic Forum's global network of young leaders — steps in as your
					immediate local community.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each communityCards as card, i (card.title)}
					<div use:inView={{ delay: i * 70 }} class="rounded-xl border border-slate-200 bg-white p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]">
						<p class="mb-2 text-sm font-semibold text-[var(--gs-primary)]">{card.title}</p>
						<p class="text-[0.8125rem] leading-relaxed text-slate-600">{card.body}</p>
						{#if card.tag}
							<span
								class="mt-3 inline-block rounded-full border border-green-100 bg-green-50 px-3 py-0.5 text-[0.6875rem] font-medium text-green-700"
							>
								{card.tag}
							</span>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<div class="h-px bg-slate-200"></div>

<section class="bg-[var(--gs-primary)] px-6 py-14">
	<div class="mx-auto flex max-w-4xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
		<div use:inView>
			<p class="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-widest text-blue-200">
				Free info session
			</p>
			<h2 class="mb-3 text-xl font-semibold text-white">Still on the fence?</h2>
			<p class="max-w-lg text-[0.9375rem] leading-relaxed text-blue-200">
				Join our free live webinar where we walk through the full programme, answer every question
				you have, and help you figure out if Shapers Academy is the right move for you.
			</p>
			<div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-blue-300">
				<span>Tuesday, 13 May 2026</span>
				<span>18:00 CET</span>
				<span>Online · 45 min</span>
			</div>
		</div>
		<div use:inView={{ delay: 120 }} class="shrink-0">
			<a
				href={WEBINAR_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block whitespace-nowrap rounded-lg border border-blue-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
			>
				Reserve your spot →
			</a>
		</div>
	</div>
</section>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div use:inView>
			<p class="mb-[10px] text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--gs-accent)]">FAQ</p>
			<h2 class="mb-10 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--gs-primary)]">Frequently asked questions</h2>
		</div>
		<div class="max-w-2xl">
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

<section class="bg-[var(--gs-primary)] px-6 py-24 text-center">
	<div use:inView class="mx-auto max-w-lg">
		<h2 class="mb-3 text-3xl font-semibold tracking-tight text-white">
			12 spots. One shot at the top 1%.
		</h2>
		<p class="mb-9 text-[0.9375rem] text-blue-300">Applications close May 20, 2026.</p>
		<a
			href={FORM_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block rounded-lg bg-white px-9 py-3.5 text-[0.9375rem] font-semibold text-blue-900 transition-opacity hover:opacity-90"
		>
			Apply for scholarship →
		</a>
		<p class="mt-7 text-sm text-white">
			Questions?
			<a
				href="mailto:globalshapersljubljana@gmail.com"
				class="text-blue-300 underline underline-offset-2"
			>
				globalshapersljubljana@gmail.com
			</a>
		</p>
	</div>
</section>

<div class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-100 bg-white px-4 py-3 shadow-lg shadow-black/5 sm:hidden">
	<a
		href={FORM_URL}
		target="_blank"
		rel="noopener noreferrer"
		class="block w-full rounded-lg bg-[var(--gs-accent)] py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
	>
		Apply now
	</a>
</div>
