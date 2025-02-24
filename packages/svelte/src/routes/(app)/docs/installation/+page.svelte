<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';

  const tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
export default {
  // ...
  // Instructs Tailwind to also preprocess the CSS within the built Stellar Svelte components
  content: ['./node_modules/@nasa-jpl/stellar-svelte/dist/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
  // Extend the Stellar Svelte tailwind configuration
  presets: [require('@nasa-jpl/stellar-svelte/tailwindConfig')],
  // ...
};
`;
</script>

<main class="relative py-6 lg:gap-10 lg:py-8">
  <div class="space-y-2">
    <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
    <p class="text-muted-foreground text-balance text-lg">How to setup Stellar in a Svelte project.</p>
  </div>
  <div class="pb-12 pt-8">
    <p class="leading-7 pb-1">Use the following command to install Svelte Stellar into your Svelte project.</p>
    <ComponentCode code="npm install --save @nasa-jpl/stellar-svelte" />
    <p class="leading-7 pb-1 pt-6">Import the Stellar css file into your top level component or page</p>
    <ComponentCode code={`import @nasa-jpl/stellar-svelte/styles;`} />
    <p class="leading-7 pb-1 pt-6">And import a Stellar component in your application</p>
    <ComponentCode
      code={`import { Button } from @nasa-jpl/stellar-svelte;\n...\n<Button variant='outline'>Submit</Button>`}
    />
    <h2 class="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
      Extending Stellar Tailwind
    </h2>
    <p class="leading-7 pb-1">
      The instructions above detail importing the compiled Stellar CSS styles into your application. These styles
      include various Tailwind CSS utility classes and variables. If you already use Tailwind CSS in your application
      you can skip importing the build CSS files from <code>import @nasa-jpl/stellar-svelte/styles</code> and instead
      modify your tailwind configuration to include the following:
      <ComponentCode code={tailwindConfigCode} />
    </p>
  </div>
</main>
