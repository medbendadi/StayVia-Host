import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden" id="services">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center lg:gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
              STAYVIA HOST
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Gestion Locative Simplifiée
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              Confiez-nous la gestion complète de vos locations pour une tranquillité totale.
            </p>
            <Link href="/tarifs" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark active:bg-dark duration-300">
               Nos Tarifs
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-12 my-7 lg:my-0">
            <div className="relative rounded-2xl overflow-hidden group">
              <div >
                <Image
                  src="/images/categories/comunication.webp"
                  alt="villas"
                  width={680}
                  height={386}
                  className="object-cover md:w-[680px] md:h-[386px] w-full h-[368px]"
                  
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 group-active:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Communication 24h/7j avec les voyageurs
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                  Nous répondons à vos voyageurs à toute heure pour garantir une expérience fluide et sans stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 mb-7 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/menagee.avif"
                  alt="villas"
                  width={680}
                  height={386}
                  className="object-cover"
                  style={{ width: '680px', height: '386px' }}
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 group-active:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Ménage & Entretien
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Nettoyage haut de gamme, gestion du linge et entretien minutieux.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12 mb-7 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/keys.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="object-cover md:w-[320px] md:h-[386px] w-full h-[368px]"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 group-active:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Check-in & Check-out professionnels
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                      Une arrivée chaleureuse et professionnelle pour offrir la meilleure première impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12  mb-7 lg:my-0">
            <div className="relative rounded-2xl overflow-hidden group">
              <div>
                <Image
                  src="/images/categories/finance.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="object-cover"
                  style={{ width: '320px', height: '386px' }}
                  objectFit="cover"
                  unoptimized={true}
                />
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 group-active:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  {/* <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div> */}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Optimisation des Revenus
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                  Maximisez vos gains grâce à une tarification dynamique et une gestion intelligente des réservations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
