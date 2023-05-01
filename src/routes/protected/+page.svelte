<script lang="ts">
  import { page } from "$app/stores"
  import { trpc } from "$lib/trpc/client"
  import type { PageData } from "./$types"

  export let data: PageData

  let name = ""
  let email = ""

  const createUser = async () => {
    await trpc()
      .users.create.query({ name, email })
      .then((user) => {
        console.log(user)
      })
  }
</script>

{#each $page.data.users as user}
  <p>{user.name}</p>
{/each}

<input bind:value={name} placeholder="name" />
<input bind:value={email} placeholder="email" />
<button on:click={createUser}>Create User</button>

{#if $page.data.session}
  <h1>Protected page</h1>
  <p>
    This is a protected content. You can access this content because you are
    signed in.
  </p>
  <p>Session expiry: {$page.data.session?.expires}</p>
{:else}
  <h1>Access Denied</h1>
  <p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
  </p>
{/if}
