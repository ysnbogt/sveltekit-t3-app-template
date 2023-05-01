<script lang="ts">
  import "../app.css"
  import Footer from "@components/Footer.svelte"
  import Header from "@components/Header.svelte"
</script>

<div>
  <Header />
  <main class="min-h-screen mt-10 sm:px-6 md:px-20 lg:px-24 xl:px-32">
    <slot />
  </main>
  <Footer />
</div>
