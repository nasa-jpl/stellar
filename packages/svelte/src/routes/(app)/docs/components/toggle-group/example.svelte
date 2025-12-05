<script lang="ts">
  import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
  import { Bold, Italic, Underline } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-8">
  <div class="space-y-3">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
    <ToggleGroup.Root type="multiple" size="xs">
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
  </div>

  <div class="space-y-3">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
    <ToggleGroup.Root type="multiple" size="sm">
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
  </div>

  <div class="space-y-3">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
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
  </div>
</div>
