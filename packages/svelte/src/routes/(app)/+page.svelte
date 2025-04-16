<script lang="ts">
  import { base } from '$app/paths';
  import { Button, ModeWatcher, Tabs } from '$lib/index.js';
  import DashboardOne from './docs/components/examples/dashboard-one.svelte';
</script>

<ModeWatcher />

<div class="flex flex-col items-center gap-4 bg-background p-16 container mx-auto">
  <div class="flex flex-col gap-4 items-center">
    <div class="text-6xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
      Launch powerful space tools
    </div>

    <p class="text-2xl text-muted-foreground font-light max-w-2xl text-center">
      Flexible React and Svelte components to quickly design and build high-quality, accessible web applications. Built
      with Shadcn/ui, Radix, and more.
    </p>
    <div class="flex gap-4 my-4">
      <Button href="{base}/docs" size="lg">Get started</Button><Button
        variant="secondary"
        size="lg"
        href="{base}/docs/components">Components</Button
      >
    </div>
  </div>
  <!-- <div class="flex flex-col gap-4">
    <div
      class="text-muted-foreground text-sm font-medium flex bg-secondary px-3 py-1 rounded-lg border shadow-inner border-secondary flex-col items-center gap-4"
    >
      Open source from NASA's Jet Propulsion Laboratory
    </div>
    <p class="text-xl text-muted-foreground font-light max-w-2xl text-center">
      Flexible React and Svelte components to quickly design and build high-quality, accessible web applications. Built
      with Shadcn/ui, Radix, and more.
    </p>
    <div class="flex gap-4 my-4">
      <Button size="lg">Get started</Button><Button variant="secondary" size="lg">Components</Button>
    </div>
  </div> -->
  <div class="w-full mt-8">
    <Tabs.Root value="dashboard-1" class="w-full">
      <Tabs.List class="rounded-t-mdgap-4 bg-background">
        <Tabs.Trigger class="data-[state=active]:bg-secondary rounded-full px-4" value="dashboard-1"
          >Dashboard 1</Tabs.Trigger
        >
        <Tabs.Trigger class="data-[state=active]:bg-secondary rounded-full px-4" value="dashboard-2"
          >Dashboard 2</Tabs.Trigger
        >
        <Tabs.Trigger class="data-[state=active]:bg-secondary rounded-full px-4" value="dashboard-3"
          >Dashboard 3</Tabs.Trigger
        >
        <Tabs.Trigger class="data-[state=active]:bg-secondary rounded-full px-4" value="inputs">Inputs</Tabs.Trigger>
        <Tabs.Trigger class="data-[state=active]:bg-secondary rounded-full px-4" value="charts">Charts</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="dashboard-1">
        <div class="w-full h-[800px] rounded-md border border-border overflow-hidden">
          <DashboardOne />
        </div>
      </Tabs.Content>
      <Tabs.Content value="dashboard-2">
        <div class="w-full h-[800px] rounded-md border border-border overflow-hidden font-mono">
          <DashboardOne />
        </div>
      </Tabs.Content>
      <Tabs.Content value="dashboard-3">
        <div
          class="w-full h-[800px] bg-secondary flex items-center justify-center text-muted-foreground font-mono uppercase"
        >
          Dashboard 3
        </div>
      </Tabs.Content>
      <Tabs.Content value="inputs">Inputs</Tabs.Content>
      <Tabs.Content value="charts">Charts</Tabs.Content>
    </Tabs.Root>
    <!-- Button
    <div class="flex items-center gap-4">
      <Button on:click={() => console.log(1)}>Click me</Button>
      <Button variant="secondary" on:click={() => console.log(1)}>Click me</Button>
      <Button variant="outline" on:click={() => console.log(1)}>Click me</Button>
      <Button size="sm" on:click={() => console.log(1)}>Click me</Button>
      <Button size="lg" on:click={() => console.log(1)}>Click me</Button>
    </div> -->
  </div>
</div>
