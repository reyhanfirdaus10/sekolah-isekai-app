# Sekolah Isekai App

Aplikasi Sekolah Isekai adalah aplikasi berbasis React yang digunakan untuk menampilkan data siswa di sebuah sekolah isekai. Aplikasi ini menerapkan beberapa aturan unik, di mana siswa-siswa di kelas tertentu dapat mengalami kematian dan pernikahan berdasarkan nilai ujian mereka.

## Penggunaan

Untuk menggunakan aplikasi Sekolah Isekai, Anda perlu mengikuti langkah-langkah berikut:

1. Pastikan Anda telah menginstall [Node.js](https://nodejs.org/) pada komputer Anda.

2. Clone repository ini ke komputer Anda dengan menjalankan perintah berikut pada terminal atau command prompt:

```
git clone https://github.com/reyhanfirdaus10/sekolah-isekai-app.git
```

3. Masuk ke direktori proyek:

```
cd sekolah-isekai-app
```

4. Pasang modul axios untuk melakukan HTTP request ke [API](http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT) dengan menjalankan perintah:

```
npm install axios
```

5. Jalankan aplikasi dengan perintah:

```
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`. Buka browser dan akses URL tersebut untuk melihat aplikasi Sekolah Isekai.

## Cara Penggunaan

Setelah aplikasi berjalan, Anda akan melihat daftar siswa dalam setiap kelas beserta nilai ujian mereka. Aplikasi ini akan secara otomatis menghitung dan menampilkan siswa-siswa yang akan mati di bulan ini atau tahun depan berdasarkan nilai ujian mereka. Selain itu, aplikasi juga akan menampilkan siswa-siswa yang akan menikah pada tahun depan jika mereka berada di Kelas 10F dan memiliki nilai yang habis dibagi 7.

Anda dapat melihat keterangan untuk setiap siswa, termasuk kelas, nama, nilai ujian, bulan kematian, dan tahun kematian (jika ada). Jika siswa tersebut berada di Kelas 10F dan akan menikah, akan ada informasi bahwa siswa tersebut akan menikah pada tahun depan.

## Kontribusi

Jika Anda menemukan masalah atau ingin berkontribusi pada proyek ini, Anda dapat membuka _issue_ atau mengirimkan _pull request_ pada repository GitHub ini.

## Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE). Anda dapat memodifikasi dan mendistribusikan kode ini sesuai dengan ketentuan lisensi yang berlaku.
