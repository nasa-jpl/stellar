<script lang="ts">
  import exampleString from './example.svelte?raw';
  import Example from './example.svelte';
</script>

<section class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
  <Example />
  <div>
    <div>Code</div>
    <code>{exampleString}</code>
  </div>
</section>
