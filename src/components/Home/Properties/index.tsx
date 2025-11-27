"use client";

import { Icon } from "@iconify/react";
import PropertyCard from "./Card/Card";
import { useEffect, useState } from "react";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ---------- TYPES ----------
interface CardProp {
  name: string;
  url: string;
  location: string;
  price: string;
  rating: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  isExclusive?: boolean;
}

// ---------- FALLBACK ----------
const fallbackProperties: CardProp[] = [
  {
    name: "Studio moderne et calme",
    url: "https://www.airbnb.fr/rooms/1543443156241086428",
    location: "Casablanca, Maroc",
    price: "Soon",
    rating: "5.0",
    beds: 1,
    baths: 1,
    area: 120,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200",
  },
];

// ---------- SANITY CLIENT ----------
const client =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
    ? sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        useCdn: true,
        apiVersion: "2024-01-01",
      })
    : null;

const builder = client ? imageUrlBuilder(client) : null;

function urlFor(source: any) {
  if (!source) return "";
  if (!builder) {
    if (typeof source === "string") return source;
    return "";
  }
  if (typeof source === "string") return source;

  try {
    return builder.image(source).width(2000).quality(90).auto("format").url();
  } catch {
    return "";
  }
}

// ---------- COMPONENT ----------
const Properties: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [properties, setProperties] = useState<CardProp[]>(fallbackProperties);

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!client) return;

      try {
        // === FETCH NON-EXCLUSIVE ONLY ===
        const q = `*[_type == "property"] | order(_createdAt desc){
          title,
          location,
          bedrooms,
          bathrooms,
          images,
          reserverUrl,
          price,
          rating,
          area
        }`;

        const res = await client.fetch(q);

        if (!mounted) return;

        if (!res || res.length === 0) {
          setProperties(fallbackProperties);
          return;
        }

        const mapped: CardProp[] = res.map((doc: any) => {
          const firstImage = Array.isArray(doc.images)
            ? urlFor(doc.images[0])
            : "";

          return {
            name: doc.title ?? "Untitled",
            url: doc.reserverUrl ?? "#",
            location: doc.location ?? "",
            price: doc.price ?? "—",
            rating: doc.rating ?? "",
            beds: Number(doc.bedrooms ?? 1),
            baths: Number(doc.bathrooms ?? 1),
            area: Number(doc.area ?? 0),
            image: firstImage || "",
            isExclusive: false,
          };
        });

        setProperties(mapped);
      } catch (error) {
        console.error("Failed to load properties:", error);
        setProperties(fallbackProperties);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="Properties">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="mb-16 flex flex-col gap-3 ">
          <div className="flex gap-2.5 items-center justify-center">
            <Icon icon="ph:house-simple-fill" width={20} height={20} className="text-primary" />
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Propriétés
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            Découvrez Nos Propriétés.
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
            Trouvez le logement idéal parmi notre sélection de biens soigneusement gérés.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {!expanded
            ? properties.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <PropertyCard item={item} />
                </div>
              ))
            : properties.map((item, index) => (
                <div key={index}>
                  <PropertyCard item={item} />
                </div>
              ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="py-4 px-16 m-auto cursor-pointer bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark active:bg-dark duration-300"
        >
          {!expanded ? "Découvrez" : "Afficher moins"}
        </button>
      </div>
    </section>
  );
};

export default Properties;
