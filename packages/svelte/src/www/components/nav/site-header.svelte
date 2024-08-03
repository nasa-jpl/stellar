<script lang="ts">
	import MainNav from '../../../www/components/nav/main-nav.svelte';
	import SiteFooter from '../site-footer.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
	</div>
  <SiteFooter/>
</header>


