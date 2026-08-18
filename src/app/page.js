import { getTestimonios, getNoticiasRecientes, getProgramas } from "@/lib/content";
import TarjetaNoticia from "@/components/TarjetaNoticia";
import TarjetaPrograma from "@/components/TarjetaPrograma";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";
import ContadorAnimado from "@/components/ContadorAnimado";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const noticias = getNoticiasRecientes(3);
  const testimonios = getTestimonios();
  const programas = getProgramas().slice(0, 3);

  return (
    <div className="flex flex-col">

      {/* ═══════════════════════════════════════════════════════════
          HERO — Fondo azul institucional con elementos decorativos,
          slogan emocional y CTAs principales (Donar / Voluntario).
          Sigue la propuesta del mockup: overlay degradado + frase
          emotiva centrada.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-fundacion-blue overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center justify-center">
        {/* Elementos decorativos de fondo — formas orgánicas con blur */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-fundacion-cyan rounded-full opacity-15 blur-3xl animate-float" />
          <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-fundacion-pink rounded-full opacity-12 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fundacion-sky rounded-full opacity-[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Toda vida merece{" "}
            <span className="text-white">esperanza</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Brindamos albergue gratuito, alimentación y apoyo integral a niños, niñas y adolescentes con cáncer y sus familias en Bolivia, para que nunca enfrenten este camino solos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <Link
              href="/donar"
              className="inline-flex items-center justify-center bg-fundacion-pink text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-fundacion-pink/30 hover:bg-white hover:text-fundacion-pink hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Quiero Donar
            </Link>
            <Link
              href="/voluntariado"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/60 font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-fundacion-blue hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-cyan"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ser Voluntario
            </Link>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute -bottom-1 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path d="M0 40C240 80 480 100 720 80C960 60 1200 20 1440 40V100H0V40Z" fill="var(--color-fundacion-cream)" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ESTADÍSTICAS DE IMPACTO — Tarjetas con contadores animados.
          Datos alineados al TDR: ~400 familias, +12 años, 50+ voluntarios.
          Diseño: tarjetas con iconos y borde de color.
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-fundacion-cream">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-fundacion-blue text-center mb-4 animate-fade-in-up">
            Estadísticas de Impacto
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12 animate-fade-in-up delay-100">
            Más de una década acompañando a quienes más lo necesitan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {/* Familias */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-fundacion-pink animate-scale-in delay-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fundacion-pale-pink mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-fundacion-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-bold text-fundacion-pink mb-2">
                <ContadorAnimado valor={400} sufijo="+" />
              </p>
              <p className="text-gray-700 font-medium text-lg">Familias Beneficiadas</p>
            </div>

            {/* Años */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-fundacion-cyan animate-scale-in delay-400">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e0fcff] mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-fundacion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-bold text-fundacion-cyan mb-2">
                <ContadorAnimado valor={12} sufijo="+" />
              </p>
              <p className="text-gray-700 font-medium text-lg">Años de Operación</p>
            </div>

            {/* Voluntarios */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-fundacion-green animate-scale-in delay-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#edf7e0] mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-fundacion-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-bold text-fundacion-green mb-2">
                <ContadorAnimado valor={50} sufijo="+" />
              </p>
              <p className="text-gray-700 font-medium text-lg">Voluntarios Activos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NUESTROS PROGRAMAS — Vista previa de los 3 primeros programas
          usando el componente TarjetaPrograma existente.
          Según el mockup: tarjetas con imagen + título + descripción + enlace.
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-fundacion-blue text-center mb-4">
            Nuestros Programas
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Intervención integral gratuita que acompaña a las familias durante todo el tratamiento.
          </p>

          {programas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programas.map((programa) => (
                <TarjetaPrograma key={programa.slug} programa={programa} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">
              Pronto publicaremos información sobre nuestros programas.
            </p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/programas"
              className="inline-flex items-center gap-2 text-fundacion-blue font-bold text-lg hover:text-fundacion-pink transition-colors duration-300 group"
            >
              Ver todos los programas
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIOS — "Burbujas de Esperanza" según la guía de diseño.
          Tarjetas tipo burbuja de diálogo con avatar, nombre y testimonio.
      ═══════════════════════════════════════════════════════════ */}
      <section id="testimonios" className="py-16 md:py-20 px-6 bg-fundacion-pale-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fundacion-blue mb-4">
            Testimonios
          </h2>
          <div className="w-16 h-1 bg-fundacion-pink mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Las voces de quienes han sido parte de esta historia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => {
              // Colores alternos para cada tarjeta (inspirado en las 5 manos del isotipo)
              const colores = [
                { borde: "border-fundacion-pink", icono: "text-fundacion-pink", fondo: "bg-fundacion-pale-pink" },
                { borde: "border-fundacion-cyan", icono: "text-fundacion-cyan", fondo: "bg-[#e0fcff]" },
                { borde: "border-fundacion-green", icono: "text-fundacion-green", fondo: "bg-[#edf7e0]" },
              ];
              const color = colores[index % colores.length];

              return (
                <div
                  key={testimonio.slug}
                  className={`relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 p-8 flex flex-col border-l-4 ${color.borde}`}
                >
                  {/* Comilla decorativa */}
                  <svg
                    className={`w-10 h-10 ${color.icono} opacity-30 mb-4 shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>

                  <p className="text-gray-600 italic leading-relaxed flex-grow mb-6">
                    &ldquo;{testimonio.body || "Sin testimonio disponible."}&rdquo;
                  </p>

                  {/* Pie de la tarjeta: avatar + nombre */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className={`w-12 h-12 rounded-full overflow-hidden ${color.fondo} flex items-center justify-center shrink-0`}>
                      {testimonio.avatar ? (
                        <Image
                          src={testimonio.avatar}
                          alt={`Foto de ${testimonio.title}`}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <svg className={`w-6 h-6 ${color.icono}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-fundacion-dark">{testimonio.title}</h3>
                      {testimonio.role && (
                        <p className={`text-xs font-semibold uppercase tracking-wider ${color.icono}`}>
                          {testimonio.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {testimonios.length === 0 && (
              <div className="col-span-3 text-center text-gray-500 py-10">
                Aún no hay testimonios registrados.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NOTICIAS RECIENTES — Listado con las 3 noticias más recientes
          usando el componente TarjetaNoticia.
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-fundacion-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-fundacion-blue text-center mb-4">
            Noticias Recientes
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Entérate de las últimas novedades de la fundación.
          </p>

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
            <p className="text-center text-gray-500 py-8">Pronto publicaremos novedades.</p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-fundacion-pink font-bold text-lg hover:text-fundacion-blue transition-colors duration-300 group"
            >
              Ver todas las noticias
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
