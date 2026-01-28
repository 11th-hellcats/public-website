<script>
  import { page } from '$app/state';
  import Button from './Button.svelte';
  
  const tabs = [
    { href: '/', label: 'About' },
    { href: '/how', label: 'How to join' },
    { href: '/server', label: 'SCH Public Server & Stats' },
    { href: '/results', label: 'Competitive Results' },
    { href: '/matchups', label: 'Competitive Matchups' }
  ];
  
  function isActive(href, pathname) {
    // Normalize pathname by removing trailing slash
    const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
      ? pathname.slice(0, -1) 
      : pathname;
    
    if (href === '/') return normalizedPath === '/';
    return normalizedPath === href || normalizedPath.startsWith(href + '/');
  }
</script>

<div class="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Primary">
  {#each tabs as tab (tab.href)}
    <Button
      href={tab.href}
      label={tab.label}
      variant={isActive(tab.href, page.url.pathname) ? 'solid' : 'outline'}
      size="medium"
      ariaLabel={tab.label}
      aria-current={isActive(tab.href, page.url.pathname) ? 'page' : undefined}
    />
  {/each}
</div>
