<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		items: NavItem[];
	}

	let { items }: Props = $props();
</script>

<nav class="flex items-center gap-6">
	{#each items as item (item.href)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={item.href} class="text-[13px] text-blue-300 no-underline transition-colors hover:text-white">{item.label}</a>
	{/each}
</nav>
