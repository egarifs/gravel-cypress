describe('App Store', () => {
    it('Test Case', ()=>{
        cy.visit('https://gravel.co.id')
        cy.contains('App Store').click() 
    })
  })