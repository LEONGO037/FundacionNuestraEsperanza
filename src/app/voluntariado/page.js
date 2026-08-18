import EncabezadoPagina from "@/components/EncabezadoPagina";
import FormularioVoluntariado from "@/components/FormularioVoluntariado";

export const metadata = {
  title: "Voluntariado",
  description:
    "Súmate como voluntario o voluntaria de la Fundación Nuestra Esperanza y acompaña a niños, niñas y adolescentes con cáncer en Bolivia con tu tiempo y tus habilidades.",
};

const areasVoluntariado = [
  {
    titulo: "Actividades Recreativas",
    descripcion: "Juega, lee y acompaña a los niños durante su estadía en el albergue para sacarles una sonrisa.",
    icono: (
      <svg className="w-8 h-8 text-fundacion-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    titulo: "Logística y Apoyo",
    descripcion: "Ayuda en la organización de eventos, clasificación de donaciones y mantenimiento de Casa Esperanza.",
    icono: (
      <svg className="w-8 h-8 text-fundacion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    titulo: "Difusión y Eventos",
    descripcion: "Apoya en redes sociales, diseño, fotografía o en la realización de campañas de concientización.",
    icono: (
      <svg className="w-8 h-8 text-fundacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  }
];

export default function Voluntariado() {
  return (
    <>
      <EncabezadoPagina
        titulo="Únete como Voluntario"
        subtitulo="Tu tiempo también transforma: acompaña a los niños, niñas y adolescentes de la fundación en actividades recreativas, logística, difusión y más."
      />

      {/* Sección Informativa - Áreas de Voluntariado */}
      <section className="bg-fundacion-cream py-16 md:py-24 relative overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-fundacion-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[-10%] right-[-5%] w-72 h-72 bg-fundacion-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-300 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-fundacion-blue">
            ¿Cómo puedes ayudar?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Ser voluntario significa regalar tiempo de calidad. Descubre las áreas en las que puedes aportar tus habilidades y hacer la diferencia.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {areasVoluntariado.map((area, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-fundacion-cyan flex flex-col items-center animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-fundacion-pale-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icono}
                </div>
                <h3 className="text-xl font-bold text-fundacion-blue mb-3">{area.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{area.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección del Formulario */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto max-w-3xl px-6 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up delay-200 border border-gray-100">
            {/* Cabecera del formulario tipo gradiente */}
            <div className="bg-gradient-to-r from-fundacion-blue to-[#001540] p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10">
                Formulario de inscripción
              </h2>
              <p className="mt-3 text-fundacion-sky text-lg relative z-10">
                Déjanos tus datos y nos pondremos en contacto contigo
              </p>
            </div>

            {/* Contenido del formulario */}
            <div className="p-8 md:p-10">
              <p className="mb-8 text-sm text-gray-500 text-center font-medium bg-gray-50 py-2 rounded-lg">
                Los campos marcados con <span className="text-fundacion-pink">*</span> son obligatorios.
              </p>
              
              <FormularioVoluntariado />
              
              <div className="mt-10 pt-6 border-t border-gray-100 flex gap-4 items-start">
                <div className="shrink-0 mt-1 text-fundacion-cyan">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Una vez enviada tu solicitud, el equipo de la fundación revisará tu perfil y se pondrá en
                  contacto contigo por correo electrónico o teléfono para agendar una entrevista breve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
