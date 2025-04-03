<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import 'svelte-highlight/styles/monokai.css';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
</script>

<div class="flex-col">
  <ComponentHeader
    title="Context Menu"
    description="Displays a menu to the user — such as a set of actions or functions — triggered by right click."
    link="https://www.shadcn-svelte.com/docs/components/context-menu"
  />

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
    <ComponentExample>
      <ExampleDefault slot="preview" />
      <ComponentCode slot="code" code={exampleDefaultString} />
    </ComponentExample>
  </div>
  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
    <ComponentExample>
      <ExampleSm slot="preview" />
      <ComponentCode slot="code" code={exampleSmString} />
    </ComponentExample>
  </div>
</div>
