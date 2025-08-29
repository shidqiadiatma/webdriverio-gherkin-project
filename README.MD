# WDIO Muatmuat Automation

## Cara Menjalankan Automation

1. **Install dependencies**
   ```powershell
   npm install
   ```

2. **Jalankan semua skenario (semua file feature):**
   ```powershell
   npx wdio run wdio.conf.js
   ```
   atau
   ```powershell
   npm run wdio
   ```

3. **Jalankan satu file feature tertentu:**
   ```powershell
   npx wdio run wdio.conf.js --spec test/specs/nama-file.feature
   ```
   Contoh:
   ```powershell
   npx wdio run wdio.conf.js --spec test/specs/login.feature
   ```

## Generate & Tampilkan Report HTML (Allure)

1. **Generate report setelah tes selesai:**
   ```powershell
   npx allure generate allure-results --clean -o allure-report
   ```

2. **Buka report di browser:**
   ```powershell
   npx allure open allure-report
   ```

Report akan terbuka otomatis di browser dan menampilkan hasil tes.

## Struktur Penting
- `test/specs/` : Berisi file Gherkin (.feature)
- `test/step-definitions/` : Berisi step definition
- `test/pageobjects/` : Berisi page object model
- `allure-results/` : Hasil raw report
- `allure-report/` : Report HTML setelah di-generate
