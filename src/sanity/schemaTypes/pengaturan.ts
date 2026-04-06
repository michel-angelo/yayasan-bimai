import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pengaturan',
  title: 'Pengaturan Global',
  type: 'document',
  fields: [
    defineField({
      name: 'namaYayasan',
      title: 'Nama Yayasan',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'nomorWA',
      title: 'Nomor WhatsApp CS',
      type: 'string',
    }),
    defineField({
      name: 'alamat',
      title: 'Alamat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'jamOperasional',
      title: 'Jam Operasional',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 },
        { name: 'ogImage', title: 'OG Image', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
})