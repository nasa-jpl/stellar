<script lang="ts">
  import { framework } from '../store.js';
</script>

<div class="flex-col space-y-8">
  {#if $framework === 'React'}
    <slot name="React" />
  {:else}
    <slot name="Svelte" />
  {/if}
</div>
