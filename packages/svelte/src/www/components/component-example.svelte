<script lang="ts">
  import ButtonLib from '$lib/components/ui/button/button.svelte';
  import { Tabs } from '$lib/index.js';
  import { Button as ButtonDist, Smile } from '../../../dist/index.js';
</script>

<div class="flex-1 items-start pb-12 pt-8">
  <ButtonDist variant="defauslt">test <Smile /></ButtonDist>
  <ButtonLib variant="destrusctive">test <Smile /></ButtonLib>

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
      <div
        class="ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative rounded-md border"
      >
        <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
          <slot name="preview" />
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content value="code">
      <slot name="code" />
    </Tabs.Content>
  </Tabs.Root>
</div>
