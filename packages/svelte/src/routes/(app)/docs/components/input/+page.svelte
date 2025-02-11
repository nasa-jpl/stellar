<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import '@nasa-jpl/stellar';
  import 'svelte-highlight/styles/monokai.css';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<div class="flex-col space-y-8">
  <ComponentHeader
    title="Input"
    description="Displays a form input field or a component that looks like an input field."
    link="https://www.shadcn-svelte.com/docs/components/input"
  />

  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
    <ComponentExample>
      <ExampleSm slot="preview" />
      <ComponentCode slot="code" code={exampleSmString} />
    </ComponentExample>
  </div>
</div>
