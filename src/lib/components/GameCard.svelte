<script>
  let { game, showScores = false } = $props();

  function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-AU', { weekday: 'short', day: '2-digit', month: 'short' });
  }
</script>

<div class="flex flex-col sm:flex-row items-center justify-between bg-slate-800/60 rounded-xl p-4 shadow w-full">
  <div class="flex justify-between sm:justify-start items-center gap-4 w-full">
    <div class="flex flex-col sm:flex-row items-center gap-2 min-w-24">
      <img src={game.home.logo} alt="{game.home.name} logo" class="w-10 h-10 rounded object-contain">
      <span class="font-bold text-slate-100 text-lg">{game.home.name}</span>
      {#if showScores}
        <span class="ml-2 px-2 py-1 rounded bg-slate-900 text-accent font-bold text-lg">{game.home.score}</span>
      {/if}
    </div>
    <span class="font-semibold text-slate-300 text-xl">vs</span>
    <div class="flex flex-col sm:flex-row items-center gap-2 min-w-24">
      <img src={game.away.logo} alt="{game.away.name} logo" class="w-10 h-10 rounded object-contain">
      <span class="font-bold text-slate-100 text-lg">{game.away.name}</span>
      {#if showScores}
        <span class="ml-2 px-2 py-1 rounded bg-slate-900 text-accent font-bold text-lg">{game.away.score}</span>
      {/if}
    </div>
  </div>
  <div class="flex flex-col items-center sm:items-end text-center sm:text-right mt-2 sm:mt-0">
    <span class="text-sky-300 font-semibold">{formatDate(game.date)}</span>
    <span class="text-slate-400 text-sm">{game.time} {game.tz}</span>
    {#if showScores && game.duration}
      <span class="text-slate-400 text-xs mt-1">Match Time: {game.duration}</span>
    {/if}
  </div>
</div>
