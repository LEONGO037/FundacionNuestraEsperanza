export default async function NoticiaDetalle({ params }) {
  const { slug } = await params;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Noticia: {slug}</h1>
      <p className="text-gray-700">Contenido de la noticia...</p>
    </div>
  );
}
