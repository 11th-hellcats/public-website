<script>
  import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
  <title>Public Server - Southern Cross Hellcats</title>
</svelte:head>

<article class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 w-full text-left flex flex-col gap-2">
  <h2 class="text-base text-sky-200 font-semibold mb-2">SCH Public Server</h2>
  <p class="text-slate-200">Jump on our public HLL server for casual play and scrims.</p>
  <Button
    href="http://145.223.22.23:7010/"
    label="Game stats"
    variant="outline"
    size="medium"
    external
    ariaLabel="View game statistics"
  />

  <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 text-sm">
    <div>
      <dt class="text-muted">Name</dt>
      <dd class="text-slate-100">Southern Cross Hellcats Public</dd>
    </div>
    <div>
      <dt class="text-muted">Region</dt>
      <dd class="text-slate-100">Oceania</dd>
    </div>
    <div>
      <dt class="text-muted">Queue</dt>
      <dd class="text-slate-100">Enabled</dd>
    </div>
    <div>
      <dt class="text-muted">Rules</dt>
      <dd class="text-slate-100">No griefing. Squad leads on comms. Be respectful.</dd>
    </div>
  </dl>
</article>
