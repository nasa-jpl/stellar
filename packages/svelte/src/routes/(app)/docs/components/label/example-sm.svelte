<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
</script>

<div>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" size="sm" />
    <Label for="terms" size="sm">Accept terms and conditions</Label>
  </div>
</div>
