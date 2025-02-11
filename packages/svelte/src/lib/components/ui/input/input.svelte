<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputEvents, InputSize } from './index.js';
  import { inputVariants } from './index.js';

  type $$Props = HTMLInputAttributes & {
    el?: HTMLInputElement;
    size?: InputSize;
  };
  type $$Events = InputEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'] = undefined;
  export let size: InputSize = 'default';
  export { className as class };

  // Workaround for https://github.com/sveltejs/svelte/issues/9305
  // Fixed in Svelte 5, but not backported to 4.x.
  export let readonly: $$Props['readonly'] = undefined;

  // Workaround for https://github.com/huntabyte/shadcn-svelte/issues/480
  // Fixed in shadcn-svelte@next using refs from bits-ui@next
  export let el: $$Props['el'] = undefined;
</script>

<input
  class={cn(
    'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    inputVariants.size[size],
    className,
  )}
  bind:value
  bind:this={el}
  {readonly}
  on:blur
  on:change
  on:click
  on:focus
  on:focusin
  on:focusout
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:mousemove
  on:paste
  on:input
  on:wheel|passive
  {...$$restProps}
/>
