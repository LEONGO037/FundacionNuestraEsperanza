export default function Contacto() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h2>
          <p className="text-gray-700 mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
          <p className="text-gray-700 mb-4">Horario: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
          <a href="https://wa.me/59170112236?text=Hola,%20me%20gustar%C3%ADa%20contactarme%20con%20la%20Fundaci%C3%B3n%20Nuestra%20Esperanza." target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Contactar por WhatsApp
          </a>
        </div>
        <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://maps.google.com/maps?q=Fundación+Nuestra+Esperanza,+Bolivia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '300px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
          <div className="bg-white p-4 text-center border-t border-gray-200">
            <a 
              href="https://share.google/2QUiVaaDXmv1ZNbas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-fundacion-blue text-white font-bold py-2 px-6 rounded-full hover:bg-fundacion-pink transition-colors duration-300"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
