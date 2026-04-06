import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Program',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nama',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Foto Thumbnail',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'galeri',
      title: 'Foto Galeri',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'deskripsiSingkat',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'deskripsiLengkap',
      title: 'Deskripsi Lengkap',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'targetDana',
      title: 'Target Dana (Rp)',
      type: 'number',
    }),
    defineField({
      name: 'danaTerkumpul',
      title: 'Dana Terkumpul (Rp)',
      type: 'number',
    }),
    defineField({
      name: 'penerimaMmanfaat',
      title: 'Jumlah Penerima Manfaat',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Aktif', value: 'aktif' },
          { title: 'Selesai', value: 'selesai' },
        ],
        layout: 'radio',
      },
      initialValue: 'aktif',
    }),
    defineField({
      name: 'linkWA',
      title: 'Link WhatsApp CS',
      type: 'url',
    }),
  ],
})