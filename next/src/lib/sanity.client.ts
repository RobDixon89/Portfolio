import { createClient, type ClientConfig } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '6d2d95er';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2022-03-07';

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

const client = createClient(config);

export default client;
