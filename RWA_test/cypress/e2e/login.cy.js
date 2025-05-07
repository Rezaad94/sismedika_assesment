describe('Login Page', () => {
  it('Should has correct title', () => {
    cy.fixture('data.json').then((data) => {
      cy.visit(data.url)
      cy.get("h1").contains("Sign in")
    })
  })

  it("Should display login errors if not input user name and password", () => {
    cy.fixture('data.json').then((data) => {
      cy.visit(data.url)

      cy.get('[data-test="signin-submit"]').click()
  
      cy.get("#username")
        .should("be.visible")
      cy.get("#username-helper-text")
        .contains("Username is required")

      cy.get("#password")
        .should("be.visible")
        .type(data.incompletePassword)
      cy.get("#password-helper-text")
        .contains("Password must contain at least 4 characters")
    })  
  })

  it ("Should display error if input invalid credential", () => {
    cy.fixture('data.json').then((data) => {
      cy.visit(data.url)

      cy.get("#username")
        .type(data.username)
      cy.get("#password")
        .type(data.wrongPassword)

      cy.get('[data-test="signin-submit"]').click()
    
      cy.get('[data-test="signin-error"]')
        .contains("Username or password is invalid")
    })
  })

  it ("Should abel to login with valid credential", () => {
    cy.fixture('data.json').then((data) => {
      cy.visit(data.url)

      cy.get("#username")
        .type(data.username)
      cy.get("#password")
        .type(data.correctPassword)

      cy.get('[data-test="signin-submit"]').click()
    
      cy.get('[data-test="sidenav"]')
        .should("be.visible")
        .contains(data.username)
    
      cy.get('[data-test="nav-transaction-tabs"]')
        .should("be.visible")
    })
  })
})