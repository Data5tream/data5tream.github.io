<script>
  import '../app.css';

  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
    <title>Simon Barth | Micro-Portfolio</title>
</svelte:head>

<Header />
<main>
    <slot />
</main>
<Footer />

<style>
    main {
        flex: 1;
        margin-top: 48px;
    }
</style>