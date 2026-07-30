// Banda superior reutilizable con el título (h1) y subtítulo opcional de cada página.
export default function EncabezadoPagina({ titulo, subtitulo }) {
  return (
    <section className="bg-fundacion-blue text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">{titulo}</h1>
        {subtitulo && (
          <p className="mt-4 max-w-3xl text-base md:text-lg text-fundacion-sky">
            {subtitulo}
          </p>
        )}
      </div>
    </section>
  );
}
