<script lang="ts">
  import { page } from '$app/stores';
  import { cn } from '$lib/utils.js';
  import '@nasa-jpl/stellar/dist/css/index.css';
</script>

<div class="mr-4 hidden md:flex">
  <a href="/" class="mr-6 flex items-center space-x-2">
    <span class="hidden font-bold sm:inline-block"> Svelte Stellar </span>
  </a>
  <nav class="flex items-center gap-6 text-sm">
    <a
      href="/docs"
      class={`${cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
      )} foo`}
    >
      Docs
    </a>
    <a
      href="/docs/components"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/docs/components') ? 'text-foreground' : 'text-foreground/60',
      )}
    >
      Components
    </a>
    <a
      href="/themes"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/themes') ? 'text-foreground' : 'text-foreground/60',
      )}
    >
      Themes
    </a>
    <a
      href="/examples"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60',
      )}
    >
      Examples
    </a>
    <a
      href="https://github.com/nasa-jpl/svelte-stellar"
      target="_blank"
      rel="noopener noreferrer"
      class={cn('text-foreground/60 transition-colors hover:text-foreground/80 lg:block')}
    >
      GitHub
    </a>
  </nav>
</div>

<style>
  .foo {
    color: var(--st-primary-50);
  }
</style>
