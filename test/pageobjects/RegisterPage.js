import { $, browser } from '@wdio/globals'
import Page from '../configUrl/UrlRegisterPage.js';
import { readFileSync } from 'fs';
const credentials = JSON.parse(
    readFileSync(new URL('../data/credentials.json', import.meta.url))
);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class registerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameField () {
        return $('#inpUsername');
    }

    get phoneNumberField () {
        return $('#inpNomorTelepon');
    }
    
    get passwordField () {
        return $('#inpPassword');
    }

    get confirmationPasswordField () {
        return $('#inpKonfirmasiPassword');
    }

    get btnSubmit () {
        return $('#btnDaftar');
    }

    get alertBox () {
        return $('#passwordNotIdentical');
    }

    get alertText_wrongConfirmPass () {
        return $('/html/body/div[4]/div/div/div[2]/div[3]/div[5]/div/span');
    }

    get alertText_warningErrorText () {
        return $('#warningErrorText');
    }

    get titleTnC () {
        return $('#lblSyaratKetentuan');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async typeUnregisteredWhatsapp () {
        await this.phoneNumberField.setValue(credentials.wrongPhone);
    }

    async typeRegisteredWhatsapp () {
        await this.phoneNumberField.setValue(credentials.correctPhone);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        browser.maximizeWindow()
        return super.open();
        
        
    }
}

export default new registerPage();
