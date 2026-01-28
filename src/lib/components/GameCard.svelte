<script>
  let { game, showScores = false } = $props();

  const compNames = {
    rtg: 'Road to Glory',
    wwl: 'Winter War League',
    tpl: 'The Premier League',
    oscl: 'Off Season Competitive League',
    friendly: 'Friendly'
  };

  const schNames = ['SCH', '11th Hellcats'];

  function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-AU', { weekday: 'short', day: '2-digit', month: 'short' });
  }

  function getScoreColor(team, isHome) {
    const homeIsSch = schNames.includes(game.home.name);
    const schWon = homeIsSch 
      ? game.home.score > game.away.score 
      : game.away.score > game.home.score;
    const opponentWon = homeIsSch
      ? game.away.score > game.home.score
      : game.home.score > game.away.score;
    
    const thisTeamIsSch = (isHome && homeIsSch) || (!isHome && !homeIsSch);
    
    if (thisTeamIsSch && schWon) return 'text-green-400';
    if (!thisTeamIsSch && opponentWon) return 'text-red-400';
    return 'text-white';
  }
</script>

<div class="flex flex-col bg-slate-800/60 rounded-xl p-4 shadow w-full gap-2">
  <div class="flex flex-row items-center w-full">
    <div class="flex-1 flex flex-row items-center justify-end gap-2">
      {#if game.home.logo}
        <img src={game.home.logo} alt="{game.home.name} logo" class="w-10 h-10 rounded object-contain">
      {/if}
      <span class="font-bold text-slate-100 text-lg">{game.home.name}</span>
      {#if showScores}
        <span class="ml-2 px-2 py-1 rounded bg-slate-900 {getScoreColor(game.home, true)} font-bold text-lg">{game.home.score}</span>
      {/if}
    </div>
    <span class="font-semibold text-slate-300 text-xl px-4">vs</span>
    <div class="flex-1 flex flex-row items-center justify-start gap-2">
      {#if showScores}
        <span class="mr-2 px-2 py-1 rounded bg-slate-900 {getScoreColor(game.away, false)} font-bold text-lg">{game.away.score}</span>
      {/if}
      <span class="font-bold text-slate-100 text-lg">{game.away.name}</span>
      {#if game.away.logo}
        <img src={game.away.logo} alt="{game.away.name} logo" class="w-10 h-10 rounded object-contain">
      {/if}
    </div>
  </div>
  <div class="flex flex-row items-center justify-between text-sm">
    <div class="flex flex-row items-center gap-2">
      <span class="text-amber-400 font-semibold">{compNames[game.comp] || game.comp}</span>
      {#if game.round}
        <span class="text-slate-400">Round {game.round}</span>
      {/if}
    </div>
    <div class="flex flex-row items-center gap-2 text-slate-400">
      <span class="text-sky-300 font-semibold">{formatDate(game.date)}</span>
      {#if game.time}
        <span>{game.time} {game.tz}</span>
      {/if}
      {#if showScores && game.duration}
        <span>({game.duration})</span>
      {/if}
    </div>
  </div>
</div>
