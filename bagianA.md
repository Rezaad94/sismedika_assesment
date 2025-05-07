| No | Jawaban |
|----|---------|
|1. | - **Bug**: Issue atau masalah yang ditemukan di dalam aplikasi ketika user menggunakannya, baik aplikasi web atau mobile phone. Contoh: <br> - **Defect**: Ketidaksesuaian aplikasi atau fitur dengan requirement yang sudah ditentukan oleh product manager. <br> - **Error**: Kesalahan yang disebabkan karena kelalaian atau ketidaktelitian dalam pengerjaan suatu hal. |
|2. | Regression testing adalah jenis pengujian yang dilakukan untuk memastikan bahwa perubahan pada kode, seperti penambahan fitur baru atau perbaikan bug, tidak memengaruhi fitur yang sudah ada. <br> Contoh: Setelah memperbaiki bug pada fitur pembayaran, regression testing dilakukan untuk memastikan fitur lain seperti login, pencarian produk, dan checkout tetap berfungsi dengan baik. |
|3. | Life cycle bug : <br> 1. Bug ditemukan oleh QA. <br> 2. Bug dilaporkan di task management (jira / trello) sebagai tiket. <br> 3. Bug diinfokan ke engineer untuk dibenahi. <br> 4. Bug yang sudah dibenahi, kemudian dites kembali oleh QA. <br> 5. Jika bug sudah tidak terjadi lagi, maka tiket diupdate menjadi done/resolved. <br> 6. Jika masih terjadi, tiket diubah menjadi open lagi dan di-follow up lagi ke engineer. |
|4. | 
- **Test scenario** adalah ringkasan testing yang akan dilakukan. Contoh: Validasi fitur Login.
- **Test Case** adalah kumpulan langkah-langkah testing dari test scenario. Contoh:
  - **Test Case ID**: TC0030
  - **Title / Description**: Verifikasi login dengan kredensial yang benar
  - **Steps**:
	1. User berada di halaman login
	2. User memasukkan username
	3. User memasukkan password
	4. User klik tombol login
  - **Test data**: 
	- Username: `username`
	- Password: `correctpassword`
  - **Expected result**: User berhasil login
  - **Actual result**: User berhasil login
  - **Status**: Pass/Fail
  - **Note**: |
|5. | - Priority adalah tingkat urgensi atau kecepatan dimana suatu bug harus diperbaiki. <br> - Severity adalah tingkat keparahan bug terhadap aplikasi <br> - contoh : jika ada bug, sistem crash maka prioritynya high dan severitynya high, jika ada bug di logo yg tampil tidak sesuai maka priotitinya high dan severitynya low |
