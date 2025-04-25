<script lang="ts">
  import { Label, type LabelSize } from '$lib/components/ui/label/index.js';
  import { cn } from '$lib/utils.js';
  import type { Label as LabelPrimitive } from 'bits-ui';
  import { getFormControl } from 'formsnap';

  type $$Props = LabelPrimitive.Props & {
    size?: LabelSize;
  };

  let className: $$Props['class'] = undefined;
  export let size: LabelSize = 'default';
  export { className as class };

  const { labelAttrs } = getFormControl();
</script>

<Label {...$labelAttrs} class={cn('data-[fs-error]:text-destructive', className)} {size} {...$$restProps}>
  <slot {labelAttrs} />
</Label>
