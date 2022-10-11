describe('Home page', () => {
  beforeEach(() => {
    cy.visit("")
  })
  it('show a product carousel', () => {
    cy.url().then((URL) => {
      cy.log(`printing the url: ${URL}`)
      expect(URL).to.contains("https://gravel.co.id/")
    })
    cy.title().then((title)=>{
      cy.log(title)
    })
    //cy.contains('a', 'Karir').click()
  })
  })

  

  

 

 

