<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import Circle from 'lucide-svelte/icons/circle';
  import { dropdownMenuVariants, type DropdownMenuSize } from './index.js';

  type $$Props = DropdownMenuPrimitive.RadioItemProps & {
    size?: DropdownMenuSize;
  };
  type $$Events = DropdownMenuPrimitive.RadioItemEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'];
  export let size: DropdownMenuSize = 'default';
  export { className as class };
</script>

<DropdownMenuPrimitive.RadioItem
  class={cn(
    'relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
    dropdownMenuVariants.size[size].radioItem,
    className,
  )}
  {value}
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
    <DropdownMenuPrimitive.RadioIndicator>
      <Circle class="h-1.5 w-1.5 fill-current" />
    </DropdownMenuPrimitive.RadioIndicator>
  </span>
  <slot />
</DropdownMenuPrimitive.RadioItem>
