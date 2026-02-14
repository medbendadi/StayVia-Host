import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import MaintenanceSection from "./MaintenanceSection";

const Categories = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden mt-17"
      style={{ paddingBlock: 0 }}
    >
      {/* Background Vector */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">

        {/* HERO ROW */}
        <div className="grid grid-cols-12 lg:gap-10 items-center">
          
          {/* TEXT */}
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
              />
              STAYVIA HOST
            </p>

            <h2 className="lg:text-52 text-40 mt-4 mb-3 font-medium leading-[1.2] text-dark dark:text-white">
              Gestion Locative Simplifiée
            </h2>

            <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.35] max-w-xl">
              Confiez-nous la gestion complète de vos locations pour une tranquillité totale.
            </p>

            <Link
              href="/contactus"
              className="inline-block mt-8 py-4 px-8 bg-primary text-white rounded-full font-semibold hover:bg-dark duration-300"
            >
              Rejoindre StayVia
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="lg:col-span-6 col-span-12 mt-10 lg:mt-0">
            <FeatureCard
            aspect='aspect-[16/9]'
            img="/images/categories/comunication.webp"
            title="Support et accompagnement des voyageurs"
            desc="Nous prenons en charge toutes les demandes et les besoins des clients, en assurant une assistance 24h/24 et 7j/7 afin de garantir un séjour sans stress."
          />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 mb-6 h-px w-full bg-dark/5 dark:bg-white/10" />

        {/* SECTION LABEL */}
        <p className="text-sm font-semibold text-primary mb-6">
          Nos services inclus
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-12 gap-6 pb-4">

          <FeatureCard
            img="/images/categories/menagee.avif"
            title="Nettoyage professionnel et maintenance"
            desc="Notre équipe veille à ce que votre propriété reste en parfait état grâce à des services de nettoyage de haute qualité et une maintenance régulière."
          />

          <FeatureCard
            img="/images/categories/keys.jpg"
            title="Check-in & Check-out"
            desc="Nous offrons une expérience fluide et personnalisée à vos clients, en garantissant des check-ins ponctuels, la remise des clés et un accueil chaleureux."
          />

          <FeatureCard
            img="/images/categories/finance.jpg"
            title="Gestion complète de votre propriété"
            desc="De l’optimisation de l’annonce à la communication avec les voyageurs, nous prenons en charge chaque aspect de la gestion de votre bien Airbnb afin de maximiser le taux d’occupation et les revenus."
          />

          <FeatureCard
            img="/images/categories/photo.jpg"
            title="Photographie et marketing de votre bien."
            desc="Valorisez votre annonce grâce à des photos professionnelles et une stratégie marketing efficace afin d’attirer davantage de voyageurs."
          />
        </div>
        <MaintenanceSection/>

      </div>


    </section>
  );
};

/* ---------------------------------- */
/* FEATURE CARD COMPONENT              */
/* ---------------------------------- */

const FeatureCard = ({ img, title, desc, aspect='aspect-[3/4]' }) => {
  return (
    <div className="lg:col-span-3 md:col-span-6 col-span-12">
      <div className={`relative ${aspect} rounded-2xl overflow-hidden group`}>
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 translate-y-full group-hover:translate-y-0 duration-500 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold">
            {title}
          </h3>
          <p className="text-white/80 text-sm mt-2 leading-5">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
