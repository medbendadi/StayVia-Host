import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='to-white/10 dark:to-black/10 overflow-hidden relative'>
        {/* Background image behind the video */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src="/images/hero/frame-001.jpg" // 👉 change to your image path
            alt="Background"
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
        </div>

        {/* Video background covering entire hero section */}
        <div className='absolute inset-0 w-full h-full z-0'>
          <video
            src={'/video/3773486-hd_1920_1080_30fps.mp4'}
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
            style={{ pointerEvents: 'none' }}
            // Optional: also show same image as poster
            poster="/images/hero/video-fallback.jpg"
          />
          <div className='absolute inset-0 bg-black/50' />
        </div>

        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68 relative z-10'>
          <div className='relative text-white text-center md:text-start z-10'>
            <p className='text-inherit text-sm font-medium'>
              Laissez-nous gérer l’ensemble de votre location pour vous garantir confort, rentabilité et sérénité.
            </p>
            <h1 className='text-inherit text-2xl leading-16 sm:text-6xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Gagnez du Temps & <br />Maximisez Vos Profits
            </h1>
            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-4'>
              <Link
                href="/tarifs"
                className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-white hover:bg-transparent hover:text-white dark:active:text-white active:bg-transparent active:text-white text-base font-semibold rounded-full hover:cursor-pointer active:cursor-pointer'
              >
                Demander un audit gratuit
              </Link>
              <Link
                href={'/#Properties'}
                className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white  hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark active:bg-white dark:active:bg-dark dark:active:text-white active:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer active:cursor-pointer'
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        <div className='md:absolute bottom-0 md:-right-72 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[70px] rounded-tl-2xl rounded-tr-2xl  md:rounded-none md:rounded-tl-2xl mt-24 relative z-10'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/call-center.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-call-center.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Support 24h/24
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/house-keys.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-house-keys.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Entrées et sorties
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/maintenance.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-maintenance.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Maintenance
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-2xl sm:text-3xl font-medium text-inherit'>
                +200 DH
              </p>
              <p className='text-sm sm:text-base font-normal text-black/50 dark:text-white/50'>
                A partir de
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
