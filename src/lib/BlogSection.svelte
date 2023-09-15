<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import BlogList from "$lib/components/BlogList.svelte";
</script>

<div class="bg-brand-1000 text-white">
    <div class="container mx-auto pb-3">
        <SectionHeader title="Blog" />
        <p class="text-center">A collection of posts and annotations</p>
    </div>
</div>

<div class="container mx-auto my-2">
   <BlogList />
</div>
