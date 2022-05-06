const mainPageGithub = require('../page/main.github.page.js');
const signUpGithub = require('../page/signup.github.page.js');

function emailGenerator() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';        
}

function passwordGenerator() {
    var charsPass = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var stringPass = '';
        for(var ii=0; ii<15; ii++) {
            stringPass += charsPass[Math.floor(Math.random() * charsPass.length)];
        }
        return stringPass;        
}

describe('Registration to GitHub', () => {

    it('should paste email and press SignUp-button', async () => {
        await browser.url('https://github.com/');
        browser.maximizeWindow();

        mainPageGithub.setEmail(emailGenerator());
        await browser.pause(2000);
        mainPageGithub.signUpClick();
        await browser.pause(3000);
    })

    it('should fill registration blank', async () => {        
        await browser.pause(3000);
        //expect(signUpGithub.contToPassButton).isDisplayed();
        await signUpGithub.contToPassButton.waitForClickable({timeout: 5000});
        signUpGithub.toPassClick();        
        signUpGithub.setPassword(passwordGenerator());
        await browser.pause(1000);
        signUpGithub.toUsernameClick();        
        signUpGithub.setLogin("00TEST01");
        await browser.pause(1000);
        signUpGithub.toYNclick();        
        signUpGithub.setYN("n");
        await browser.pause(1000);
        signUpGithub.toVerifyClick();
        await browser.pause(2000);
        let verifyDisplay = await signUpGithub.verifyLabel.isDisplayed();
        console.log('Is there a verification message? -> ' + verifyDisplay);
        
        console.log("URL of current page is: " + await browser.getUrl());        
    })
})