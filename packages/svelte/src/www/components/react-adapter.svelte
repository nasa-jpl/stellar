<script lang="ts">
  import React from 'react';
  import { createRoot, type Root } from 'react-dom/client';
  import { onDestroy, onMount } from 'svelte';

  const e = React.createElement;
  let container: HTMLDivElement;
  let root: Root;

  onMount(() => {
    const { component, children, class: _, ...props } = $$props;
    try {
      root = createRoot(container);
      if (typeof component === 'object') {
        root.render(component);
      } else if (typeof component === 'function') {
        root.render(e(component, props));
      }
    } catch (err) {
      console.warn(`react-adapter failed to mount.`, { err });
    }
  });

  onDestroy(() => {
    try {
      container && root.unmount();
    } catch (err) {
      console.warn(`react-adapter failed to unmount.`, { err });
    }
  });
</script>

<div class="flex w-full justify-center" bind:this={container} />
