import {
  ContentfulClientApi,
  EntrySkeletonType,
  createClient,
} from "contentful";
import { config } from "dotenv";
import { CONTENT_TYPE } from "./generated/contentful";

/*
 * We tell TypeScript that those environment variables are always defined.
 * If you want to learn more about this madness, read:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_DELIVERY_API_ACCESS_TOKEN: string;
      CONTENTFUL_PREVIEW_API_ACCESS_TOKEN: string;
    }
  }
}

config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN ?? "",
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN ?? "",
  host: "preview.contentful.com",
});

/**
 * @param type You can check the content types in \@/contentful/generated/contentful.ts
 * @param client get client from \@/contentful/index.ts
 * @returns Entries of a given type from a given client.
 */
const getEntriesByType = async (
  type: CONTENT_TYPE,
  client: ContentfulClientApi<undefined>
) => {
  return (
    await client.getEntries({
      content_type: type,
    })
  ).items;
};

export { client, previewClient, getEntriesByType };
