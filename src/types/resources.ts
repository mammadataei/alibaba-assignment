export interface HotelResource {
  id: string
  name: string
  description: string
  location: {
    lat: number
    long: number
  }
  rating: number
  tags: string[]
  amenities: string[]
  reviews: number
  price: number
}

export interface CommentResource {
  id: string
  hotelId: string
  name: string
  text: string
  rating: number
}
