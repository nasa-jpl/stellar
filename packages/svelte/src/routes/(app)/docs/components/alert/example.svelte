<script lang="ts">
  import AlertDescription from '$lib/components/ui/alert/alert-description.svelte';
  import AlertTitle from '$lib/components/ui/alert/alert-title.svelte';
  import Alert from '$lib/components/ui/alert/alert.svelte';
  import { Terminal } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-4">
  <Alert>
    <Terminal class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You are running low on state of charge.</AlertDescription>
  </Alert>

  <Alert variant="destructive">
    <Terminal class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
  </Alert>
</div>
