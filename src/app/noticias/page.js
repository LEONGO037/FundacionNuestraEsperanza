import { getNoticias } from "@/lib/content";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import TarjetaNoticia from "@/components/TarjetaNoticia";

export const metadata = {
  title: "Noticias",
  description:
    "Entérate de las últimas actividades, campañas y novedades de la Fundación Nuestra Esperanza en apoyo a niños, niñas y adolescentes con cáncer en Bolivia.",
};

export default function Noticias() {
  const noticias = getNoticias();

  return (
    <>
      <EncabezadoPagina
        titulo="Noticias"
        subtitulo="Las últimas actividades y novedades de la fundación."
      />
      <section className="container mx-auto px-6 py-12">
        {noticias.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia) => (
              <TarjetaNoticia
                key={noticia.slug}
                noticia={noticia}
                extracto={noticia.resumen}
              />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-lg text-gray-700">
            Pronto publicaremos nuestras primeras noticias.
          </p>
        )}
      </section>
    </>
  );
}
