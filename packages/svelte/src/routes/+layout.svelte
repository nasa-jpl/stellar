<script lang="ts">
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { ModeWatcher } from '$lib/index.js';
  import '$src/index.css';
  import '@nasa-jpl/stellar/font';
</script>

<slot></slot>
<ModeWatcher />
<Toaster />

<style></style>
