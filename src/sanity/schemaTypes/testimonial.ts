// sanity/schemas/testimonial.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "platform",
      title: "Plateforme (ex: airbnb.com)",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Avis",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Note (0–5)",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "image",
      title: "Photo / Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Ordre d’affichage",
      type: "number",
      description: "Plus petit = affiché en premier",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "platform",
      media: "image",
    },
  },
});
