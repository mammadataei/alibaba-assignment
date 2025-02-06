import { faker } from '@faker-js/faker'
import { writeFileSync } from 'fs'
import { commentFactory, hotelFactory } from '../tests/factories'

const generateData = () => {
  const hotels = Array.from({ length: 20 }, hotelFactory)
  const comments = hotels.flatMap((hotel) =>
    Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
      commentFactory(hotel.id),
    ),
  )

  const data = {
    hotels,
    comments,
  }

  writeFileSync('./server/db.json', JSON.stringify(data, null, 2))
}

generateData()
