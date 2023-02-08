<script lang="ts">
    export let title;
    export let desc;
    export let link;
    export let source;

</script>
<div class="border rounded border-b-gray-600 text-left flex flex-col">
    <header>
        { title }
    </header>
    <div class="p-4 flex-1">
        <p>{ desc }</p>
    </div>
    <footer>
        {#if source}
            <a class="btn" href={source}>Source</a>
        {/if}
        {#if link}
            <a class="btn" href={link}>More info</a>
        {/if}
    </footer>
</div>

<style lang="postcss">
    header {
        @apply p-4 pb-2 border-b border-b-gray-600
    }

    footer {
        @apply px-4 py-2 border-t border-t-gray-600 flex justify-between
    }

    a {
        @apply border rounded py-1 px-4 uppercase text-sm hover:bg-white hover:text-gray-800
    }
</style>