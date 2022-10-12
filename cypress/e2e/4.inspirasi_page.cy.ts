describe('Inspirasi Page', () => {
    it('Go to karir page', ()=>{
      //1.1
      cy.visit('https://gravel.co.id')
      cy.contains('Inspirasi').click()
    })
    it('Test Cases', ()=>{
        cy.get('input#outlined-adornment-weight').type('Syarat Urus IMB')
        cy.contains('Syarat Urus IMB, Cara, Biaya dan Waktu Pengurusannya').should('have.text','Syarat Urus IMB, Cara, Biaya dan Waktu Pengurusannya')
        cy.get('input#outlined-adornment-weight').clear()
        cy.get('input#outlined-adornment-weight').type('invalid keyword{enter}')
        cy.contains('Tidak ditemukan hasil pencarian untuk "invalid keyword"" .').should("have.text",'Tidak ditemukan hasil pencarian untuk "invalid keyword"" .')

      })
  })
  