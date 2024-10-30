<script lang="ts">
	import SiteHeader from '../../www/components/nav/site-header.svelte';
	import SiteFooter from '../../www/components/site-footer.svelte';
</script>

<SiteHeader />
<div class="flex-1 pt-5">
	<slot />
</div>

<SiteFooter />
