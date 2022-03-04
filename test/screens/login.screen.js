class LoginScreen {
    
    get StoreAddress(){return $('android.widget.EditText')}
    get continue(){return $('id:bottom_button')}
    get username(){return $('android=new UiSelector().text("Username").className("android.widget.EditText")')}
    get password(){return $('android=new UiSelector().text("Password").className("android.widget.EditText")')}
    get loginSiteCreds(){return $('id:login_site_creds')}
    get label(){return $('id:label')}

    
    async setStoreAddress(url){
        await this.StoreAddress.setValue(url)
    }
    async btnContinue(){
        await this.continue.click()
    } 
    async continueWithStoreCredentials(){
        await this.loginSiteCreds.click()
    } 
    
    async login(username){
        await this.username.setValue(username)
    }
    async getLabel(){
        return await this.label.getText()
    }
}

module.exports = new LoginScreen()