<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SelectSize } from './index.js';
  import { selectVariants } from './index.js';

  type $$Props = SelectPrimitive.LabelProps & {
    size?: SelectSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: SelectSize = 'default';
  export { className as class };
</script>

<SelectPrimitive.Label class={cn('font-semibold', selectVariants.size[size].label, className)} {...$$restProps}>
  <slot />
</SelectPrimitive.Label>
