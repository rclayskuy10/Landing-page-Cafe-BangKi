<div align="center">

# ☕ Landing Page Café BangKi

[![Saweria](https://img.shields.io/badge/Support%20Me-Saweria-orange?style=for-the-badge&logo=ko-fi&logoColor=white)](https://saweria.co/riski2000)

**Dukung saya melalui Saweria:** [https://saweria.co/riski2000](https://saweria.co/riski2000)

---

### Website landing page modern untuk Café BangKi
*Responsive • Modern • User-Friendly*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-Protected-red?style=flat-square)

</div>

## ⚠️ PENTING - Baca Ini Dulu!

> **🔒 Repository ini menggunakan DATA PLACEHOLDER untuk keamanan.**
> 
> Semua nomor telepon, alamat, dan informasi kontak adalah **PLACEHOLDER** yang harus diganti sebelum deployment. Jangan gunakan data placeholder untuk website production!

**📖 Dokumentasi:**
- 📋 [DEPLOYMENT.md](./DEPLOYMENT.md) - Checklist lengkap sebelum deploy
- ⚖️ [LICENSE.md](./LICENSE.md) - Ketentuan lisensi & copyright

## 📋 Deskripsi

Landing page website untuk Café BangKi yang menampilkan menu kopi, pastry, dan galeri foto. Website ini dirancang dengan desain modern, responsive, dan user-friendly untuk memberikan pengalaman terbaik kepada pengunjung.

## ✨ Fitur

- 🎨 **Desain Modern** - Interface yang bersih dan menarik
- 📱 **Fully Responsive** - Tampil sempurna di semua perangkat
- 🖼️ **Gallery Dinamis** - Showcase foto-foto café yang menawan
- 📍 **Google Maps Integration** - Lokasi café yang mudah ditemukan
- ⚡ **Fast Loading** - Optimasi performa untuk loading cepat
- 🎯 **Smooth Navigation** - Navigasi yang smooth dengan scroll animation

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📁 Struktur Project

```
Landing-page-Cafe-BangKi/
│
├── 📄 index.html           # File HTML utama
├── 🎨 style.css            # Stylesheet utama  
├── ⚡ script.js            # JavaScript untuk interaktivitas
├── 📖 README.md            # Dokumentasi lengkap (Anda di sini!)
├── 📋 DEPLOYMENT.md        # Panduan deploy & keamanan
├── ⚖️ LICENSE.md           # Ketentuan lisensi
├── 🚫 .gitignore           # File yang diabaikan Git
├── ⚙️ config.example.json  # Template konfigurasi
└── 📁 images/              # Folder untuk semua gambar
    └── README.md           # Panduan foto
```

### 📄 Penjelasan File:

| File | Deskripsi |
|------|-----------|
| `index.html` | Struktur utama website |
| `style.css` | Styling dan responsive design |
| `script.js` | Interaktivitas & animasi |
| `DEPLOYMENT.md` | Checklist & panduan keamanan sebelum deploy |
| `LICENSE.md` | Ketentuan lisensi dan copyright |
| `config.example.json` | Template untuk konfigurasi sensitif |
| `.gitignore` | Mencegah file sensitif ter-commit |

## 🚀 Quick Start (5 Menit)

### Step 1: Clone & Setup

```bash
# Clone repository
git clone https://github.com/rclayskuy10/Landing-page-Cafe-BangKi.git
cd Landing-page-Cafe-BangKi

# Langsung buka di browser
# atau jalankan dengan live server
```

### Step 2: Ganti Data Placeholder ⚠️

**WAJIB:** Ganti semua placeholder sebelum deploy!

#### Quick Replace dengan Find & Replace (Ctrl+H):

| Find (Cari) | Replace (Ganti Dengan) | Lokasi |
|-------------|------------------------|--------|
| `Café BangKi` | `[Nama Café Anda]` | `index.html` (semua) |
| `+62 XXX XXXX XXXX` | `+62 21 1234 5678` | `index.html` line ~197 |
| `+62XXXXXXXXXXX` | `6281234567890` | `index.html` line ~225 |
| `your_instagram` | `username_anda` | `index.html` line ~229 |
| `Jl. Contoh No. XXX` | `Alamat lengkap Anda` | `index.html` line ~187 |

#### Detail Placeholder yang Harus Diganti:

**1. Nomor Telepon & WhatsApp**
```html
<!-- Line ~197: Nomor telepon -->
<p>+62 XXX XXXX XXXX</p>  <!-- Ganti dengan nomor asli -->

<!-- Line ~225: WhatsApp button -->
<a href="https://wa.me/62XXXXXXXXXXX">  <!-- Format: 628123456789 -->
```

**2. Alamat Lengkap**
```html
<!-- Line ~187-188 -->
<p>Jl. Contoh No. XXX, Kota Anda<br>Provinsi, Kode Pos</p>
<!-- Ganti dengan alamat lengkap café -->
```

**3. Media Sosial**
```html
<!-- Line ~229: Instagram button -->
<a href="https://instagram.com/your_instagram">

<!-- Line ~249-252: Footer social links -->
<a href="https://facebook.com/your_page"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/your_account"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/your_account"><i class="fab fa-twitter"></i></a>
<a href="https://youtube.com/your_channel"><i class="fab fa-youtube"></i></a>
```

**4. Google Maps**
```html
<!-- Line ~206-213: Embed map -->
<!-- Cara dapat URL: -->
<!-- 1. Buka Google Maps → Cari lokasi café -->
<!-- 2. Klik Share → Embed a map → Copy iframe -->
<!-- 3. Paste di index.html -->
```

### Step 3: Kustomisasi Tampilan

**Ganti Warna** (`style.css` line 24-29):
```css
:root {
    --primary-color: #8B4513;      /* Warna utama */
    --secondary-color: #D2691E;    /* Warna sekunder */
    --accent-color: #DAA520;       /* Warna aksen */
}
```

**Upload Foto** (folder `images/`):
- Hero: `hero-bg.jpg` (1920x1080px)
- Menu: 6 foto (400x300px) → `espresso.jpg`, `cappuccino.jpg`, dst
- Gallery: 6 foto (500x500px) → `gallery-1.jpg` s/d `gallery-6.jpg`

### Step 4: Test & Deploy

**Test Lokal:**
```bash
# Opsi 1: Buka langsung
# Double-click index.html

# Opsi 2: Live Server
npm install -g live-server
live-server

# Opsi 3: VS Code
# Install extension "Live Server" → Klik "Go Live"
```

**Deploy ke Hosting:**
- **Netlify:** Push ke GitHub → Connect di Netlify → Auto deploy
- **Vercel:** Same as Netlify
- **cPanel:** Upload via FTP ke folder `public_html`

## 📸 Asset Gambar

Website ini membutuhkan beberapa foto untuk ditampilkan dengan optimal. Lihat panduan lengkap di [`images/README.md`](./images/README.md) untuk detail foto yang dibutuhkan.

### Quick Summary:
- **Hero Section:** 1 foto background (1920x1080px)
- **Menu Section:** 6 foto produk (400x300px)
- **Gallery Section:** 6 foto suasana café (500x500px)

## 🔒 Keamanan & Privacy

⚠️ **PERHATIAN:** Repository ini menggunakan data **PLACEHOLDER** untuk keamanan.

### Data yang Harus Diganti:

- ❌ Nomor telepon (placeholder: `+62 XXX XXXX XXXX`)
- ❌ Alamat lengkap (placeholder: `Jl. Contoh No. XXX`)
- ❌ WhatsApp number (placeholder: `+62XXXXXXXXXXX`)
- ❌ Username media sosial (placeholder: `your_instagram`)
- ❌ Google Maps embed URL

### Best Practices:

1. **Jangan commit informasi sensitif** ke repository public
2. **Gunakan `.gitignore`** untuk file konfigurasi
3. **Buat `config.json`** untuk data sensitif (sudah ada di `.gitignore`)
4. **Review sebelum push** pastikan tidak ada data pribadi
5. **Cek dengan grep**: `grep -r "XXX" index.html` untuk cari placeholder

📖 Lihat checklist lengkap di [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Kustomisasi

### Mengubah Warna Tema
Edit variabel CSS di file `style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    /* ... */
}
```

### Mengubah Konten
- **Teks:** Edit langsung di file `index.html`
- **Menu Items:** Modifikasi section menu di `index.html`
- **Contact Info:** Update informasi kontak di footer (ganti placeholder!)

### Menggunakan Config File (Opsional)
```javascript
// Buat config.json dari config.example.json
// Tambahkan ke .gitignore
// Load di script.js untuk data dinamis
```

## 📱 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📄 Lisensi

⚠️ **PENTING - HAK CIPTA & LISENSI**

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  © 2024-2025 Riski (rclayskuy10)                         ┃
┃  Website Template - Landing Page Café BangKi            ┃
┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ┃
┃  PROTECTED BY COPYRIGHT LAW                             ┃
┃  All Rights Reserved                                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### 🔒 Ketentuan Penggunaan:

**DILARANG:**
- ❌ Menggunakan template ini tanpa izin tertulis dari pembuat
- ❌ Menghapus watermark atau credit dari developer
- ❌ Menjual kembali atau mendistribusikan template ini
- ❌ Mengklaim sebagai karya sendiri
- ❌ Menggunakan untuk keperluan komersial tanpa lisensi

**DIPERBOLEHKAN:**
- ✅ Penggunaan untuk pembelajaran pribadi (non-komersial)
- ✅ Modifikasi untuk proyek pribadi dengan tetap mencantumkan credit

### 📧 Lisensi Komersial:

Untuk penggunaan komersial atau menghapus watermark, silakan hubungi:
- **Email:** riskideveloper@example.com
- **Saweria:** [saweria.co/riski2000](https://saweria.co/riski2000)
- **GitHub:** [@rclayskuy10](https://github.com/rclayskuy10)

### ⚖️ Disclaimer:

Pelanggaran terhadap hak cipta ini dapat dikenakan sanksi hukum sesuai dengan:
- UU No. 28 Tahun 2014 tentang Hak Cipta (Indonesia)
- Digital Millennium Copyright Act (DMCA)

**Watermark dalam kode dan comment adalah bagian integral dari template ini dan TIDAK BOLEH dihapus.**

## ❓ FAQ (Pertanyaan Umum)

<details>
<summary><b>🔧 Bagaimana cara mengganti warna tema?</b></summary>

Edit file `style.css` baris 24-29:
```css
:root {
    --primary-color: #8B4513;    /* Ganti dengan warna pilihan */
    --secondary-color: #D2691E;
    --accent-color: #DAA520;
}
```
</details>

<details>
<summary><b>📸 Ukuran gambar yang direkomendasikan?</b></summary>

- **Hero Background:** 1920x1080px
- **Menu Items:** 400x300px (6 foto)
- **Gallery:** 500x500px (6 foto)
- **Format:** JPG atau WebP (compressed)
</details>

<details>
<summary><b>🗺️ Cara mengganti Google Maps?</b></summary>

1. Buka https://maps.google.com
2. Cari lokasi café Anda
3. Klik "Share" → "Embed a map"
4. Copy kode iframe
5. Paste di `index.html` (line ~206)
</details>

<details>
<summary><b>📱 Kenapa WhatsApp link tidak buka aplikasi?</b></summary>

Format harus: `https://wa.me/628123456789`
- Tanpa tanda `+`
- Tanpa spasi
- Awali dengan 62 (kode Indonesia)
</details>

<details>
<summary><b>💰 Boleh digunakan untuk proyek komersial?</b></summary>

Tidak, kecuali Anda membeli lisensi komersial. Lihat [LICENSE.md](./LICENSE.md) untuk detail.
</details>

<details>
<summary><b>🚫 Boleh menghapus developer credit?</b></summary>

Tidak, watermark dan developer credit wajib dipertahankan. Menghapusnya adalah pelanggaran copyright.
Untuk menghapus, hubungi untuk lisensi komersial.
</details>

<details>
<summary><b>🌐 Hosting gratis yang direkomendasikan?</b></summary>

- **Netlify** (Recommended) - Auto deploy dari GitHub
- **Vercel** - Sama mudahnya dengan Netlify
- **GitHub Pages** - Langsung dari repository
- **000webhost** - Hosting tradisional gratis
</details>

## 👨‍💻 Developer

**Riski**
- GitHub: [@rclayskuy10](https://github.com/rclayskuy10)
- Saweria: [saweria.co/riski2000](https://saweria.co/riski2000)

## 💖 Support

Jika project ini membantu Anda, pertimbangkan untuk mendukung saya melalui:

[![Saweria](https://img.shields.io/badge/Saweria-Support%20Me-orange?style=flat-square&logo=ko-fi)](https://saweria.co/riski2000)

---

<div align="center">
Made with ☕ & by Riski
</div>
