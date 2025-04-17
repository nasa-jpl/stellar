<script lang="ts">
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { ModeWatcher } from '$lib/index.js';
  import '../../../react/dist/index.css';
  // Note: it is important to preserve the CSS import order here
  // so that the react css is loaded in first
  import '$src/font.css';
  import '$src/index.css';
</script>

<slot></slot>
<ModeWatcher />
<div id="svelte-toaster">
  <Toaster />
</div>

<style>
  /* Overrides for react <-> svelte CSS clashes */

  /* Sonner */
  :global(#svelte-toaster :where([data-sonner-toaster][data-y-position='bottom'])) {
    bottom: max(var(--offset), env(safe-area-inset-bottom));
  }

  :global(#svelte-toaster :where([data-sonner-toaster][data-x-position='right'])) {
    right: max(var(--offset), env(safe-area-inset-right));
  }
</style>
