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

## 🚀 Panduan Setup Database Supabase (Donasi Terintegrasi)

Untuk menyimpan seluruh riwayat donasi dari semua program (Wakaf Braille, Sedekah Subuh, Operasional, Umum, dll), ikuti langkah setup Supabase berikut:

### Langkah 1: Buat Tabel `donations` di Supabase SQL Editor

Buka dashboard Supabase Anda (**SQL Editor**) dan jalankan perintah SQL berikut:

```sql
-- 1. Buat Tabel Donations Bersama untuk Seluruh Program Yayasan BIMAI
CREATE TABLE public.donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(100) UNIQUE NOT NULL,
    program_type VARCHAR(100) NOT NULL DEFAULT 'sedekah-umum', -- 'wakaf-quran-braille', 'sedekah-subuh', 'operasional', 'umum'
    program_name VARCHAR(255) NOT NULL,
    donor_name VARCHAR(150) NOT NULL DEFAULT 'Hamba Allah',
    phone VARCHAR(50),
    email VARCHAR(150),
    amount NUMERIC(12, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    wakif_name VARCHAR(150),
    doa TEXT,
    payment_status VARCHAR(50) NOT NULL DEFAULT 'PENDING', -- 'PENDING', 'SUCCESS', 'FAILED', 'EXPIRED'
    reference_id VARCHAR(100),
    qr_string TEXT,
    va_number VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Tambahkan Indeks untuk Akses Cepat Statistik & Query status
CREATE INDEX idx_donations_order_id ON public.donations(order_id);
CREATE INDEX idx_donations_program_type ON public.donations(program_type);
CREATE INDEX idx_donations_payment_status ON public.donations(payment_status);

-- 3. Aktifkan Row Level Security (RLS)
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- 4. Policy Akses Publik untuk Mengambil Statistik Donasi Lunas (SUCCESS)
CREATE POLICY "Public can read successful donations" 
ON public.donations FOR SELECT 
USING (payment_status = 'SUCCESS');

-- 5. Policy Akses Backend API (Insert & Update Status)
CREATE POLICY "Enable insert for backend" 
ON public.donations FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Enable update for backend" 
ON public.donations FOR UPDATE 
USING (true);
```

---

### Langkah 2: Tambahkan Variabel Supabase ke `.env.local`

Buka berkas `.env.local` pada project `yayasan-bimai` dan tambahkan kredensial Supabase Anda:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

### 🔄 Cara Kerja Integrasi Supabase & Duitku:

1. **Saat Donatur Mengisi Form Checkout (`/donasi`)**:
   - Backend (`/api/donations/inquiry`) menyimpan record baru ke tabel `donations` di Supabase dengan status `payment_status = 'PENDING'` dan `program_type` sesuai program yang dipilih (contoh: `'wakaf-quran-braille'`).
2. **Saat Pembayaran Duitku Diselesaikan Donatur**:
   - Duitku menembak callback ke `/api/donations/callback`.
   - Backend memverifikasi MD5 signature dan memperbarui `payment_status = 'SUCCESS'` secara real-time di Supabase.
3. **Statistik Real-Time Landing Page**:
   - Landing page mana pun dapat meng-query total donasi lunas khusus program tersebut menggunakan filter:
     `supabase.from('donations').select('amount').eq('program_type', 'wakaf-quran-braille').eq('payment_status', 'SUCCESS')`.

---

**Best Regards,**  
**Onboarding Team Duitku**  
Graha Handaya Blok RST, Jl. Raya Perjuangan No.12A, Kebon Jeruk, West Jakarta 11530