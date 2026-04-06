import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tentang',
  title: 'Tentang Kami',
  type: 'document',
  fields: [
    defineField({
      name: 'sejarah',
      title: 'Sejarah',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visi',
      title: 'Visi',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'misi',
      title: 'Misi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pengurus',
      title: 'Struktur Pengurus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nama', title: 'Nama', type: 'string' },
            { name: 'jabatan', title: 'Jabatan', type: 'string' },
            { name: 'foto', title: 'Foto', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'legalitas',
      title: 'Dokumen Legalitas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nama', title: 'Nama Dokumen', type: 'string' },
            { name: 'file', title: 'File', type: 'file' },
          ],
        },
      ],
    }),
    defineField({
      name: 'angkaDampak',
      title: 'Angka Dampak',
      type: 'object',
      fields: [
        { name: 'penerimaManfaat', title: 'Total Penerima Manfaat', type: 'number' },
        { name: 'programAktif', title: 'Program Aktif', type: 'number' },
        { name: 'tahunBerdiri', title: 'Tahun Berdiri', type: 'number' },
        { name: 'donatur', title: 'Total Donatur', type: 'number' },
      ],
    }),
  ],
})