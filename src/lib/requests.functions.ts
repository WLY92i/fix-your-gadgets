import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { requestSchema } from './request-schema';
import type { Database } from '@/integrations/supabase/types';

export const submitRequest = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => requestSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    const url = process.env['SUPABASE_URL'];
    if (!key || !url) return { ok: false as const, error: 'Le service est momentanément indisponible. Réessayez plus tard.' };
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization');
        headers.set('apikey', key);
        return fetch(input, { ...init, headers });
      } },
    });
    const id = crypto.randomUUID();
    const { website: _honeypot, ...request } = data;
    const { error } = await client.from('service_requests').insert({ ...request, id });
    if (error) return { ok: false as const, error: 'Votre demande n’a pas pu être enregistrée. Veuillez réessayer.' };
    return { ok: true as const, reference: id.slice(0, 8).toUpperCase() };
  });