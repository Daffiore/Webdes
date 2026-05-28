# 🍛 Padang Legenda - Website Parallax & Slider

Website landing page interaktif untuk Rumah Makan **Padang Legenda**. Proyek ini menggunakan arsitektur efek visual 3D Parallax untuk bagian *Hero Banner* dan fitur *Horizontal Slider Carousel* untuk menampilkan menu unggulan (Top Picks). Website ini dikembangkan menggunakan **Tailwind CSS v4** dan **Vite**.

---

## 🚀 Panduan Pengembangan: Menambah Halaman Makanan Baru

Jika Anda ingin menambahkan menu makanan baru (seperti rendang, gulai, ayam pop, dll.) ke dalam sistem aplikasi, ikuti standarisasi langkah berikut agar konsistensi desain tidak rusak:

### Langkah 1: Menambahkan Kartu Baru pada Slider
1. Buka berkas `index.html`.
2. Cari elemen lintasan rel yang memiliki kelas `slider-jalur-lintasan`.
3. Duplikat salah satu elemen blok kartu yang sudah ada di dalamnya.
4. Perbarui nama makanan, gambar, nilai rating, dan deskripsinya.
5. Ubah tautan atau link tujuan (tag `href`) ke arah alamat berkas HTML baru Anda (misal: `pages/rendang.html`).

### Langkah 2: Membuat Berkas HTML Detail Baru
1. Buat berkas baru berformat `.html` di dalam folder proyek Anda.
2. Di dalam bagian `<head>`, Anda **wajib** menghubungkan berkas stylesheet utama proyek ini, yaitu `/src/style.css`.
3. Desain halaman baru Anda menggunakan kelas-kelas utilitas Tailwind CSS yang sudah tersedia.

---

## 🛠️ Aturan Arsitektur Kode (Wajib Dipatuhi)

Untuk mencegah rusaknya fungsi efek visual dan slider saat proyek ini dikembangkan secara berkelanjutan, patuhi aturan penamaan kelas berikut:

1. **Efek Parallax Banner (`.layer-pembungkus-konten`)**
   Jika halaman baru yang Anda buat juga mengimplementasikan efek parallax pada bagian atasnya, elemen pembungkus terluar wajib memiliki kelas `layer-pembungkus-konten` untuk mengaktifkan ruang 3D browser, sedangkan aset gambarnya dibungkus dengan kelas `layer-bg`.

2. **Kestabilan Posisi Konten (`.layer-foreground`)**
   Seluruh teks judul, slogan, deskripsi, dan tombol aksi utama harus diletakkan di dalam wadah berkelas `layer-foreground` agar posisinya terkunci stabil di poros tengah layar (Z-Index netral) dan tidak tenggelam di belakang gambar latar.

3. **Logika Otomatis Slider (`.kartu-makanan`)**
   Jangan pernah mengubah atau menghapus nama kelas `kartu-makanan` pada komponen slider di `index.html`. Berkas skrip kontrol `src/main.js` sangat bergantung pada penamaan kelas ini untuk menghitung jarak geser piksel secara otomatis saat tombol panah kiri atau kanan diklik oleh pengguna.

---

## 📦 Cara Menjalankan Proyek di Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install