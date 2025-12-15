<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleString from '../../../../../../../react/src/examples/alert-examples.js?raw';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleLg from './example-lg.svelte';
  import exampleLgString from './example-lg.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
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
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
      <ComponentExample>
        <ExampleLg slot="preview" />
        <ComponentCode slot="code" code={exampleLgString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="Alert"
      description="Displays a callout for user attention."
      link="https://ui.shadcn.com/docs/components/alert"
    />
    <ComponentExample>
      <ReactAdapter component={ReactExamples.AlertDefault} slot="preview" />
      <ComponentCode slot="code" code={ReactExampleString} />
    </ComponentExample>
  </svelte.fragment>
</ComponentDocs>
