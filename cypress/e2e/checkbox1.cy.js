it.only('flipkart checkbox test', () =>{

    cy.visit('https://www.flipkart.com/')

    //mouseover using trigger
    cy.get("._396cs4[alt='Electronics']").trigger('mouseover')

    cy.wait(3000)
    
    //assertion for aove step , after mouseover list is showing 'Laptop and desktop' option or not or not
    cy.get("._6WOcW9._2-k99T[class$='_6WOcW9 _2-k99T']").should('be.visible')

    cy.wait(3000)
    
    // Clicking on 'Laptop and destop' option from list
    cy.xpath("//a[normalize-space()='Laptop and Desktop']").click()

    cy.wait(3000)

    cy.get('._10Ermr').should('be.visible')

    //below command will selects available checkboxes which are in type= checkbox
    
    cy.get("._1KOcBL[class$='_1KOcBL']").find('[type="checkbox"]').check({force: true})
     
    //cy.get("._4921Z[title$='Snapdragon 7c Gen 2']").click()

    //below command to click on More options in processor type
    cy.get('[title="Core i7"] > ._1Y4Vhm > ._2iDkf8 > ._3879cV').click()
    //cy.get(".THxusM._3yuvK8").click()
    cy.wait(3000)

    cy.get('[title="Core i5"] > ._1Y4Vhm > ._2iDkf8').click()
    
    
    //cy.get('[title="APPLE"] > ._1Y4Vhm > ._2iDkf8').should('be.visible')

    //to select Type options, click on Type 
    cy.get(':nth-child(12) > ._213eRC').click()
     //to select any one option from Type
    cy.get("._4921Z.t0pPfW[title$='Thin and Light Laptop']").click()
     
     

    //to expand tne filter tab, clcik on show more options
    cy.get('._2vLW0p > ._2w_U27 > span').click()
    
    
})