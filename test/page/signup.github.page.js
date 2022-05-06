class SignUpGithub {

    get emailInput() {
        return $('#email');
    }

    get contToPassButton() {
        return $('//button[@data-continue-to="password-container"]');
    }

    async toPassClick() {
        //expect.contToPassButton.isDisplayed();
        //await this.contToPassButton.waitForClickable({timeout: 3000});
        await this.contToPassButton.click();
    }

    get passwordInput() {
        return $('#password');
    }

    setPassword(passValue) {
        this.passwordInput.setValue(passValue);
    }

    get contToUsernameButton() {
        return $('//button[@data-continue-to="username-container"]');
    }

    async toUsernameClick() {
        await this.contToUsernameButton.click();
    }

    get usernameInput() {
        return $('#login');
    }

    async setLogin(LoginValue) {
        await this.usernameInput.setValue(LoginValue);
    }

    get contToYNButton() {
        return $('//button[@data-continue-to="opt-in-container"]');
    }

    async toYNclick() {
        await this.contToYNButton.click();
    }

    get yesnoInput() {
        return $('#opt_in');
    }

    async setYN(valueYN) {
        await this.yesnoInput.setValue(valueYN);
    }

    get contToVerify() {
        return $('[data-continue-to="captcha-and-submit-container"]');
    }

    async toVerifyClick() {
        await this.contToVerify.click();
    }

    get verifyLabel() {
        return $('[class="text-mono text-bold signup-text-prompt mt-4"]');
    }

}

module.exports = new SignUpGithub()