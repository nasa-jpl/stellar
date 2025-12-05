<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleString from '../../../../../../../react/src/examples/sonner-examples.js?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Sonner"
      description="An opinionated toast component for Svelte. This component requires usage of the Toaster component in the root of the application. Please refer to the API documentation for more instructions."
      link="https://www.shadcn-svelte.com/docs/components/sonner"
    />
    <ComponentExample>
      <Example slot="preview" />
      <ComponentCode slot="code" code={exampleString} />
    </ComponentExample>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="Sonner"
      description="An opinionated toast component for Svelte. This component requires usage of the Toaster component in the root of the application. Please refer to the API documentation for more instructions."
      link="https://ui.shadcn.com/docs/components/sonner"
    />
    <ComponentExample>
      <ReactAdapter component={ReactExamples.SonnerDefault} slot="preview" />
      <ComponentCode slot="code" code={ReactExampleString} />
    </ComponentExample>
  </svelte.fragment>
</ComponentDocs>
