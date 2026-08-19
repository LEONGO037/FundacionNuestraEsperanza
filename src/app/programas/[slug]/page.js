import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramas, getProgramaBySlug } from "@/lib/content";
import { formatearFecha } from "@/lib/fechas";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";

// Clases de tipografía para el HTML del CMS (el proyecto no usa @tailwindcss/typography).
const clasesContenido =
  "[&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-fundacion-blue " +
  "[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-fundacion-blue " +
  "[&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-800 " +
  "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 " +
  "[&_a]:text-fundacion-pink [&_a]:underline " +
  "[&_blockquote]:border-l-4 [&_blockquote]:border-fundacion-cyan [&_blockquote]:pl-4 [&_blockquote]:italic " +
  "[&_img]:rounded-lg";

export function generateStaticParams() {
  return getProgramas().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const programa = await getProgramaBySlug(slug);
  if (!programa) {
    return { title: "Programa no encontrado" };
  }
  return {
    title: programa.title,
    description: programa.description,
  };
}

export default async function ProgramaDetalle({ params }) {
  const { slug } = await params;
  const programa = await getProgramaBySlug(slug);

  if (!programa) {
    notFound();
  }

  const fechaLegible = formatearFecha(programa.date);

  return (
    <>
      <article className="container mx-auto max-w-3xl px-6 pt-24 md:pt-28 pb-12">
        <Link
          href="/programas"
          className="font-semibold text-fundacion-blue hover:underline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-pink"
        >
          ← Volver a Programas
        </Link>

        {programa.thumbnail && (
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={programa.thumbnail}
              alt={`Imagen del programa ${programa.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="mt-6 text-3xl font-bold text-fundacion-blue md:text-4xl">
          {programa.title}
        </h1>
        {fechaLegible && (
          <time
            dateTime={programa.date}
            className="mt-2 block text-sm text-gray-600"
          >
            Actualizado el {fechaLegible}
          </time>
        )}

        {/* El HTML proviene del CMS (Decap) administrado por la propia fundación:
            es contenido de confianza, no entrada de usuarios anónimos. */}
        <div
          className={`mt-8 ${clasesContenido}`}
          dangerouslySetInnerHTML={{ __html: programa.contentHtml }}
        />
      </article>
      <LlamadaALaAccion
        titulo="Apoya este programa"
        mostrarVoluntariado={false}
      />
    </>
  );
}
