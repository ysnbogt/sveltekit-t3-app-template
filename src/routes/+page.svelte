<script lang="ts">
  import ChevronDown from "@components/ChevronDown.svelte"
  import SkeletonCard from "@components/SkeletonCard.svelte"

  import { page } from "$app/stores"
  import { trpc } from "$lib/trpc/client"

  let cards = 8
  let loading = false

  const loadData = async () => {
    loading = true
    cards += await trpc($page).cards.query()
    loading = false
  }
</script>

<div
  class="grid justify-center m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>
  {#each Array(cards) as _}
    <SkeletonCard />
  {/each}
</div>

<!-- see more -->
<div class="my-10 text-gray-700 text-center">
  <button
    class="secondary"
    aria-busy={loading}
    on:click|preventDefault={loadData}>See more</button
  >
  <ChevronDown />
</div>
