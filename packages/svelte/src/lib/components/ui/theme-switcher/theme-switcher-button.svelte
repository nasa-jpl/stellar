<script lang="ts">
  import Moon from 'lucide-svelte/icons/moon';
  import Sun from 'lucide-svelte/icons/sun';

  import { Button } from '$lib/components/ui/button/index.js';
  import { toggleMode } from 'mode-watcher';

  let className: string | undefined | null = undefined;
  export let size: 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg' | 'icon-xl' | undefined = 'icon-lg';
  export { className as class };
</script>

<Button on:click={toggleMode} variant="outline" {size} class={className}>
  <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  <span class="sr-only">Toggle theme</span>
</Button>
