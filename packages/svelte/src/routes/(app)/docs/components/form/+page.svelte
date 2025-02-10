<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import '@nasa-jpl/stellar';
  import 'svelte-highlight/styles/monokai.css';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<div class="flex-col">
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
  <ComponentExample>
    <Example slot="preview" />
    <ComponentCode slot="code" code={exampleString} />
  </ComponentExample>
</div>
