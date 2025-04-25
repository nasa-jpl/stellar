<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleDefaultString from '../../../../../../../react/src/examples/input/input-examples-default.js?raw';
  import ReactExampleSmString from '../../../../../../../react/src/examples/input/input-examples-sm.js?raw';
  import ReactExampleXsString from '../../../../../../../react/src/examples/input/input-examples-xs.js?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import ExampleXs from './example-xs.svelte';
  import exampleXsString from './example-xs.svelte?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      link="https://www.shadcn-svelte.com/docs/components/input"
    />
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <Example slot="preview" />
        <ComponentCode slot="code" code={exampleString} />
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
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      link="https://ui.shadcn.com/docs/components/input"
    />
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.InputDefault} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleDefaultString} />
      </ComponentExample>
    </div>
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.InputSm} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleSmString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.InputXs} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleXsString} />
      </ComponentExample>
    </div>
  </svelte.fragment></ComponentDocs
>
