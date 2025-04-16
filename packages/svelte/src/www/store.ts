import { writable, type Writable } from 'svelte/store';

/* Writeable. */

export const framework: Writable<'React' | 'Svelte'> = writable('Svelte');
