<script lang="ts">
	import { cn } from '$lib/utils.js';

	let className: string = '';
	export { className as class };
</script>

<h1 class={cn('text-4xl font-extrabold tracking-tight', className)} {...$$restProps}>
	<slot />
</h1>
