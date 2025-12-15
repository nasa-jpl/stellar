<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import Search from "lucide-svelte/icons/search";
	import { cn } from "$lib/utils.js";
	import { commandSizeVariants, getCommandCtx } from "./index.js";

	type $$Props = CommandPrimitive.InputProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: string = "";

	const { size } = getCommandCtx();
</script>

<div class={cn("flex items-center border-b", commandSizeVariants.inputWrapper[size])} data-cmdk-input-wrapper="">
	<Search class={cn("shrink-0 opacity-50", commandSizeVariants.inputIcon[size])} />
	<CommandPrimitive.Input
		class={cn(
			"placeholder:text-muted-foreground flex w-full rounded-md bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50",
			commandSizeVariants.input[size],
			commandSizeVariants.text[size],
			className
		)}
		{...$$restProps}
		bind:value
	/>
</div>
