import { Button } from '@/components/ui/button';

export const ButtonXs = (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="xs">Default</Button>
    <Button size="xs" variant="secondary">
      Secondary
    </Button>
    <Button size="xs" variant="destructive">
      Destructive
    </Button>
    <Button size="xs" variant="outline">
      Outline
    </Button>
    <Button size="xs" variant="ghost">
      Ghost
    </Button>
    <Button size="xs" variant="link">
      Link
    </Button>
  </div>
);
