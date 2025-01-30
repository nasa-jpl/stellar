<script lang="ts">
  import { Tabs } from '$lib/index.js';
</script>

<section class="w-full mx-auto flex flex-col items-center gap-2 py-8">
  <div class="container flex-1 items-start">
    <Tabs.Root value="svelte" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <Tabs.List class="w-full justify-start rounded-none border-b bg-transparent p-0 h-9">
          <Tabs.Trigger
            class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="svelte">Svelte</Tabs.Trigger
          >
          <Tabs.Trigger
            class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="react">React</Tabs.Trigger
          >
        </Tabs.List>
      </div>
      <Tabs.Content value="svelte">
        Svelte
        <slot name="svelte" />
      </Tabs.Content>
      <Tabs.Content value="react"
        >React
        <slot name="react" />
      </Tabs.Content>
    </Tabs.Root>
  </div>
</section>
