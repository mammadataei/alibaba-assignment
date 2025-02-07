export interface HotelResource {
  id: string
  name: string
  description: string
  address: string
  location: {
    lat: number
    long: number
  }
  rating: number
  tags: string[]
  amenities: string[]
  reviews: number
  price: number
  images: string[]
}

export interface CommentResource {
  id: string
  hotel_id: string
  name: string
  text: string
  rating: number
  created_at: string
}
