<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.png';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		function initApollo() {
			var n = Math.random().toString(36).substring(7),
				o = document.createElement('script');
			o.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
			o.async = true;
			o.defer = true;
			o.onload = function () {
				window.trackingFunctions.onLoad({ appId: '6a116d32e7a78f000c23daf9' });
			};
			document.head.appendChild(o);
		}
		initApollo();
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col antialiased">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
