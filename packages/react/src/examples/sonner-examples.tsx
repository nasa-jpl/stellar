import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from 'sonner';

export const SonnerDefault = (
  <div className="w-full flex justify-center">
    {/* Note: this Toaster would normally live in the root of your React app. */}
    <div className="absolute bottom-[8px] left-[8px]">
      <Toaster />
    </div>
    <Button
      variant="outline"
      onClick={() =>
        toast.success('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.info('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  </div>
);

// Somewhere in the root of your application...
// import { Toaster } from "@nasa-jpl/stellar-react";
// <Toaster />
