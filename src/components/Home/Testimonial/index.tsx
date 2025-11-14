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
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

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
    <section
      className="dark:bg-dark bg-white relative overflow-hidden"
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
          {/* Testimonial 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white dark:bg-dark p-8 rounded-2xl shadow-md text-left">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[180px] h-[220px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/testimonial/salma.avif"
                  alt="Salma"
                  width={180}
                  height={180}
                  className="rounded-2xl object-fit"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <div className="flex md:justify-start justify-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-blue-500 dark:text-primary text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-3 leading-relaxed">
                "Dalila is a very sweet person. The place is so calm and safe.
                Super clean with unique designs. I’d definitely comeback again".
              </p>
              <p className="font-semibold text-dark dark:text-white">
                Selma <span className="text-gray-500 ml-1">airbnb.com</span>
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white dark:bg-dark p-8 rounded-2xl shadow-md text-left">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[180px] h-[220px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/testimonial/youssef.avif"
                  alt="Youssef"
                  width={180}
                  height={220}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <div className="flex md:justify-start justify-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-blue-500 dark:text-primary text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-3 leading-relaxed">
                "An outstanding stay! Dalida’s attention to detail is incredible, with every aspect of the apartment designed for comfort and convenience. It’s by far the best Airbnb I’ve experienced. Highly recommended for anyone seeking a flawless and welcoming space!"
              </p>
              <p className="font-semibold text-dark dark:text-white">
                Youssef <span className="text-gray-500 ml-1">airbnb.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
