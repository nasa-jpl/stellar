<script lang="ts">
  import { Tabs } from '$lib/index.js';
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
        class="focus:ring-ring inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent gap-1"
      >
        API Reference
        <ExternalLink size={15} />
      </a>
    </div>
  {/if}
  <div class="flex-1 items-start pb-12 pt-8">
    <Tabs.Root value="preview" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <Tabs.List class="w-full justify-start rounded-none border-b bg-transparent p-0 h-9">
          <Tabs.Trigger
            class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="preview"
          >
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger
            class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="code"
          >
            Code
          </Tabs.Trigger>
        </Tabs.List>
      </div>
      <Tabs.Content value="preview">
        <slot name="preview" />
      </Tabs.Content>
      <Tabs.Content value="code">
        <slot name="code" />
      </Tabs.Content>
    </Tabs.Root>
  </div>
</section>
