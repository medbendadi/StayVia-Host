import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

interface Property { 
  name: string
  url: string
  location: string
  price: string
  rating: string
  beds: number
  baths: number
  image: string
  area: number
}

const PropertyCard: React.FC<{ item: Property }> = ({ item }) => {
  const { name, url, location, price, rating, image, beds, baths, area } = item

  return (
    <div className="h-full">
      <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl active:shadow-3xl duration-300 dark:hover:shadow-white/20 dark:active:shadow-white/20 flex flex-col h-full">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-t-2xl relative">
  <Link href={url} target="_blank">
    {image && (
      <Image
        src={image}
        alt={name}
        width={440}
        height={300}
        className="w-full h-[300px] object-cover rounded-t-2xl
        group-hover:brightness-50 group-active:brightness-50
        group-hover:scale-125 group-active:scale-125
        transition duration-300 delay-75"
        unoptimized={true}
      />
    )}
  </Link>

  {/* PRICE – top-left */}
  <div className="absolute bottom-6 right-6 p-2 pr-4 bg-white rounded-full flex items-center">
  <Icon icon="solar:tag-price-linear" width={22} height={22} className="mr-1"/>
  <span className="font-medium text-lg">{price}</span>
</div>

  {/* RATING – top-right */}
  <div className="absolute top-6 right-6 p-2 pr-4 bg-white rounded-full hidden group-hover:flex group-active:flex items-center">
    <Image
      src={'/images/SVGs/star-rate.svg'}
      alt="rate"
      width={25}
      height={25}
      className="block"
      unoptimized={true}
    />
    <span className="font-medium text-lg ml-1">{rating}</span>
  </div>
</div>
        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title + price */}
          <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6">
            <div className="min-h-[64px] flex flex-col justify-between">
              <Link href={url} target="_blank">
                <h3 className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary group-active:text-primary line-clamp-2">
                  {name}
                </h3>
              </Link>
              <p className="text-base font-normal text-black/50 dark:text-white/50">
                {location}
              </p>
            </div>
          </div>

          {/* Bottom info – pinned to bottom */}
          <div className="flex w-full justify-between text-center">
  <div className="flex flex-col items-center gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8 w-full">
    <Icon icon={'solar:bed-linear'} width={20} height={20} />
    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
      {beds} {beds > 1 ? 'Chambres' : 'Chambre'}
    </p>
  </div>

  <div className="flex flex-col items-center gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8 w-full">
    <Icon icon={'solar:bath-linear'} width={20} height={20} />
    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
      {baths} {baths > 1 ? 'Salles de bains' : 'Salle de bain'}
    </p>
  </div>

  <div className="flex flex-col items-center gap-2 pl-2 xs:pl-4 mobile:pl-8 w-full">
    <Icon icon={'lineicons:arrow-all-direction'} width={20} height={20} />
    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
      {area}m<sup>2</sup>
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
