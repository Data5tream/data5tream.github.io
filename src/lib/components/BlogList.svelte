<script lang="ts">
  const posts = [
    {
      title: 'Test post',
      extract: 'A post to test the markdown styling',
      link: '/blog/test-post'
    }
  ] as Array<{title: string; extract: string; link: string}>;
</script>

{#each posts as post}
    <div class="post">
        <h2>{post.title}</h2>
        <p>{post.extract}</p>
        <div>
            <a href={post.link}>Show post</a>
        </div>
    </div>
{/each}

<style lang="postcss">
    .post {
        @apply border border-brand-200 rounded text-left flex flex-col;

        h2 {
            @apply p-4 pb-2 tracking-wide;
        }

        p {
            @apply p-4 flex-1 border-y border-y-brand-200;
        }

        & > div {
            @apply px-4 py-2 flex justify-between flex-wrap gap-2;

            a {
                @apply border rounded py-1 px-4 bg-brand-100 uppercase text-sm transition ring-brand-800 ring-offset-2
                hover:bg-brand-1000 hover:text-white hover:border-brand-1000 active:ring-2;
            }
        }
    }
</style>
