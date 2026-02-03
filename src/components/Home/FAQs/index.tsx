import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                        Tout savoir sur les logements Stayvia
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                        Nous savons que réserver, gérer ou investir dans un logement peut parfois sembler complexe. Voici une sélection de questions fréquentes pour vous aider à mieux comprendre nos services et simplifier votre expérience avec StayVia Host.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Quels services propose Stayvia Conciergerie ?</AccordionTrigger>
                                    <AccordionContent>
                                    Nous proposons une gestion complète de votre bien, incluant la réservation et l’accueil des invités, le ménage, les check-ins et check-outs, les inspections, la stratégie locative, et bien plus encore. Notre objectif : prendre en charge tous les aspects de votre location courte durée pour maximiser vos revenus tout en vous offrant une expérience sans stress.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Comment Stayvia Conciergerie augmente-t-elle mes revenus locatifs ?</AccordionTrigger>
                                    <AccordionContent>
                                    Nous utilisons des analyses de marché basées sur les données et des stratégies tarifaires optimisées pour maximiser le taux d’occupation et le prix par nuit de votre bien. Notre expertise marketing et nos services professionnels de mise en ligne garantissent que votre propriété attire les bons locataires, vous aidant ainsi à générer plus de revenus.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Quelles zones géographiques couvrez-vous ?</AccordionTrigger>
                                    <AccordionContent>
                                    Nous gérons actuellement des biens à Casablanca, en particulier des appartements et autres options de location courte durée dans la ville. Contactez-nous si vous souhaitez discuter de la gestion de biens dans les environs !
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Qui s’occupe des factures et paiements ?</AccordionTrigger>
                                    <AccordionContent>
                                    Nous prenons en charge toutes les transactions liées à votre propriété et supervisons l’ensemble du processus pour vous offrir une tranquillité totale.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. Puis-je utiliser mon bien quand je le souhaite ?</AccordionTrigger>
                                    <AccordionContent>
                                    Bien sûr ! Vous gardez un contrôle total sur votre calendrier de réservation. Il vous suffit de nous communiquer vos dates préférées, et nous nous assurons que votre bien soit disponible pour votre usage personnel.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>6. Quel est le processus pour rejoindre Stayvia Conciergerie ?</AccordionTrigger>
                                    <AccordionContent>
                                    C’est simple ! Contactez-nous pour une consultation personnalisée. Nous évaluerons votre bien, discuterons de vos besoins, puis vous guiderons pour signer le contrat de gestion. Ensuite, nous nous occupons de tout, de la mise en ligne aux relations avec les locataires.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>7. Quel est le processus pour rejoindre Stayvia Conciergerie ?</AccordionTrigger>
                                    <AccordionContent>
                                    Depuis sa création, Stayvia Conciergerie est un leader de la gestion locative, soutenu par une équipe d’experts et artisans qualifiés. Avec des services intégrés de décoration et d’entretien, nous nous assurons que chaque détail de votre bien est soigneusement pris en charge. Notre engagement à l’excellence se reflète dans notre taux de fidélisation élevé, avec plus de 90 % de clients nous restant fidèles depuis plus de 3 ans. Offrant un support et un service personnalisé de classe mondiale à Casablanca, nous mettons tout en œuvre pour optimiser le succès de votre location.
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

export default FAQ;
