import { getAllItems } from '@/lib/markdown';
import Link from 'next/link';

export default function Programas() {
  const programas = getAllItems('programas');

  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Nuestros Programas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programas.map((programa) => (
          <div key={programa.slug} className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            <h2 className="font-bold text-2xl text-gray-800 mb-3">{programa.title}</h2>
            
            <p className="mt-2 text-gray-600 flex-grow">
              {programa.description || 'Conoce más detalles sobre este programa de apoyo integral.'}
            </p>
            
            <Link 
              href={`/programs/${programa.slug}`} 
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline mt-6 inline-block"
            >
              Ver detalles &rarr;
            </Link>
          </div>
        ))}

        {programas.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p className="text-lg">Los programas se están actualizando.</p>
          </div>
        )}
      </div>
    </div>
  );
}