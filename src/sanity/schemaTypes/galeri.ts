import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galeri',
  title: 'Galeri',
  type: 'document',
  fields: [
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keterangan',
      title: 'Keterangan Foto',
      type: 'string',
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal Kegiatan',
      type: 'date',
    }),
  ],
})