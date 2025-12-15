<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { cn } from "$lib/utils.js";
	import { commandSizeVariants, getCommandCtx } from "./index.js";

	type $$Props = CommandPrimitive.EmptyProps;
	let className: string | undefined | null = undefined;
	export { className as class };

	const { size } = getCommandCtx();
</script>

<CommandPrimitive.Empty class={cn("text-center", commandSizeVariants.empty[size], className)} {...$$restProps}>
	<slot />
</CommandPrimitive.Empty>
