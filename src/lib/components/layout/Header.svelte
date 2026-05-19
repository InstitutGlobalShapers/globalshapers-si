<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';
	import { FORM_URL } from '$lib/constants';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 56);
		onScroll(); // set correct state immediately (handles F5 mid-page restore)
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

	<header
		class={`fixed inset-x-0 top-0 z-50 px-6 py-5 transition-[background,padding,box-shadow] duration-350 ${scrolled ? 'bg-[linear-gradient(to_bottom,rgba(26,48,82,0.97)_0%,rgba(30,58,95,0.95)_100%)] py-3.5 shadow-[0_1px_0_rgba(255,255,255,0.06),0_4px_20px_rgba(0,0,0,0.14)] backdrop-blur-[14px]' : ''}`}
	>
		<div class="mx-auto flex max-w-6xl items-center justify-center sm:justify-between">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/" class="flex items-center gap-2 no-underline">
				<img src={logo} alt="Global Shapers Ljubljana" class={`block h-10 w-auto ${scrolled ? 'brightness-0 invert' : ''}`} />

				<span aria-hidden="true" class={`text-[13px] transition-colors duration-350 ${ scrolled ? 'text-white/60' : 'text-[rgba(30,58,95,0.45)]' }`}>
					·
				</span>
				<span class={`text-[13px] transition-colors duration-350 ${ scrolled ? 'text-white' : 'text-[rgba(30,58,95,0.55)]' }`}>
					Shapers Academy
				</span>
			</a>
			<a
				// eslint-disable-next-line svelte/no-navigation-without-resolve
				href={FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden rounded-md border border-(--gs-accent) bg-(--gs-accent) px-4 py-2 text-[13px] font-semibold text-white no-underline transition-all duration-200 hover:bg-white hover:text-(--gs-accent) sm:inline-block"
			>
				Apply now →
			</a>
	</div>
</header>
