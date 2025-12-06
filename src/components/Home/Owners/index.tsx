"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";

// ---------- TYPES ----------
interface FounderItem {
  id: string;
  name: string;
  imageUrl: string;
  avatarUrl: string;
}

// ---------- SANITY ----------
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
  if (!source || !builder) return "";
  return builder.image(source).width(2000).quality(90).url();
}

// ---------- COMPONENT ----------
const Owners: React.FC = () => {
  const [founders, setFounders] = useState<FounderItem[]>([]);

  useEffect(() => {
    async function load() {
      if (!client) return;

      try {
        const query = `*[_type == "founder"] | order(order asc){
          _id,
          name,
          image,
          avatar
        }`;

        const res = await client.fetch(query);

        const mapped: FounderItem[] = res.map((f: any) => ({
          id: f._id,
          name: f.name,
          imageUrl: urlFor(f.image),
          avatarUrl: urlFor(f.avatar) || urlFor(f.image),
        }));

        setFounders(mapped);
      } catch (e) {
        console.error("Failed loading founders:", e);
      }
    }

    load();
  }, []);

  // 🚀 If no founders in Sanity → do not render
  if (founders.length === 0) return null;

  return (
    <section id="owners" className="mt-17" style={{ paddingBlock: 0 }}>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE IMAGES */}
          <div className={`lg:mx-0 mx-auto grid grid-cols-${founders.length} gap-5 overflow-hidden rounded-2xl`}>

            {founders.map((f) => (
              <div
                key={f.id}
                className="w-full max-h-[644px] relative rounded-2xl overflow-hidden"
              >
                {f.imageUrl && (
                  <Image
                    src={f.imageUrl}
                    alt={f.name}
                    width={680}
                    height={644}
                    className="object-cover"
                    style={{ width: "680px", height: "644px" }}
                    unoptimized={true}
                  />
                )}

                <div className="absolute inset-0 bg-black/50" />

                {/* Avatar + Name */}
                <div className="absolute flex flex-col items-center z-20 left-1/2 -translate-x-1/2 bottom-12">
                  {f.avatarUrl && (
                    <Image
                      src={f.avatarUrl}
                      alt={f.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-full"
                      style={{ width: "80px", height: "80px" }}
                      unoptimized={true}
                    />
                  )}
                  <h2 className="text-white text-xl mt-5">{f.name}</h2>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
              />
              Fondateurs
            </p>

            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Qui sommes <br /> nous ?
            </h2>

            <p className="text-dark/50 dark:text-white/50 pr-20">
              Fondée par l'équipe fondatrice, STAY VIA accompagne les propriétaires
              dans la gestion complète de leurs locations.
              Notre mission : transformer chaque logement en adresse d’exception.
            </p>

            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Pourquoi nous choisir ?</AccordionTrigger>
                  <AccordionContent>
                    1. Expertise en gestion locative de luxe. <br />
                    2. Service personnalisé et discret. <br />
                    3. Tranquillité d’esprit totale pour les propriétaires. <br />
                    4. Expérience cinq étoiles pour les voyageurs. <br />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Nos missions</AccordionTrigger>
                  <AccordionContent>
                    1. Offrir une expérience haut de gamme aux voyageurs. <br />
                    2. Garantir des revenus optimisé. <br />
                    3. Propreté & maintenance. <br />
                    4. Suivi complet du check-in à l’analyse des performances. <br />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Nos fondatrices</AccordionTrigger>
                  <AccordionContent>
                    {founders.map((f) => (
                      <div key={f.id}>
                        <span className="text-primary">{f.name}</span> — membre fondatrice. <br />
                      </div>
                    ))}
                    <span className="text-primary">Vision : </span>
                    offrir une conciergerie premium alliant efficacité & élégance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Owners;
