// components/BookingForm.tsx
"use client";

import React, { useMemo, useState } from "react";
import { format, differenceInCalendarDays } from "date-fns";
import { CalendarIcon, User, Search, ChevronDown } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Icon } from "@iconify/react";


import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import Example from "../ui/dataPicker";
import Image from "next/image";
import PropertyCard from "../Home/Properties/Card/Card";


const uploadedImage = "sandbox:/mnt/data/c554d17d-32e4-4515-88b3-af9bb6f17621.png";
interface CardProp {
    name: string,
      url: string,
      location: string,
      price: string,
      rating: string,
      beds: number,
      baths: number,
      area: number,
      image: string
}
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
      beds: 3,
      baths: 1,
      area: 190,
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
    },
    {
        name: 'Studio moderne et calme',
        url: 'https://www.airbnb.fr/rooms/1543443156241086428',
        location: 'Casablanca, Maroc',
        price: 'Soon',
        rating: '5.0',
        beds: 3,
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
        beds: 2,
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
        beds: 2,
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
        beds: 2,
        baths: 1,
        area: 190,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543443156241086428/original/6eb68a28-bd68-4904-b601-15c3662fb688.jpeg?im_w=1200'
      },
  ]
function DateRangePicker({
  value,
  onChange,
}: {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}) {
  const nights = useMemo(() => {
    if (!value?.from || !value?.to) return 0;
    return Math.max(0, differenceInCalendarDays(value.to, value.from));
  }, [value]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-full flex items-center gap-3 border-[1.5px] border-black/80 dark:border-white/80 rounded-2xl px-4 py-5 text-sm text-left bg-white dark:bg-black shadow-sm",
            !value && "text-muted-foreground"
          )}
          aria-label="Choose dates"
        >
          <CalendarIcon className="h-5 w-5" />
          <div className="truncate">
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, yyyy")} - {format(value.to, "LLL dd, yyyy")}
                </>
              ) : (
                format(value.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Check-in → Check-out</span>
            )}
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        side="bottom"
        sideOffset={12}
        className="w-[760px] max-w-full p-0 rounded-xl shadow-lg z-50 overflow-hidden border border-gray-200 bg-white dark:bg-black"
      >
        <div className="px-6 pt-6 pb-0">
          <div className="rounded-lg overflow-hidden text-black dark:text-white">
            <Calendar
              mode="range"
              numberOfMonths={2}
              selected={value}
              onSelect={(range) => onChange(range)}
              disabled={{ before: today }}
            />
          </div>
        </div>

        <div className="border-t border-gray-200" />

        <div className="px-6 py-4 text-center">
          {value?.from && value?.to ? (
            <div className="text-sm">
              <span className="font-medium">
                {format(value.from, "MM/dd/yyyy")} - {format(value.to, "MM/dd/yyyy")}
              </span>
              <span className="text-muted-foreground"> ({nights} {nights === 1 ? "night" : "nights"})</span>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">Select check-in and check-out dates to see availability and prices.</div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function BookingForm({
  onSearch,
}: {
  onSearch?: (payload: { from?: string; to?: string; adults: number; children: number }) => void;
}) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [guestsOpen, setGuestsOpen] = useState<boolean>(false);
  const [fillterdProperties, setFillterdProperties] = useState<CardProp[]>([])
  const totalGuests = adults + children;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const payload = {
      from: dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : undefined,
      to: dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : undefined,
      adults,
      children,
    };

    const X = properties.filter((e) => e.beds == payload.adults + payload.children)
  setFillterdProperties(X)  

    if (onSearch) onSearch(payload);
    else console.log("Booking search payload:", payload);
  }

  return (
    <section className="w-full bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute right-0 z-0 pointer-events-none">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div
        className="h-44 md:h-56 bg-cover bg-center rounded-b-xl"
        style={{
          backgroundImage: `url("${uploadedImage}")`,
          filter: "brightness(0.97)",
        }}
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto -mt-10 px-4 md:px-6">
      <p className="text-dark/75 dark:text-white/75 text-base justify-center font-semibold flex gap-2">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary "
              />
              Traveler
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] text-center font-medium text-dark dark:text-white">
            Prêt ?
            </h2>
        <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-black p-5 rounded-3xl">
          <div className="bg-white dark:bg-black rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 md:flex-[0_0_45%]">
              {/* <Example/> */}
                <DateRangePicker value={dateRange} onChange={setDateRange} />
              </div>

              <div className="flex-1 md:flex-[0_0_35%]">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setGuestsOpen((s) => !s)}
                    className="w-full flex items-center justify-between gap-3 border-[1.5px] border-black/80 dark:border-white/80 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-black"
                    aria-expanded={guestsOpen}
                  >
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Guests</div>
                        <div className="text-sm font-medium">{totalGuests} guests</div>
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {guestsOpen && (
                    <div className="absolute left-0 right-0 z-30 mt-3 rounded-xl border border-gray-200 bg-white dark:bg-black p-4 shadow-lg" role="dialog">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-sm font-medium">Adults</div>
                          <div className="text-xs text-muted-foreground">Ages 13+</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setAdults((a) => Math.max(1, a - 1))}
                            className="h-8 w-8 grid place-items-center rounded-md border"
                            aria-label="Decrease adults"
                          >
                            −
                          </button>
                          <div className="w-6 text-center">{adults}</div>
                          <button
                            type="button"
                            onClick={() => setAdults((a) => a + 1)}
                            className="h-8 w-8 grid place-items-center rounded-md border"
                            aria-label="Increase adults"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">Children</div>
                          <div className="text-xs text-muted-foreground">Ages 2–12</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setChildren((c) => Math.max(0, c - 1))}
                            className="h-8 w-8 grid place-items-center rounded-md border"
                            aria-label="Decrease children"
                          >
                            −
                          </button>
                          <div className="w-6 text-center">{children}</div>
                          <button
                            type="button"
                            onClick={() => setChildren((c) => c + 1)}
                            className="h-8 w-8 grid place-items-center rounded-md border"
                            aria-label="Increase children"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button type="button" onClick={() => setGuestsOpen(false)} className="px-3 py-1 rounded-md text-sm">
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex-[0_0_14%] w-full md:w-auto">
                <button
                  type="submit"
                //   onClick={handleSubmit}
                  className="w-full md:w-40 h-12 rounded-2xl flex items-center cursor-pointer justify-center gap-2 px-6 py-2 text-sm font-semibold shadow hover:shadow-md"
                  style={{ backgroundColor: "#F6C33B", color: "#0b0b0b" }}
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>

        <p className="text-xs text-muted-foreground mt-4 text-center">
        Sélectionnez vos dates d'arrivée et de départ pour consulter les disponibilités et les prix.
        </p>

