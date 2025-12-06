// src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import property from "./property";
import testimonial from "./testimonial";
import founder from "./founder";


export const schemaTypes: SchemaTypeDefinition[] = [
  property,
  testimonial,
  founder,
];
