<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleString from '../../../../../../../react/src/examples/button-examples.js?raw';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleIcon from './example-icon.svelte';
  import exampleIconString from './example-icon.svelte?raw';
  import ExampleLg from './example-lg.svelte';
  import exampleLgString from './example-lg.svelte?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import ExampleXl from './example-xl.svelte';
  import exampleXlString from './example-xl.svelte?raw';
  import ExampleXs from './example-xs.svelte';
  import exampleXsString from './example-xs.svelte?raw';
</script>

<div class="flex-col space-y-8">
  <ComponentHeader
    title="Button"
    description="Displays a button or a component that looks like a button."
    link="https://www.shadcn-svelte.com/docs/components/button"
  />

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
    <ComponentExample>
      <ExampleDefault slot="preview" />
      <ComponentCode slot="code" code={exampleDefaultString} />
    </ComponentExample>
    <ComponentExample>
      <ReactAdapter component={ReactExamples.ButtonDefault} slot="preview" />
      <ComponentCode slot="code" code={ReactExampleString} />
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
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
    <ComponentExample>
      <ExampleXs slot="preview" />
      <ComponentCode slot="code" code={exampleXsString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
    <ComponentExample>
      <ExampleLg slot="preview" />
      <ComponentCode slot="code" code={exampleLgString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
    <ComponentExample>
      <ExampleXl slot="preview" />
      <ComponentCode slot="code" code={exampleXlString} />
    </ComponentExample>
  </div>

  <div class="space-y-4">
    <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Icon</h3>
    <ComponentExample>
      <ExampleIcon slot="preview" />
      <ComponentCode slot="code" code={exampleIconString} />
    </ComponentExample>
  </div>
</div>
