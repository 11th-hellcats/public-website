<script>
  /**
   * Reusable Button component supporting both links and buttons
   * @param {string} href - Link destination (renders as <a> tag)
   * @param {string} label - Button text content
   * @param {string} variant - Button style variant: 'solid' | 'outline'
   * @param {string} size - Button size: 'small' | 'medium' | 'large'
   * @param {boolean} external - Open link in new tab (only for href)
   * @param {string} ariaLabel - Accessibility label
   * @param {string} class - Additional Tailwind classes
   */
  let {
    href = undefined,
    label = '',
    variant = 'solid',
    size = 'medium',
    external = false,
    ariaLabel = '',
    class: className = ''
  } = $props();

  // Size variants
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-12 py-2'
  };

  // Color variants
  const variantClasses = {
    solid: 'bg-gradient-to-b from-red-500 to-red-700 text-white font-semibold hover:from-red-600 hover:to-red-800 transition-colors',
    outline: 'border border-red-600/40 text-white font-semibold hover:bg-red-600/10 transition-colors'
  };

  // Reactive computed values
  const baseClasses = 'inline-grid place-items-center rounded-xl';
  let isLink = $derived(href !== undefined);
  let element = $derived(isLink ? 'a' : 'button');
  let sizeClass = $derived(sizeClasses[size] || sizeClasses.medium);
  let variantClass = $derived(variantClasses[variant] || variantClasses.solid);
  let classes = $derived(`${baseClasses} ${sizeClass} ${variantClass} ${className}`.trim());
  let linkAttrs = $derived(href ? {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener' : undefined
  } : {});
</script>

<svelte:element this={element} class={classes} {...linkAttrs} aria-label={ariaLabel}>
  {label}
</svelte:element>
