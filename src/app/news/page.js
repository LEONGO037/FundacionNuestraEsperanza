import { getAllItems } from '@/lib/markdown';
import Link from 'next/link';

export default function Noticias() {
  // 1. Llamamos a tu motor para extraer todas las noticias del CMS
  const noticias = getAllItems('noticias');

  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Noticias y Novedades</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 2. Hacemos un mapeo dinámico de cada archivo markdown encontrado */}
        {noticias.map((noticia) => (
          <div key={noticia.slug} className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            <h2 className="font-bold text-xl text-gray-800 mb-2">{noticia.title}</h2>
            
            {noticia.date && (
              <time className="text-sm text-gray-500 mb-4 block">
                {new Date(noticia.date).toLocaleDateString('es-BO')}
              </time>
            )}
            
            <p className="mt-2 text-gray-600 flex-grow">
              {/* Si el CMS no tiene descripción corta, mostramos un texto por defecto */}
              Haz clic para leer los detalles completos de esta noticia.
            </p>
            
            {/* 3. Enlazamos a la ruta dinámica [slug] que configuraste antes */}
            <Link 
              href={`/news/${noticia.slug}`} 
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline mt-6 inline-block"
            >
              Leer más &rarr;
            </Link>
          </div>
        ))}

        {/* Mensaje por si la carpeta de noticias del CMS está vacía */}
        {noticias.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p className="text-lg">Aún no hay noticias publicadas.</p>
          </div>
        )}
      </div>
    </div>
  );
}