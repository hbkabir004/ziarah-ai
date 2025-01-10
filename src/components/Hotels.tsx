"use client"

import { Hotel } from "@/types/types";
import HotelCard from "./HotelCard";

const hotels: Hotel[] = [
    {
        id: 1,
        name: "Hotel Golden Palace, Puri",
        address: "VIP Rd, Puri, Odisha-752002",
        distance: "📍 34.32 KM from center",
        rating: 4.5,
        reviews: 23,
        originalPrice: 34440.87,
        currentPrice: 31440.87,
        nights: 3,
        adults: 2,
        children: 2,
        images: ["/hotel01.png", "/hotel02.png", "/hotel01.png"]
    }
]

export default function Hotels() {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 m-8">
            {
                hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)
            }
        </div>
    );
}