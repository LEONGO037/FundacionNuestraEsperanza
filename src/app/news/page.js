export default function Noticias() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Noticias</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Listado de noticias */}
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold text-xl">Noticia de Ejemplo</h2>
          <p className="mt-2 text-gray-600">Extracto de la noticia...</p>
          <a href="/news/noticia-ejemplo" className="text-blue-500 hover:underline mt-4 inline-block">Leer más</a>
        </div>
      </div>
    </div>
  );
}
