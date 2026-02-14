import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        {/* Top CTA + links */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8">
            {/* CTA */}
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-32 sm:text-40 font-medium mb-6 md:max-w-3/4 text-center md:text-left">
                Rejoignez-nous pour optimiser vos revenus locatifs.
              </h2>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/contactus"
                  className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white active:bg-white hover:text-dark active:text-dark duration-300 hover:cursor-pointer"
                >
                  Rejoindre StayVia
                </Link>
              </div>
            </div>

            {/* Links column 1 */}
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-3 sm:items-start items-center">
                {FooterLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white/60 text-md hover:text-white active:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social links column (pills) */}
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-3 sm:items-start items-center">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/stay.viahost"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm text-white hover:bg-white hover:text-dark transition-colors duration-300"
                >
                  <Icon icon="ph:instagram-logo-bold" width={18} height={18} />
                  <span>@stay.viahost</span>
                </Link>

                {/* WhatsApp MA */}
                <Link
                  href="https://wa.me/212634596499"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm text-white hover:bg-white hover:text-dark transition-colors duration-300"
                >
                  <Icon icon="ic:baseline-whatsapp" width={18} height={18} />
                  <span>+212 610 999 299</span>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/stayvia-host-910a1b3a0/" // <-- Change to your real LinkedIn page
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm text-white hover:bg-white hover:text-dark transition-colors duration-300"
                >
                  <Icon icon="ri:linkedin-fill" width={18} height={18} />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="flex justify-between items-center py-6 gap-4 flex-wrap">
          <p className="text-white/40 text-sm">
            ©2025 StayVia | Tous droits réservés
          </p>
          <div className="flex gap-6 items-center flex-wrap">
            <Link
              href="#"
              className="text-white/40 hover:text-primary active:text-primary text-sm"
            >
              Terms of service
            </Link>
            <Link
              href="#"
              className="text-white/40 hover:text-primary active:text-primary text-sm"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
