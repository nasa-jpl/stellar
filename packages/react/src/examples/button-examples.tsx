import { Button } from '@/components/ui/button';

export const ButtonDefault = (
  <div className="flex flex-wrap items-center gap-4">
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);
