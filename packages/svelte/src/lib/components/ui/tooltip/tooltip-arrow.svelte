<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	type $$Props = TooltipPrimitive.ArrowProps;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<TooltipPrimitive.Arrow
	class={cn("rounded-[2px] border-l border-t bg-popover", className)}
	{...$$restProps}
/>
