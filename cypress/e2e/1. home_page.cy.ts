describe('Home Page', () => {
  it('Test Case', ()=>{
    //1.1
    cy.visit('https://gravel.co.id')
    cy.get('.next').click()
    cy.contains("LRT Jakarta").should('have.text','LRT Jakarta')
    cy.get('.next').click()
    cy.contains("Jakarta International Stadium").should('have.text','Jakarta International Stadium')
    cy.get('.next').click()
    cy.contains("Golden Anggrek").should('have.text','Golden Anggrek')
    cy.get('.prev').click()
    cy.get('.prev').click()
    cy.get('.prev').click()
    //1.2
    cy.visit('https://gravel.co.id')
    cy.contains('ID').click()
    cy.contains('EN').click()
    cy.wait(4000)
    cy.contains('Providing the Best Construction Workers for Your Projects').should('have.text','Providing the Best Construction Workers for Your Projects')    
  })
})