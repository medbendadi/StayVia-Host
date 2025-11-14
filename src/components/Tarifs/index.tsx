import Link from "next/link";
import Plan from "./Plans";

const Tarifs: React.FC = () => {
  const tarifs = [
    {
      title: 'Pack Ménage',
      subtitle: 'Ménage professionnel effectué par notre agence',
      price: '200 MAD',
      type: 'Basic',
      features: [
        "Ménage de Qualité Hotelière",
        "Matériel professionnel",
        "Contrôle qualité par la gouvernante",
        "Prise de Photos datées après chaque ménage",
        "Blanchisserie"
      ]
    },
    {
      title: 'Pack Premium',
      subtitle: 'Gestion complète de vos annonces en ligne',
      price: '18% des revenues locatifs TTC',
      type: 'Pro',
      features: [
        "Pack Ménage Inclus",
        "Pack Virtuel Inclus",
        "Accompagnement juridique",
        "Prise de Photos Pro",
        "Création et Publication De l’annonce",
        "Marketing et Publicité",
        "Check-in / Check-out",
        "Service Client Voyageur virtuel et physique",
        "Assurances et Dédommagements",
        "Expertise avec le Support Airbnb/ Booking.com",
        "Guide d’accueil et cadeau de bienvenue",
        "Fiches de Police et contrat de location (20%)"
      ]
    },
    {
      title: 'Pack Virtuel',
      subtitle: 'Service complet de base pour votre location',
      price: '12% des revenues locatifs TTC',
      type: 'Normal',
      features: [
        "Création et publication de l’annonce",
        "Marketing et publicité",
        "Stratégies de prix",
        "Communication virtuelle avec les voyageurs",
        "Expertise sur les plateformes Airbnb/Booking",
        "Suppression des commentaires négatifs",
        "Centralisation du calendrier",
        "Digitalisation des fiches de police et des contrats de location",
        "Coordination avec votre système de ménage."
      ]
    }
  ];

  // Custom offer plan
  const customOffer = {
    title: 'Offre Sur Mesure',
    subtitle: 'Nous personnalisons une offre selon vos besoins',
    price: 'Contactez-nous',
    type: 'Normal',
    features: [
      'Choisissez les services que vous souhaitez inclure',
      'Tarification adaptée à votre bien',
      'Support complet et flexible'
    ]
  };

  return (
    <section className="pt-12">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Standard Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-[5.5rem]">
          {tarifs.map((item, index) => (
            <Plan key={index} item={item} />
          ))}
        </div>

        {/* Custom Offer - Horizontal Layout */}
        <div className="rounded-2xl border px-6 py-8 flex flex-col md:flex-row items-start gap-6 bg-black/90 text-white border-black/10 shadow-[0_0_10px_rgba(0,0,0,0.5)] duration-300 hover:shadow-3xl bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.25)]">
          {/* Left side: Title + Subtitle + Price */}
          <div className="md:w-1/3">
            <h2 className="font-medium text-3xl mb-4">{customOffer.title}</h2>
            <p className="text-white mb-6">{customOffer.subtitle}</p>
          </div>

          {/* Right side: Features List */}
          <ul className="md:w-1/3 space-y-3">
            {customOffer.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="mt-0.5 flex-shrink-0 rounded-full p-1 bg-primary">
                  <img
                    src="/images/SVGs/check-ring-round.svg"
                    alt="check"
                    className="w-5 h-5"
                  />
                </div>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-end w-full md:w-1/3">
            <Link  href='/contactus' className="py-5 px-[6rem] bg-primary text-base leading-4 block text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
                Contact
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tarifs;
