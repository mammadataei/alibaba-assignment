import { fakerFA as faker } from '@faker-js/faker'
import { CommentResource, HotelResource } from '../src/types/resources'
import {
  hotelAmenities,
  hotelLocations,
  hotelServices,
  hotelTags,
  hotelNames,
  commentMessages,
} from './fixtures'

const createHotelDescription = () => {
  const location = faker.helpers.arrayElement(hotelLocations)
  const service = faker.helpers.arrayElement(hotelServices)
  const amenity = faker.helpers.arrayElement(hotelAmenities)
  const extraService = faker.helpers.arrayElement(hotelServices)

  return `${location}. ${service}. ${amenity} در دسترس می‌باشد. ${extraService}.`
}

export const hotelFactory = (data?: Partial<HotelResource>): HotelResource => ({
  id: faker.string.uuid(),
  name: faker.helpers.arrayElement(hotelNames),
  description: createHotelDescription(),
  address: faker.location.street(),
  location: {
    lat: faker.number.float({ min: 35.5952, max: 35.8486, fractionDigits: 4 }),
    long: faker.number.float({ min: 51.2097, max: 51.5765, fractionDigits: 4 }),
  },
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  amenities: faker.helpers.arrayElements(hotelAmenities, { min: 3, max: 8 }),
  tags: faker.helpers.arrayElements(hotelTags, { min: 1, max: 3 }),
  reviews: faker.number.int({ min: 10, max: 500 }),
  price: faker.number.int({ min: 300, max: 1500, multipleOf: 10 }) * 1000, // Updated to Iranian Rials
  images: Array.from(
    { length: 5 },
    () => `/img/0${faker.number.int({ min: 1, max: 10 })}.jpg`,
  ),
  ...data,
})

export const commentFactory = (hotelId: string): CommentResource => {
  const rating = faker.number.int({ min: 1, max: 5 })
  return {
    id: faker.string.uuid(),
    hotel_id: hotelId,
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    text: faker.helpers.arrayElement(commentMessages),
    rating,
    created_at: faker.date.recent().toISOString(),
  }
}
