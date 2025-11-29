// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Homely Studio",
  projectId: (process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)!,
  dataset: (process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET)!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-26",
  studio: {
    components: {},
  },
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
