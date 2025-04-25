<script lang="ts">
  import { cn } from '$lib/utils.js';
  import * as FormPrimitive from 'formsnap';
  import type { LabelSize } from '../label/index.js';
  import { formVariants } from './index.js';

  type $$Props = FormPrimitive.LegendProps & {
    size?: LabelSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: LabelSize = 'default';
  export { className as class };
</script>

<FormPrimitive.Legend
  {...$$restProps}
  class={cn('data-[fs-error]:text-destructive leading-none', formVariants.size[size].legend, className)}
  let:legendAttrs
>
  <slot {legendAttrs} />
</FormPrimitive.Legend>
