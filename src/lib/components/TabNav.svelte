<script>
  import { page } from '$app/stores';
  
  const tabs = [
    { href: '/', label: 'About' },
    { href: '/how', label: 'How to join' },
    { href: '/server', label: 'SCH Public Server & Stats' },
    { href: '/results', label: 'Competitive Results' },
    { href: '/matchups', label: 'Competitive Matchups' }
  ];
  
  function isActive(href, pathname) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }
</script>

<div class="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Primary">
  {#each tabs as tab}
    <a 
      href={tab.href}
      class="inline-grid place-items-center px-4 py-2 rounded-xl font-semibold transition-colors {isActive(tab.href, $page.url.pathname) ? 'bg-accent text-white' : 'bg-slate-800/60 text-ink hover:bg-slate-700/60'}"
      role="tab"
      aria-selected={isActive(tab.href, $page.url.pathname)}
    >
      {tab.label}
    </a>
  {/each}
</div>
