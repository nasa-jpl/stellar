<script lang="ts">
  import * as ContextMenu from '$lib/components/ui/context-menu/index.js';

  let showBookmarks = false;
  let showFullURLs = true;

  let value = 'pedro';
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger
    class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
  >
    Right click here
  </ContextMenu.Trigger>
  <ContextMenu.Content class="w-64">
    <ContextMenu.Item size="sm">
      Back
      <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Item size="sm">
      Forward
      <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Item size="sm">
      Reload
      <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger size="sm">More Tools</ContextMenu.SubTrigger>
      <ContextMenu.SubContent class="w-48">
        <ContextMenu.Item size="sm">
          Save Page As...
          <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item size="sm">Create Shortcut...</ContextMenu.Item>
        <ContextMenu.Item size="sm">Name Window...</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item size="sm">Developer Tools</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Separator />
    <ContextMenu.CheckboxItem size="sm" bind:checked={showBookmarks}>
      Show Bookmarks Bar
      <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem size="sm" bind:checked={showFullURLs}>Show Full URLs</ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.RadioGroup bind:value>
      <ContextMenu.Label size="sm">People</ContextMenu.Label>
      <ContextMenu.Separator />
      <ContextMenu.RadioItem size="sm" value="pedro">Pedro Duarte</ContextMenu.RadioItem>
      <ContextMenu.RadioItem size="sm" value="colm">Colm Tuite</ContextMenu.RadioItem>
    </ContextMenu.RadioGroup>
  </ContextMenu.Content>
</ContextMenu.Root>
