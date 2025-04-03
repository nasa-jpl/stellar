<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import Check from 'lucide-svelte/icons/check';
  import { contextMenuVariants, type ContextMenuSize } from './index.js';

  type $$Props = ContextMenuPrimitive.CheckboxItemProps & {
    size?: ContextMenuSize;
  };
  type $$Events = ContextMenuPrimitive.CheckboxItemEvents;

  let className: $$Props['class'] = undefined;
  export let checked: $$Props['checked'] = undefined;
  export let size: ContextMenuSize = 'default';
  export { className as class };
</script>

<ContextMenuPrimitive.CheckboxItem
  bind:checked
  class={cn(
    'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    contextMenuVariants.size[size].checkboxItem,
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
  <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <ContextMenuPrimitive.CheckboxIndicator>
      <Check class="h-4 w-4" />
    </ContextMenuPrimitive.CheckboxIndicator>
  </span>
  <slot />
</ContextMenuPrimitive.CheckboxItem>
