<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import { commandSizeVariants, getCommandCtx } from './index.js';

  type $$Props = CommandPrimitive.GroupProps;

  let className: string | undefined | null = undefined;
  export { className as class };

  const { size } = getCommandCtx();
</script>

<CommandPrimitive.Group
  class={cn(
    'text-foreground [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[data-cmdk-group-heading]]:font-medium',
    commandSizeVariants.group[size],
    className,
  )}
  {...$$restProps}
>
  <slot />
</CommandPrimitive.Group>
