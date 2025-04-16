import { Button } from '@/components/ui/button';

export const ButtonXl = (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="xl">Default</Button>
    <Button size="xl" variant="secondary">
      Secondary
    </Button>
    <Button size="xl" variant="destructive">
      Destructive
    </Button>
    <Button size="xl" variant="outline">
      Outline
    </Button>
    <Button size="xl" variant="ghost">
      Ghost
    </Button>
    <Button size="xl" variant="link">
      Link
    </Button>
  </div>
);
