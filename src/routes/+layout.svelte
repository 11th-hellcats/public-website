<script>
  import '../app.css';
  import VantaBackground from '$lib/components/VantaBackground.svelte';
  import TabNav from '$lib/components/TabNav.svelte';
  import DiscordCTA from '$lib/components/DiscordCTA.svelte';

  let { children } = $props();
</script>

<VantaBackground />

<main class="min-h-screen flex flex-col items-center py-12 px-6">
  <section class="flex flex-col items-center text-center">
    <div class="p-6 flex flex-col items-center">
      <img src="/assets/SCH_v10_Main.webp" alt="Southern Cross Hellcats clan logo" loading="lazy" class="w-64 h-64 object-contain" />
    </div>
  </section>

  <section class="flex flex-col items-center text-center w-full max-w-4xl">
    <div class="w-full flex flex-col bg-panel/95 backdrop-blur rounded-2xl border border-slate-800 shadow-xl p-6 gap-6">
      <header>
        <h1 class="text-3xl font-semibold tracking-tight">Southern Cross Hellcats</h1>
        <p class="text-muted text-sm mt-1">A competitive, console-only, Hell Let Loose clan.</p>
      </header>

      <TabNav />

      <div class="relative w-full">
        {@render children()}
      </div>

      <DiscordCTA />

      <footer class="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-xs w-full">
        <span>Oceania | Console | Hell Let Loose</span>
        <span>Playing AEST evenings</span>
      </footer>
    </div>
  </section>
</main>
