import EncabezadoPagina from "@/components/EncabezadoPagina";

export const metadata = {
  title: "Contacto",
  description:
    "Contáctate con la Fundación Nuestra Esperanza en La Paz, Bolivia. Encuéntranos en Jorge Sáenz 1037, Miraflores, o escríbenos por WhatsApp.",
};

const enlaceWhatsApp = `https://wa.me/59170112236?text=${encodeURIComponent(
  "Hola, quisiera contactarme con la Fundación Nuestra Esperanza."
)}`;

const canales = [
  {
    titulo: "WhatsApp",
    valor: "+591 70112236",
    descripcion: "El canal más rápido para consultas, donaciones y voluntariado.",
    href: enlaceWhatsApp,
    etiquetaBoton: "Escribir por WhatsApp",
    color: "border-fundacion-green",
    bgIcon: "bg-green-50",
    icono: (
      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.15.927 3.178 0 5.766-2.587 5.768-5.766.002-3.181-2.585-5.769-5.769-5.769zm3.328 8.338c-.159-.053-.908-.454-1.002-.517-.026-.018-.08-.047-.131-.047-.077 0-.171.045-.237.12-.046.052-.405.518-.464.576-.027.027-.083.046-.118.046-.019 0-.071-.046-.145-.058-1.408-.246-2.288-1.026-2.825-1.748-.069-.092-.047-.158.013-.277.028-.058.071-.093.099-.12.029-.028.057-.058.086-.104.03-.047.046-.071.071-.118.026-.046.014-.131-.013-.204-.029-.071-.387-.974-.537-1.328-.151-.353-.26-.353-.35-.353-.053 0-.146-.001-.225-.001-.08 0-.213.033-.314.133-.102.102-.387.387-.387.954 0 .567.397 1.114.453 1.188.056.075 1.132 1.83 2.844 2.551.41.171.729.273.978.349.412.126.787.108 1.082.065.328-.047 1.002-.422 1.144-.828.143-.406.143-.754.1-.828-.043-.074-.153-.118-.312-.171z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.57 4.146 1.548 5.912L0 24l6.305-1.493C7.994 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.031 18.906c-1.737 0-3.32-.47-4.686-1.282l-.337-.2-3.481.825.845-3.323-.223-.365A9.458 9.458 0 012.71 11.938c0-5.236 4.266-9.497 9.516-9.497 5.253 0 9.52 4.26 9.52 9.508 0 5.244-4.267 9.508-9.515 9.508z" />
      </svg>
    ),
  },
  {
    titulo: "Ubicación",
    valor: "Jorge Sáenz 1037, Miraflores",
    descripcion: "Entre calles Haití y Honduras, Ciudad de La Paz, Bolivia.",
    href: "https://maps.google.com/?q=Jorge+Saenz+1037+Miraflores+La+Paz+Bolivia",
    etiquetaBoton: "Ver en Google Maps",
    color: "border-fundacion-blue",
    bgIcon: "bg-fundacion-pale-blue",
    icono: (
      <svg className="w-7 h-7 text-fundacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titulo: "Donar",
    valor: "Banco Nacional de Bolivia",
    descripcion: "Cuenta en Bs: 150-0234567. Fundación Nuestra Esperanza.",
    href: "/donar",
    etiquetaBoton: "Ver opciones de donación",
    color: "border-fundacion-pink",
    bgIcon: "bg-fundacion-pale-pink",
    icono: (
      <svg className="w-7 h-7 text-fundacion-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Contacto() {
  return (
    <>
      <EncabezadoPagina
        titulo="Contáctanos"
        subtitulo="Estamos en Miraflores, La Paz. Escríbenos por WhatsApp o visítanos — siempre hay alguien dispuesto a ayudarte."
      />

      {/* ─── CANALES DE CONTACTO ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-fundacion-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fundacion-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-300 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">Estamos para ayudarte</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-fundacion-blue">¿Cómo podemos ayudarte?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {canales.map((canal, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${canal.color} flex flex-col animate-fade-in-up`}
                style={{ animationDelay: `${(i + 1) * 120}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${canal.bgIcon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {canal.icono}
                </div>
                <h3 className="text-xl font-bold text-fundacion-blue mb-1">{canal.titulo}</h3>
                <p className="font-semibold text-gray-800 mb-2">{canal.valor}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">{canal.descripcion}</p>
                <a
                  href={canal.href}
                  target={canal.href.startsWith("http") ? "_blank" : "_self"}
                  rel={canal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-fundacion-blue text-white font-bold py-3 px-6 text-sm hover:bg-fundacion-pink transition-colors duration-300 mt-auto"
                >
                  {canal.etiquetaBoton}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* ─── MAPA ─── */}
          <div className="animate-fade-in-up delay-300">
            <div className="text-center mb-8">
              <span className="text-fundacion-pink font-bold text-sm uppercase tracking-widest">Dónde estamos</span>
              <h2 className="mt-3 text-3xl font-bold text-fundacion-blue">Casa Esperanza — Miraflores, La Paz</h2>
              <p className="mt-2 text-gray-600">Jorge Sáenz 1037 entre calles Haití y Honduras</p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.4623705!2d-68.1244!3d-16.5007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20476baf0a6f%3A0x48d7c00ad1b2c4d3!2sJorge%20S%C3%A1enz%201037%2C%20Miraflores%2C%20La%20Paz%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo"
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Fundación Nuestra Esperanza — Jorge Sáenz 1037, Miraflores, La Paz"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://maps.google.com/?q=Jorge+Saenz+1037+Miraflores+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fundacion-blue text-white font-bold py-3 px-8 hover:bg-fundacion-pink transition-colors duration-300 shadow-lg shadow-fundacion-blue/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANNER FINAL ─── */}
      <section className="bg-gradient-to-r from-fundacion-blue to-[#001540] py-16">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Cada mensaje importa</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Detrás de cada consulta puede haber una familia que necesita apoyo. No dudes en escribirnos.
          </p>
          <a
            href={enlaceWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-fundacion-pink text-white font-bold py-4 px-10 text-lg hover:bg-white hover:text-fundacion-pink transition-all duration-300 shadow-xl shadow-fundacion-pink/40"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.15.927 3.178 0 5.766-2.587 5.768-5.766.002-3.181-2.585-5.769-5.769-5.769zm3.328 8.338c-.159-.053-.908-.454-1.002-.517-.026-.018-.08-.047-.131-.047-.077 0-.171.045-.237.12-.046.052-.405.518-.464.576-.027.027-.083.046-.118.046-.019 0-.071-.046-.145-.058-1.408-.246-2.288-1.026-2.825-1.748-.069-.092-.047-.158.013-.277.028-.058.071-.093.099-.12.029-.028.057-.058.086-.104.03-.047.046-.071.071-.118.026-.046.014-.131-.013-.204-.029-.071-.387-.974-.537-1.328-.151-.353-.26-.353-.35-.353-.053 0-.146-.001-.225-.001-.08 0-.213.033-.314.133-.102.102-.387.387-.387.954 0 .567.397 1.114.453 1.188.056.075 1.132 1.83 2.844 2.551.41.171.729.273.978.349.412.126.787.108 1.082.065.328-.047 1.002-.422 1.144-.828.143-.406.143-.754.1-.828-.043-.074-.153-.118-.312-.171z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.57 4.146 1.548 5.912L0 24l6.305-1.493C7.994 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.031 18.906c-1.737 0-3.32-.47-4.686-1.282l-.337-.2-3.481.825.845-3.323-.223-.365A9.458 9.458 0 012.71 11.938c0-5.236 4.266-9.497 9.516-9.497 5.253 0 9.52 4.26 9.52 9.508 0 5.244-4.267 9.508-9.515 9.508z" />
            </svg>
            Escribirnos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
