<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData
</script>

{#each data.posts as post}
  <p>{post.title} {post.content}</p>
{/each}
