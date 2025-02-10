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
    title="Resizable"
    description="Accessible resizable panel groups and layouts with keyboard support."
    link="https://www.shadcn-svelte.com/docs/components/resizable"
  />
  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>
</div>
