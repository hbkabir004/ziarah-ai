export interface Hotel {
    id: number
    name: string
    address: string
    distance: string
    rating: number
    reviews: number
    originalPrice: number
    currentPrice: number
    nights: number
    adults: number
    children: number
    images: string[]
    autoChangeInterval?: number
}

export interface ImageSliderProps {
    images: string[]
    alt: string
    autoChangeInterval?: number
}