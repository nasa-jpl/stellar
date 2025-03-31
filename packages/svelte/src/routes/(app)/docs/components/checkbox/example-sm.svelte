<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox/index.js';
  import Label from '$lib/components/ui/label/label.svelte';

  let checked = false;
</script>

<div class="flex items-center space-x-2">
  <Checkbox id="terms" bind:checked size="sm" />
  <Label for="terms" class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70" size="sm">
    Accept terms and conditions
  </Label>
</div>
