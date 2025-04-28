<script lang="ts" context="module">
  import type { FormPath, SuperForm } from 'sveltekit-superforms';
  type T = Record<string, unknown>;
  type U = FormPath<T>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
  import type { FormSize } from '../../../../../../react/dist/index.js';

  import { cn } from '$lib/utils.js';
  import * as FormPrimitive from 'formsnap';
  import type { HTMLAttributes } from 'svelte/elements';
  import { formVariants } from './index.js';

  type $$Props = FormPrimitive.FieldProps<T, U> &
    HTMLAttributes<HTMLElement> & {
      size?: FormSize;
    };

  export let form: SuperForm<T>;
  export let name: U;
  export let size: FormSize = 'default';

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<FormPrimitive.Field {form} {name} let:constraints let:errors let:tainted let:value>
  <div class={cn(formVariants.size[size].field, className)}>
    <slot {constraints} {errors} {tainted} {value} />
  </div>
</FormPrimitive.Field>
