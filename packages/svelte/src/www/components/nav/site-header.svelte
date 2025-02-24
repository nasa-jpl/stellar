<script lang="ts">
  import { ThemeSwitcherDropdown } from '$lib/index.js';
  import MainNav from '../../../www/components/nav/main-nav.svelte';
</script>

<header
  class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <p class="bg-orange-400 py-1.5 text-center text-sm font-medium text-black dark:bg-orange-700 dark:text-white">
    Stellar 3.0 is in preview. Expect breaking changes until the full release is ready.
  </p>
  <div class="container flex h-14 max-w-screen-2xl items-center">
    <MainNav />
    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <ThemeSwitcherDropdown />
    </div>
  </div>
</header>
