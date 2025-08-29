import { $, browser } from '@wdio/globals'
import Page from '../configUrl/UrlLoginPage.js';
import { readFileSync } from 'fs';
const credentials = JSON.parse(
    readFileSync(new URL('../data/credentials.json', import.meta.url))
);

class loginPage extends Page {

    get closebannerBtn () { return $('#close-banner-promo');}

    get loginBtnHeader () { return $('/html/body/header[2]/div[2]/div/a[1]');}
    
    get inputUsername () { return $('#inpEmail');}

    get inputPassword () { return $('#inpPassword');}

    get btnSubmit () { return $('#btnMasuk');}

    get alertBox () { return $('#warningEmail');}

    get alertText_emptyValue () { return $('/html/body/div[4]/div[2]/div[2]/div[5]/div/span');}

    get alertText_wrongCredential () { return $('/html/body/div[4]/div[2]/div[2]/div[4]/div/span');}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async typeRegisteredWhatsapp() {
        await this.inputUsername.setValue(credentials.correctPhone);
    }

    async typeWrongPassword() {
        await this.inputPassword.setValue(credentials.wrongPassword);
    }

    async typeCorrectPassword() {
        await this.inputPassword.setValue(credentials.correctPassword);
    }

    open () {
        browser.maximizeWindow()
        return super.open();
    }
}

export default new loginPage();
