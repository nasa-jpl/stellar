<script lang="ts">
  import { Calendar, Mail, Rocket, Settings, Smile, User } from 'lucide-svelte';

  import * as Command from '$lib/components/ui/command/index.js';
</script>

<Command.Root class="max-w-[450px] rounded-lg border shadow-md" size="sm">
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>
        <Calendar class="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </Command.Item>
      <Command.Item>
        <Smile class="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </Command.Item>
      <Command.Item>
        <Rocket class="mr-2 h-4 w-4" />
        <span>Launch</span>
      </Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
      <Command.Item>
        <User class="mr-2 h-4 w-4" />
        <span>Profile</span>
        <Command.Shortcut>⌘P</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <Mail class="mr-2 h-4 w-4" />
        <span>Mail</span>
        <Command.Shortcut>⌘B</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <Settings class="mr-2 h-4 w-4" />
        <span>Settings</span>
        <Command.Shortcut>⌘S</Command.Shortcut>
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Root>
