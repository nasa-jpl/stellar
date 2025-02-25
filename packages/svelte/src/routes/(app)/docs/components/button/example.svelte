<script lang="ts">
  import { Button } from '$lib/index.js';
  import { Star } from 'lucide-svelte';
</script>

<div class="flex gap-2 justify-center items-center">
  <Button size="default">Button</Button>
  <Button size="icon"><Star size={16} /></Button>
  <Button size="lg">Large</Button>
  <Button size="sm">Small</Button>
  <Button size="xs">Extra Small</Button>
</div>
