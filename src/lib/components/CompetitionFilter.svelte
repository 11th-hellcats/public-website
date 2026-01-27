<script>
  let { competition = $bindable('all'), id = 'competition-filter' } = $props();
</script>

<div class="mb-4 flex gap-2 items-center justify-end">
  <label for={id} class="text-slate-300 font-semibold">Filter by competition:</label>
  <select 
    {id}
    bind:value={competition}
    class="px-3 py-2 rounded bg-slate-800 text-slate-100 border border-slate-700"
  >
    <option value="all">All</option>
    <option value="wwl">Winter War League</option>
    <option value="tpl">TPL</option>
    <option value="oscl">OSCL</option>
  </select>
</div>
