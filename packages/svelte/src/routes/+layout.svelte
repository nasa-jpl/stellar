<script lang="ts">
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { ModeWatcher } from '$lib/index.js';
  import '$src/font.css';
  import '$src/index.css';
</script>

<slot></slot>
<ModeWatcher />
<Toaster />

<style></style>
