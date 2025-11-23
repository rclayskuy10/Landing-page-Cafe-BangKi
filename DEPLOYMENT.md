# 📋 Deployment Guide & Security

**Panduan lengkap untuk deploy website dengan aman.**

## 🔒 KEAMANAN - Baca Ini Dulu!

### ⚠️ Peringatan Penting

Repository ini menggunakan **PLACEHOLDER** untuk semua data sensitif:

- ❌ **JANGAN** gunakan placeholder di production
- ❌ **JANGAN** commit data sensitif ke Git
- ✅ **GANTI** semua placeholder sebelum deploy
- ✅ **VERIFIKASI** tidak ada data pribadi ter-commit

### 🛡️ Data yang Harus Diganti

| Data | Placeholder | Contoh Real |
|------|-------------|-------------|
| Telepon | `+62 XXX XXXX XXXX` | `+62 21 1234 5678` |
| WhatsApp | `+62XXXXXXXXXXX` | `6281234567890` |
| Alamat | `Jl. Contoh No. XXX` | `Jl. Sudirman No. 123, Jakarta` |
| Instagram | `your_instagram` | `cafebangki` |
| Maps URL | Generic Jakarta | Embed URL lokasi asli |

### 🔍 Cara Cek Placeholder

```bash
# Cek apakah masih ada placeholder
grep -r "XXX" index.html
grep -r "your_instagram" index.html
grep -r "Contoh" index.html

# Jika ada hasil, berarti masih ada placeholder!
```

### 📝 Best Practices Keamanan

**Sebelum Push ke Git:**
- [ ] Review semua perubahan: `git diff`
- [ ] Cek tidak ada API keys atau password
- [ ] Verifikasi `.gitignore` mencakup file sensitif
- [ ] Pastikan `config.json` tidak ter-commit

**Untuk Data Sensitif:**
```javascript
// Buat config.json (sudah ada di .gitignore)
{
  "phone": "+62 21 1234 5678",
  "whatsapp": "6281234567890",
  "instagram": "cafebangki"
}

// Jangan commit config.json!
// Hanya commit config.example.json
```

---

## 📋 Pre-Deployment Checklist

Gunakan checklist ini sebelum deploy website ke production.

## 🔍 Verifikasi Konten

### Informasi Kontak
- [ ] Nomor telepon sudah diganti dari placeholder
- [ ] WhatsApp number sudah benar
- [ ] Email address sudah benar
- [ ] Alamat lengkap sudah akurat

### Media Sosial
- [ ] Link Instagram sudah benar
- [ ] Link Facebook sudah benar
- [ ] Link Twitter sudah benar
- [ ] Link YouTube sudah benar
- [ ] Semua link media sosial di footer sudah update

### Lokasi & Maps
- [ ] Google Maps embed URL sudah sesuai lokasi
- [ ] Alamat di section Location sudah benar
- [ ] Jam operasional sudah sesuai

## 🖼️ Asset & Media

### Gambar
- [ ] Hero background image sudah diganti (atau sesuai branding)
- [ ] Menu images (6 items) sudah upload
- [ ] Gallery images (6 items) sudah upload
- [ ] Semua gambar sudah dioptimasi (compressed)
- [ ] Alt text pada gambar sudah descriptive

### Performance
- [ ] Total size gambar < 5MB
- [ ] Format gambar: WebP atau JPG optimized
- [ ] Lazy loading sudah aktif

## 🎨 Branding & Styling

### Warna & Font
- [ ] Color scheme sudah sesuai brand
- [ ] Logo sudah diganti (jika ada)
- [ ] Font sudah sesuai brand identity

### Konten
- [ ] Nama café sudah benar di semua tempat
- [ ] Tagline sudah sesuai
- [ ] Deskripsi About Us sudah custom
- [ ] Menu items sudah sesuai produk
- [ ] Harga menu sudah benar (jika ditampilkan)

## 🔒 Keamanan & Privacy

### Data Sensitif
- [ ] Tidak ada API keys yang ter-expose
- [ ] Tidak ada kredensial dalam kode
- [ ] File `config.json` ada di `.gitignore`
- [ ] Tidak ada data pribadi yang tidak perlu

### Copyright
- [ ] Developer credit masih ada (required!)
- [ ] Copyright year sudah update
- [ ] Watermark intact (jangan dihapus!)

## 🌐 SEO & Meta Tags

### Basic SEO
- [ ] Title tag sudah descriptive
- [ ] Meta description sudah ada
- [ ] Open Graph tags (untuk social sharing)
- [ ] Favicon sudah ada

```html
<!-- Tambahkan di <head> jika belum ada -->
<meta name="description" content="Deskripsi café Anda">
<meta property="og:title" content="Café BangKi">
<meta property="og:description" content="Deskripsi café">
<meta property="og:image" content="link-ke-gambar">
```

## 📱 Testing

### Cross-Browser
- [ ] Tested di Chrome
- [ ] Tested di Firefox
- [ ] Tested di Safari
- [ ] Tested di Edge

### Responsive
- [ ] Mobile view (320px - 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (1024px+)
- [ ] Landscape orientation

### Functionality
- [ ] Semua link navigation bekerja
- [ ] Smooth scroll bekerja
- [ ] Mobile menu (hamburger) bekerja
- [ ] Semua external links bekerja
- [ ] WhatsApp link membuka WA dengan benar
- [ ] Map embed terload dengan baik

## ⚡ Performance

### Speed
- [ ] Page load < 3 detik
- [ ] First Contentful Paint < 1.5 detik
- [ ] No console errors

### Optimization
- [ ] CSS minified (optional untuk production)
- [ ] JavaScript minified (optional)
- [ ] Images compressed
- [ ] Unused code removed

## 🚀 Deployment

### Hosting
- [ ] Hosting provider sudah dipilih
- [ ] Domain sudah siap (jika custom)
- [ ] SSL certificate aktif (HTTPS)

### Upload
- [ ] Semua file sudah upload
- [ ] File structure tetap sama
- [ ] .htaccess configured (jika perlu)

### Post-Deployment
- [ ] Test di live URL
- [ ] Verify semua functionality
- [ ] Check mobile version
- [ ] Submit ke Google Search Console

## 📊 Analytics (Opsional)

- [ ] Google Analytics installed
- [ ] Facebook Pixel (jika perlu)
- [ ] Tracking conversions setup

## 📞 Contact Forms (Jika ditambahkan)

- [ ] Form validation bekerja
- [ ] Email notification configured
- [ ] Thank you message muncul
- [ ] Anti-spam protection active

---

## ✅ Final Check

Sebelum launch:

```bash
# 1. Verify no sensitive data
git log --all --full-history --source -- config.json

# 2. Test locally one more time
# Open index.html di browser

# 3. Check file sizes
ls -lh

# 4. Ready to deploy!
```

## 🎉 Launch!

Setelah semua checklist ✅, website siap untuk diluncurkan!

**Good luck with your café website! ☕**

---

**Need help?** Contact: [saweria.co/riski2000](https://saweria.co/riski2000)
