<script lang="ts">
    export let title;
    export let desc;
    export let link;
    export let source;
    export let tags;
</script>
<div class="border border-brand-200 rounded text-left flex flex-col">
    <header>
        { title }
    </header>
    <article>
        <p>{ desc }</p>
    </article>
    <footer>
        <div class="flex gap-1 items-end">
            {#each tags as tag}
                <span class={'rounded-full border px-1.5 text-xs ' + tag.classes}>
                    {tag.name}
                </span>
            {/each}
        </div>
        <div class="flex gap-2">
            {#if source}
                <a class="btn" href={source}>Source</a>
            {/if}
            {#if link}
                <a class="btn" href={link}>More info</a>
            {/if}
        </div>
    </footer>
</div>

<style lang="postcss">
    header {
        @apply p-4 pb-2 tracking-wide;
    }

    article {
        @apply p-4 flex-1 border-y border-y-brand-200;
    }

    footer {
        @apply px-4 py-2 flex justify-between flex-wrap gap-2;
    }

    a {
        @apply border rounded py-1 px-4 bg-brand-100 uppercase text-sm transition ring-brand-800 ring-offset-2
        hover:bg-brand-1000 hover:text-white hover:border-brand-1000 active:ring active:ring-2;
    }
</style>