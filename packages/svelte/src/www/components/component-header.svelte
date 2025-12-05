<script lang="ts">
  import { ExternalLink } from 'lucide-svelte';

  export let title: string = 'Title';
  export let description: string = 'Description of the component';
  export let link: string = '';
</script>

<section class="w-full mx-auto flex flex-col gap-2 py-8">
  <div class="space-y-2">
    <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
    <p class="text-muted-foreground text-balance text-lg">{description}</p>
  </div>
  {#if link}
    <div class="flex items-center space-x-2 pt-4">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        class="focus:ring-ring inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent gap-1"
      >
        API Reference
        <ExternalLink size={15} />
      </a>
    </div>
  {/if}
</section>
