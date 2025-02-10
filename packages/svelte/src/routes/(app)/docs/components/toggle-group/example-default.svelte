<script lang="ts">
  import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
  import { Bold, Italic, Underline } from 'lucide-svelte';
</script>

<ToggleGroup.Root type="multiple">
  <ToggleGroup.Item value="bold" aria-label="Toggle bold">
    <Bold class="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="italic" aria-label="Toggle italic">
    <Italic class="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
    <Underline class="h-4 w-4" />
  </ToggleGroup.Item>
</ToggleGroup.Root>
