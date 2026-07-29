export default function Contacto() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h2>
          <p className="text-gray-700 mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
          <p className="text-gray-700 mb-4">Horario: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Contactar por WhatsApp
          </a>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Mapa incrustado aquí</span>
        </div>
      </div>
    </div>
  );
}
