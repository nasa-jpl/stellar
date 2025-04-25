'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast, Toaster } from 'sonner';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function FormSm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit() {
    toast.success('Form submitted');
  }

  return (
    <Form {...form}>
      {/* Note: this Toaster would normally live in the root of your React app. */}
      <div className="absolute bottom-[8px] left-[8px]">
        <Toaster />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel size="sm">Username</FormLabel>
              <FormControl>
                <Input sizeVariant="sm" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription size="sm">This is your public display name.</FormDescription>
              <FormMessage size="sm" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
