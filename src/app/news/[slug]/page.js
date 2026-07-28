import { getItemData, getAllItems } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// 1. Preparación para el despliegue estático (Fase 6)
export async function generateStaticParams() {
  const noticias = getAllItems('noticias');
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

// 2. SEO Dinámico (Tu Fase 3)
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const noticia = await getItemData('noticias', resolvedParams.slug);
    return {
      title: noticia.title,
      description: `Noticia publicada por ${noticia.author || 'Fundación Nuestra Esperanza'}`,
    };
  } catch (e) {
    return { title: 'Noticia no encontrada' };
  }
}

// 3. Renderizado de la página (Tu Fase 4)
export default async function NoticiaDetalle({ params }) {
  // En las versiones recientes de Next.js, params es una promesa que debe resolverse
  const resolvedParams = await params;
  
  let noticia;
  try {
    noticia = await getItemData('noticias', resolvedParams.slug);
  } catch (e) {
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{noticia.title}</h1>
        
        <div className="flex justify-center items-center space-x-4 text-gray-600">
          {noticia.author && (
            <span>Por: <span className="font-semibold">{noticia.author}</span></span>
          )}
          {noticia.date && (
            <span>&bull; {new Date(noticia.date).toLocaleDateString('es-BO')}</span>
          )}
        </div>
      </header>

      {/* Aquí inyectamos el HTML real transformado desde el Markdown del CMS */}
      <div 
        className="prose prose-blue lg:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: noticia.contentHtml }} 
      />
    </article>
  );
}