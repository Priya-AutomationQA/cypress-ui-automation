
import LoginPage from "../pages/LoginPage";
describe('OrangeHRM Login Test', ()=>{
    const loginPage=new LoginPage;
    beforeEach(()=>{
        cy.fixture('loginData').then((data)=>{
            cy.wrap(data).as('login');
        });
    });

    it('should login successfully with valid credentials', function(){
        loginPage.visit();
        loginPage.enterUsername(this.login.username);
        loginPage.enterPassword(this.login.password);
        loginPage.clickLogin();
        loginPage.verifyDashboard();
    });
});