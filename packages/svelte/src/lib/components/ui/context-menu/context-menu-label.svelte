<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { contextMenuVariants, type ContextMenuSize } from './index.js';

  type $$Props = ContextMenuPrimitive.LabelProps & {
    inset?: boolean;
    size?: ContextMenuSize;
  };

  let className: $$Props['class'] = undefined;
  export let inset: $$Props['inset'] = undefined;
  export let size: ContextMenuSize = 'default';
  export { className as class };
</script>

<ContextMenuPrimitive.Label
  class={cn('text-foreground px-2 font-semibold', inset && 'pl-8', contextMenuVariants.size[size].label, className)}
  {...$$restProps}
>
  <slot />
</ContextMenuPrimitive.Label>
