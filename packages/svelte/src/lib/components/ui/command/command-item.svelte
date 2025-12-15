<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { cn } from "$lib/utils.js";
	import { commandSizeVariants, getCommandCtx } from "./index.js";

	type $$Props = CommandPrimitive.ItemProps;

	export let asChild = false;

	let className: string | undefined | null = undefined;
	export { className as class };

	const { size } = getCommandCtx();
</script>

<CommandPrimitive.Item
	{asChild}
	class={cn(
		"aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		commandSizeVariants.item[size],
		commandSizeVariants.text[size],
		className
	)}
	{...$$restProps}
	let:action
	let:attrs
>
	<slot {action} {attrs} />
</CommandPrimitive.Item>
