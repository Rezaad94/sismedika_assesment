# Jawaban Bagian A

## 1. Jelaskan perbedaan antara bug, defect, dan error.
- **Bug**: Issue atau masalah yang ditemukan di dalam aplikasi ketika user menggunakannya, baik aplikasi web atau mobile.  
  *Contoh:* Tombol tidak merespons saat diklik.  
- **Defect**: Ketidaksesuaian antara aplikasi atau fitur dengan requirement yang sudah ditentukan oleh product manager.  
  *Contoh:* Sistem menghitung diskon 5% padahal requirement-nya 10%.  
- **Error**: Kesalahan yang disebabkan karena kelalaian atau ketidaktelitian dalam pengerjaan suatu hal.  
  *Contoh:* Developer salah mengetik logika perhitungan.

---

## 2. Apa yang dimaksud dengan regression testing dan kapan biasanya dilakukan?
Regression testing adalah jenis pengujian yang dilakukan untuk memastikan bahwa perubahan pada kode (seperti penambahan fitur baru atau perbaikan bug) tidak memengaruhi fitur yang sudah ada. biasanya dilakukan ketika terdapat perubahan yang major terhadap suatu aplikasi.
*Contoh:* Setelah memperbaiki bug pada fitur pembayaran, regression testing dilakukan untuk memastikan fitur lain seperti login, pencarian produk, dan checkout tetap berfungsi dengan baik.

---

## 3. Sebutkan lifecycle dari bug/defect dari ditemukan hingga ditutup.
1. QA menemukan bug.  
2. QA melaporkan bug dalam task management (seperti Jira atau Trello) sebagai tiket.  
3. Bug diinformasikan ke engineer untuk diperbaiki.  
4. Setelah diperbaiki, QA melakukan pengujian ulang (retest).  
5. Jika bug tidak terjadi lagi, tiket diupdate menjadi **Done/Resolved**.  
6. Jika masih terjadi, tiket diubah kembali ke status **Open** dan dilanjutkan perbaikannya.

---

## 4. Apa itu test case dan test scenario? Jelaskan perbedaannya dan berikan contohnya.
- **Test Scenario** adalah ringkasan dari pengujian yang akan dilakukan.  
  *Contoh:* Validasi fitur Login.

- **Test Case** adalah kumpulan langkah-langkah pengujian dari test scenario.  
  *Contoh:*
  - **Test Case ID**: TC0030  
  - **Title/Description**: Verifikasi login dengan kredensial yang benar  
  - **Steps**:  
    1. User berada di halaman login  
    2. User memasukkan username  
    3. User memasukkan password  
    4. User klik tombol login  
  - **Test Data**:  
    - Username: `username`  
    - Password: `correctpassword`  
  - **Expected Result**: User berhasil login  
  - **Actual Result**: User berhasil login  
  - **Status**: Pass/Fail  
  - **Note**: (Catatan tambahan bila perlu)

---

## 5. Apa yang dimaksud dengan severity dan priority dalam konteks bug? Berikan masing-masing contohnya.
- **Priority** adalah tingkat urgensi atau kecepatan dimana suatu bug harus diperbaiki.  
- **Severity** adalah tingkat keparahan bug terhadap sistem/aplikasi.  

*Contoh:*  
- Jika sistem **crash**, maka:
  - Priority: **High**
  - Severity: **High**
- Jika logo perusahaan tampil tidak sesuai, maka:
  - Priority: **High**
  - Severity: **Low**
