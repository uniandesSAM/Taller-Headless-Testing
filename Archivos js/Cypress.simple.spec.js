context('Login Tests', () => {

    it('makes a happy login attemp', () => {
        cy.visit('https://habitica.com/login')
		
        cy.get("#usernameInput").type('a.mahecha@gmail.com');
		cy.get('#passwordInput').type('r4e3w2q1');

        cy.get('.btn-info[type="submit"]').click()
      })
})