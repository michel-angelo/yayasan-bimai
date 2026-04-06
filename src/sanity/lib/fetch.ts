import { client } from "./client";
import {
  programsQuery,
  programBySlugQuery,
  galeriQuery,
  tentangQuery,
  pengaturanQuery,
} from "./queries";

export async function getPrograms() {
  return await client.fetch(programsQuery);
}

export async function getProgramBySlug(slug: string) {
  return await client.fetch(programBySlugQuery, { slug });
}

export async function getGaleri() {
  return await client.fetch(galeriQuery);
}

export async function getTentang() {
  return await client.fetch(tentangQuery);
}

export async function getPengaturan() {
  return await client.fetch(pengaturanQuery);
}
