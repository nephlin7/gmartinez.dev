import { createClient } from 'next-sanity';

import type { SanityClient } from '@sanity/client';

import { apiVersion, dataset, projectId } from './env';

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});