import { Icon } from '@iconify/react'
import PropertyCard from './Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes'


const properties = [
  {
    name: 'Studio moderne et calme',
    url: 'https://www.airbnb.fr/rooms/1543443156241086428',
    location: 'Casablanca, Maroc',
    price: 'Soon',
    rating: '5.0',
    beds: 1,
    baths: 1,
    area: 120,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
  },
  {
    name: 'Studio moderne et calme',
    url: 'https://www.airbnb.fr/rooms/1543443156241086428',
    location: 'Casablanca, Maroc',
    price: 'Soon',
    rating: '5.0',
    beds: 1,
    baths: 1,
    area: 130,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
  },
  {
    name: 'Studio moderne et calme',
    url: 'https://www.airbnb.fr/rooms/1543443156241086428',
    location: 'Casablanca, Maroc',
    price: 'Soon',
    rating: '5.0',
    beds: 1,
    baths: 1,
    area: 150,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
  },
  {
    name: 'Studio moderne et calme',
    url: 'https://www.airbnb.fr/rooms/1543443156241086428',
    location: 'Casablanca, Maroc',
    price: 'Soon',
    rating: '5.0',
    beds: 1,
    baths: 1,
    area: 190,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
  },
]
const Properties: React.FC = () => {
  return (
    <section id='Properties'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3 '>
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
              Propriétés
            </p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
            Découvrez Nos Propriétés.
          </h2>
          <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
            Trouvez le logement idéal parmi notre sélection de biens soigneusement gérés et prêts à accueillir vos voyageurs.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {properties.slice(0, 3).map((item, index) => (
            <div key={index} className=''>
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
        
      <button className="py-4 px-16 m-auto cursor-pointer bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
          Découvrez
      </button>
      </div>
      
    </section>
  )
}

export default Properties
