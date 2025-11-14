import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";
import Tarifs from "@/components/Tarifs";
export const metadata: Metadata = {
    title: "Nos Tarifs | STAY VIA",
};



const page = () => {
    return (
        <>
            <HeroSub
                title="Nos Tarifs."
                description="Selon vos besoins, nous personnalisons une offre qui y correspond, tout en vous proposant les prix les plus bas du marché pour la même qualité."
                badge="Tarifs"
            />
            <Tarifs />
        </>
    );
};

export default page;