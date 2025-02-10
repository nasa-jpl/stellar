<script lang="ts">
  import { page } from '$app/stores';
  import { Breadcrumb, ScrollArea } from '@nasa-jpl/stellar-svelte';
  import DocsSidebarNav from '../../../www/components/nav/docs-sidebar-nav.svelte';

  const components = [
    { title: 'Accordion', url: 'accordion' },
    { title: 'Alert', url: 'alert' },
    { title: 'Button', url: 'button' },
    { title: 'Alert Dialog', url: 'alert-dialog' },
    { title: 'Aspect Ratio', url: 'aspect-ratio' },
    { title: 'Avatar', url: 'avatar' },
    { title: 'Badge', url: 'badge' },
    { title: 'Calendar', url: 'calendar' },
    { title: 'Card', url: 'card' },
    { title: 'Carousel', url: 'carousel' },
    { title: 'Checkbox', url: 'checkbox' },
    { title: 'Collapsible', url: 'collapsible' },
    { title: 'Combobox', url: 'combobox' },
    { title: 'Command', url: 'command' },
    { title: 'Context Menu', url: 'context-menu' },
    // { title: 'Data Table', url: 'data-table' },
    { title: 'Dialog', url: 'dialog' },
    { title: 'Drawer', url: 'drawer' },
    { title: 'Dropdown Menu', url: 'dropdown-menu' },
    { title: 'Form', url: 'form' },
    { title: 'Hover Card', url: 'hover-card' },
    { title: 'Input', url: 'input' },
    { title: 'Label', url: 'label' },
    { title: 'Menubar', url: 'menubar' },
    { title: 'Pagination', url: 'pagination' },
    { title: 'Popover', url: 'popover' },
    { title: 'Progress', url: 'progress' },
    { title: 'Radio Group', url: 'radio-group' },
    { title: 'Range Calendar', url: 'range-calendar' },
    { title: 'Resizable', url: 'resizable' },
    { title: 'Scroll Area', url: 'scroll-area' },
    { title: 'Select', url: 'select' },
    { title: 'Separator', url: 'separator' },
    { title: 'Sheet', url: 'sheet' },
    { title: 'Skeleton', url: 'skeleton' },
    { title: 'Slider', url: 'slider' },
    { title: 'Sonner', url: 'sonner' },
    { title: 'Switch', url: 'switch' },
    { title: 'Table', url: 'table' },
    { title: 'Tabs', url: 'tabs' },
    { title: 'Textarea', url: 'textarea' },
    { title: 'Theme Switcher', url: 'theme-switcher' },
    { title: 'Toggle', url: 'toggle' },
    { title: 'Toggle Group', url: 'toggle-group' },
    { title: 'Tooltip', url: 'tooltip' },
  ];
</script>

<div class="border-b">
  <div
    class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
  >
    <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea.Root class="h-full py-6 pr-6 lg:py-8">
        <DocsSidebarNav
          items={[
            {
              title: 'Getting Started',
              items: [
                { title: 'Introduction', href: '/docs', items: [] },
                { title: 'Installation', href: '/docs/installation', items: [] },
              ],
            },
            {
              title: 'Components',
              items: components.map(component => ({
                title: component.title,
                href: `/docs/components/${component.url}`,
                items: [],
              })),
            },
          ]}
        />
      </ScrollArea.Root>
    </aside>
    <div>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>Docs</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item class="capitalize text-foreground font-medium">
            {$page.route.id?.split('/').at(-1)?.replace('-', ' ')}
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <slot />
    </div>
  </div>
</div>
