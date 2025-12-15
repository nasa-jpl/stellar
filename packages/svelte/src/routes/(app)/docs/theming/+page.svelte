<script lang="ts">
  import ComponentCode from '$src/www/components/component-code.svelte';

  const tailwindConfig = `import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./node_modules/@nasa-jpl/stellar-svelte/dist/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    ...extend your Tailwind theme here if desired...
  },
  plugins: [],
  presets: [require('@nasa-jpl/stellar-svelte/tailwindConfig')],
};`;

  const cssOverride = `:root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 233 57% 37%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 72.22% 50.59%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 212 99% 40%;
    --radius: 0.3rem;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }`;
</script>

<main class="relative py-6 lg:gap-10 lg:py-8">
  <div class="space-y-2">
    <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Theming</h1>
    <p class="text-muted-foreground text-balance text-lg">How to customize Stellar for project.</p>
  </div>

  <section class="pb-12 pt-8">
    <h2 class="text-lg font-medium">Overview</h2>
    <p class="leading-7">
      Stellar uses CSS variables from shadcn as the single source of truth for colors, spacing, and density tokens.
      Tailwind utility classes are mapped to those variables so you get the ergonomics of Tailwind with the flexibility
      of runtime theme switching and per-project token overrides.
    </p>
  </section>

  <section class="pb-12 pt-8">
    <h2 class="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
      Recommended approach — Tailwind CSS variables
    </h2>
    <p class="leading-7">
      For the best theming experience we recommend using Tailwind CSS along with Stellar in your project as described in
      the installation guide. This allows you to easily override design tokens using Tailwind's configuration system as
      well as use the full power of Tailwind's utility classes throughout your project. Within the Tailwind config you
      can override colors, spacing, and other design tokens to customize the look and feel of Stellar components.
    </p>

    <h3 class="mt-3 font-medium">tailwind.config.js</h3>
    <ComponentCode code={tailwindConfig} />
  </section>

  <section class="pb-12 pt-8">
    <h2 class="text-lg font-medium">Alternative Approach — CSS variable overrides</h2>
    <p class="leading-7">
      Alternatively, if you are not using Tailwind CSS in your project, you can still customize Stellar by overriding
      the CSS variables directly. You can define your own CSS variables in a global stylesheet or within a specific
      component or page. Below is an example of how to override some common design tokens using CSS variables.
    </p>

    <h3 class="mt-3 font-medium">app.css</h3>
    <ComponentCode language="css" code={cssOverride} />
  </section>
</main>
