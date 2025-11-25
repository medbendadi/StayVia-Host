import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Owners: React.FC = () => {
  return (
    <section id="owners">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div className="lg:mx-0 mx-auto grid grid-cols-2 gap-5 overflow-hidden rounded-2xl">
            <div className="w-full max-h-[644px] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/owners/Dalila.jpeg"
                alt="image"
                width={680}
                height={644}
                className="object-cover"
                style={{ width: "680px", height: "644px" }}
                unoptimized={true}
              />

              <div className="absolute inset-0 bg-black/50" />

                <div className="absolute flex flex-col items-center z-20 left-1/2 -translate-x-1/2 bottom-12">
                    <Image
                        src="/images/owners/Dalila.jpeg"
                        alt="image"
                        width={80}
                        height={80}
                        className="object-cover rounded-full"
                        style={{ width: "80px", height: "80px" }}
                        unoptimized={true}
                    />
                    <h2 className="text-white text-xl mt-5">Dalila Hajbani</h2>
                </div>
            </div>

            <div className="w-full max-h-[644px] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/categories/appartment.jpg"
                alt="image"
                width={680}
                height={644}
                className="object-cover"
                style={{ width: "680px", height: "644px" }}
                unoptimized={true}
              />

              <div className="absolute inset-0 bg-black/50" />

                <div className="absolute flex flex-col items-center z-20 left-1/2 -translate-x-1/2 bottom-12">
                    <Image
                        src="/images/categories/appartment.jpg"
                        alt="image"
                        width={80}
                        height={80}
                        className="object-cover rounded-full"
                        style={{ width: "80px", height: "80px" }}
                        unoptimized={true}
                    />
                    <h2 className="text-white text-xl mt-5">Naoual Aftati</h2>
                </div>
            </div>
          </div>
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary "
              />
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
                Qui sommes <br/> nous ?
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
            Fondée par Naoual Aftati & Dalila Hajbani, STAY VIA accompagne les propriétaires dans la gestion complète de leurs locations de courte durée sur Airbnb, Booking.com et autres plateformes.
            Notre mission : transformer chaque logement en adresse d’exception et chaque séjour en expérience mémorable.
            </p>
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Pourquoi nous choisir ?
                  </AccordionTrigger>
                  <AccordionContent>
                    1. Expertise en gestion locative de luxe. <br />
                    2. Service personnalisé et discret. <br />
                    3. Tranquillité d’esprit totale pour les propriétaires. <br />
                    4. Expérience cinq étoiles pour les voyageurs. <br />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Nos missions
                  </AccordionTrigger>
                  <AccordionContent>
                    1. Offrir une expérience haut de gamme aux voyageurs. <br />
                    2. Garantir des revenus optimisés pour les propriétaires. <br />
                    3. Assurer la propreté, la maintenance et l’accueil impeccable. <br />
                    4. Simplifier la vie des propriétaires, du check-in à l’analyse des performances. <br />

                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Nos fondatrices
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className="text-primary">Naoual Aftati:</span> – passionnée par l’hospitalité et la gestion locative. <br />
                    <span className="text-primary">Dalila Hajbani:</span> –experte en optimisation de locations et service client. <br />
                    <span className="text-primary">Vision commune:</span> offrir une conciergerie de luxe où efficacité rime avec élégance. <br />

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
