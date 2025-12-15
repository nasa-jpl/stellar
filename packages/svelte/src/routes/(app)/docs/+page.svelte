<script lang="ts">
</script>

<main class="relative py-6 lg:gap-10 lg:py-8">
  <div class="space-y-2">
    <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
    <p class="text-muted-foreground text-balance text-lg">UI design system for spacecraft operations.</p>
  </div>
  <div class="pb-12 pt-8">
    <p class="leading-7 pb-1">
      Stellar is a design system and component library focused on spacecraft operations tools. It provides accessible,
      themeable, and density-aware UI primitives implemented for both Svelte and React so teams can quickly ship
      consistent interfaces.
    </p>
  </div>
  <h2 class="border-b pb-2 text-2xl font-semibold tracking-tight">Foundations</h2>
  <p class="leading-7 pb-1 pt-8">
    The Stellar design system builds on top of Shadcn (React), Shadcn-Svelte (Svelte), and TailwindCSS. We abstract
    these foundational libraries to provide an opinionated set of components tailored for spacecraft operations
    interfaces. Developers can also leverage the underlying libraries directly for situations where the styling and
    functionality provided by Stellar does not meet their needs.
  </p>

  <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Design Philosophy</h3>
  <ul class="ml-6 list-disc space-y-2 pt-4">
    <li class="leading-7">
      <strong>Accessibility First:</strong> All components follow WCAG guidelines to ensure usability for all operators.
    </li>
    <li class="leading-7">
      <strong>Density Aware:</strong> Components adapt to different information density requirements, from compact mission
      control displays to spacious exploratory interfaces.
    </li>
    <li class="leading-7">
      <strong>Themeable:</strong> Customize colors, typography, and spacing to match your mission's branding.
    </li>
    <li class="leading-7">
      <strong>Framework Agnostic:</strong> Build with Svelte or React—same design language, same consistency.
    </li>
    <li class="leading-7">
      <strong>Maintenance Built In:</strong> Shadcn and Shadcn-Svelte are not UI frameworks; they are component libraries
      built on top of TailwindCSS and other libraries. Stellar wraps Shadcn and Shadcn-Svelte so that developers can easily
      import and use these components and receive updates as the underlying libraries evolve without needing to update all
      of their codebases manually
    </li>
  </ul>

  <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Key Features</h3>
  <ul class="ml-6 list-disc space-y-2 pt-4">
    <li class="leading-7">Component library with live examples and usage patterns</li>
    <li class="leading-7">Customization options for density and visual hierarchy</li>
    <li class="leading-7">Custom components built specifically for spacecraft operations</li>
  </ul>

  <p class="leading-7 pb-1 pt-8">
    See the <a href="/docs/components" class="font-medium underline">component documentation</a> for implementation details
    and examples. Generally speaking, if a component exists in Shadcn or Shadcn-Svelte, it also exists in Stellar with the
    same API. The Stellar component documentation will note any differences or customizations but will otherwise refer users
    to the underlying library documentation.
  </p>
</main>
