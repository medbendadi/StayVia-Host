import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page | Property ",
};

const ErrorPage = () => {
  return (
    <>
      <section className="text-center bg-cover relative overflow-x-hidden" >
        <div className='flex gap-2.5 items-center justify-center'>
          <span>
            <Icon
              icon={'ph:house-simple-fill'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
            Error 404
          </p>
        </div>
        <h2 className="text-dark text-52 relative font-bold dark:text-white " >
        Perdu(e) ? Laissez-nous vous aider à trouver un logement.
        </h2>
        <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto">
        Il semblerait que vous soyez dans une impasse, mais ne vous inquiétez pas, nous allons vous aider à reprendre le bon chemin.
        </p>

        <Link href={'/'} className="py-4 px-16 m-auto cursor-pointer bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark active:bg-dark duration-300">
                Cliquer ici !
            </Link>
      </section>
    </>
  );
};

export default ErrorPage;