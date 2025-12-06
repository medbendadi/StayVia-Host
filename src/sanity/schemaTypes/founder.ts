import { defineType, defineField } from "sanity";

export default defineType({
  name: "founder",
  title: "Fondateur / Fondatrice",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Photo principale",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "avatar",
      title: "Avatar (image ronde)",
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
      media: "image",
    },
  },
});
