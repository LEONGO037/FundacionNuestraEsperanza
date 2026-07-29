import Link from "next/link";

export default function Programas() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Programas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Listado de programas */}
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold text-xl">Programa Ejemplo</h2>
          <p className="mt-2 text-gray-600">Descripción del programa...</p>
          <Link href="/programas/programa-ejemplo" className="text-fundacion-blue hover:underline mt-4 inline-block">Ver más</Link>
        </div>
      </div>
    </div>
  );
}
