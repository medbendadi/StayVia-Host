"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface WhatsAppButtonProps {
  phoneNumber: string; // Format: 212600000000
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Bonjour, j'aimerais avoir plus d'informations." 
}: WhatsAppButtonProps) => {
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Bulle "Need Help?" */}
      <div className="mr-3 bg-white text-dark px-4 py-2 rounded-xl shadow-lg text-sm font-medium 
                      opacity-0 -translate-x-2 transition-all duration-300 
                      group-hover:opacity-100 group-hover:translate-x-0
                      md:opacity-100 md:translate-x-0">
        Need Help?
      </div>

      {/* Bouton Icône */}
      <div className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <Icon 
          icon="ic:baseline-whatsapp" 
          className="text-white text-4xl" 
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;