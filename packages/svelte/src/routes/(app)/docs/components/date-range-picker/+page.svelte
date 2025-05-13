<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleDefaultString from '../../../../../../../react/src/examples/date-range-picker/date-range-picker-examples-default.js?raw';
  import ReactExampleSmString from '../../../../../../../react/src/examples/date-range-picker/date-range-picker-examples-sm.js?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader title="Date Range Picker" description="A range calendar combined with start and end inputs" />
    <ComponentExample>
      <div slot="preview">Not yet implemented</div>
      <div slot="code">Not yet implemented</div>
    </ComponentExample>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <div class="space-y-4">
      <ComponentHeader title="Date Range Picker" description="A range calendar combined with start and end inputs" />
      <p>
        This is a custom Stellar component that wraps the Shadcn Calendar component. Date validation must be handled
        outside of the component.
      </p>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.DateRangePickerDefault} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleDefaultString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.DateRangePickerSm} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleSmString} />
      </ComponentExample>
    </div>

    <!-- <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Validation Example</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.DatePickerValidation} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleValidationString} />
      </ComponentExample>
    </div> -->
  </svelte.fragment>
</ComponentDocs>
