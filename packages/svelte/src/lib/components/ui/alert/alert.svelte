<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { type AlertSize, type Variant, alertSizeVariants, alertVariants } from './index.js';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: Variant;
    size?: AlertSize;
  };

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export let size: AlertSize = 'default';
  export { className as class };
</script>

<div
  class={cn(alertVariants({ variant, size }), alertSizeVariants.size[size].alert, className)}
  {...$$restProps}
  role="alert"
>
  <slot />
</div>
