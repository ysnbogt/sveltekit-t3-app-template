<script lang="ts">
  import { onMount } from "svelte"

  import { page } from "$app/stores"
  import { trpc } from "$lib/trpc/client"

  const userEmail = $page.data.session?.user?.email || ""

  let userId = ""
  let title = ""
  let content = ""

  let posts: any[] = []
  onMount(async () => {
    const user = await trpc().posts.getUserId.query(userEmail)
    userId = user?.id || ""
    posts = await trpc().posts.list.query(userId)
    title = ""
    content = ""
  })
</script>

{#if $page.data.session}
  <h1>Protected page</h1>
  <p>Session expiry: {$page.data.session?.expires}</p>
  {#each posts as post}
    <p>{post.title} {post.content}</p>
  {/each}

  <form
    on:submit|preventDefault={async () => {
      await trpc().posts.create.mutate({
        authorId: userId,
        title,
        content,
      })
      posts = await trpc().posts.list.query(userId)
    }}
  >
    <input type="text" placeholder="Title" bind:value={title} />
    <input type="text" placeholder="Content" bind:value={content} />
    <button type="submit">Create post</button>
  </form>
{:else}
  <h1>Access Denied</h1>
{/if}
