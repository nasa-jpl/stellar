<script lang="ts">
  import { cn } from '$lib/utils.js';
  import * as FormPrimitive from 'formsnap';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { FormSize } from '../../../../../../react/dist/index.js';
  import { formVariants } from './index.js';

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    size?: FormSize;
  };
  let className: string | undefined | null = undefined;
  export let size: FormSize = 'default';
  export { className as class };
</script>

<FormPrimitive.Description
  class={cn('text-muted-foreground', formVariants.size[size].legend, className)}
  {...$$restProps}
  let:descriptionAttrs
>
  <slot {descriptionAttrs} />
</FormPrimitive.Description>
