<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleDefaultString from '../../../../../../../react/src/examples/date-picker/date-picker-examples-default.js?raw';
  import ReactExampleSmString from '../../../../../../../react/src/examples/date-picker/date-picker-examples-sm.js?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader title="Date Picker" description="A calendar combined with an input" />
    <ComponentExample>
      <div slot="preview">Not yet implemented</div>
      <div slot="code">Not yet implemented</div>
    </ComponentExample>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentHeader title="Date Picker" description="A calendar combined with an input" />
      <ComponentExample>
        <ReactAdapter component={ReactExamples.DatePickerDefault} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleDefaultString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.DatePickerSm} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleSmString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
</ComponentDocs>
