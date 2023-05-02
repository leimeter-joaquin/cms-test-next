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
      CONTENTFUL_PREVIEW_API_SECRET: string;
    }
  }
}
