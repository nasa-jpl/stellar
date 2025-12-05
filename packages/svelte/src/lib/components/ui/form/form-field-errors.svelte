<script lang="ts">
  import { cn } from '$lib/utils.js';
  import * as FormPrimitive from 'formsnap';
  import type { LabelSize } from '../label/index.js';
  import { formVariants } from './index.js';

  type $$Props = FormPrimitive.FieldErrorsProps & {
    errorClasses?: string | undefined | null;
    size?: LabelSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: LabelSize = 'default';
  export { className as class };
  export let errorClasses: $$Props['class'] = undefined;
</script>

<FormPrimitive.FieldErrors
  class={cn('text-destructive', formVariants.size[size].errors, className)}
  {...$$restProps}
  let:errors
  let:fieldErrorsAttrs
  let:errorAttrs
>
  <slot {errors} {fieldErrorsAttrs} {errorAttrs}>
    {#each errors as error}
      <div {...errorAttrs} class={cn(errorClasses)}>{error}</div>
    {/each}
  </slot>
</FormPrimitive.FieldErrors>
