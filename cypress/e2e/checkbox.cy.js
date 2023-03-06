
it.only('flipkart checkbox test', () =>{

    cy.visit('https://www.flipkart.com/')

    //mouseover using trigger
    cy.get("._396cs4[alt='Electronics']").trigger('mouseover')
    //assertion for aove step , after mouseover list is showing or not
    cy.get("._6WOcW9._2-k99T[class$='_6WOcW9 _2-k99T']").should('be.visible')


    cy.xpath("//a[normalize-space()='Laptop and Desktop']").click()

    // below assertion for : on page filters section Laptops text is visible or not

    cy.get('._1jJQdf._2Mji8F').should('be.visible')

   //cy.get('._3BBnX4').should('be.visible')

    // cy.get("._3IxutE").should('be.visible').type('Core i5')
    //cy.get("div[title='Core i9'] div[class='_24_Dny']").check()
    // from processor filter  to selecting availble check box options
    cy.get("._4921Z.t0pPfW[title$='Core i5']").click()
    

})