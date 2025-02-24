<script lang="ts">
  import Activity from 'lucide-svelte/icons/activity';
  import Bell from 'lucide-svelte/icons/bell';
  import Bird from 'lucide-svelte/icons/bird';
  import ChartLine from 'lucide-svelte/icons/chart-line';
  import CircleUser from 'lucide-svelte/icons/circle-user';
  import Globe from 'lucide-svelte/icons/globe';
  import House from 'lucide-svelte/icons/house';
  import Menu from 'lucide-svelte/icons/menu';
  import Package from 'lucide-svelte/icons/package';
  import Package2 from 'lucide-svelte/icons/package-2';
  import Radio from 'lucide-svelte/icons/radio';
  import Rocket from 'lucide-svelte/icons/rocket';
  import Satellite from 'lucide-svelte/icons/satellite';
  import Search from 'lucide-svelte/icons/search';
  import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
  import Users from 'lucide-svelte/icons/users';

  import { base } from '$app/paths';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
  import * as Sheet from '$lib/components/ui/sheet/index.js';
  import DataTable from './data-table.svelte';
</script>

<div class="grid min-h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
  <div class="bg-muted/40 hidden border-r md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="{base}/" class="flex items-center gap-2 font-semibold">
          <Bird class="h-5 w-5" />
          <span class="text-sm">Flight Deck</span>
        </a>
        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <a
            href="##"
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Globe class="h-4 w-4" />
            Mission Control
          </a>
          <a
            href="##"
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Rocket class="h-4 w-4" />
            Active Missions
            <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">3</Badge>
          </a>
          <a
            href="##"
            class="bg-muted text-primary hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Satellite class="h-4 w-4" />
            Satellites
          </a>
          <a
            href="##"
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Radio class="h-4 w-4" />
            Ground Stations
          </a>
          <a
            href="##"
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Activity class="h-4 w-4" />
            Telemetry
          </a>
        </nav>
      </div>
      <!-- <div class="mt-auto p-4">
        <Card.Root>
          <Card.Header class="p-2 pt-0 md:p-4">
            <Card.Title>Upgrade to Pro</Card.Title>
            <Card.Description>Unlock all features and get unlimited access to our support team.</Card.Description>
          </Card.Header>
          <Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" class="w-full">Upgrade</Button>
          </Card.Content>
        </Card.Root>
      </div> -->
    </div>
  </div>
  <div class="flex flex-col">
    <header class="bg-muted/40 flex h-12 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
            <Menu class="h-4 w-4" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left" class="flex flex-col">
          <nav class="grid gap-2 text-lg font-medium">
            <a href="##" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <House class="h-5 w-5" />
              Dashboard
            </a>
            <a
              href="##"
              class="bg-muted text-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <ShoppingCart class="h-5 w-5" />
              Orders
              <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <Package class="h-5 w-5" />
              Products
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <Users class="h-5 w-5" />
              Customers
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <ChartLine class="h-5 w-5" />
              Analytics
            </a>
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <div class="w-full flex-1">
        <form>
          <div class="relative">
            <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              class="bg-background w-full appearance-none pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
    <main class="flex flex-1 flex-col">
      <div class="flex items-center gap-4 p-4 lg:gap-6 lg:p-6">
        <h1 class="text-md font-semibold md:text-md">Satellite Fleet</h1>
      </div>
      <div class="flex px-2">
        <ScrollArea class="w-full px-0 mx-0">
          <!-- <p class="text-muted-foreground text-sm">Launch your first satellite mission to begin operations.</p>
          <Button class="mt-4">Launch Mission</Button> -->
          <DataTable />
        </ScrollArea>
      </div>
    </main>
  </div>
</div>
