import { $, browser } from '@wdio/globals'
import Page from '../configUrl/UrlForgetPasswordPage.js';

class resetPasswordPage extends Page {

    get phoneNumberField () {
        return $('#inpNomorTelepon');
    }

    get btnSubmit () {
        return $('#btnMasuk');
    }

    get alertBox () {
        return $('#warningEmail');
    }

    get alertText_emptyValue () {
        return $('/html/body/div[4]/div/div[2]/div[3]/div[3]/div/span');
    }

    get muatmuatIcon () {
        return $('/html/body/div[4]/div[3]/img');
    }

    get phoneIcon () {
        return $('/html/body/div[4]/div[4]/img');
    }

    get checkMessageText () {
        return $('/html/body/div[4]/div[7]/span[1]');
    }

    get yourPhoneNumberText () {
        return $('/html/body/div[4]/div[7]/div/div[1]/div/span[1]');
    }

    get masukkanOTPText () {
        return $('/html/body/div[4]/div[7]/div/div[2]/span');
    }

    get resendOtpBtn () {
        return $('#BtnResendOTP');
    }

    get OTPfield1 () {
        return $('#OTPField1');
    }

    get OTPfield2 () {
        return $('#OTPField2');
    }

    get OTPfield3 () {
        return $('#OTPField3');
    }

    get OTPfield4 () {
        return $('#OTPField4');
    }
    get OTPfield5 () {
        return $('#OTPField5');
    }

    get OTPfield6 () {
        return $('#OTPField6');
    }
    get warningOTP () {
        return $('#TxtRedAlert');
    }

    async typeWrongOTP () {
        await this.OTPfield1.setValue('1');
        await this.OTPfield2.setValue('2');
        await this.OTPfield3.setValue('3');
        await this.OTPfield4.setValue('4');
        await this.OTPfield5.setValue('5');
        await this.OTPfield6.setValue('6');
    }

    async checkWarningOTP (text) {
        await expect(this.warningOTP).toBeDisplayed();
        const warningText = await this.warningOTP.getText();
        expect(warningText).toContain(text);
    }

    async forgetPass (phoneNumber) {
        await this.phoneNumberField.setValue(phoneNumber);
        await this.btnSubmit.click();
    }

    async typeRegisteredPhone() {
        await this.phoneNumberField.setValue('089654961080');
        await this.btnSubmit.click();
    }


    open () {
        browser.maximizeWindow()
        return super.open();
        
        
    }
}

export default new resetPasswordPage();
