<script lang="ts">
  import { ThemeSwitcherDropdown } from '$lib/index.js';
  import MainNav from '../../../www/components/nav/main-nav.svelte';
</script>

<header
  class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <div class="container flex h-14 max-w-screen-2xl items-center">
    <MainNav />
    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <ThemeSwitcherDropdown />
    </div>
  </div>
</header>
