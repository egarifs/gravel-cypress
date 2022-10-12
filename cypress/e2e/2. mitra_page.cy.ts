describe('Home Page', () => {
  it('Test Case', ()=>{
    //1.1
    cy.visit('https://gravel.co.id')
    cy.contains('Gabung Jadi Mitra').click()

  })
})
