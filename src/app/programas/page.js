import { getProgramas } from "@/lib/content";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import TarjetaPrograma from "@/components/TarjetaPrograma";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";

export const metadata = {
  title: "Programas",
  description:
    "Conoce los programas de apoyo integral gratuito de la Fundación Nuestra Esperanza para niños, niñas y adolescentes con cáncer y sus familias: albergue, alimentación, apoyo psicosocial, recreación y más.",
};

export default function Programas() {
  const programas = getProgramas();

  return (
    <>
      <EncabezadoPagina
        titulo="Nuestros Programas"
        subtitulo="Desde 2017 ofrecemos un programa de intervención integral gratuito que acompaña a los niños, niñas y adolescentes con cáncer y a sus familias durante todo el tratamiento."
      />
      <section className="container mx-auto px-6 py-12">
        {programas.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programas.map((programa) => (
              <TarjetaPrograma key={programa.slug} programa={programa} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-lg text-gray-700">
            Pronto publicaremos información sobre nuestros programas.
          </p>
        )}
      </section>
      <LlamadaALaAccion />
    </>
  );
}
