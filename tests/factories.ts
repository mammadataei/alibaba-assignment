import { fakerFA as faker } from '@faker-js/faker'
import { CommentResource, HotelResource } from '../src/types/resources'
import {
  commentPatterns,
  hotelAmenities,
  hotelLocations,
  hotelPrefixes,
  hotelServices,
  hotelTypes,
  locationAdjectives,
  locationDescriptions,
  negativeIssues,
  negativeStarters,
  positiveQualities,
  positiveStarters,
  recommendations,
  stayDurations,
  suggestions,
  hotelAspects,
  hotelTags,
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
  name: `${faker.helpers.arrayElement(hotelPrefixes)} ${faker.helpers.arrayElement(locationAdjectives)} ${faker.helpers.arrayElement(hotelTypes)}`,
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
  ...data,
})

const commentTextFactory = (rating: number): string => {
  const pattern = faker.helpers.arrayElement(commentPatterns)
  const isPositive = rating >= 3

  const text = pattern
    .replace(
      '{positive}',
      isPositive ? faker.helpers.arrayElement(positiveStarters) : '',
    )
    .replace(
      '{negative}',
      !isPositive ? faker.helpers.arrayElement(negativeStarters) : '',
    )
    .replace('{aspect}', faker.helpers.arrayElement(hotelAspects))
    .replace(
      '{quality}',
      isPositive
        ? faker.helpers.arrayElement(positiveQualities)
        : faker.helpers.arrayElement(negativeIssues),
    )
    .replace(
      '{recommendation}',
      isPositive
        ? faker.helpers.arrayElement(recommendations)
        : faker.helpers.arrayElement(suggestions),
    )
    .replace('{issue}', faker.helpers.arrayElement(negativeIssues))
    .replace('{suggestion}', faker.helpers.arrayElement(suggestions))
    .replace('{duration}', faker.helpers.arrayElement(stayDurations))
    .replace('{location}', faker.helpers.arrayElement(locationDescriptions))

  return text.trim().replace(/\s+/g, ' ')
}

export const commentFactory = (hotelId: string): CommentResource => {
  const rating = parseInt(faker.number.float({ min: 1, max: 5 }).toFixed(0))
  return {
    id: faker.string.uuid(),
    hotel_id: hotelId,
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    text: commentTextFactory(rating),
    rating,
    created_at: faker.date.recent().toISOString(),
  }
}
