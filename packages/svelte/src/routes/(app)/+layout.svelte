<script lang="ts">
  import '$src/index.css';
  import SiteHeader from '$src/www/components/nav/site-header.svelte';
  import SiteFooter from '$src/www/components/site-footer.svelte';
</script>

<SiteHeader />
<div class="flex-1 pt-5">
  <slot />
</div>

<SiteFooter />
