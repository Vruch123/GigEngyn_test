class Login
{
    Userid="#email"
    Pass="#password"
    Clk=".labelBtn.undefined"
    setUserId(userid){
        cy.get(this.Userid).type(userid)
    }
    setPasswodr(password){
        cy.get(this.Pass).type(password)
    }
    setclcik(){
        cy.get(this.Clk).click()
    }  
    setvalidation(){
        cy.get('.sidebar-top-header').should('be.visible')
    }     
}
export default Login;