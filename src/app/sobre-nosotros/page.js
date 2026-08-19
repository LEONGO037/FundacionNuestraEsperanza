import EncabezadoPagina from "@/components/EncabezadoPagina";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";
import ContadorAnimado from "@/components/ContadorAnimado";

export const metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia, misión, visión y equipo de la Fundación Nuestra Esperanza, organización sin fines de lucro de La Paz, Bolivia, que acompaña a niños con cáncer y sus familias desde 2011.",
};

const aliados = [
  { nombre: "Alianza Latina", detalle: "Red latinoamericana de apoyo a niños con cáncer" },
  { nombre: "Childhood Cancer International", detalle: "Programa Home Away From Home" },
  { nombre: "Canica", detalle: "Apoyo a Niños con Cáncer" },
  { nombre: "St. Jude / Juntos by St. Jude", detalle: "St. Jude Children's Research Hospital" },
  { nombre: "Foundation S — My Child Matters", detalle: "Aliado internacional" },
];

const directorio = [
  { nombre: "Mónica Mendez Saucedo", cargo: "Presidenta" },
  { nombre: "Mary Gloria Rengel Velasco", cargo: "Vicepresidenta" },
  { nombre: "Nora Virginia Michel de Arteaga", cargo: "Tesorera" },
  { nombre: "María Teresa Quevedo Espinoza", cargo: "Secretaria" },
];

const valores = [
  {
    titulo: "Dignidad",
    descripcion: "Cada familia que llega merece ser tratada con respeto absoluto, sin importar su origen o condición.",
    color: "border-fundacion-pink",
    bg: "bg-fundacion-pale-pink",
  },
  {
    titulo: "Esperanza",
    descripcion: "Creemos que un entorno de cariño y estabilidad mejora la salud. Damos esperanza cuando más se necesita.",
    color: "border-fundacion-cyan",
    bg: "bg-fundacion-pale-blue",
  },
  {
    titulo: "Solidaridad",
    descripcion: "Somos una comunidad: voluntarios, donantes y familias que se apoyan mutuamente en cada paso del camino.",
    color: "border-fundacion-green",
    bg: "bg-fundacion-cream",
  },
  {
    titulo: "Gratuidad",
    descripcion: "Ningún niño, niña o adolescente pagará jamás por los servicios que brindamos. Eso es innegociable.",
    color: "border-fundacion-orange",
    bg: "bg-orange-50",
  },
];

const hitos = [
  { anio: "2011", hecho: "Fundación de la organización en La Paz, Bolivia." },
  { anio: "2017", hecho: "Inicio del programa de intervención integral con albergue, alimentación y apoyo psicosocial." },
  { anio: "2019", hecho: "Incorporación al programa internacional Home Away From Home de Childhood Cancer International." },
  { anio: "2024", hecho: "Más de 400 familias acompañadas de todos los departamentos de Bolivia." },
];

