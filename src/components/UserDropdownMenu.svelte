<script lang="ts">
  import { page } from "$app/stores"

  let isDisplayed = false
  const toggleDropdown = () => {
    isDisplayed = !isDisplayed
  }
</script>

<div class="relative">
  <button on:click={toggleDropdown}>
    <img
      class="w-10 h-10 rounded-full"
      src={$page.data.session?.user?.image}
      alt="User dropdown"
    />
  </button>

  <div
    id="userDropdown"
    class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
    class:hidden={!isDisplayed}
  >
    <div class="px-4 py-3 text-sm text-gray-900">
      <div>{$page.data.session?.user?.name}</div>
      <div class="font-medium truncate">{$page.data.session?.user?.email}</div>
    </div>
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <a
          href="/dashboard"
          class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Dashboard</a
        >
      </li>
      <li>
        <a href="#" class="text-gray-700 block px-4 py-2 hover:bg-gray-100"
          >Settings</a
        >
      </li>
    </ul>
    <div class="py-1">
      <a
        href="/auth/signout"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >Sign out</a
      >
    </div>
  </div>
</div>