{
    fillterdProperties ? (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-8'>
        {fillterdProperties.map((item, index) => (
          <div key={index} className=''>
            <PropertyCard item={item} />
          </div>
        ))}
      </div>
  ) : null
}

      </div>

      {/* calendar styling fix: start/end yellow, middle black solid background for each day in range */}
      <style jsx global>{`
        .rdp { font-family: inherit; }
        .rdp-month { padding: 10px 18px 18px 18px; }
        .rdp-months { display: flex; gap: 24px; justify-content: space-between; align-items: flex-start; }
        .rdp-nav { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
        .rdp-nav button { background: transparent; border: none; padding: 8px; border-radius: 8px; cursor: pointer; }
        .rdp-weekday { color: rgba(0,0,0,0.6); font-size: 12px; font-weight: 500; padding-bottom: 6px; }

        .rdp-day {
          width: 36px;
          height: 36px;
          display: inline-grid;
          place-items: center;
          border-radius: 6px;
          margin: 6px 4px;
          font-weight: 500;
          color: inherit;
          position: relative;
          overflow: visible;
        }

        .rdp-day.rdp-day_outside { color: rgba(0,0,0,0.22); }

        /* single selected day (while selecting) */
        .rdp-day_selected {
          background: #f6c33b;
          color: #111827;
          border-radius: 8px;
        }

        /* ensure the range classes are above background */
        .rdp-day_range_middle,
        .rdp-day_range_start,
        .rdp-day_range_end {
          position: relative;
          z-index: 1;
        }

        /* === NEW: set solid backgrounds for each day in the range === */
        /* middle days: solid black background + white text */
        .rdp-day_range_middle {
          background: #0b0b0b !important;
          color: #fff !important;
          border-radius: 0 !important; /* square-ish so adjacent days appear continuous */
        }

        /* start day: yellow background with left rounded corners */
        .rdp-day_range_start {
          background: #f6c33b !important;
          color: #111827 !important;
          border-top-left-radius: 8px !important;
          border-bottom-left-radius: 8px !important;
        }

        /* end day: yellow background with right rounded corners */
        .rdp-day_range_end {
          background: #f6c33b !important;
          color: #111827 !important;
          border-top-right-radius: 8px !important;
          border-bottom-right-radius: 8px !important;
        }

        /* hover */
        .rdp-day:hover { background: rgba(246,195,59,0.08); }

        /* disabled (past) */
        .rdp-day_disabled {
          color: rgba(0,0,0,0.18) !important;
          pointer-events: none;
          opacity: 0.6;
        }

        .rdp { border-radius: 12px; }

        @media (max-width: 720px) {
          .rdp-months { flex-direction: column; }
          .rdp-day { width: 34px; height: 34px; }
        }
      `}</style>
    </section>
  );
}
