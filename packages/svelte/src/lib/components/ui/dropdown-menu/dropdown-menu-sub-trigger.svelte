<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { dropdownMenuVariants, type DropdownMenuSize } from './index.js';

  type $$Props = DropdownMenuPrimitive.SubTriggerProps & {
    inset?: boolean;
    size?: DropdownMenuSize;
  };
  type $$Events = DropdownMenuPrimitive.SubTriggerEvents;

  let className: $$Props['class'] = undefined;
  export let inset: $$Props['inset'] = undefined;
  export let size: DropdownMenuSize = 'default';
  export { className as class };
</script>

<DropdownMenuPrimitive.SubTrigger
  class={cn(
    'flex cursor-default select-none items-center rounded-sm px-2 outline-none data-[highlighted]:bg-accent data-[state=open]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:text-accent-foreground',
    inset && 'pl-8',
    dropdownMenuVariants.size[size].subTrigger,
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
  <slot />
  <ChevronRight class="ml-auto h-4 w-4" />
</DropdownMenuPrimitive.SubTrigger>
