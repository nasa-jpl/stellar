<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { alertSizeVariants, type AlertSize, type HeadingLevel } from './index.js';

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    level?: HeadingLevel;
    size?: AlertSize;
  };

  let className: $$Props['class'] = undefined;
  export let level: $$Props['level'] = 'h5';
  export let size: AlertSize = 'default';
  export { className as class };
</script>

<svelte:element
  this={level}
  class={cn('mb-1 font-medium leading-none tracking-tight', alertSizeVariants.size[size].title, className)}
  {...$$restProps}
>
  <slot />
</svelte:element>
