<script>
	import Projects from '$lib/Projects.svelte';
</script>

<div class="landing-container">
	<div>
		<img alt="BlueIgnis logo" class="w-64" src="/blueignis_logo.svg">
	</div>
	<button class="pointer">
		&downarrow;
	</button>
</div>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-10 text-center w-full">
		<h2 class="font-bold">Open Source projects</h2>
		<Projects />
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}

	.landing-container {
		@apply relative flex justify-center items-center h-full bg-gray-200;
	}

	.pointer {
		@apply absolute animate-pulse bottom-2 p-4 text-3xl text-primary-500;
	}
</style>
