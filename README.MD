# WDIO Automation Testing

Framework automation testing menggunakan WebdriverIO dengan Cucumber.

## Fitur yang Tersedia

### Test Scenarios
- **TS01 - Register**: Test case untuk proses pendaftaran akun baru
- **TS02 - Login**: Test case untuk proses login dengan berbagai skenario
- **TS03 - Reset Password**: Test case untuk proses reset password

### Page Objects
- `LoginPage.js` - Halaman login
- `RegisterPage.js` - Halaman pendaftaran  
- `ResetPasswordPage.js` - Halaman reset password

### Reporting
- **Allure Report**: Report detail dengan screenshots dan logs
- **HTML Nice Report**: Report HTML yang user-friendly

## Cara Menjalankan Automation

### 1. **Install dependencies**
```powershell
npm install
```

### 2. **Jalankan semua skenario (semua file feature):**
```powershell
npx wdio run wdio.conf.js
```
atau
```powershell
npm run wdio
```

### 3. **Jalankan file feature tertentu:**
```powershell
# Jalankan test login
npx wdio run wdio.conf.js --spec test/specs/TS02-login.feature

# Jalankan test register
npx wdio run wdio.conf.js --spec test/specs/TS01-register.feature

# Jalankan test reset password
npx wdio run wdio.conf.js --spec test/specs/TS03-reset-password.feature
```

## Generate & Tampilkan Report

### Allure Report
1. **Generate report setelah tes selesai:**
```powershell
npx allure generate allure-results --clean -o allure-report
```

2. **Buka report di browser:**
```powershell
npx allure open allure-report
```

### HTML Nice Report
Report HTML akan otomatis di-generate di folder `html-report/` setelah tes selesai. Buka file `html-report/report.html` di browser.

## Struktur Project
```
test/
├── configUrl/          # Konfigurasi URL halaman
├── data/              # Data test (credentials.json)
├── pageobjects/       # Page Object Models
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── ResetPasswordPage.js
├── specs/            # File Gherkin (.feature)
│   ├── TS01-register.feature
│   ├── TS02-login.feature
│   └── TS03-reset-password.feature
└── step-definitions/ # Step definitions
    ├── login.steps.js
    ├── register.steps.js
    └── reset-password.steps.js
```

## Data Test
File `test/data/credentials.json` berisi data login yang digunakan untuk testing:
- Nomor WhatsApp terdaftar
- Password benar dan salah
- Nomor WhatsApp tidak terdaftar

## Konfigurasi
File `wdio.conf.js` berisi konfigurasi WebdriverIO dengan:
- Browser: Chrome
- Framework: Cucumber
- Reporters: Spec, Allure, HTML-Nice
- Timeout: 60 detik

## Troubleshooting
- Pastikan Chrome browser terinstall
- Pastikan dependencies terinstall dengan `npm install`
- Jika ada error selector, periksa elemen UI di halaman target
