<script lang="ts">
  import { Button } from '$lib/index.js';
  import { PlusIcon } from 'lucide-svelte';
</script>

<div class="flex flex-col items-start gap-4">
  <div class="flex flex-wrap items-center gap-4">
    <div class="min-w-16">xs</div>
    <Button size="icon-xs"><PlusIcon size={12} /></Button>
    <Button size="icon-xs" variant="secondary"><PlusIcon size={12} /></Button>
    <Button size="icon-xs" variant="destructive"><PlusIcon size={12} /></Button>
    <Button size="icon-xs" variant="outline"><PlusIcon size={12} /></Button>
    <Button size="icon-xs" variant="ghost"><PlusIcon size={12} /></Button>
  </div>
  <div class="flex flex-wrap items-center gap-4">
    <div class="min-w-16">sm</div>
    <Button size="icon-sm"><PlusIcon size={16} /></Button>
    <Button size="icon-sm" variant="secondary"><PlusIcon size={16} /></Button>
    <Button size="icon-sm" variant="destructive"><PlusIcon size={16} /></Button>
    <Button size="icon-sm" variant="outline"><PlusIcon size={16} /></Button>
    <Button size="icon-sm" variant="ghost"><PlusIcon size={16} /></Button>
  </div>
  <div class="flex flex-wrap items-center gap-4">
    <div class="min-w-16">default</div>
    <Button size="icon"><PlusIcon size={16} /></Button>
    <Button size="icon" variant="secondary"><PlusIcon size={16} /></Button>
    <Button size="icon" variant="destructive"><PlusIcon size={16} /></Button>
    <Button size="icon" variant="outline"><PlusIcon size={16} /></Button>
    <Button size="icon" variant="ghost"><PlusIcon size={16} /></Button>
  </div>
  <div class="flex flex-wrap items-center gap-4">
    <div class="min-w-16">lg</div>
    <Button size="icon-lg"><PlusIcon size={20} /></Button>
    <Button size="icon-lg" variant="secondary"><PlusIcon size={20} /></Button>
    <Button size="icon-lg" variant="destructive"><PlusIcon size={20} /></Button>
    <Button size="icon-lg" variant="outline"><PlusIcon size={20} /></Button>
    <Button size="icon-lg" variant="ghost"><PlusIcon size={20} /></Button>
  </div>
  <div class="flex flex-wrap items-center gap-4">
    <div class="min-w-16">xl</div>
    <Button size="icon-xl"><PlusIcon /></Button>
    <Button size="icon-xl" variant="secondary"><PlusIcon /></Button>
    <Button size="icon-xl" variant="destructive"><PlusIcon /></Button>
    <Button size="icon-xl" variant="outline"><PlusIcon /></Button>
    <Button size="icon-xl" variant="ghost"><PlusIcon /></Button>
  </div>
</div>
