<script lang="ts">
  import 'svelte-highlight/styles/monokai.css';
  import ComponentCode from '../../../../../www/components/component-code.svelte';
  import ComponentExample from '../../../../../www/components/component-example.svelte';
  import ComponentHeader from '../../../../../www/components/component-header.svelte';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<div class="flex-col">
  <ComponentHeader
    title="Alert"
    description="Displays a callout for user attention."
    link="https://www.shadcn-svelte.com/docs/components/alert"
  />
  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>
</div>
