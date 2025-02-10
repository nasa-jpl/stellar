<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import '@nasa-jpl/stellar';
  import 'svelte-highlight/styles/monokai.css';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<div class="flex-col">
  <ComponentHeader
    title="Badge"
    description="Displays a badge or a component that looks like a badge."
    link="https://www.shadcn-svelte.com/docs/components/badge"
  />
  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>
</div>
