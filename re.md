# Email Verifikasi Registrasi Merchant Duitku

**Dear Merchant,**

Kami dari Payment Gateway Duitku ingin melakukan verifikasi data atas akun terdaftar **Yayasan Bina Masyarakat Indonesia**.

Terima kasih sebelumnya telah mendaftar di **DUITKU** dan mengirimkan dokumen persyaratan registrasi merchant.

---

### Dokumen & Persyaratan yang Belum Dilampirkan / Perlu Penyesuaian

Setelah kami cek, terdapat beberapa persyaratan yang belum lengkap dan perlu ditindaklanjuti:

#### 1. Dokumen Legalitas & Administrasi Pengurus
* **Form Registrasi Merchant** *(Terlampir)*: Harap diperiksa, diisi kolom yang masih kosong, dan dikoreksi jika ada revisi.
* **Scan KTP Seluruh Pengurus Yayasan**.
* **Konfirmasi Penandatanganan PKS**: Mohon konfirmasi apakah proses penandatanganan Perjanjian Kerja Sama (PKS) akan dilakukan oleh ketua pengurus atau diwakilkan. 
  > *Catatan:* Jika diwakilkan, mohon melampirkan **surat kuasa** yang telah ditandatangani menggunakan materai.
* **Scan Halaman Lengkap NIB RBA**.
* **SK Kemenkumham Pendirian**.
* **Scan Surat Sewa Lokasi Usaha** *(Jika tempat usaha sewa atau virtual office)*.
* **Foto Lokasi Usaha / Kantor**: Tampak dalam ruangan (bukan dari Google Maps atau website).

#### 2. Ketentuan & Integrasi Website
* **Aksesibilitas Website**: Website saat ini belum dapat kami akses.
* **Konten Produk/Layanan**: Mohon menambahkan konten produk yang dijual beserta deskripsi dan harga produk (dalam mata uang **Rupiah**).
* **Informasi Contact Support**: Mohon menambahkan nomor telepon, email, dan alamat fisik pada website.
* **Fitur Checkout & Integrasi**: Mohon menambahkan fitur *checkout* / pembelian hingga pembayaran pada website *(silakan mengintegrasikan website dengan **Sandbox Duitku**)*.
* **Dokumen Alur Pembayaran**: Dokumen Alur Proses / Tata Cara Pembayaran pada website berupa *screenshot* dan penjelasannya dalam format **PDF**.

#### 3. Perizinan Khusus Yayasan / Donasi
* **Izin Pengumpulan Uang dan Barang (PUB)**: Surat Izin PUB dari Dinas Sosial atau Kementerian Sosial terkait kegiatan penggalangan dana atau donasi.
  > *Berdasarkan Permensos Nomor 8 Tahun 2021 tentang Penyelenggaraan Pengumpulan Uang atau Barang, Izin PUB wajib dimiliki untuk organisasi atau yayasan yang mengadakan kegiatan penggalangan dana atau donasi.*

---

## 🚀 Panduan Setup Database Supabase (`donations` Table)

Karena Anda **sudah memiliki tabel `donations` di Supabase**, Anda hanya perlu menambahkan 1 kolom baru bernama **`jenis_donasi`** agar dapat membedakan seluruh program donasi (Wakaf Braille, Sedekah Subuh, Operasional, Umum, dll).

### Langkah 1: Jalankan Perintah SQL Tambah Kolom di Supabase SQL Editor

Buka dashboard Supabase Anda (**SQL Editor**) dan jalankan perintah SQL singkat berikut:

```sql
-- Tambahkan kolom jenis_donasi pada tabel donations yang sudah ada
ALTER TABLE public.donations 
ADD COLUMN IF NOT EXISTS jenis_donasi TEXT DEFAULT 'wakaf-quran-braille';

-- Tambahkan indeks untuk query statistik real-time per program
CREATE INDEX IF NOT EXISTS idx_donations_jenis_donasi ON public.donations(jenis_donasi);
```

---

### Struktur Tabel `donations` di Supabase yang Telah Disesuaikan:

| Nama Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `bigint` / `int8` | Primary Key Auto Increment |
| **`jenis_donasi`** 🆕 | `text` | **Jenis Program**: `'wakaf-quran-braille'`, `'sedekah-subuh'`, `'operasional'`, `'umum'` |
| `merchant_order_id` | `text` | Kode unik order transaksi Duitku (`BIMAI-xxx`) |
| `donor_name` | `text` | Nama donatur / "Hamba Allah" |
| `phone` | `text` | Nomor telepon / WhatsApp donatur |
| `amount` | `numeric` | Nominal donasi dalam Rupiah |
| `wakif_name` | `text` | Nama wakif (opsional) |
| `niat` | `text` | Niat / doa kebaikan (opsional) |
| `payment_method` | `text` | Kode pembayaran Duitku (`SP`, `BC`, `M2`, `I1`, `BR`, `BV`, `DA`) |
| `status_payment` | `text` | Status transaksi (`'pending'`, `'success'`, `'failed'`) |
| `payment_code` | `text` | Nomor VA atau String QRIS dari Duitku |
| `payment_reference` | `text` | Reference number dari Duitku Sandbox |
| `created_at` | `timestamptz` | Waktu transaksi dibuat |

---

### Langkah 2: Tambahkan Kredensial Supabase ke `.env.local`

Buka berkas `.env.local` pada project `yayasan-bimai` dan tambahkan URL & API Key Supabase Anda:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

### 🔄 Cara Kerja Integrasi Supabase & Duitku di Backend:

1. **Saat Donatur Membuat Transaksi Checkout (`/donasi`)**:
   - Backend `/api/donations/inquiry` menyimpan record baru ke tabel `donations` di Supabase dengan `status_payment = 'pending'` dan `jenis_donasi` diisi sesuai program yang dipilih (contoh: `'wakaf-quran-braille'`).
2. **Saat Pembayaran Duitku Diselesaikan Donatur**:
   - Duitku menembak callback ke `/api/donations/callback`.
   - Backend memverifikasi MD5 signature dan otomatis meng-update `status_payment = 'success'` di Supabase.
3. **Fetching Statistik Real-Time**:
   - Landing page mana pun dapat menampilkan total donasi lunas per program menggunakan query:
     ```javascript
     const { data } = await supabase
       .from('donations')
       .select('amount')
       .eq('jenis_donasi', 'wakaf-quran-braille')
       .eq('status_payment', 'success');
     ```

---

**Best Regards,**  
**Onboarding Team Duitku**  
Graha Handaya Blok RST, Jl. Raya Perjuangan No.12A, Kebon Jeruk, West Jakarta 11530