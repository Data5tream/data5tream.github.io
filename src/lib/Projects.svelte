<script lang="ts">
    import Project from '$lib/Project.svelte';
    import SectionHeader from "$lib/components/SectionHeader.svelte";

    interface CodeProject {
      title: string,
      desc: string,
      link: string,
      source: string,
    }

    const projects: Array<CodeProject> = [
      {
        title: 'HQ Invoice',
        desc: 'Generate an itemized list from HelloHQ reporting CSV',
        link: 'https://data5tream.github.io/hq-invoice/',
        source: 'https://github.com/Data5tream/hq-invoice'
      },
      {
        title: 'Monolog web viewer',
        desc: 'View monolog log files in the browser',
        link: 'https://data5tream.github.io/monolog-web-viewer/',
        source: 'https://github.com/Data5tream/monolog-web-viewer'
      }
    ]
</script>

<div class="bg-brand-1000 text-white">
    <div class="container mx-auto">
        <SectionHeader title="Open Source projects"/>
    </div>
</div>

<div class="bg-brand-50">
    <div class="container mx-auto py-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-0">
            {#each projects as project}
                <Project {...project} />
            {/each}
        </div>
    </div>
</div>
