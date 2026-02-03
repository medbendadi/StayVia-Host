import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Roadmap: React.FC = () => {
  return (
    <section id="Comment_ça_marche" className="mt-17" style={{ paddingBlock: 0 }}>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
        <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary "
              />
              Processus
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
                Comment ça marche ?
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
            Notre méthode de gestion a été pensée pour offrir à chaque propriétaire une expérience <span className="text-primary font-bold">simple</span>, <span className="text-primary font-bold">transparente</span> et <span className="text-primary font-bold">hautement performante</span>. Nous prenons en charge chaque détail, du premier clic jusqu’à l’optimisation continue de vos revenus, afin de vous garantir une tranquillité d’esprit totale.
            </p>
            <h3 className="text-lg leading-[1.2]  text-primary mt-10 mb-5 font-bold">Pourquoi ça fonctionne ?</h3>

            <div className="flex items-center ml-4 mb-3">
            <Image
                src={'/images/road/line-chart-waves-solid.svg'}
                alt='item'
                width={25}
                height={25}
                className='block mr-3'
                unoptimized={true}
              />
              Méthode éprouvée
            </div>

            <div className="flex items-center ml-4 mb-3">
            <Image
                src={'/images/road/line-chart-waves-solid.svg'}
                alt='item'
                width={25}
                height={25}
                className='block mr-3'
                unoptimized={true}
              />
              Gestion 100% transparente
            </div>

            <div className="flex items-center ml-4 mb-3">
            <Image
                src={'/images/road/line-chart-waves-solid.svg'}
                alt='item'
                width={25}
                height={25}
                className='block mr-3'
                unoptimized={true}
              />
              Optimisation guidée par les données
            </div>

            <div className="flex items-center ml-4 mb-3">
            <Image
                src={'/images/road/line-chart-waves-solid.svg'}
                alt='item'
                width={25}
                height={25}
                className='block mr-3'
                unoptimized={true}
              />
              Support 24/7
            </div>
          </div>

          <div className="lg:mx-0 mx-auto">
            <div className="flex lg:items-end items-center justify-between mt-2">
            <div className="w-3/4 mb-5">
            <h2 className="lg:text-3xl text-lg lg:mb-4 mb-2 leading-[1.2] font-medium text-dark dark:text-white">
            Mise en ligne optimisée</h2>
            <p className="text-dark/50 lg:text-xl text-sm dark:text-white/50 pr-20">
                Nous optimisons vos annonces sur <span className="text-primary font-bold">Airbnb</span>, <span className="text-primary font-bold">Booking.com</span> et l’ensemble des plateformes clés afin d’assurer une visibilité maximale et d’attirer les meilleurs voyageurs.
                </p>
            </div>
            <div className="relative h-min w-fit">
            <Image
                src="/images/road/airbnb-line.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] absolute z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 block dark:hidden"
                unoptimized={true}
              />

            <Image
                src="/images/road/airbnb-line-dark.png"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 hidden dark:block"
                unoptimized={true}
              />
            <Image
                src="/images/road/road-start.svg"
                alt="image"
                width={120}
                height={216}
                className="object-cover lg:w-[120px] lg:h-[216px] w-[70px] h-[120px]"
                unoptimized={true}
              />
            </div>
            </div>

            <div className="flex lg:items-end items-center justify-between lg:-mt-4.5">
            <div className="w-3/4 mb-5">
            <h2 className="lg:text-3xl text-lg lg:mb-4 mb-2 leading-[1.2] font-medium text-dark dark:text-white">
            Accueil & suivi des voyageurs</h2>
            <p className="text-dark/50 lg:text-xl text-sm dark:text-white/50 pr-20">
            Nous prenons en charge l’accueil, la communication et le suivi complet des voyageurs, du premier échange jusqu’au check-out, avec un niveau de rigueur et de professionnalisme exemplaire.
                </p>
            </div>
            <div className="relative h-min w-fit">
            <Image
                src="/images/road/key-chain.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 block dark:hidden"
                unoptimized={true}
              />
            <Image
                src="/images/road/key-chain-dark.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 hidden dark:block"
                unoptimized={true}
              />
            <Image
                src="/images/road/road-start.svg"
                alt="image"
                width={120}
                height={216}
                className="object-cover lg:w-[120px] lg:h-[216px] w-[70px] h-[120px]"
                unoptimized={true}
              />
            </div>
            </div>
            <div className="flex lg:items-end items-center justify-between lg:-mt-4.5">
            <div className="w-3/4 mb-5">
            <h2 className="lg:text-3xl text-lg lg:mb-4 mb-2 leading-[1.2] font-medium text-dark dark:text-white">
            Gestion proactive des imprévus</h2>
            <p className="text-dark/50 lg:text-xl text-sm dark:text-white/50 pr-20">
            Nous intervenons rapidement en cas d’imprévu et apportons des solutions immédiates pour garantir une expérience fluide et irréprochable, sans interruption pour vos voyageurs.
            </p>
            </div>
            <div className="relative h-min w-fit">
            <Image
                src="/images/road/wrench-screwdriver.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 block dark:hidden"
                unoptimized={true}
              />
            <Image
                src="/images/road/wrench-screwdriver-dark.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 hidden dark:block"
                unoptimized={true}
              />
            <Image
                src="/images/road/road-start.svg"
                alt="image"
                width={120}
                height={216}
                className="object-cover lg:w-[120px] lg:h-[216px] w-[70px] h-[120px]"
                unoptimized={true}
              />
            </div>
            </div>
            <div className="flex lg:items-end items-center justify-between lg:-mt-4.5">
            <div className="w-3/4 mb-5">
            <h2 className="lg:text-3xl text-lg lg:mb-4 mb-2 leading-[1.2] font-medium text-dark dark:text-white">
            Analyse & optimisation continue</h2>
            <p className="text-dark/50 lg:text-xl text-sm dark:text-white/50 pr-20">
              Nous analysons régulièrement les performances de votre location et ajustons la stratégie afin de maximiser en continu votre rendement locatif. Grâce à des systèmes digitaux avancés, nous suivons les données en temps réel pour obtenir des résultats encore plus performants.
            </p>
            </div>
            <div className="relative h-min w-fit">
            <Image
                src="/images/road/piechart-filled.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 block dark:hidden"
                unoptimized={true}
              />
            <Image
                src="/images/road/piechart-filled-dark.svg"
                alt="image"
                width={60}
                height={60}
                className="object-cover absolute lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] z-20 left-1/2 -translate-x-1/2 lg:bottom-10 bottom-6 hidden dark:block"
                unoptimized={true}
              />
            <Image
                src="/images/road/road-start.svg"
                alt="image"
                width={120}
                height={216}
                className="object-cover lg:w-[120px] lg:h-[216px] w-[70px] h-[120px]"
                unoptimized={true}
              />
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
