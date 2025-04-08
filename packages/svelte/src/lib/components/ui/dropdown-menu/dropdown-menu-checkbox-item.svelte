<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import Check from 'lucide-svelte/icons/check';
  import { dropdownMenuVariants, type DropdownMenuSize } from './index.js';

  type $$Props = DropdownMenuPrimitive.CheckboxItemProps & {
    size?: DropdownMenuSize;
  };
  type $$Events = DropdownMenuPrimitive.CheckboxItemEvents;

  let className: $$Props['class'] = undefined;
  export let checked: $$Props['checked'] = undefined;
  export let size: DropdownMenuSize = 'default';
  export { className as class };
</script>

<DropdownMenuPrimitive.CheckboxItem
  bind:checked
  class={cn(
    'relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
    dropdownMenuVariants.size[size].checkboxItem,
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
    <DropdownMenuPrimitive.CheckboxIndicator>
      <Check class="h-4 w-4" />
    </DropdownMenuPrimitive.CheckboxIndicator>
  </span>
  <slot />
</DropdownMenuPrimitive.CheckboxItem>