export default function SobreNosotros() {
  return (
    <>
      <EncabezadoPagina
        titulo="Quiénes Somos"
        subtitulo="Desde 2011 acompañamos a niños, niñas y adolescentes con cáncer y a sus familias para que nunca enfrenten este camino solos."
      />

      {/* ─── HISTORIA ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-fundacion-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fundacion-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-300 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">Nuestra historia</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue leading-snug">
                Haciendo una diferencia en la vida de niños con cáncer en toda Bolivia
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                La Fundación Nuestra Esperanza nació en La Paz con una convicción sencilla pero poderosa: ningún niño debería abandonar su tratamiento por falta de un lugar donde quedarse. Desde 2011, abrimos las puertas del albergue <strong className="text-fundacion-blue">Casa Esperanza</strong> para recibir a las familias que llegan desde Oruro, Potosí, Beni, Santa Cruz y otros departamentos en busca de atención médica especializada.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                En 2017 formalizamos un programa de intervención integral y gratuito que hoy incluye albergue, alimentación diaria, apoyo psicosocial, actividades recreativas y dotación de material escolar y víveres. Somos parte del programa internacional <em>Home Away From Home</em> de Childhood Cancer International.
              </p>
            </div>

            {/* Línea de tiempo */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-xl font-bold text-fundacion-blue mb-8">Nuestra trayectoria</h3>
              <ol className="relative border-l-2 border-fundacion-cyan/40 space-y-8 pl-8">
                {hitos.map((hito, i) => (
                  <li key={i} className="relative group">
                    <span className="absolute -left-[2.1rem] top-1 w-4 h-4 rounded-full bg-fundacion-cyan border-4 border-white shadow group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-sm font-bold text-fundacion-pink uppercase tracking-wider">{hito.anio}</span>
                    <p className="mt-1 text-gray-700 leading-relaxed">{hito.hecho}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISIÓN & VISIÓN ─── */}
      <section className="bg-fundacion-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-fundacion-cyan rounded-full opacity-10 blur-3xl animate-float" />
          <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-fundacion-pink rounded-full opacity-10 blur-3xl animate-float delay-300" />
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-fundacion-sky font-bold text-sm uppercase tracking-widest">Lo que nos mueve</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Misión y Visión</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-10 hover:bg-white/15 transition-colors duration-300 animate-fade-in-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-fundacion-pink/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fundacion-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misión</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Mejorar la calidad de vida de los niños, niñas y adolescentes de escasos recursos con cáncer, brindándoles a ellos y a sus familias un acompañamiento integral y completamente gratuito durante el tratamiento: un hogar, alimentación y contención emocional.
              </p>
            </div>

            {/* Visión */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-10 hover:bg-white/15 transition-colors duration-300 animate-fade-in-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-fundacion-cyan/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fundacion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visión</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Que ningún niño, niña o adolescente en Bolivia abandone su tratamiento contra el cáncer por falta de recursos, y que cada familia que atraviesa esta enfermedad encuentre una red de apoyo que la sostenga con dignidad, calidez y esperanza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACTO ─── */}
      <section className="bg-fundacion-cream py-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest animate-fade-in-up">Nuestro impacto</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue animate-fade-in-up">Más de una década dejando huella</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Cada número representa una familia que no tuvo que elegir entre el tratamiento de su hijo y su sustento.
          </p>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { valor: 400, sufijo: "+", etiqueta: "Familias acompañadas", color: "text-fundacion-pink", borde: "border-fundacion-pink" },
              { valor: 12, sufijo: "+", etiqueta: "Años de trabajo continuo", color: "text-fundacion-cyan", borde: "border-fundacion-cyan" },
              { valor: 5, sufijo: "", etiqueta: "Programas de apoyo integral", color: "text-fundacion-green", borde: "border-fundacion-green" },
              { valor: 9, sufijo: "", etiqueta: "Departamentos atendidos", color: "text-fundacion-orange", borde: "border-fundacion-orange" },
            ].map((c, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${c.borde} animate-fade-in-up`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <p className={`text-5xl font-bold ${c.color}`}>
                  <ContadorAnimado valor={c.valor} sufijo={c.sufijo} />
                </p>
                <p className="mt-3 text-gray-600 font-medium leading-tight">{c.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">Lo que nos define</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <div
                key={i}
                className={`rounded-2xl ${v.bg} border-l-4 ${v.color} p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-fundacion-blue mb-3">{v.titulo}</h3>
                <p className="text-gray-700 leading-relaxed">{v.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ─── */}
      <section className="bg-fundacion-pale-blue py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">Las personas detrás</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue">Directorio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {directorio.map((persona, i) => {
              const iniciales = persona.nombre.split(" ").slice(0, 2).map(n => n[0]).join("");
              const gradients = [
                "from-fundacion-pink to-fundacion-orange",
                "from-fundacion-blue to-fundacion-cyan",
                "from-fundacion-cyan to-fundacion-green",
                "from-fundacion-orange to-fundacion-pink",
              ];
              return (
                <article
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{iniciales}</span>
                  </div>
                  <h3 className="text-base font-bold text-fundacion-blue leading-snug">{persona.nombre}</h3>
                  <p className="mt-2 font-semibold text-fundacion-pink text-xs uppercase tracking-wider">{persona.cargo}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ALIADOS ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-fundacion-cream to-white pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">No estamos solos</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue">Nuestros aliados</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Este trabajo es posible gracias a organizaciones que comparten nuestra convicción de que la vida merece esperanza.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {aliados.map((aliado, i) => (
              <li
                key={aliado.nombre}
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-fundacion-pale-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-fundacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-fundacion-blue">{aliado.nombre}</span>
                <span className="mt-2 text-sm text-fundacion-pink font-medium">{aliado.detalle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LlamadaALaAccion
        titulo="Sé parte de esta historia"
        mensaje="Cada donación y cada hora de voluntariado construyen un capítulo más de esperanza para las familias que más lo necesitan."
      />
    </>
  );
}
