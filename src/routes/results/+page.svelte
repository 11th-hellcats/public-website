<script>
  import CompetitionFilter from '$lib/components/CompetitionFilter.svelte';
  import GameCard from '$lib/components/GameCard.svelte';

  let { data } = $props();
  let competition = $state('all');

  let filteredResults = $derived(
    data.games.filter(g => g.complete && (competition === 'all' || g.comp === competition))
  );
</script>

<svelte:head>
  <title>Competitive Results - Southern Cross Hellcats</title>
</svelte:head>

<article class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 w-full text-left flex flex-col gap-6">
  <h2 class="text-base text-sky-200 font-semibold mb-2">Competitive Results</h2>
  <p class="text-slate-200 mb-3">View our latest competitive results from TPL, OSCL, WWL, and scrims.</p>
  
  <div class="flex flex-col gap-2">
    <CompetitionFilter bind:competition id="results-competition-filter" />

    <div class="flex flex-col gap-4">
      {#each filteredResults as game (game.date + game.home.name + game.away.name)}
        <GameCard {game} showScores={true} />
      {/each}

      {#if filteredResults.length === 0}
        <div class="text-slate-400 text-sm text-center">
          No completed results for this competition.
        </div>
      {/if}
    </div>
  </div>
</article>
