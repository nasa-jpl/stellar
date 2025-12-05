<script lang="ts">
  import { Toggle } from '$lib/components/ui/toggle/index.js';
  import { Bold } from 'lucide-svelte';
</script>

<Toggle aria-label="toggle bold" size="xs" variant="outline">
  <Bold class="h-4 w-4" />
</Toggle>
