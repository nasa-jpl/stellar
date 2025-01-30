<script lang="ts">
  import '@nasa-jpl/stellar';
  // import { Button } from '@nasa-jpl/stellar-react';
  import ComponentDocs from '../../../../../www/components/component-docs.svelte';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
  import reactExampleString from './react-example.svelte?raw';
</script>

<ComponentDocs>
  <div slot="svelte">
    <div>Code</div>
    <Example />
    <code>{exampleString}</code>
  </div>
  <div slot="react">
    <div>Code</div>
    <!-- <ReactAdapter el={Button} children="Button" /> -->
    <code>{reactExampleString}</code>
  </div>
</ComponentDocs>
