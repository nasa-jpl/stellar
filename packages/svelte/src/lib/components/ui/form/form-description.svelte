<script lang="ts">
  import { cn } from '$lib/utils.js';
  import * as FormPrimitive from 'formsnap';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { LabelSize } from '../label/index.js';
  import { formVariants } from './index.js';

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    size?: LabelSize;
  };
  let className: string | undefined | null = undefined;
  export let size: LabelSize = 'default';
  export { className as class };
</script>

<FormPrimitive.Description
  class={cn('text-muted-foreground', formVariants.size[size].legend, className)}
  {...$$restProps}
  let:descriptionAttrs
>
  <slot {descriptionAttrs} />
</FormPrimitive.Description>
