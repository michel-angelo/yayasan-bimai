import { defineQuery } from "next-sanity";

export const programsQuery = defineQuery(`
  *[_type == "program"] | order(_createdAt asc) {
    _id,
    nama,
    slug,
    thumbnail,
    deskripsiSingkat,
    targetDana,
    danaTerkumpul,
    penerimaMmanfaat,
    status,
    linkWA
  }
`);

export const programBySlugQuery = defineQuery(`
  *[_type == "program" && slug.current == $slug][0] {
    _id,
    nama,
    slug,
    thumbnail,
    galeri,
    deskripsiSingkat,
    deskripsiLengkap,
    targetDana,
    danaTerkumpul,
    penerimaMmanfaat,
    status,
    linkWA
  }
`);

export const galeriQuery = defineQuery(`
  *[_type == "galeri"] | order(tanggal desc) {
    _id,
    foto,
    keterangan,
    kategori,
    tanggal
  }
`);

export const tentangQuery = defineQuery(`
  *[_type == "tentang"][0] {
    sejarah,
    visi,
    misi,
    pengurus,
    legalitas,
    angkaDampak
  }
`);

export const pengaturanQuery = defineQuery(`
  *[_type == "pengaturan"][0] {
    namaYayasan,
    logo,
    nomorWA,
    alamat,
    jamOperasional,
    seo
  }
`);
