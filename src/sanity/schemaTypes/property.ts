import { defineType, defineField } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",

  fields: [
    // 🌟 EXCLUSIVE TAG (Sélection exclusive)
    defineField({
      name: "isExclusive",
      title: "Sélection exclusive",
      type: "boolean",
      initialValue: false,
    }),

    // 🏡 TITLE
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 📍 LOCATION
    defineField({
      name: "location",
      title: "Localisation",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 📝 DESCRIPTION
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    }),

    // 🖼️ IMAGE CAROUSEL
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1),
    }),

    // 🛏️ BEDROOMS
    defineField({
      name: "bedrooms",
      title: "Chambres",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    // 🛁 BATHROOMS
    defineField({
      name: "bathrooms",
      title: "Salles de bain",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
        name: "price",
        title: "Prix",
        type: "string",
        validation: (Rule) => Rule.min(0),
      }),

      
    defineField({
        name: "area",
        title: "Metrage",
        type: "string",
        validation: (Rule) => Rule.min(0),
      }),
      
      defineField({
          name: "rating",
          title: "Rating",
          type: "string",
          validation: (Rule) => Rule.min(0),
        }),

    // 🚗 PARKING INFO
    defineField({
      name: "parking",
      title: "Parking",
      type: "string",
      description: "Example: 'Parking gratuit sur place'",
    }),

    // 📶 WIFI SPEED
    defineField({
      name: "wifi",
      title: "WiFi",
      type: "string",
      description: "Example: 'WiFi rapide (97 Mbit/s)'",
    }),

    // 🔗 RESERVATION URL (Button “Réserver”)
    defineField({
      name: "reserverUrl",
      title: "Lien de réservation",
      type: "url",
      description: "Link to Airbnb or booking page",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    }),
  ],
});
