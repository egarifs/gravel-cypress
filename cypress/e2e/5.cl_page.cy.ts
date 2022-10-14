describe('Change Language', () => {
    it('Test Case', ()=>{
      cy.visit('https://gravel.co.id')
      cy.contains('ID').click()
      cy.contains('EN').click()
      cy.wait(4000)
      cy.contains('Providing the Best Construction Workers for Your Projects').should('have.text','Providing the Best Construction Workers for Your Projects')    
    })
  })