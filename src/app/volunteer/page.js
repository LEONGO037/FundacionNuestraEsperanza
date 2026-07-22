export default function Voluntariado() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Únete como Voluntario</h1>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">¿Por qué quieres unirte?</label>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" rows="4"></textarea>
        </div>
        <button type="button" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Enviar Registro
        </button>
      </form>
    </div>
  );
}
