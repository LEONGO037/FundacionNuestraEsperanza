// Banda superior reutilizable con el título (h1) y subtítulo opcional de cada página.
export default function EncabezadoPagina({ titulo, subtitulo }) {
  return (
    <section className="relative overflow-hidden bg-fundacion-blue text-white">
      {/* Elementos decorativos de fondo — mismo lenguaje visual que el Hero del Home */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-16 -left-10 w-56 h-56 bg-fundacion-cyan rounded-full opacity-15 blur-3xl animate-float" />
        <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-fundacion-pink rounded-full opacity-10 blur-3xl animate-float delay-300" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 md:pt-28 pb-12 md:pb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold animate-fade-in-up">{titulo}</h1>
        {subtitulo && (
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-fundacion-sky animate-fade-in-up delay-200">
            {subtitulo}
          </p>
        )}
      </div>
    </section>
  );
}
