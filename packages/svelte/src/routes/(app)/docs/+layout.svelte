<script lang="ts">
  import DocsSidebarNav from '../../../www/components/nav/docs-sidebar-nav.svelte';
</script>

<div class="border-b">
  <div
    class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
  >
    <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <!-- <ScrollArea class="h-full py-6 pr-6 lg:py-8"> -->
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
            items: [
              { title: 'Alert', href: '/docs/components/alert', items: [] },
              { title: 'Button', href: '/docs/components/button', items: [] },
            ],
          },
        ]}
      />
      <!-- </ScrollArea> -->
    </aside>
    <slot />
  </div>
</div>
