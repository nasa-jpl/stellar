<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import '@nasa-jpl/stellar';
  import 'svelte-highlight/styles/monokai.css';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleSmall from './example-small.svelte';
  import exampleSmallString from './example-small.svelte?raw';
  import ExampleXS from './example-xs.svelte';
  import exampleXSString from './example-xs.svelte?raw';
</script>

<div class="flex-col space-y-8">
  <ComponentHeader
    title="Select"
    description="Displays a list of options for the user to pick from—triggered by a button."
    link="https://www.shadcn-svelte.com/docs/components/select"
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
      <ExampleSmall slot="preview" />
      <ComponentCode slot="code" code={exampleSmallString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
    <ComponentExample>
      <ExampleXS slot="preview" />
      <ComponentCode slot="code" code={exampleXSString} />
    </ComponentExample>
  </div>
</div>
