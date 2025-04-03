<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { contextMenuVariants, type ContextMenuSize } from './index.js';

  type $$Props = ContextMenuPrimitive.ItemProps & {
    inset?: boolean;
    size?: ContextMenuSize;
  };
  type $$Events = ContextMenuPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let size: ContextMenuSize = 'default';
  export let inset: $$Props['inset'] = undefined;
  export { className as class };
</script>

<ContextMenuPrimitive.Item
  class={cn(
    'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    inset && 'pl-8',
    contextMenuVariants.size[size].item,
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
</ContextMenuPrimitive.Item>
