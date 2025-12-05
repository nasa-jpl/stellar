<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Label as LabelPrimitive } from 'bits-ui';
  import { labelVariants, type LabelSize } from './index.js';

  type $$Props = LabelPrimitive.Props & {
    size?: LabelSize;
  };
  type $$Events = LabelPrimitive.Events;

  let className: $$Props['class'] = undefined;
  export let size: LabelSize = 'default';
  export { className as class };
</script>

<LabelPrimitive.Root
  class={cn(
    'leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    labelVariants.size[size],
    className,
  )}
  {...$$restProps}
  on:mousedown
>
  <slot />
</LabelPrimitive.Root>
