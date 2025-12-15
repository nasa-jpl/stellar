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

<div class="flex-col">
  <ComponentHeader
    title="Command"
    description="Fast, composable, unstyled command menu for Svelte."
    link="https://www.shadcn-svelte.com/docs/components/command"
  />
  <ComponentExample>
    <ExampleDefault slot="preview" />
    <ComponentCode slot="code" code={exampleDefaultString} />
  </ComponentExample>
  <ComponentExample>
    <ExampleSm slot="preview" />
    <ComponentCode slot="code" code={exampleSmString} />
  </ComponentExample>
  <ComponentExample>
    <ExampleXs slot="preview" />
    <ComponentCode slot="code" code={exampleXsString} />
  </ComponentExample>
</div>
