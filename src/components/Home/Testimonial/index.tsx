"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials as fallbackTestimonials } from "@/app/api/testimonial";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ---------- TYPES ----------
interface SanityTestimonial {
  _id: string;
  name: string;
  platform?: string;
  quote: string;
  rating?: number;
  image?: any;
}

interface TestimonialItem {
  id: string;
  name: string;
  platform: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

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
  if (!source || !builder) return "";
  try {
    return builder.image(source).width(800).height(1000).quality(90).url();
  } catch {
    return "";
  }
}

// ---------- COMPONENT ----------
const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState<TestimonialItem[]>([]);

  // Carousel state
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Fetch testimonials from Sanity
  React.useEffect(() => {
    let mounted = true;

    async function load() {
      if (!client) {
        // no sanity client, use local fallback
        setItems([]);
        return;
      }

      try {
        const query = `*[_type == "testimonial"] | order(order asc, _createdAt desc){
          _id,
          name,
          platform,
          quote,
          rating,
          image
        }`;

        const res: SanityTestimonial[] = await client.fetch(query);

        if (!mounted) return;

        if (!res || res.length === 0) {
          // fallback to local data
          setItems([]);
          return;
        }

        const mapped: TestimonialItem[] = res.map((doc) => ({
          id: doc._id,
          name: doc.name,
          platform: doc.platform ?? "airbnb.com",
          quote: doc.quote,
          rating: doc.rating ?? 5,
          imageUrl: urlFor(doc.image),
        }));

        setItems(mapped);
      } catch (err) {
        console.error("Failed to load testimonials:", err);
        // fallback
        setItems([])
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  // You’re not using <Carousel> yet, so we’ll keep simple grid like before.
  // You can plug items into the carousel later if you want.

  if (items.length === 0) return null;

  return (
    <section
      className="dark:bg-dark bg-white relative overflow-hidden mt-17"
      style={{ paddingBlock: 0 }}
      id="testimonial"
    >
      <div className="absolute right-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <h2 className="lg:text-52 text-40 leading-[1.2] text-dark dark:text-primary font-medium text-center mb-5">
          Vos expériences, notre meilleure preuve !
        </h2>

        <p className="text-center text-dark dark:text-primary mb-5 font-medium">
          50+ Voyageurs satisfaits
        </p>

        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {items.map((t) => (
            <div
              key={t.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white dark:bg-dark p-8 rounded-2xl shadow-md text-left"
            >
              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <div className="w-[180px] h-[220px] overflow-hidden rounded-2xl">
                  {t.imageUrl && (
                    <Image
                      src={t.imageUrl}
                      alt={t.name}
                      width={180}
                      height={220}
                      className="w-full h-full object-cover rounded-2xl"
                      unoptimized={true}
                    />
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex md:justify-start justify-center mb-3">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-blue-500 dark:text-primary text-xl"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-3 leading-relaxed">
                  {`"${t.quote}"`}
                </p>
                <p className="font-semibold text-dark dark:text-white">
                  {t.name}
                  <span className="text-gray-500 ml-1">{t.platform}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
