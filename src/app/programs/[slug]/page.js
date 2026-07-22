export default function ProgramaDetalle({ params }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Detalle del Programa: {params.slug}</h1>
      <p className="text-gray-700">Cargando detalles del programa...</p>
    </div>
  );
}
