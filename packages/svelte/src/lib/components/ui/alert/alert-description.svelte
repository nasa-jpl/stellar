<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { alertSizeVariants, type AlertSize } from './index.js';

  type $$Props = HTMLAttributes<HTMLDivElement> & { size?: AlertSize };

  let className: $$Props['class'] = undefined;
  export let size: AlertSize = 'default';
  export { className as class };
</script>

<div class={cn('text-sm [&_p]:leading-relaxed', alertSizeVariants.size[size].description, className)} {...$$restProps}>
  <slot />
</div>
