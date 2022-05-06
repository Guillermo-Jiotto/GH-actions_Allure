class MainPageGithub {
    
    get mailInput() {
        return $('#user_email');
    }

    setEmail(emailValue) {
        this.mailInput.setValue(emailValue);
    }

    get signUpButtonCenter() {
        return $('button[class*="btn-mktg"]');
    }

    async signUpClick() {
        await this.signUpButtonCenter.click();
    }

    get signupBottomButton() {
        return $('[href*="/join?ref_cta=Sign+up"]');
    }

    async signupBottomButtonClick() {
        await this.signupBottomButton.click();
    }

    get signInButton() {
        return $('a[href="/login"]');
    }

    async signInClick() {
        await this.signInButton.click();
    }

    get summaryProduct() {
        return $('li:first-child [class="HeaderMenu-details details-overlay details-reset width-full"]');
    }

    get summaryExplore() {
        return $('(//ul[@class="d-lg-flex list-style-none"]/li/details)[2]');
    }

    get summaryPricing() {
        return $('(//ul[@class="d-lg-flex list-style-none"]/li/details/summary)[3]');
    }

    get displayFeatures() {
        return $('[class*="lh-condensed-ultra"][href="/features"]');
    }

    get displayExploreMenu() {
        return $('[href="/explore"]');
    }

    get displayPlans() {
        return $('[class*="lh-condensed"][href="/pricing"]');
    }

    async plansClick() {
        await this.displayPlans.click();
    }

    async exploreClick() {
        await this.displayExploreMenu.click();
    }

    get searchInput() {
        return $('[aria-label="Search GitHub"]');
    }

    async setSearchValue(searchValue) {
        await this.searchInput.setValue(searchValue);
    }

    get searchButton() {
        return $('#jump-to-results');
    }

    async searchButtonClick() {
        await this.searchButton.click();
    }

    get freeTrialButton() {
        return $('[href*="/organizations/enterprise_plan"]');
    }

    async freeTrialButtonClick() {
        await this.freeTrialButton.click();
    }

    get careersLink() {
        return $('[href="/about/careers"]');
    }

    async careersLinkClick() {
        await this.careersLink.click();
    }
}

module.exports = new MainPageGithub()