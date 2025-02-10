<script lang="ts">
  import { Highlight } from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';

  export let code: string = '';
</script>

<div class="rounded-md overflow-hidden max-h-[500px]">
  <Highlight language={typescript} {code} />
</div>
