import { Given, When, Then } from '@wdio/cucumber-framework';
import registerPage from '../pageobjects/registerPage.js';

Given('user membuka halaman register', async () => {
    await registerPage.open();
});

When(/^user mengisi nama lengkap "([^"]*)"$/, async (namaLengkap) => {
    await registerPage.usernameField.setValue(namaLengkap);
});

When('user mengisi nomor whatsapp untuk register yang belum terdaftar', async () => {
    await registerPage.typeUnregisteredWhatsapp();
});

When('user mengisi nomor whatsapp untuk register yang sudah terdaftar', async () => {
    await registerPage.typeRegisteredWhatsapp();
});

When(/^user mengisi password "([^"]*)"$/, async (password) => {
    await registerPage.passwordField.setValue(password);
});

When(/^user mengisi konfirmasi password "([^"]*)"$/, async (confirmationPassword) => {
    await registerPage.confirmationPasswordField.setValue(confirmationPassword);
});

When(/^user mengisi password "([^"]*)" dan konfirmasi password "([^"]*)"$/, async (password, konfirmasiPassword) => {
    await registerPage.passwordField.setValue(password);
    await registerPage.confirmationPasswordField.setValue(konfirmasiPassword);
});

When(/^user hanya mengisi password "([^"]*)" dan konfirmasi password "([^"]*)"$/, async (password, konfirmasiPassword) => {
    await registerPage.passwordField.setValue(password);
    await registerPage.confirmationPasswordField.setValue(konfirmasiPassword);
});

When('user klik tombol Daftar', async () => {
    await registerPage.btnSubmit.click();
});

When('user klik tombol Daftarr', async () => {
    await registerPage.btnSubmit.click();
    await registerPage.btnSubmit.click();
});

Then(/^muncul peringatan yaitu "([^"]*)"$/, async (message) => {
    await expect(registerPage.alertText_wrongConfirmPass).toBeDisplayed();
    const text = await registerPage.alertText_wrongConfirmPass.getText();
    expect(text).toContain(message);
});

Then(/^muncul peringatan registrasi "([^"]*)"$/, async (message) => {
    await expect(registerPage.alertText_warningErrorText).toBeDisplayed();
    const text = await registerPage.alertText_warningErrorText.getText();
    expect(text).toContain(message);
});

Then('user berhasil diarahkan ke halaman Syarat dan Ketentuan Pengguna', async () => {
    await expect(registerPage.titleTnC).toBeDisplayed();
    const text = await registerPage.titleTnC.getText();
    expect(text).toContain('Syarat dan Ketentuan Pengguna');
});

