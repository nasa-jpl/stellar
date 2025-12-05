<script lang="ts">
  import { Select, ThemeSwitcherDropdown } from '$lib/index.js';
  import { framework } from '$src/www/store.js';
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
      <Select.Root
        selected={{ label: $framework, value: $framework }}
        onSelectedChange={option => ($framework = option?.value ?? 'Svelte')}
      >
        <Select.Trigger class="w-[120px]" size="sm">
          <Select.Value />
        </Select.Trigger>
        <Select.Content size="sm">
          <Select.Item size="sm" value="React" label="React">React</Select.Item>
          <Select.Item size="sm" value="Svelte" label="Svelte">Svelte</Select.Item>
        </Select.Content>
        <Select.Input name="framework" />
      </Select.Root>
      <ThemeSwitcherDropdown />
    </div>
  </div>
</header>
