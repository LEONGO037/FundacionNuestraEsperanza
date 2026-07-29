import { getItemData, getAllItems } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Image from 'next/image'; // 1. Importamos el componente optimizado

export async function generateStaticParams() {
  const noticias = getAllItems('noticias');
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

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

export default async function NoticiaDetalle({ params }) {
  const resolvedParams = await params;
  
  let noticia;
  try {
    noticia = await getItemData('noticias', resolvedParams.slug);
  } catch (e) {
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center border-b border-gray-200 pb-8">
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

      {/* 2. Inyección de la imagen destacada optimizada para LCP */}
      {noticia.thumbnail && (
        <div className="relative w-full h-64 md:h-96 mb-12">
          <Image 
            src={noticia.thumbnail} 
            alt={`Imagen destacada de ${noticia.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            priority /* <-- Esto garantiza el cumplimiento de tu Fase 5 */
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      <div 
        className="prose prose-blue lg:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: noticia.contentHtml }} 
      />
    </article>
  );
}