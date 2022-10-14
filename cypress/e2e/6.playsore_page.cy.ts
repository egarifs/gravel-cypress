describe('Play Store', () => {
    it('Test Case', ()=>{
        cy.visit('https://gravel.co.id')
        cy.get('.button-download').click() 
    })
  })