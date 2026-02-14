import Image from "next/image";

const MaintenanceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Partie Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/categories/maintenance.jpg"
                alt="Travaux de rénovation et décoration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Partie Texte */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                Expertise & Qualité
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
                Rénovation & Design d'Intérieur
              </h2>
              
              <p className="text-base md:text-lg text-dark/70 dark:text-white/70 leading-relaxed">
                Nous mobilisons des artisans et experts pour vos travaux de rénovation, 
                garantissant un résultat soigné et de qualité. Nos décorateurs vous 
                accompagnent pour créer des espaces élégants, cohérents et accueillants.
              </p>
              
              {/* Éléments de réassurance (optionnel pour enrichir le design sans bouton) */}
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-dark/10 dark:border-white/10 pt-8">
                <div>
                  <h4 className="font-bold text-dark dark:text-white text-xl">100%</h4>
                  <p className="text-sm text-dark/50 dark:text-white/50">Artisans qualifiés</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white text-xl">Sur-mesure</h4>
                  <p className="text-sm text-dark/50 dark:text-white/50">Accompagnement dédié</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;