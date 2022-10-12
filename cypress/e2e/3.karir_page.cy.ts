describe('Karir Page', () => {
    it('Go to karir page', ()=>{
      //1.1
      cy.visit('https://gravel.co.id')
      cy.contains('Karir').click()
    })
    it('Test Cases', ()=>{
        //1.1
        cy.visit('https://careers.smartrecruiters.com/gravel')
       //video
        cy.get('.video-caret').click()
        cy.wait(4000)
        cy.contains('×').click()
        cy.wait(4000)
        //checkbox
        cy.get('input#remoteLocationFilter').click()
        cy.contains('Senior QA Engineer (Automation)Jakarta, Indonesia').should('have.text','Senior QA Engineer (Automation)Jakarta, Indonesia')
        cy.wait(4000)       
        cy.get('input#remoteLocationFilter').click()
        //search field valid
        cy.get('input#st-search-input').type('QA')
        cy.contains('QA Engineer (Automation)Jakarta, Indonesia').should('have.text','QA Engineer (Automation)Jakarta, Indonesia')
        //search field invalid
        cy.get('input#st-search-input').clear()
        cy.get('input#st-search-input').type('not found')
        cy.contains('No jobs found matching your search criteria').should('have.text','No jobs found matching your search criteria')
        cy.get('input#st-search-input').clear()
        cy.wait(6000)       
        cy.contains('Get in touch!').click()

      })
  })
  