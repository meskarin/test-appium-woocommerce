const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");


describe('Access Admin Painel', () => {
    it('Should login with valid credentials', async() => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.btnContinue()
        await loginScreen.continueWithStoreCredentials()
        
        expect(await loginScreen.getLabel()).toEqual('Log in with your lojaebac.ebaconline.art.br site credentials')

        await loginScreen.login('Jonathan covarde!')
        
        setTimeout(()=>{
            console.log('abriu')
        },1000)
        
    });
});