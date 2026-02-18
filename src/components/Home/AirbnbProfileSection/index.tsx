import Image from "next/image";
import Link from "next/link";

const AirbnbTrustSection = () => {
  return (
    <section className="dark:bg-black bg-white relative overflow-hidden mt-6">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Texte Descriptif */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
              Une hospitalité récompensée par <span className="text-primary">l'excellence</span>
            </h2>
            
            <p className="text-lg text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
              Chez <strong>Stayvia Host</strong>, nous ne nous contentons pas de gérer des biens, 
              nous créons des expériences mémorables. Notre profil Airbnb en est la preuve vivante : 
              classés parmi les <strong>1 % des meilleurs logements</strong> mondiaux.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-dark dark:text-white">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs">✓</span>
                Note parfaite de <strong className="text-primary">5.0</strong> basée sur des dizaines d'avis.
              </li>
              <li className="flex items-center gap-3 text-dark dark:text-white">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs">✓</span>
                Statut de <strong className="text-primary">Superhôte</strong> garantissant réactivité et professionnalisme.
              </li>
              <li className="flex items-center gap-3 text-dark dark:text-white">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs">✓</span>
                Distinction<strong className="text-primary">Coup de cœur voyageurs</strong>sur nos propriétés.
              </li>
            </ul>

            <Link 
              href="https://www.airbnb.fr/users/profile/1549532901387116120"
              target="_blank"
              className="inline-block relative overflow-hidden bg-dark dark:bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary dark:hover:bg-white dark:hover:text-dark duration-300"
            >
              Voir mon profil Airbnb
            </Link>
          </div>

          {/* L'Image (Badge de confiance) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Effet d'éclat derrière l'image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-white dark:bg-dark p-2 rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                  src="/images/testimonial/RBNB.jpeg" // Assurez-vous que l'image est dans votre dossier public
                  alt="Badge de confiance Airbnb - Coup de cœur voyageurs" 
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
              
              {/* Badge flottant "Vérifié" */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark border border-gray-100 dark:border-white/10 p-4 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                    ★
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Qualité</p>
                    <p className="font-bold text-dark dark:text-white">Profil Vérifié</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirbnbTrustSection;