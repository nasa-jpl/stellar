<script lang="ts">
  import { cn, flyAndScale } from '$lib/utils.js';
  import { Select as SelectPrimitive } from 'bits-ui';
  import { scale } from 'svelte/transition';
  import type { SelectSize } from './index.js';
  import { selectVariants } from './index.js';

  type $$Props = SelectPrimitive.ContentProps & {
    size?: SelectSize;
  };
  type $$Events = SelectPrimitive.ContentEvents;

  export let sideOffset: $$Props['sideOffset'] = 4;
  export let inTransition: $$Props['inTransition'] = flyAndScale;
  export let inTransitionConfig: $$Props['inTransitionConfig'] = undefined;
  export let outTransition: $$Props['outTransition'] = scale;
  export let outTransitionConfig: $$Props['outTransitionConfig'] = {
    start: 0.95,
    opacity: 0,
    duration: 50,
  };

  let className: $$Props['class'] = undefined;
  export let size: SelectSize = 'default';
  export { className as class };
</script>

<SelectPrimitive.Content
  {inTransition}
  {inTransitionConfig}
  {outTransition}
  {outTransitionConfig}
  {sideOffset}
  class={cn(
    'bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md outline-none',
    selectVariants.size[size].content,
    className,
  )}
  {...$$restProps}
  on:keydown
>
  <div class="w-full p-1">
    <slot />
  </div>
</SelectPrimitive.Content>
