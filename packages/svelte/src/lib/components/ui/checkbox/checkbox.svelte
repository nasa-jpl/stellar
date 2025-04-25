<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import Check from 'lucide-svelte/icons/check';
  import Minus from 'lucide-svelte/icons/minus';
  import { checkboxVariants, type CheckboxSize } from './index.js';

  type $$Props = CheckboxPrimitive.Props & {
    size?: CheckboxSize;
  };
  type $$Events = CheckboxPrimitive.Events;

  let className: $$Props['class'] = undefined;
  export let checked: $$Props['checked'] = false;
  export let size: CheckboxSize = 'default';
  export { className as class };
</script>

<CheckboxPrimitive.Root
  class={cn(
    'border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
    checkboxVariants.size[size],
    className,
  )}
  bind:checked
  {...$$restProps}
  on:click
>
  <CheckboxPrimitive.Indicator
    class={cn('flex items-center justify-center text-current', checkboxVariants.size[size])}
    let:isChecked
    let:isIndeterminate
  >
    {#if isChecked}
      <Check class="h-3.5 w-3.5" strokeWidth={3} />
    {:else if isIndeterminate}
      <Minus class="h-3.5 w-3.5" strokeWidth={3} />
    {/if}
  </CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
