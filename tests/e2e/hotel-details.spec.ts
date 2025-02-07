import { commentFactory, hotelFactory } from '../factories'

it('should render hotel details correctly', () => {
  const hotel = hotelFactory()

  cy.intercept('GET', '/api/hotels/*', { body: hotel }).as('getHotel')
  cy.visit(`/hotels/${hotel.id}`)

  cy.wait('@getHotel')

  cy.findByText(hotel.name).should('exist')
  cy.findByText(new RegExp(hotel.address)).should('exist')
})

it('load infinite load comments', () => {
  const hotel = hotelFactory()
  const comments = Array.from({ length: 20 }, () => commentFactory(hotel.id))

  cy.intercept('GET', '/api/hotels/*', { body: hotel }).as('getHotel')
  cy.intercept('GET', `/api/comments*`, (req) => {
    const page = Number(req.query._page)
    const start = (page - 1) * 5
    const end = start + 5
    req.reply({ body: comments.slice(start, end) })
  }).as('getComments')

  cy.visit(`/hotels/${hotel.id}`)
  cy.wait('@getHotel')
  cy.wait('@getComments')

  cy.scrollTo('bottom')
  cy.get('[data-testid=comment]').should('have.length', 5)

  cy.findByText('مشاهده نظرات بیشتر').click()
  cy.wait('@getComments')
  cy.get('[data-testid=comment]').should('have.length', 10)

  cy.scrollTo('bottom')
  cy.findByText('مشاهده نظرات بیشتر').click()
  cy.wait('@getComments')

  cy.get('[data-testid=comment]').should('have.length', 15)
})
