<script lang="ts">
  import { page } from "$app/stores"
</script>

{#if $page.data.session}
  <h1>Protected page</h1>
  <p>Session expiry: {$page.data.session?.expires}</p>
{:else}
  <h1>Access Denied</h1>
{/if}
