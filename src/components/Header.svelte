<script>
  import { page } from "$app/stores"
  import UserDropdownMenu from "./UserDropdownMenu.svelte"
</script>

<header>
  <nav class="bg-white border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://github.com/ysnbogt/sveltekit-t3-app-template/"
        class="flex items-center"
      >
        <span class="text-4xl mr-3">📦</span>
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >SvelteKit t3 App Template</span
        >
      </a>
      <div class="flex items-center md:order-2">
        {#if !$page.data.session}
          <a
            href="/auth/signin"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >Sign in</a
          >
        {:else}
          <UserDropdownMenu />
        {/if}
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      />
    </div>
  </nav>
</header>
