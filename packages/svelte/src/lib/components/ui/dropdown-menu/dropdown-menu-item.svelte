<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { dropdownMenuVariants, type DropdownMenuSize } from './index.js';

  type $$Props = DropdownMenuPrimitive.ItemProps & {
    inset?: boolean;
    size?: DropdownMenuSize;
  };
  type $$Events = DropdownMenuPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let inset: $$Props['inset'] = undefined;
  export let size: DropdownMenuSize = 'default';
  export { className as class };
</script>

<DropdownMenuPrimitive.Item
  class={cn(
    'relative flex cursor-default select-none items-center rounded-sm px-2 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
    inset && 'pl-8',
    dropdownMenuVariants.size[size].item,
    className,
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerdown
  on:pointerleave
  on:pointermove
>
  <slot />
</DropdownMenuPrimitive.Item>
