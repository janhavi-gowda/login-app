describe('Login Page Test', () => {

    it('Page Loads Successfully', () => {

        cy.visit('/')

        cy.get('input[type="email"]')
        cy.get('input[type="password"]')
        cy.get('button')

    })

})