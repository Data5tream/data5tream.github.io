<script>
  import '../app.css';

  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Header />
<main>
    <slot />
</main>
<Footer />

<style>
    main {
        margin-top: 48px;
    }
</style>