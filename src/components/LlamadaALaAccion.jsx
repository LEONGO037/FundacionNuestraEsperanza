// Bloque de llamada a la acción hacia Donar y (opcionalmente) Voluntariado, reutilizable al pie de las páginas.
import Link from "next/link";

export default function LlamadaALaAccion({
  titulo = "Tú también puedes ser parte",
  mensaje = "Tu apoyo permite que más niños, niñas y adolescentes con cáncer reciban acompañamiento integral junto a sus familias.",
  mostrarVoluntariado = true,
  mostrarDonar = true,
}) {
  return (
    <section className="bg-fundacion-pale-pink">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue animate-fade-in-up">
          {titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700 animate-fade-in-up delay-100">{mensaje}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-200">
          {mostrarDonar && (
            <Link
              href="/donar"
              className="glass-shimmer rounded-full bg-fundacion-pink px-8 py-3 text-lg font-bold text-white shadow-lg shadow-fundacion-pink/30 transition-all duration-300 hover:bg-fundacion-blue hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fundacion-blue/30 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-blue"
            >
              Donar ahora
            </Link>
          )}
          {mostrarVoluntariado && (
            <Link
              href="/voluntariado"
              className="rounded-full border-2 border-fundacion-blue bg-white/40 backdrop-blur-sm px-8 py-3 text-lg font-bold text-fundacion-blue shadow-sm transition-all duration-300 hover:bg-fundacion-blue hover:text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fundacion-blue/20 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-pink"
            >
              Ser voluntario
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
