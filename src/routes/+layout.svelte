<script lang="ts">
  import "../app.css"
  import Footer from "@components/Footer.svelte"
  import Header from "@components/Header.svelte"
</script>

<div>
  <Header />
  <main class="min-h-screen mt-10 px-32">
    <slot />
  </main>
  <Footer />
</div>
