export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Fundación Nuestra Esperanza</h1>
      <section className="w-full mt-10">
        <h2 className="text-2xl font-semibold mb-4">Noticias Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder para noticias */}
          <div className="p-4 border rounded-lg shadow">
            <h3 className="font-bold">Noticia de ejemplo</h3>
            <p className="text-sm mt-2 text-gray-600">Descripción breve de la noticia...</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-10">
        <h2 className="text-2xl font-semibold mb-4">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder para testimonios */}
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="italic">&ldquo;Un testimonio de ejemplo de una persona ayudada.&rdquo;</p>
            <p className="font-bold mt-2">- Persona de Ejemplo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
