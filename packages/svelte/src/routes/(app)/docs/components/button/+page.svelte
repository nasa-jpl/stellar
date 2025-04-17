<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';
  import ComponentDocs from '$src/www/components/component-docs.svelte';
  import ComponentExample from '$src/www/components/component-example.svelte';
  import ComponentHeader from '$src/www/components/component-header.svelte';
  import ReactAdapter from '$src/www/components/react-adapter.svelte';
  import 'svelte-highlight/styles/monokai.css';
  import { ReactExamples } from '../../../../../../../react/dist/index.js';
  import ReactExampleDefaultString from '../../../../../../../react/src/examples/button/button-examples-default.js?raw';
  import ReactExampleIconString from '../../../../../../../react/src/examples/button/button-examples-icon.js?raw';
  import ReactExampleLgString from '../../../../../../../react/src/examples/button/button-examples-lg.js?raw';
  import ReactExampleSmString from '../../../../../../../react/src/examples/button/button-examples-sm.js?raw';
  import ReactExampleXlString from '../../../../../../../react/src/examples/button/button-examples-xl.js?raw';
  import ReactExampleXsString from '../../../../../../../react/src/examples/button/button-examples-xs.js?raw';
  import ExampleDefault from './example-default.svelte';
  import exampleDefaultString from './example-default.svelte?raw';
  import ExampleIcon from './example-icon.svelte';
  import exampleIconString from './example-icon.svelte?raw';
  import ExampleLg from './example-lg.svelte';
  import exampleLgString from './example-lg.svelte?raw';
  import ExampleSm from './example-sm.svelte';
  import exampleSmString from './example-sm.svelte?raw';
  import ExampleXl from './example-xl.svelte';
  import exampleXlString from './example-xl.svelte?raw';
  import ExampleXs from './example-xs.svelte';
  import exampleXsString from './example-xs.svelte?raw';
</script>

<ComponentDocs>
  <svelte.fragment slot="Svelte">
    <ComponentHeader
      title="Button"
      description="Displays a button or a component that looks like a button."
      link="https://www.shadcn-svelte.com/docs/components/button"
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
        <ExampleSm slot="preview" />
        <ComponentCode slot="code" code={exampleSmString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
      <ComponentExample>
        <ExampleXs slot="preview" />
        <ComponentCode slot="code" code={exampleXsString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
      <ComponentExample>
        <ExampleLg slot="preview" />
        <ComponentCode slot="code" code={exampleLgString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
      <ComponentExample>
        <ExampleXl slot="preview" />
        <ComponentCode slot="code" code={exampleXlString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Icon</h3>
      <ComponentExample>
        <ExampleIcon slot="preview" />
        <ComponentCode slot="code" code={exampleIconString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
  <svelte.fragment slot="React">
    <ComponentHeader
      title="Button"
      description="Displays a button or a component that looks like a button."
      link="https://ui.shadcn.com/docs/components/button"
    />

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Default</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonDefault} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleDefaultString} />
      </ComponentExample>
    </div>
    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonSm} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleSmString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Small</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonXs} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleXsString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Large</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonLg} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleLgString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Extra Large</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonXl} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleXlString} />
      </ComponentExample>
    </div>

    <div class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Icon</h3>
      <ComponentExample>
        <ReactAdapter component={ReactExamples.ButtonIcon} slot="preview" />
        <ComponentCode slot="code" code={ReactExampleIconString} />
      </ComponentExample>
    </div>
  </svelte.fragment>
</ComponentDocs>
