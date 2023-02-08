<script lang="ts">
	import Projects from '$lib/Projects.svelte';

	const scrollToContent = () => {
		window.scroll({
			left: 0,
			top: window.innerHeight,
			behavior: 'smooth'
		})
	};
</script>

<div class="landing-container">
	<div>
		<img alt="BlueIgnis logo" class="w-64" src="/blueignis_logo.svg">
	</div>
	<button class="pointer" on:click={scrollToContent}>
		&downarrow;
	</button>
</div>

<div class="container h-full py-8 mx-auto flex justify-center items-between min-h-[500px]">
	<div class="space-y-10 text-center w-full">
		<h2 class="font-bold">Open Source projects</h2>
		<Projects />
	</div>
</div>

<footer class="pt-2 pb-1 bg-gray-800">
	<div class="container mx-auto">
		&copy; Simon Barth, 2023
	</div>
</footer>

<style lang="postcss">
	.landing-container {
		@apply relative flex justify-center items-center min-h-screen bg-gray-200;
		margin-top: -60px;
	}

	.pointer {
		@apply absolute animate-pulse bottom-2 p-4 text-3xl text-primary-500;
	}
</style>
