<script lang="ts">
  import { Alert } from '@nasa-jpl/stellar-svelte';
  import Terminal from 'lucide-svelte/icons/terminal';
</script>

<Alert.Root>
  <Terminal class="h-4 w-4" />
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>You are running low on state of charge.</Alert.Description>
</Alert.Root>
