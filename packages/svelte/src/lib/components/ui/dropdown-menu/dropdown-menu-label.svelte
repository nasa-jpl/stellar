<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { dropdownMenuVariants, type DropdownMenuSize } from './index.js';

  type $$Props = DropdownMenuPrimitive.LabelProps & {
    inset?: boolean;
    size?: DropdownMenuSize;
  };

  let className: $$Props['class'] = undefined;
  export let inset: $$Props['inset'] = undefined;
  export let size: DropdownMenuSize = 'default';
  export { className as class };
</script>

<DropdownMenuPrimitive.Label
  class={cn('px-2 font-semibold', inset && 'pl-8', dropdownMenuVariants.size[size].label, className)}
  {...$$restProps}
>
  <slot />
</DropdownMenuPrimitive.Label>
