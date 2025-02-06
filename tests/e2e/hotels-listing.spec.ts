import { hotelFactory } from '../factories'

it('should render hotels list', () => {
  const hotels = Array.from({ length: 3 }, () => hotelFactory())

  cy.intercept('GET', '/api/hotels*', { body: hotels })
  cy.visit('/hotels')

  cy.findByText('هتل های شهر تهران').should('exist')
  cy.get('article')
    .should('have.length', 3)
    .each((hotel, index) => {
      cy.wrap(hotel).within(() => {
        cy.findByText(hotels[index].name).should('exist')
        cy.findByText(hotels[index].tags.join(' · ')).should('exist')
        cy.findByText(hotels[index].rating.toFixed(1)).should('exist')
      })
    })
})

it('should infinite load hotels', () => {
  const hotels = Array.from({ length: 15 }, () => hotelFactory())

  cy.intercept('GET', '/api/hotels*', (req) => {
    const page = Number(req.query._page)
    const start = (page - 1) * 10
    const end = start + 10
    req.reply({ body: hotels.slice(start, end) })
  }).as('getHotels')

  cy.visit('/hotels')
  cy.findByText('هتل های شهر تهران').should('exist')

  cy.wait('@getHotels')
  cy.get('article').should('have.length', 10)

  cy.scrollTo('bottom')

  cy.wait('@getHotels')
  cy.get('article').should('have.length', 15)
})

it('should filter hotels by search query', () => {
  const hotels = [
    hotelFactory({ name: 'هتل پارسیان' }),
    hotelFactory({ name: 'هتل ایران' }),
    hotelFactory({ name: 'هتل هما' }),
  ]

  cy.intercept('GET', '/api/hotels*', (req) => {
    const search = String(req.query.q)
    const filteredHotels = hotels.filter((hotel) => hotel.name.includes(search))
    req.reply({ body: filteredHotels })
  }).as('getHotels')

  cy.visit('/hotels')
  cy.findByText('هتل های شهر تهران').should('exist')

  cy.findByPlaceholderText('جست‌و‌جوی هتل').type('هما')
  cy.wait('@getHotels')

  cy.get('article').should('have.length', 1)
  cy.findByText(hotels[2].name).should('exist')
})

it('should sort hotels by price', () => {
  const hotels = [
    hotelFactory({ price: 1000000 }),
    hotelFactory({ price: 2000000 }),
    hotelFactory({ price: 3000000 }),
  ]

  cy.intercept('GET', '/api/hotels*', (req) => {
    const sort = req.query._sort
    const sortedHotels = hotels.sort((a, b) =>
      sort === 'price_asc' ? a.price - b.price : b.price - a.price,
    )
    req.reply({ body: sortedHotels })
  }).as('getHotels')

  cy.visit('/hotels')
  cy.findByText('هتل های شهر تهران').should('exist')

  cy.findByRole('combobox', { name: 'مرتب‌سازی' }).click()
  cy.findByText('گران‌ترین').click()
  cy.wait('@getHotels')

  const orderedByPriceDesc = hotels.sort((a, b) => b.price - a.price)

  cy.get('article').each((hotel, index) => {
    cy.wrap(hotel).within(() => {
      cy.findByText(orderedByPriceDesc[index].name).should('exist')
    })
  })
})

it('should filter hotels by rating', () => {
  const hotels = [
    hotelFactory({ rating: 4.5 }),
    hotelFactory({ rating: 3.5 }),
    hotelFactory({ rating: 2.5 }),
  ]

  cy.intercept('GET', '/api/hotels*', (req) => {
    const rating = req.query.rating_gte
    const filteredHotels = hotels.filter(
      (hotel) => hotel.rating >= Number(rating),
    )
    req.reply({ body: filteredHotels })
  }).as('getHotels')

  cy.visit('/hotels')
  cy.findByText('هتل های شهر تهران').should('exist')

  cy.findByRole('combobox', { name: 'امتیاز' }).click()
  cy.findByRole('option', { name: /خیلی خوب/ }).click()
  cy.wait('@getHotels')

  cy.get('article').should('have.length', 2)
  cy.findByText(hotels[0].name).should('exist')
  cy.findByText(hotels[1].name).should('exist')
  cy.findByText(hotels[2].name).should('not.exist')
})
