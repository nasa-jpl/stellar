<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import 'svelte-highlight/styles/monokai.css';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import ExampleXs from './example-xs.svelte';
  import exampleXsString from './example-xs.svelte?raw';
</script>

<div class="flex-col space-y-8">
  <ComponentHeader
    title="Toggle Group"
    description="A set of two-state buttons that can be toggled on or off."
    link="https://www.shadcn-svelte.com/docs/components/toggle-group"
  />

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
    <ComponentExample>
      <ExampleXs slot="preview" />
      <ComponentCode slot="code" code={exampleXsString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
    <ComponentExample>
      <ExampleSm slot="preview" />
      <ComponentCode slot="code" code={exampleSmString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
    <ComponentExample>
      <ExampleDefault slot="preview" />
      <ComponentCode slot="code" code={exampleDefaultString} />
    </ComponentExample>
  </div>
</div>
