<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { toast } from 'svelte-sonner';
</script>

<Button
  variant="outline"
  on:click={() =>
    toast.success('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.info('Undo'),
      },
    })}
>
  Show Toast
</Button>

<!--
  Somewhere in the root of your application...
  import { Toaster } from "@nasa-jpl/stellar-svelte";
  <Toaster />
-->
