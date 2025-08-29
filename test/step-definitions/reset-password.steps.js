import { Given, When, Then } from '@wdio/cucumber-framework';
import resetPasswordPage from '../pageobjects/ResetPasswordPage.js';

Given('user membuka halaman reset password', async () => {
    await resetPasswordPage.open();
});

When('user klik tombol Cari Akun', async () => {
    await resetPasswordPage.btnSubmit.click();
});

When('user mengisi nomor telepon yang sudah terdaftar', async () => {
    await resetPasswordPage.typeRegisteredPhone()
});

When(/^user mengisi nomor telepon untuk reset password yaitu "([^"]*)"$/, async (phoneNumber) => {
    await resetPasswordPage.phoneNumberField.setValue(phoneNumber);
});

When('user mengisi kode OTP yang salah', async () => {
    await resetPasswordPage.typeWrongOTP();
});

Then(/^muncul peringatan reset password "([^"]*)"$/, async (message) => {
    await expect(resetPasswordPage.alertBox).toBeDisplayed();
    const text = await resetPasswordPage.alertBox.getText();
    expect(text).toContain(message);
});

Then('user berhasil diarahkan ke halaman OTP', async () => {
    await expect(resetPasswordPage.masukkanOTPText).toBeDisplayed();
});

Then(/^muncul peringatan bahwa kode "([^"]*)"$/, async (text) => {
    await resetPasswordPage.checkWarningOTP(text);
});
