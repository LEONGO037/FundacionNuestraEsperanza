import { getItemData, getAllItems } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const programas = getAllItems('programas');
  return programas.map((programa) => ({
    slug: programa.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const programa = await getItemData('programas', resolvedParams.slug);
    return {
      title: `${programa.title} | Programas`,
      description: programa.description || `Detalles del programa ${programa.title}`,
    };
  } catch (e) {
    return { title: 'Programa no encontrado' };
  }
}

export default async function ProgramaDetalle({ params }) {
  const resolvedParams = await params;
  
  let programa;
  try {
    programa = await getItemData('programas', resolvedParams.slug);
  } catch (e) {
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">{programa.title}</h1>
        {programa.description && (
          <p className="text-xl text-gray-600 mt-4">{programa.description}</p>
        )}
      </header>

      <div 
        className="prose prose-blue lg:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: programa.contentHtml }} 
      />
    </article>
  );
}