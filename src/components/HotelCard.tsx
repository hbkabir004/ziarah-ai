import { Hotel } from '@/types/types'
import { ExternalLink, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ImageSlider from './ImageSlider'
import SwimmingPoolIcon from './icons/SwimmingPoolIcon'
import ThumbsupIcon from './icons/ThumbsupIcon'
import WifiIcon from './icons/WifiIcon'

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden">
        <div className="relative">
          <ImageSlider images={hotel.images} alt={hotel.name} autoChangeInterval={hotel.autoChangeInterval} />
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-gray-800/50 p-2.5 backdrop-blur-sm"
            aria-label="Add to favorites"
          >
            <Heart className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-bold">{hotel.name}</h2>
              <div className="flex mt-1 ml-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 mx-1 fill-orange-400 text-orange-400" />
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <span>{hotel.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>{hotel.distance}</span>
              </div>
              <Link
                href="#"
                className="flex items-center gap-2 text-blue-600 font-semibold"
              >
                View property in map
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="text-sm flex justify-start py-2 space-x-1">
            <div className="flex items-center mr-2">
              <WifiIcon />
              <span>Free Wifi</span>
            </div>
            <div className="flex items-center mr-2">
              <SwimmingPoolIcon />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center mr-2">
              <Image
                src="/Frame.svg"
                width={24}
                height={24}
                alt='Frame'
              />
              <span>City View</span>
            </div>
          </div>

          <div className="inline-flex items-start gap-2 bg-[#f4f4f4] p-2 rounded-lg">
            <div className="flex items-center gap-1">
              <ThumbsupIcon/>
              <span className="font-semibold">{hotel.rating}</span>
            </div>
            <span className="text-gray-600">({hotel.reviews} Reviews)</span>
          </div>

          <div className="flex items-center justify-between border-dashed border-t-2 border-black pt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-blue-600">₹{hotel.currentPrice.toFixed(2)}</span>
              <span className="text-gray-600 font-semibold">/ {hotel.nights} nights</span>
            </div>
            <button className="font-medium text-md rounded-lg border-2 border-blue-600 p-2 text-blue-600 hover:bg-blue-600 hover:text-white">
              Choose Room
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col gap-4 lg:flex-row lg:items-start p-4">
        <div className="relative w-full lg:w-1/3">
          <ImageSlider images={hotel.images} alt={hotel.name} autoChangeInterval={hotel.autoChangeInterval} />
          <button className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 backdrop-blur-sm">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{hotel.name}</h2>
                <div className="flex mt-1 ml-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 mx-1 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{hotel.address}</p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-1 text-blue-600 font-semibold"
                >
                  View property in map
                  <ExternalLink className="ml-1 mt-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <span className="flex items-center gap-1 text-gray-600">
                  {hotel.distance}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <WifiIcon />
                <span>Free Wifi</span>
              </div>
              <div className="flex items-center gap-1">
                <SwimmingPoolIcon />
                <span>Swimming Pool</span>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/Frame.svg"
                  width={24}
                  height={24}
                  alt='Frame'
                />
                <span>City View</span>
              </div>
            </div>


            <div className="inline-flex items-center gap-2 bg-[#f4f4f4] p-2 rounded-lg">
              <div className=" flex items-center gap-1">
                <ThumbsupIcon/>
                <span className="font-semibold">{hotel.rating}</span>
              </div>
              <span className="text-gray-600">({hotel.reviews} Reviews)</span>
            </div>
          </div>

          <div className="relative flex flex-col items-end gap-2">
            <div className="h-screen absolute inset-y-0 lg:-left-4 md:-left-2 -top-10 border-l-2 border-dashed border-[#626262]"></div>
            <div className="flex gap-2">
              <span className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-600">Best</span>
              <span className="rounded bg-orange-100 px-3 py-1 text-sm text-orange-600">Cheapest</span>
            </div>
            <div className="text-right space-y-4">
              <div className="flex items-center justify-end gap-2">
                <span className="text-2xl font-bold text-blue-600">₹{hotel.currentPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-600">Includes Taxes & Charges</p>
              <div className="mt-2 space-y-1 text-right text-sm text-gray-600">
                <p>{hotel.nights} nights</p>
                <p>{hotel.adults} Adult, {hotel.children} Child</p>
              </div>
            </div>
            <button className="mt-4 font-semibold rounded-lg border-2 border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
              Choose Room
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

