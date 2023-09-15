<script lang="ts">
    import SectionHeader from '$lib/components/SectionHeader.svelte';

    const baseUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/';
    const langs = [
        {
            url: 'javascript/javascript-original.svg',
            title: 'JavaScript'
        },
        {
            url: 'mysql/mysql-original.svg',
            title: 'MySQL'
        },
        {
            url: 'php/php-original.svg',
            title: 'PHP'
        },
        {
            url: 'postgresql/postgresql-plain.svg',
            title: 'PostgreSQL'
        },
        {
            url: 'python/python-original.svg',
            title: 'python'
        },
        {
            url: 'rust/rust-plain.svg',
            title: 'Rust'
        },
        {
            url: 'sass/sass-original.svg',
            title: 'SASS'
        },
        {
            url: 'svelte/svelte-original.svg',
            title: 'Svelte'
        },
        {
            url: 'typescript/typescript-original.svg',
            title: 'TypeScript'
        },
        {
            url: 'vuejs/vuejs-original.svg',
            title: 'Vue'
        },
    ]

</script>

<div class="container mx-auto">
    <SectionHeader title="Languages"/>
    <p class="text-center mb-3">
        (Some of the) languages I've worked with. In alphabetical order<br><small>(maybe I should sort them by preference or experience?)</small>
    </p>
    <div class="flex justify-center flex-wrap gap-2">
        {#each langs as lang}
            <img src={baseUrl + lang.url} title={lang.title} alt={lang.title} width="42" height="42"/>
        {/each}
    </div>
</div>

<style lang="postcss">
    img {
        @apply grayscale brightness-50 invert transition
        hover:invert-0 hover:grayscale-0 hover:brightness-100;
    }
</style>