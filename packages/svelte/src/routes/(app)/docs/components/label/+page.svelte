<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import 'svelte-highlight/styles/monokai.css';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleSmall from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
</script>

<div class="flex-col space-y-8">
  <ComponentHeader
    title="Label"
    description="Renders an accessible label associated with controls."
    link="https://www.shadcn-svelte.com/docs/components/label"
  />
  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
    <div class="space-y-4">
      <ComponentExample>
        <ExampleDefault slot="preview" />
        <ComponentCode slot="code" code={exampleDefaultString} />
      </ComponentExample>
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
    <div class="space-y-4">
      <ComponentExample>
        <ExampleSmall slot="preview" />
        <ComponentCode slot="code" code={exampleSmString} />
      </ComponentExample>
    </div>
  </div>
</div>
