const dashboardScreen = require("../screens/dashboard.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const productsScreen = require("../screens/products.screen");


describe('Admin Painel', () => {
    it('Should publish new products ', async() => {
        let username = 'gerente'
        let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
        let nome = 'Camiseta Legal pra caramba'
        let description = 'Produtinho esperto e muito legal, só não tem garantia'
        let valor = '80'
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.btnContinue()
        
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.setUsername(username)
        await loginScreen.setPassword(password)
        await loginScreen.btnContinue()
        await loginScreen.continueTypeYourPassword()
        await loginScreen.setPassword(password)
        await loginScreen.btnContinue()
        
        await dashboardScreen.goToProducts()
        await productsScreen.addNewProduct()
        await productsScreen.typeNewProduct()
        await productsScreen.typeNameProduct(nome)
        await productsScreen.goToDescriptionProduct()
        await productsScreen.typeDescriptionProduct(description)
        await productsScreen.getBack()
        await productsScreen.goToPriceProduct()
        await productsScreen.tapPriceProduct()
        await productsScreen.typePriceProduct(valor)
        await productsScreen.getBack()
        await productsScreen.publishProduct()

        expect(await productsScreen.snackBarAlert()).toEqual('Product published')

        
        setTimeout(()=>{
            console.log('abriu')
        },1000)
        
    });
});