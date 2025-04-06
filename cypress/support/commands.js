Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
  })