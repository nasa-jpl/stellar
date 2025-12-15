<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";
	import { commandSizeVariants, getCommandCtx } from "./index.js";

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	const { size } = getCommandCtx();
</script>

<span
	class={cn("text-muted-foreground ml-auto tracking-widest", commandSizeVariants.shortcut[size], className)}
	{...$$restProps}
>
	<slot />
</span>
