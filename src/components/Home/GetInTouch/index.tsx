import Link from "next/link";

const GetInTouch: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        
        {/* HERO */}
        <div className="relative rounded-t-2xl overflow-hidden min-h-[420px] md:min-h-[520px] lg:min-h-[650px]">
          
          {/* VIDEO */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video background showing luxurious real estate"
          >
            <source
              src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center px-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
              <h2 className="text-white text-2xl sm:text-3xl md:text-40 lg:text-52 font-medium leading-tight">
                Rejoignez-nous pour optimiser vos revenus locatifs tout en
                profitant sereinement de votre temps.
              </h2>

              <Link
                href="/contactus"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
              >
                Tester mon logement
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM TICKER */}
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-24 animate-slide whitespace-nowrap px-4">
              
              <TickerItem text="Maximisez vos revenus" />
              <TickerItem text="Gagnez du temps" />
              <TickerItem text="Entretien et ménage" />
              <TickerItem text="Rentabilité améliorée" />
              <TickerItem text="Maximisez vos revenus" />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ---------------------------------- */
/* TICKER ITEM                        */
/* ---------------------------------- */

const TickerItem = ({ text }: { text: string }) => (
  <p className="text-white relative after:absolute after:w-16 after:h-px after:bg-white after:top-3 after:-right-20">
    {text}
  </p>
);

export default GetInTouch;
