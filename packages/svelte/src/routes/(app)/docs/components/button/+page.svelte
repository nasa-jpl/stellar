<script lang="ts">
  import '@nasa-jpl/stellar';
  // import { Button } from '@nasa-jpl/stellar-react';
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import 'svelte-highlight/styles/monokai.css';
  import ComponentDocs from '../../../../../www/components/component-docs.svelte';
  import Example from './example.svelte';
  import exampleString from './example.svelte?raw';
</script>

<ComponentDocs
  title="Button"
  description="Displays a button or a component that looks like a button."
  link="https://www.shadcn-svelte.com/docs/components/button"
>
  <div
    slot="preview"
    class="ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative rounded-md border"
  >
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <Example />
    </div>
  </div>
  <div slot="code">
    <div class="rounded-md overflow-hidden">
      <Highlight language={typescript} code={exampleString} />
    </div>
    <!-- <code>{exampleString}</code> -->
  </div>
</ComponentDocs>
