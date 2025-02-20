<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Select as SelectPrimitive } from 'bits-ui';
  import Check from 'lucide-svelte/icons/check';
  import type { SelectSize } from './index.js';
  import { selectVariants } from './index.js';

  type $$Props = SelectPrimitive.ItemProps & {
    size?: SelectSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: SelectSize = 'default';
  export let value: $$Props['value'];
  export let label: $$Props['label'] = undefined;
  export let disabled: $$Props['disabled'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Item
  {value}
  {disabled}
  {label}
  class={cn(
    'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    selectVariants.size[size].item,
    className,
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
>
  <span class={cn('absolute flex items-center justify-center', selectVariants.size[size].icon)}>
    <SelectPrimitive.ItemIndicator>
      <Check class="h-full w-full" />
    </SelectPrimitive.ItemIndicator>
  </span>
  <slot>
    {label || value}
  </slot>
</SelectPrimitive.Item>
