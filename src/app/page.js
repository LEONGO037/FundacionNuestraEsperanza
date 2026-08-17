import { getTestimonios, getNoticiasRecientes } from "@/lib/content";
import TarjetaNoticia from "@/components/TarjetaNoticia";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const noticias = getNoticiasRecientes(3);
  const testimonios = getTestimonios();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-fundacion-cream py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-fundacion-blue mb-6">
          Fundación Nuestra Esperanza
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Apoyamos a niños, niñas y adolescentes de escasos recursos con cáncer y a sus familias en Bolivia, a través del albergue Casa Esperanza y programas gratuitos de apoyo integral.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/donar" className="bg-fundacion-pink text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors">
            Haz una Donación
          </Link>
          <Link href="/voluntariado" className="bg-white text-fundacion-blue border-2 border-fundacion-blue font-bold py-3 px-8 rounded-full hover:bg-fundacion-blue hover:text-white transition-colors">
            Ser Voluntario
          </Link>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-fundacion-blue text-white py-20 relative overflow-hidden">
        {/* Elementos decorativos sutiles de fondo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-fundacion-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-fundacion-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-2">250+</h2>
              <p className="text-lg md:text-xl font-medium">Niños que Recibieron Ayuda</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-2">430+</h2>
              <p className="text-lg md:text-xl font-medium">Diagnósticos de Niños con Cáncer por<br/>Año en Bolivia</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-2">50+</h2>
              <p className="text-lg md:text-xl font-medium">Voluntarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="bg-gradient-to-b from-[#e0fcff] to-[#f0fbff] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center text-black mb-12 uppercase tracking-wide">
            Testimonios
            <div className="w-16 h-1 bg-fundacion-pink mx-auto mt-2"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio) => (
              <div key={testimonio.slug} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-fundacion-pink relative">
                  {testimonio.avatar ? (
                    <Image 
                      src={testimonio.avatar} 
                      alt={`Foto de ${testimonio.title}`} 
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                  )}
                </div>
                <h3 className="font-extrabold text-xl text-gray-900 mb-1">{testimonio.title}</h3>
                {testimonio.role && (
                  <p className="text-fundacion-cyan font-bold text-xs uppercase tracking-widest mb-4">{testimonio.role}</p>
                )}
                <p className="text-gray-500 italic text-sm leading-relaxed">
                  {testimonio.body || "Sin testimonio disponible."}
                </p>
              </div>
            ))}
            
            {testimonios.length === 0 && (
              <div className="col-span-3 text-center text-gray-500 py-10">
                Aún no hay testimonios registrados.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Noticias Recientes */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-fundacion-blue text-center mb-12">
            Noticias Recientes
          </h2>
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {noticias.map((noticia) => (
                <TarjetaNoticia 
                  key={noticia.slug} 
                  noticia={noticia} 
                  extracto={noticia.resumen}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Pronto publicaremos novedades.</p>
          )}
          
          <div className="text-center mt-12">
            <Link href="/noticias" className="text-fundacion-pink font-bold hover:underline">
              Ver todas las noticias &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
