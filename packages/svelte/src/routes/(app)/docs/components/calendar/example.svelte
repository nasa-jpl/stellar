<script lang="ts">
  import { Calendar } from '$lib/components/ui/calendar/index.js';
  import type { DateValue } from '@internationalized/date';

  let value: DateValue | undefined = undefined;
</script>

<div class="flex items-center justify-center">
  <Calendar bind:value class="rounded-md border shadow" />
</div>
