import { type SchemaTypeDefinition } from 'sanity'
import program from './program'
import galeri from './galeri'
import tentang from './tentang'
import pengaturan from './pengaturan'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [program, galeri, tentang, pengaturan],
}