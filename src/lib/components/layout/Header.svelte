<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';

	// Phase 2: import Nav and restore full-site navigation links
	const FORM_URL =
		'https://docs.google.com/forms/d/1C3Niai_lcougUfLNecKx7BAbfg4dMUTPac46vsorGQc/viewform';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 56);
		onScroll(); // set correct state immediately (handles F5 mid-page restore)
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

	<header
		class={`fixed inset-x-0 top-0 z-50 px-6 py-5 transition-[background,padding,box-shadow] duration-[350ms] ${scrolled ? 'bg-[linear-gradient(to_bottom,rgba(26,48,82,0.97)_0%,rgba(30,58,95,0.91)_100%)] py-[14px] shadow-[0_1px_0_rgba(255,255,255,0.06),0_4px_20px_rgba(0,0,0,0.14)] backdrop-blur-[14px]' : ''}`}
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/" class="flex items-center gap-2 no-underline">
				<img src={logo} alt="Global Shapers Ljubljana" class={`block h-10 w-auto ${scrolled ? 'brightness-0 invert' : ''}`} />
				<span aria-hidden="true" class={`text-[13px] transition-colors duration-[350ms] ${scrolled ? 'text-blue-300/60' : 'text-[rgba(30,58,95,0.45)]'}`}>·</span>
				<span class={`text-[13px] transition-colors duration-[350ms] ${scrolled ? 'text-blue-300' : 'text-[rgba(30,58,95,0.55)]'}`}>Shapers Academy</span>
		</a>
			<a
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-md bg-[var(--gs-accent)] px-4 py-2 text-[13px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
			>
				Apply now →
			</a>
	</div>
</header>
