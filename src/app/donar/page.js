export default function Donar() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Haz una Donación</h1>
      <p className="text-gray-700 mb-6">Tu ayuda nos permite continuar con nuestra labor.</p>
      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
        <h2 className="text-xl font-semibold mb-4">Datos Bancarios</h2>
        <p className="mb-2">Banco: Banco XYZ</p>
        <p className="mb-2">Cuenta: 1234567890</p>
        <p className="mb-4">Nombre: Fundación Nuestra Esperanza</p>
        {/* Placeholder para QR */}
        <div className="w-48 h-48 bg-gray-200 mx-auto flex items-center justify-center border border-gray-300">
          <span className="text-gray-500">Código QR</span>
        </div>
      </div>
    </div>
  );
}
