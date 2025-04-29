<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';

  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleDefaultString from '../../../../../../../react/src/examples/select/select-examples-default.js?raw';
  import ReactExampleSmString from '../../../../../../../react/src/examples/select/select-examples-sm.js?raw';
  import ReactExampleXsString from '../../../../../../../react/src/examples/select/select-examples-xs.js?raw';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleSmall from './example-small.svelte';
  import exampleSmallString from './example-small.svelte?raw';
  import ExampleXS from './example-xs.svelte';
  import exampleXSString from './example-xs.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      link="https://www.shadcn-svelte.com/docs/components/select"
    />

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <ExampleDefault slot="preview" />
        <ComponentCode slot="code" code={exampleDefaultString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ExampleSmall slot="preview" />
        <ComponentCode slot="code" code={exampleSmallString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
      <ComponentExample>
        <ExampleXS slot="preview" />
        <ComponentCode slot="code" code={exampleXSString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      link="https://ui.shadcn.com/docs/components/Select"
    />
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.SelectDefault} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleDefaultString} />
      </ComponentExample>
    </div>
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.SelectSm} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleSmString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.SelectXs} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleXsString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
</ComponentDocs>
