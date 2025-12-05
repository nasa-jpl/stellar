<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleString from '../../../../../../../react/src/examples/alert-examples.js?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Alert"
      description="Displays a callout for user attention."
      link="https://www.shadcn-svelte.com/docs/components/alert"
    />
    <ComponentExample>
      <Example slot="preview" />
      <ComponentCode slot="code" code={exampleString} />
    </ComponentExample>
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
