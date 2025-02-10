<script lang="ts" context="module">
  import { z } from 'zod';

  export const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import { browser } from '$app/environment';
  import * as Form from '$lib/components/ui/form/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { toast } from 'svelte-sonner';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  const form = superForm(
    {
      username: '',
    },
    {
      validators: zodClient(formSchema),
      onUpdated: ({ form: f }) => {
        if (f.valid) {
          toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
        } else {
          toast.error('Please fix the errors in the form.');
        }
      },
      dataType: 'json',
      taintedMessage: null,
      SPA: true,
    },
  );

  const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
  <Form.Field {form} name="username">
    <Form.Control let:attrs>
      <Form.Label>Username</Form.Label>
      <Input {...attrs} bind:value={$formData.username} />
    </Form.Control>
    <Form.Description>This is your public display name.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Button>Submit</Form.Button>
  {#if browser}
    <SuperDebug data={$formData} />
  {/if}
</form>
