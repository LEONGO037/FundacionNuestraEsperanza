// Tarjeta de programa para listados: imagen (opcional), título, descripción corta y enlace al detalle.
import Link from "next/link";
import Image from "next/image";

export default function TarjetaPrograma({ programa }) {
  const { slug, title, description, thumbnail } = programa;

  return (
    <article className="h-full">
      <Link
        href={`/programas/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-pink"
      >
        {thumbnail ? (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={`Imagen del programa ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        ) : (
          /* Placeholder institucional cuando el programa aún no tiene imagen */
          <div
            aria-hidden="true"
            className="flex aspect-video w-full items-center justify-center bg-fundacion-sky group-hover:bg-fundacion-sky/80 transition-colors"
          >
            <span className="text-6xl font-bold text-fundacion-blue group-hover:scale-110 transition-transform duration-300">
              {title ? title.charAt(0).toUpperCase() : "•"}
            </span>
          </div>
        )}
        <div className="flex flex-grow flex-col p-6">
          <h2 className="text-xl font-bold text-fundacion-blue line-clamp-2">{title}</h2>
          {description && (
            <p className="mt-3 flex-grow text-gray-700 line-clamp-3">{description}</p>
          )}
          <span className="mt-4 inline-flex items-center font-semibold text-fundacion-pink group-hover:underline">
            Ver programa <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
