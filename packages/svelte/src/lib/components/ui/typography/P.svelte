<script lang="ts">
	import { cn } from '$lib/utils.js';

	let className: string = '';
	export { className as class };
</script>

<p class={cn('leading-7', className)} {...$$restProps}>
	<slot />
</p>
