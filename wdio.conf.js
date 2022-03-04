const { reporters } = require('mocha')
const {join} = require ('path')

exports.config = {
    // hostname:'localhost',
    //port: 4723,
    // path:'/wd/hub',
    user:"meskarin_7BudMi",
    key:"D2vTff5o1Vqq9sQbmJFC",
    //services: ['appium'],
    services: ['browserstack'],
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework:'mocha',
    capabilities:[{
        // "platformName":"Android",
        // "platformVersion":"10.0",
        // "deviceName":"AppiumT",
        // "automationName":"UiAutomator2",
        // "app": join(process.cwd(), './app/Android/wcandroid-7.3.1.apk'),
        // "appActivity":"com.woocommerce.android.ui.main.MainActivity",
        // "appWaitActivity":"com.woocommerce.android.ui.login.LoginActivity"
        "app": "bs://4996e6413bd9dbb94bbea7ed7a19ee2a7ea7b303",
        "device": "Xiaomi Redmi Note 9",
        "os_version": "10.0",
        "project": "First Webdriverio Android Woocommerce",
        "build": "1",
        "name": "Primeiro_teste"
    }],
    waitForTimeout:20000,
    mochaOpts:{
        timeout: 300000
    },
    reporters:['spec']
}