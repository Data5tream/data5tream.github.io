<script lang="ts">
    import Projects from '$lib/Projects.svelte';
    import Languages from "$lib/Languages.svelte";
    import OtherLinks from "$lib/OtherLinks.svelte";

    let y: number;

    const scrollToContent = () => {
        window.scroll({
            left: 0,
            top: window.innerHeight,
            behavior: 'smooth'
        })
    };
</script>

<svelte:window bind:scrollY={y}/>

<div class="landing-container">
    <div>
        <img alt="BlueIgnis logo" class="w-64" src="/blueignis_logo.svg">
    </div>
    <button class='pointer' class:animate-bounce={y < 128} on:click={scrollToContent}>
        &downarrow;
    </button>
</div>

<Projects/>

<div class="bg-brand-1000 text-white pb-8">
    <Languages/>
</div>

<div class="bg-brand-50 pb-8">
    <OtherLinks/>
</div>

<style lang="postcss">
    .landing-container {
        @apply relative flex justify-center items-center min-h-screen bg-brand-50;
    }

    .pointer {
        @apply absolute bottom-2 p-4 text-3xl text-brand-1000;
    }
</style>
