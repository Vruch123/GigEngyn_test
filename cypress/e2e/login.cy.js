
///<reference types ="cypress"/>

import Login from "../PageObject/loginpom.cy.js"
//using pom
it.only('LoginTest', ()=>{
    cy.visit('http://d2y1vaaxwsf67t.cloudfront.net')
    cy.get('.d-flex > :nth-child(2) > span').click()
    const ln=new Login()
    ln.setUserId("gigengyn9@yopmail.com")
    ln.setPasswodr("P@55w0rd@111")
    ln.setclcik()
    ln.setvalidation();

})