"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };


  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {featuredProprty.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
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
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                Perle centrale – Raffinement et confort à Palmier
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="ph:map-pin" width={28} height={26} className="text-dark/50 dark:text-white/50" />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Casablanca, Casablanca-Settat, Morocco
                </p>
              </div>
            </div>
            <p className="text-base text-dark/50 dark:text-white/50">
            Bienvenue à Casa Dalida, studio élégant et lumineux, au design raffiné et à la décoration chic, offrant un cadre chaleureux et un caractère d’exception.
Idéal pour affaires ou détente, il propose un espace de travail dédié avec Wi-Fi rapide et fiable, alliant confort moderne et emplacement stratégique.
Situé au cœur de Casablanca, dans le quartier Palmier–Maarif, à proximité des meilleurs restaurants, commerces et transports, Casa Dalida est le choix parfait pour une expérience mémorable.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/sofa.svg'}
                    alt='sofa'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-sofa.svg'}
                    alt='sofa'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">4 Chambres</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/tube.svg'}
                    alt='tube'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-tube.svg'}
                    alt='tube'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">1 Salle de bain</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/parking.svg'}
                    alt='parking'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-parking.svg'}
                    alt='parking'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">Parking gratuit sur place</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/SVGs/wifi.svg'}
                    alt='bar'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/SVGs/wifi-dark.svg'}
                    alt='bar'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">Wifi rapide (97 Mbit/s)</h6>
              </div>
            </div>
            <div className="flex mx-auto">
              <Link href="https://www.airbnb.fr/rooms/1302830074296234152" target="_blank" className="py-4 px-[6rem] bg-primary hover:bg-dark active:bg-dark duration-300 rounded-full text-white">
                Réserver
              </Link>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
