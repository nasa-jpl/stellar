<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLTdAttributes } from 'svelte/elements';
  import { tableCellVariants, type TableCellProps } from './index.js';

  type $$Props = HTMLTdAttributes & TableCellProps;

  let className: $$Props['class'] = undefined;
  export let size: $$Props['size'] = 'default';
  export { className as class };
</script>

<td class={cn(tableCellVariants({ size, className }))} {...$$restProps} on:click on:keydown>
  <slot />
</td>
