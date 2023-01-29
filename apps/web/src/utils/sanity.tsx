import type { PortableTextProps } from '@portabletext/react';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import type {
  PortableTextBlock,
  PortableTextMarkDefinition,
  ArbitraryTypedObject,
  PortableTextSpan,
} from '@portabletext/types';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';

const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   * */
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-07-10',
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   * */
};

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
if (!config.dataset) {
  throw Error('The dataset name is not set. Check your environment variables.');
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */
const sanityImageBuilder = createImageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => sanityImageBuilder.image(source);

// Set up Portable Text serialization
export const PortableText = (
  props: JSX.IntrinsicAttributes &
    PortableTextProps<
      PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>
    >,
) => {
  return <PortableTextComponent components={{}} {...props} />;
};
// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);
