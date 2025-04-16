<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { Examples } from '../../../../../../../react/dist/index.js';
  import ReactExampleString from '../../../../../../../react/src/examples/alert-dialog-examples.js?raw';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<div class="flex-col">
  <ComponentHeader
    title="Alert Dialog"
    description="A modasl dialog that interrupts the user with important content and expects a response."
    link="https://www.shadcn-svelte.com/docs/components/alert-dialog"
  />
  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>
  <ComponentExample>
    <!-- <ReactExample slot="preview" /> -->
    <ReactAdapter component={Examples.AlertDialogDefault} slot="preview" />
    <ComponentCode slot="code" code={ReactExampleString} />
  </ComponentExample>
</div>
