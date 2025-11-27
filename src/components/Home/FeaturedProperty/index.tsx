"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// optional fallback import you had — keep as fallback if Sanity empty
import { featuredProprty as fallbackFeatured } from "@/app/api/featuredproperty";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type SanityImage = any;

interface SanityProperty {
  _id?: string;
  title?: string;
  name?: string;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: string;
  wifi?: string;
  reserverUrl?: string;
  url?: string;
  images?: SanityImage[]; // array of image objects
  mainImage?: SanityImage;
  image?: string; // legacy absolute url
  isExclusive?: boolean;
  description?: string;
}

interface FeatureItem {
  src: string;
  alt?: string;
}

const client =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
    ? sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        useCdn: true,
        apiVersion: "2025-11-26",
      })
    : null;

const builder = client ? imageUrlBuilder(client) : null;

/**
 * urlFor: robust URL builder
 * - If the Sanity image object contains asset.url, return it directly
 * - If builder exists use builder.image()
 * - Fallback to asset._ref or _id
 */
function urlFor(source: any) {
  if (!source) return "";

  // direct asset url (from asset-> { url } in GROQ)
  if (source?.asset?.url && typeof source.asset.url === "string") {
    return source.asset.url;
  }

  // simple string (absolute url)
  if (typeof source === "string") return source;

  if (!builder) {
    return "";
  }

  try {
    return builder
      .image(source)
      .width(2000)       // HD for large screens
      .quality(90)       // good quality
      .auto("format")    // WebP/AVIF optimizations
      .url();
  } catch (err) {
    // try legacy ref shapes: asset._ref or _id
    const ref = source?.asset?._ref ?? source?._id;
    if (typeof ref === "string") {
      try {
        return builder.image({ asset: { _ref: ref } }).width(1200).url();
      } catch (err2) {
        console.warn("urlFor: failed to build image from ref", ref, err2);
      }
    }
  }

  return "";
}

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // exclusive property state
  const [property, setProperty] = React.useState<SanityProperty | null>(null);
  const [images, setImages] = React.useState<FeatureItem[]>([]);

  // update carousel API listeners when api becomes available
  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      const snaps = api.scrollSnapList();
      setCount(snaps?.length ?? 0);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    update();
    const onSelect = () => update();

    api.on("select", onSelect);
    // cleanup
    return () => {
      try {
        api.off("select", onSelect);
      } catch (e) {
        /* ignore */
      }
    };
  }, [api]);

  // ensure carousel recomputes when images change
  React.useEffect(() => {
    if (!api) return;
    // re-read snaps and snap to first slide
    try {
      const snaps = api.scrollSnapList();
      setCount(snaps?.length ?? images.length);
      if ((images?.length ?? 0) > 0) {
        api.scrollTo(0);
        setCurrent(1);
      }
    } catch (err) {
      // ignore errors if api methods are not available
      console.warn("Carousel sync warning:", err);
    }
  }, [api, images]);

  React.useEffect(() => {
    let mounted = true;

    async function loadExclusive() {
      // If no Sanity, use fallback data (if any)
      if (!client) {
        if (mounted && fallbackFeatured && fallbackFeatured.length > 0) {
          const fallback = fallbackFeatured[0];
          setProperty({
            title: fallback.title || fallback.alt || "Featured",
            location: fallback.location || "",
            bedrooms: fallback.bedrooms ?? 0,
            bathrooms: fallback.bathrooms ?? 0,
            parking: fallback.parking ?? "",
            wifi: fallback.wifi ?? "",
            reserverUrl: (fallback as any).link ?? (fallback as any).url ?? "#",
            description: fallback.description ?? "",
          });
          setImages((fallbackFeatured || []).map((f) => ({ src: f.scr ?? f.src ?? "", alt: f.alt ?? "" })));
        }
        return;
      }

      try {
        // request full image asset URLs via asset->
        const q = `*[_type == "property" && isExclusive == true]{
          _id,
          title,
          name,
          location,
          bedrooms,
          bathrooms,
          parking,
          wifi,
          reserverUrl,
          url,
          description,
          "images": images[]{ asset-> { _id, url } },
          "mainImage": mainImage.asset-> { _id, url },
          image
        }`;

        const res: SanityProperty[] = await client.fetch(q);

        if (!mounted) return;

        if (!res || res.length === 0) {
          // fallback to static if no exclusive doc
          if (fallbackFeatured && fallbackFeatured.length > 0) {
            const fallback = fallbackFeatured[0];
            setProperty({
              title: fallback.title || fallback.alt || "Featured",
              location: fallback.location || "",
              bedrooms: fallback.bedrooms ?? 0,
              bathrooms: fallback.bathrooms ?? 0,
              parking: fallback.parking ?? "",
              wifi: fallback.wifi ?? "",
              reserverUrl: (fallback as any).link ?? (fallback as any).url ?? "#",
              description: fallback.description ?? "",
            });
            setImages((fallbackFeatured || []).map((f) => ({ src: f.scr ?? f.src ?? "", alt: f.alt ?? "" })));
          }
          return;
        }

        // pick random exclusive property
        const random = res[Math.floor(Math.random() * res.length)];

        // debug raw shape
        console.log("Sanity exclusive (raw):", random);

        // build image list: prefer images array, then mainImage, then image absolute url
        const imgs: FeatureItem[] = [];

        if (Array.isArray(random.images) && random.images.length > 0) {
          for (const img of random.images) {
            // img has asset: { _id, url } because of asset->
            const u = urlFor(img);
            if (u) imgs.push({ src: u, alt: random.title ?? random.name ?? "" });
          }
        }

        // fallback to mainImage (object with asset.url)
        if (imgs.length === 0 && random.mainImage) {
          const u = urlFor(random.mainImage);
          if (u) imgs.push({ src: u, alt: random.title ?? random.name ?? "" });
        }

        // fallback to raw image string
        if (imgs.length === 0 && random.image && typeof random.image === "string") {
          imgs.push({ src: random.image, alt: random.title ?? random.name ?? "" });
        }

        // final fallback to static import
        if (imgs.length === 0 && fallbackFeatured && fallbackFeatured.length > 0) {
          setImages((fallbackFeatured || []).map((f) => ({ src: f.scr ?? f.src ?? "", alt: f.alt ?? "" })));
        } else {
          setImages(imgs);
        }

        setProperty({
          ...random,
          // keep as-is (already set above)
        });
      } catch (err) {
        console.error("Failed fetching exclusive properties:", err);
        // fallback to import if present
        if (fallbackFeatured && fallbackFeatured.length > 0) {
          const fallback = fallbackFeatured[0];
          setProperty({
            title: fallback.title || fallback.alt || "Featured",
            location: fallback.location || "",
            bedrooms: fallback.bedrooms ?? 0,
            bathrooms: fallback.bathrooms ?? 0,
            parking: fallback.parking ?? "",
            wifi: fallback.wifi ?? "",
            reserverUrl: (fallback as any).link ?? (fallback as any).url ?? "#",
            description: fallback.description ?? "",
          });
          setImages((fallbackFeatured || []).map((f) => ({ src: f.scr ?? f.src ?? "", alt: f.alt ?? "" })));
        }
      }
    }

    loadExclusive();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDotClick = (index: number) => {
    if (api) api.scrollTo(index);
  };

  console.log("images (after build):", images);

  // UI data with safe defaults
  const title = property?.title ?? property?.name ?? "Sélection exclusive";
  const location = property?.location ?? "Casablanca, Maroc";
  const bedrooms = property?.bedrooms ?? 4;
  const bathrooms = property?.bathrooms ?? 1;
  const parking = property?.parking ?? "Parking gratuit sur place";
  const wifi = property?.wifi ?? "Wifi rapide (97 Mbit/s)";
  const reserveLink = property?.reserverUrl ?? property?.url ?? "https://www.airbnb.fr/";

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <Carousel
              key={images.length} // force remount when image count changes
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.length > 0 ? (
                  images.map((item, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={item.src}
                        alt={item.alt ?? title}
                        width={680}
                        height={530}
                        className="rounded-2xl w-full h-540 object-cover"
                        priority
                      />
                    </CarouselItem>
                  ))
                ) : (
                  // guaranteed fallback: small placeholder if nothing
                  <CarouselItem key="placeholder">
                    <div className="rounded-2xl w-full h-540 bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">No images available</p>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
            </Carousel>

            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: Math.max(1, count || images.length) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                Sélection exclusive
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">{title}</h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="ph:map-pin" width={28} height={26} className="text-dark/50 dark:text-white/50" />
                <p className="text-dark/50 dark:text-white/50 text-base">{location}</p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              {property?.description ??
                "Bel emplacement, confort et finitions soignées. Idéal pour affaires ou détente — retrouvez une expérience mémorable."}
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image src={"/images/hero/sofa.svg"} alt="sofa" width={24} height={24} className="block dark:hidden" unoptimized={true} />
                  <Image src={"/images/hero/dark-sofa.svg"} alt="sofa" width={24} height={24} className="hidden dark:block" unoptimized={true} />
                </div>
                <h6 className="">{bedrooms} Chambres</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image src={"/images/hero/tube.svg"} alt="tube" width={24} height={24} className="block dark:hidden" unoptimized={true} />
                  <Image src={"/images/hero/dark-tube.svg"} alt="tube" width={24} height={24} className="hidden dark:block" unoptimized={true} />
                </div>
                <h6 className="">{bathrooms} Salle{bathrooms > 1 ? "s" : ""} de bain</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image src={"/images/hero/parking.svg"} alt="parking" width={24} height={24} className="block dark:hidden" unoptimized={true} />
                  <Image src={"/images/hero/dark-parking.svg"} alt="parking" width={24} height={24} className="hidden dark:block" unoptimized={true} />
                </div>
                <h6 className="">{parking}</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image src={"/images/SVGs/wifi.svg"} alt="wifi" width={24} height={24} className="block dark:hidden" unoptimized={true} />
                  <Image src={"/images/SVGs/wifi-dark.svg"} alt="wifi" width={24} height={24} className="hidden dark:block" unoptimized={true} />
                </div>
                <h6 className="">{wifi}</h6>
              </div>
            </div>

            <div className="flex mx-auto">
              <Link href={reserveLink} target="_blank" className="py-4 px-[6rem] bg-primary hover:bg-dark active:bg-dark duration-300 rounded-full text-white">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
