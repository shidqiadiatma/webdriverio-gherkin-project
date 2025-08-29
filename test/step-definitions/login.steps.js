import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/loginPage.js';

Given('user membuka halaman login', async () => {
    await loginPage.open();
});

When('user mengisi nomor whatsapp yang sudah terdaftar', async () => {
    await loginPage.typeRegisteredWhatsapp();
});

When('user mengisi password yang salah', async () => {
    await loginPage.typeWrongPassword();
});

When('user mengisi password yang benar', async () => {
    await loginPage.typeCorrectPassword();
});


When('user klik tombol Masuk', async () => {
    await loginPage.btnSubmit.click();
});

When('user berhasil login dan diarahkan ke halaman utama', async () => {
    await browser.pause(5000);
    if (await loginPage.closebannerBtn.isDisplayed()) {
        await loginPage.closebannerBtn.click();
    }
    const profileSelector = $('/html/body/header[1]/div[2]/div/div[2]/button/span');
    await expect(profileSelector).toBeDisplayed();
    const text = await profileSelector.getText();
    expect(text).toContain('We CS QCF Sepuluh');

});

Then(/^muncul peringatan "([^"]*)"$/, async (message) => {
    if (message.includes('Email/Password yang Anda masukan salah')) {
        await expect(loginPage.alertText_wrongCredential).toBeDisplayed();
        const text = await loginPage.alertText_wrongCredential.getText();
        expect(text).toContain(message);
    } else if (message.includes('Password belum terisi')) {
        await expect(loginPage.alertText_emptyValue).toBeDisplayed();
        const text = await loginPage.alertText_emptyValue.getText();
        expect(text).toContain(message);
    } else if (message.includes('Email belum terisi')) {
        await expect(loginPage.alertText_emptyValue).toBeDisplayed();
        const text = await loginPage.alertText_emptyValue.getText();
        expect(text).toContain(message);
    }
});