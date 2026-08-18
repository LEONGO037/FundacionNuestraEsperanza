// Helper de lectura de contenido del CMS (Decap) — solo servidor (SSG).
// Lee los archivos markdown de src/content/* durante el build.
//
// Regla de slug: el slug de cada entrada es el nombre del archivo completo
// sin la extensión .md, incluido el prefijo de fecha que genera Decap CMS
// (ej.: "2026-07-29-albergue-casa-esperanza"). Es la regla más simple y
// estable: no hay riesgo de colisiones ni de desincronización entre el
// listado y el detalle.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

// Convierte lo que venga en el front-matter a string ISO o null.
// (Un objeto Date no puede pasarse de Server a Client Component.)
function toIsoString(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return isNaN(date.getTime()) ? null : date.toISOString();
}

// Lee todos los .md de una colección. Devuelve [] si la carpeta no existe
// o está vacía (el CMS puede no tener contenido cargado todavía y el build
// no debe caerse).
function readCollection(collection) {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), data, content };
    });
}

function readEntry(collection, slug) {
  const filePath = path.join(CONTENT_DIR, collection, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, data, content };
}

async function markdownToHtml(markdown) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

// --- Normalizadores: garantizan que las páginas reciban siempre la misma
// --- forma de objeto, exista o no cada campo en el front-matter.

function normalizePrograma({ slug, data }) {
  return {
    slug,
    title: data.title ?? "",
    date: toIsoString(data.date),
    thumbnail: data.thumbnail ?? null,
    description: data.description ?? "",
    order: typeof data.order === "number" ? data.order : null,
  };
}

function normalizeNoticia({ slug, data }) {
  return {
    slug,
    title: data.title ?? "",
    date: toIsoString(data.date),
    author: data.author ?? null,
    thumbnail: data.thumbnail ?? null,
    resumen: data.resumen ?? "",
  };
}

function normalizeTestimonio({ slug, data, content }) {
  // Strip HTML comments (e.g. <!-- Contenido preliminar... -->) from the body
  const cleanBody = content.trim().replace(/<!--[\s\S]*?-->/g, "").trim();
  return {
    slug,
    title: data.title ?? "",
    role: data.role ?? null,
    avatar: data.avatar ?? null,
    body: cleanBody,
  };
}

// --- API pública ---

// Todos los programas, ordenados por `order` (si existe) y luego por título.
export function getProgramas() {
  return readCollection("programas")
    .map(normalizePrograma)
    .sort((a, b) => {
      const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) return orderA - orderB;
      return a.title.localeCompare(b.title, "es");
    });
}

// Un programa con su cuerpo convertido a HTML, o null si no existe.
export async function getProgramaBySlug(slug) {
  const entry = readEntry("programas", slug);
  if (!entry) return null;
  return {
    ...normalizePrograma(entry),
    contentHtml: await markdownToHtml(entry.content),
  };
}

// Todas las noticias, ordenadas por fecha descendente (más reciente primero).
export function getNoticias() {
  return readCollection("noticias")
    .map(normalizeNoticia)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

// Una noticia con su cuerpo convertido a HTML, o null si no existe.
export async function getNoticiaBySlug(slug) {
  const entry = readEntry("noticias", slug);
  if (!entry) return null;
  return {
    ...normalizeNoticia(entry),
    contentHtml: await markdownToHtml(entry.content),
  };
}

// Las N noticias más recientes (para la página de Inicio).
export function getNoticiasRecientes(cantidad = 3) {
  return getNoticias().slice(0, cantidad);
}

// Todos los testimonios. `body` es el texto markdown sin convertir
// (los testimonios son texto plano corto; se renderiza como texto).
export function getTestimonios() {
  return readCollection("testimonios").map(normalizeTestimonio);
}
