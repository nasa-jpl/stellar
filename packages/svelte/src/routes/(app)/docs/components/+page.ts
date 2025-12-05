import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async () => {
  redirect(303, `${base}/docs/components/accordion`);
};
