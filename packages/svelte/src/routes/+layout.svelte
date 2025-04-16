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
<Toaster />

<style></style>
