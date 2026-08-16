import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

// Función para obtener todos los archivos de una colección (ej. 'noticias' o 'programas')
export function getAllItems(collection) {
  const directory = path.join(contentDirectory, collection);
  
  // Si la carpeta no existe aún, devolvemos un array vacío
  if (!fs.existsSync(directory)) {
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  
  const allItemsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para analizar los metadatos
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // Ordenar por fecha de más reciente a más antiguo
  return allItemsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Función para obtener un item específico por su slug y procesar el HTML
export async function getItemData(collection, slug) {
  const fullPath = path.join(contentDirectory, collection, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Convertir el markdown a HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}