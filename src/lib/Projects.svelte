<script lang="ts">
    import Project from '$lib/Project.svelte';
    import SectionHeader from "$lib/components/SectionHeader.svelte";

    interface CodeProjectTag {
        name: string,
        classes: string,
    }

    interface CodeProject {
        title: string,
        desc: string,
        link: string,
        source: string,
        tags: Array<CodeProjectTag>,
    }

    const projects: Array<CodeProject> = [
        {
            title: 'Easy Events',
            desc: 'An event organization platform built with Django and Svelte',
            link: '',
            source: '',
            tags: [
                {
                    name: 'Python',
                    classes: 'border-transparent bg-sky-700 text-white',
                },
                {
                    name: 'Svelte',
                    classes: 'border-transparent bg-orange-500 text-white',
                },
            ],
        },
        {
            title: 'Simple Status Page',
            desc: 'Simple status page written in Rust and Svelte',
            link: '',
            source: 'https://github.com/Data5tream/simple-status-page',
            tags: [
                {
                    name: 'Rust',
                    classes: 'border-transparent bg-orange-300',
                },
                {
                    name: 'Svelte',
                    classes: 'border-transparent bg-orange-500 text-white',
                },
                {
                    name: 'WIP',
                    classes: 'border-amber-500 text-amber-500',
                }
            ],
        },
        {
            title: 'Monolog web viewer',
            desc: 'View monolog log files in the browser',
            link: 'https://data5tream.github.io/monolog-web-viewer/',
            source: 'https://github.com/Data5tream/monolog-web-viewer',
            tags: [
                {
                    name: 'Svelte',
                    classes: 'border-transparent bg-orange-500 text-white',
                },
                {
                    name: 'WIP',
                    classes: 'border-amber-500 text-amber-500',
                }
            ],
        },
        {
            title: 'HQ Invoice',
            desc: 'Generate an itemized list from HelloHQ reporting CSV',
            link: 'https://data5tream.github.io/hq-invoice/',
            source: 'https://github.com/Data5tream/hq-invoice',
            tags: [
                {
                    name: 'Vue',
                    classes: 'border-transparent bg-green-400',
                },
            ],
        },
    ]
</script>

<div class="bg-brand-1000 text-white">
    <div class="container mx-auto pb-3">
        <SectionHeader title="Open Source projects"/>
        <p class="text-center">Small open-source projects that I've build in my free time</p>
    </div>
</div>

<div class="bg-brand-50">
    <div class="container mx-auto py-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-0">
            {#each projects as project}
                <Project {...project}/>
            {/each}
        </div>
    </div>
</div>
