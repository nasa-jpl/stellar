import { Button } from '@/components/ui/button';

export const ButtonLg = (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="lg">Default</Button>
    <Button size="lg" variant="secondary">
      Secondary
    </Button>
    <Button size="lg" variant="destructive">
      Destructive
    </Button>
    <Button size="lg" variant="outline">
      Outline
    </Button>
    <Button size="lg" variant="ghost">
      Ghost
    </Button>
    <Button size="lg" variant="link">
      Link
    </Button>
  </div>
);
