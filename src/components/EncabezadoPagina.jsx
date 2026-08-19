// Banda superior reutilizable con el título (h1) y subtítulo opcional de cada página.
export default function EncabezadoPagina({ titulo, subtitulo }) {
  return (
    <section className="bg-fundacion-blue text-white">
      <div className="container mx-auto px-6 pt-24 md:pt-28 pb-12 md:pb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{titulo}</h1>
        {subtitulo && (
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-fundacion-sky">
            {subtitulo}
          </p>
        )}
      </div>
    </section>
  );
}
