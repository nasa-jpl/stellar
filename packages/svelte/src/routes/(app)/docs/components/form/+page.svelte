<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import reactExampleDefaultString from '../../../../../../../react/src/examples/form/form-examples-default.js?raw';
  import reactExampleSmString from '../../../../../../../react/src/examples/form/form-examples-sm.js?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Formsnap & Superforms"
      description="Building forms with Formsnap, Superforms, & Zod."
      link="https://www.shadcn-svelte.com/docs/components/form"
    />
    <p>
      This is a simple example of how to use Formsnap and Superforms together. For a full guide on how to build forms,
      visit the
      <a class="font-medium underline" href="https://www.shadcn-svelte.com/docs/components/form"
        >Shadcn Svelte Form Documentation</a
      >.
    </p>
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
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="React Hook Form"
      description="Building forms with React Hook Form and Zod."
      link="https://ui.shadcn.com/docs/components/form"
    />
    <p>
      This is a simple example of how to use React Hook Form. For a full guide on how to build forms, visit the
      <a class="font-medium underline" href="https://ui.shadcn.com/docs/components/form">Shadcn Form Documentation</a>.
    </p>
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.FormDefault} slot="preview" />
        <ComponentCode slot="code" code={reactExampleDefaultString} />
      </ComponentExample>
    </div>
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.FormSm} slot="preview" />
        <ComponentCode slot="code" code={reactExampleSmString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
</ComponentDocs>
