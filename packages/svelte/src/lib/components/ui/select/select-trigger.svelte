<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Select as SelectPrimitive } from 'bits-ui';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import type { SelectSize } from './index.js';
  import { selectVariants } from './index.js';

  type $$Props = SelectPrimitive.TriggerProps & {
    size?: SelectSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: SelectSize = 'default';
  export { className as class };
</script>

<SelectPrimitive.Trigger
  class={cn(
    'border-input bg-background ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive data-[placeholder]:[&>span]:text-muted-foreground flex w-full items-center justify-between rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-left break-all',
    selectVariants.size[size].trigger,
    className,
  )}
  {...$$restProps}
  let:builder
  on:click
  on:keydown
>
  <slot {builder} />
  <div>
    <ChevronDown class="h-4 w-4 opacity-50" />
  </div>
</SelectPrimitive.Trigger>
