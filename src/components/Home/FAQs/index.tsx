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
                                    <AccordionTrigger>1. Que se passe-t-il si je ne suis pas satisfait du service de conciergerie ?</AccordionTrigger>
                                    <AccordionContent>
                                    Votre satisfaction est notre priorité. Nous ajustons nos services en fonction de vos retours et vous pouvez mettre fin au contrat à tout moment si vous estimez que nos prestations ne répondent pas à vos attentes.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Comment vais-je suivre les performances de mon logement ?</AccordionTrigger>
                                    <AccordionContent>
                                    Chaque mois, nous vous envoyons un audit complet incluant les nuits réservées, le taux d’occupation, les revenus générés, et tout autre indicateur clé pour que vous puissiez suivre l’évolution de la gestion en toute transparence.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Est-ce que je vais toujours pouvoir utiliser mon logement pour moi-même ?</AccordionTrigger>
                                    <AccordionContent>
                                    Oui, vous pouvez bloquer les dates de votre choix dans le calendrier de réservation. Vous conservez la possibilité de profiter de votre bien quand vous le souhaitez.
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
