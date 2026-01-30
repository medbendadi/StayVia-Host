import Link from "next/link";
import Plan from "./Plans";

const Tarifs: React.FC = () => {
  const tarifs = [
    {
      title: "Pack Ménage",
      subtitle: "Service de ménage professionnel sur mesure",
      price: "Tarif personnalisé après évaluation du logement",
      type: "Normal",
      features: [
        "Service de ménage professionnel sur mesure",
        "Standards hôteliers appliqués à chaque intervention",
        "Équipements et produits professionnels",
        "Supervision et contrôle qualité par notre gouvernante",
        "Reporting visuel avec photos datées",
        "Gestion complète de la blanchisserie"
      ]
    },
    {
      title: 'Pack Premium',
      subtitle: 'Gestion complète de vos annonces en ligne',
      price: '25% des revenues locatifs TTC',
      type: 'Pro',
      features: [
        "Pack Ménage inclus",
        "Pack Virtuel inclus",
        "Diffusion et pilotage de l’annonce sur les plateformes dédiées",
        "Photos professionnelles & valorisation du bien",
        "Marketing, visibilité et optimisation des réservations",
        "Check-in / Check-out & expérience voyageur",
        "Service client dédié (24/7 – virtuel & sur place)",
        "Accompagnement juridique & conformité réglementaire",
        "Assurances",
        "Protection et gestion des incidents",
        "Support expert Airbnb & Booking.com",
        "Guide d’accueil & kit de bienvenue",
        "Reporting mensuel de votre activité"
      ]
    },
    {
      title: 'Pack Virtuel',
      subtitle: 'Service complet de base pour votre location',
      price: '20% des revenues locatifs TTC',
      type: 'Normal',
      features: [
        "Création et diffusion de l’annonce",
        "Marketing, visibilité et publicité ciblée",
        "Stratégie de prix dynamique et optimisation des revenus",
        "Communication voyageurs",
        "Centralisation et synchronisation du calendrier",
        "Digitalisation des documents réglementaires",
        "Coordination avec le service de ménage"
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
        <div className="rounded-2xl border px-6 py-8 flex flex-col md:flex-row items-start gap-6 bg-black/90 text-white border-black/10 shadow-[0_0_10px_rgba(0,0,0,0.5)] duration-300 hover:shadow-3xl active:shadow-3xl bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.25)]">
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
            <Link  href='/contactus' className="py-5 px-[6rem] bg-primary text-base leading-4 block text-white rounded-full font-semibold mt-8 hover:bg-dark active:bg-dark duration-300">
                Contact
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tarifs;
