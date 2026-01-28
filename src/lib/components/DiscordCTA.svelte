<script>
  import Button from './Button.svelte';
</script>

<article class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 w-full flex flex-col gap-2 text-center text-sm">
  <p class="text-slate-200 mb-3">Join our Discord for map voting, recruitment, or to contact the team directly.</p>
  <div class="flex flex-row justify-center">
    <Button
      href="https://discord.gg/xh35Ja2dfd"
      label="Public Discord"
      variant="solid"
      size="large"
      external
      ariaLabel="Join our Discord server"
    />
  </div>
</article>
