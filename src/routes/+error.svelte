<script lang="ts">
	import { page } from '$app/state';

	const is404 = page.status === 404;
</script>

<svelte:head>
	<title>{page.status} — Shapers Academy</title>
</svelte:head>

<div class="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
	<h1 class="mb-2 text-3xl font-semibold tracking-tight" style="color: var(--gs-primary)">
		{#if is404}
			Page not found
		{:else}
			Something went wrong
		{/if}
	</h1>

	<p class="mb-6 max-w-md text-[0.9375rem] leading-relaxed text-slate-500">
		{#if is404}
			The page you're looking for doesn't exist or has been moved.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>

	<a
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		href="/"
		class="inline-block rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
		style="background: var(--gs-accent)"
	>
		← Back to home
	</a>
</div>
