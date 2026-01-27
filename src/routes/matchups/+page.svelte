<script>
  import CompetitionFilter from '$lib/components/CompetitionFilter.svelte';
  import GameCard from '$lib/components/GameCard.svelte';

  let { data } = $props();
  let competition = $state('all');

  let filteredMatchups = $derived(
    data.games.filter(g => !g.complete && (competition === 'all' || g.comp === competition))
  );
</script>

<svelte:head>
  <title>Competitive Matchups - Southern Cross Hellcats</title>
</svelte:head>

<article class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 w-full text-left flex flex-col gap-6">
  <h2 class="text-base text-sky-200 font-semibold mb-2">Competitive Matchups</h2>
  <p class="text-slate-200 mb-3">Upcoming Competitive Matchups.</p>

  <CompetitionFilter bind:competition id="matchups-competition-filter" />

  <div class="flex flex-col gap-4">
    {#each filteredMatchups as game (game.date + game.home.name + game.away.name)}
      <GameCard {game} showScores={false} />
    {/each}

    {#if filteredMatchups.length === 0}
      <div class="text-slate-400 text-sm text-center">
        No upcoming matchups for this competition.
      </div>
    {/if}
  </div>
</article>
