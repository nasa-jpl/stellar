<script lang="ts">
  import { Check, Copy } from 'lucide-svelte';
  import { Highlight } from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import { cubicInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let code: string = '';
  let copied = false;

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 1000);
  }
</script>

<div class="relative rounded-md overflow-hidden">
  <div class="absolute top-0 right-0 z-20 px-6 py-2">
    <button on:click={copyCode} class="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
      <div class="relative w-4 h-4">
        {#if copied}
          <div class="absolute inset-0" transition:fade={{ duration: 150, easing: cubicInOut }}>
            <Check class="w-full h-full text-green-500" />
          </div>
        {:else}
          <div class="absolute inset-0" transition:fade={{ duration: 150, easing: cubicInOut }}>
            <Copy class="w-full h-full text-gray-300" />
          </div>
        {/if}
      </div>
    </button>
  </div>
  <div class="overflow-auto max-h-[500px] min-h-12">
    <Highlight language={typescript} {code} />
  </div>
</div>
