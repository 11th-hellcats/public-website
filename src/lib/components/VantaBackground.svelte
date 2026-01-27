<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';

  let vantaEffect = $state(null);
  let vantaRef = $state(null);

  onMount(async () => {
    // Dynamically import vanta fog
    const VANTA = await import('vanta/dist/vanta.fog.min');
    
    if (vantaRef) {
      vantaEffect = VANTA.default({
        el: vantaRef,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xb62f2f,
        midtoneColor: 0x481308,
        lowlightColor: 0x0,
        baseColor: 0x161414,
        blurFactor: 0.58,
        speed: 0.70,
        zoom: 1.30
      });
    }
  });

  onDestroy(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }
  });
</script>

<div bind:this={vantaRef} class="fixed inset-0 -z-10"></div>
