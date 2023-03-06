///<reference types ="cypress"/>

    
    it.only('test1', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get("._396cs4[alt$='Fashion']").trigger('mouseover')
        cy.wait(4000)
        cy.get('._2-k99T').click()
        cy.wait(4000)
        cy.get("._2SqgSY[title$='T-shirts']").click()
        cy.wait(5000)
        //cy.get("._2SqgSY[title$=`Men's T-shirts`]").click() 
        //here used css selected from selecter hub
        //cy.get(`a[title="Men's T-shirts"]`).click()  
        cy.get(`[title="Men's T-shirts"]`).click()//using cypress locator
        cy.get(':nth-child(7) > ._213eRC > ._2gmUFU').click()
        cy.get('[title="Allen Solly"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        //cy.wait(10000)
        cy.get(':nth-child(7) > ._213eRC > ._2gmUFU').click()
        cy.get('[title="ADIDAS"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        //cy.wait(10000)
       // cy.get("[type='checkbox']").check()
        cy.get('[type="checkbox"]').check({force: true})
       


        
    })

