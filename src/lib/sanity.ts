// src/lib/sanity.ts
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-26",
  useCdn: true,
});

export const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return "";
  try {
    return builder.image(source).url();
  } catch {
    return "";
  }
}
