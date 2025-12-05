import { Button } from '@/components/ui/button';

export const ButtonSm = (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Default</Button>
    <Button size="sm" variant="secondary">
      Secondary
    </Button>
    <Button size="sm" variant="destructive">
      Destructive
    </Button>
    <Button size="sm" variant="outline">
      Outline
    </Button>
    <Button size="sm" variant="ghost">
      Ghost
    </Button>
    <Button size="sm" variant="link">
      Link
    </Button>
  </div>
);
