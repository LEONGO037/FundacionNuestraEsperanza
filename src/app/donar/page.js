import EncabezadoPagina from "@/components/EncabezadoPagina";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";
import BotonCopiar from "@/components/BotonCopiar";

export const metadata = {
  title: "Donar",
  description:
    "Haz una donación a la Fundación Nuestra Esperanza y apoya el albergue, la alimentación y el acompañamiento integral de niños, niñas y adolescentes con cáncer en Bolivia.",
};

const datosBancarios = [
  { etiqueta: "Banco", valor: "Banco Nacional de Bolivia (BNB)" },
  { etiqueta: "Cuenta en Bolivianos", valor: "150-0234567" },
  { etiqueta: "Nit", valor: "1234567015" },
  { etiqueta: "Razón Social", valor: "Fundación Nuestra Esperanza" },
];

const numeroCuenta = datosBancarios.find(
  (dato) => dato.etiqueta === "Cuenta en Bolivianos"
).valor;

const enlaceWhatsApp = `https://wa.me/59170112236?text=${encodeURIComponent(
  "Hola, quisiera hacer una donación a la Fundación Nuestra Esperanza."
)}`;

export default function Donar() {
  return (
    <>
      <EncabezadoPagina
        titulo="Haz una Donación"
        subtitulo="Tu aporte se convierte en albergue, alimentación, apoyo psicosocial, recreación y material escolar para niños, niñas y adolescentes con cáncer y sus familias."
      />

      <section className="container mx-auto max-w-5xl px-6 py-16 md:py-24 relative">
        {/* Elemento decorativo sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-fundacion-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fundacion-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-300 pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-fundacion-blue">
            Formas de donar
          </h2>
          <div className="w-16 h-1 bg-fundacion-pink mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto relative z-10">
          {/* WhatsApp: canal principal de la fundación, con prominencia */}
          <article className="group flex flex-col rounded-2xl bg-gradient-to-br from-fundacion-blue to-[#001540] p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:order-first animate-fade-in-up delay-100 border-t-4 border-fundacion-pink">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-fundacion-pink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.15.927 3.178 0 5.766-2.587 5.768-5.766.002-3.181-2.585-5.769-5.769-5.769zm3.328 8.338c-.159-.053-.908-.454-1.002-.517-.026-.018-.08-.047-.131-.047-.077 0-.171.045-.237.12-.046.052-.405.518-.464.576-.027.027-.083.046-.118.046-.019 0-.071-.046-.145-.058-1.408-.246-2.288-1.026-2.825-1.748-.069-.092-.047-.158.013-.277.028-.058.071-.093.099-.12.029-.028.057-.058.086-.104.03-.047.046-.071.071-.118.026-.046.014-.131-.013-.204-.029-.071-.387-.974-.537-1.328-.151-.353-.26-.353-.35-.353-.053 0-.146-.001-.225-.001-.08 0-.213.033-.314.133-.102.102-.387.387-.387.954 0 .567.397 1.114.453 1.188.056.075 1.132 1.83 2.844 2.551.41.171.729.273.978.349.412.126.787.108 1.082.065.328-.047 1.002-.422 1.144-.828.143-.406.143-.754.1-.828-.043-.074-.153-.118-.312-.171z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.57 4.146 1.548 5.912L0 24l6.305-1.493C7.994 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.031 18.906c-1.737 0-3.32-.47-4.686-1.282l-.337-.2-3.481.825.845-3.323-.223-.365A9.458 9.458 0 012.71 11.938c0-5.236 4.266-9.497 9.516-9.497 5.253 0 9.52 4.26 9.52 9.508 0 5.244-4.267 9.508-9.515 9.508z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Escríbenos por WhatsApp</h3>
            </div>
            
            <p className="mt-2 flex-grow text-white/80 leading-relaxed text-lg">
              Es el canal más directo: te orientamos en el momento sobre cómo
              hacer llegar tu donación, ya sea en dinero, víveres o material.
            </p>
            
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-fundacion-pink px-8 py-4 text-center text-lg font-bold text-white shadow-lg shadow-fundacion-pink/40 transition-all duration-300 hover:bg-white hover:text-fundacion-pink focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-cyan hover:-translate-y-1"
            >
              Donar por WhatsApp
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="mt-4 text-center font-medium tracking-wide text-fundacion-sky">
              +591 70112236
            </p>
          </article>

          {/* Transferencia bancaria */}
          <article className="group flex flex-col rounded-2xl bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-200 border-t-4 border-fundacion-cyan relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <svg className="w-24 h-24 text-fundacion-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.97-1.31-2.99-3.01-3.32V5h-1.92v1.44c-1.83.43-3.15 1.52-3.15 3.16 0 1.91 1.54 2.82 3.66 3.28 1.94.43 2.41 1.06 2.41 1.83 0 1-.94 1.58-2.27 1.58-1.58 0-2.33-.84-2.43-1.85H7.28c.11 2.01 1.51 3.06 3.42 3.42V20h1.92v-1.43c1.86-.44 3.23-1.61 3.23-3.31 0-2.21-1.79-3.05-3.54-3.5z"/>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-fundacion-blue mb-6">
              Transferencia bancaria
            </h3>
            
            <dl className="flex-grow space-y-4">
              {datosBancarios.map((dato) => (
                <div key={dato.etiqueta} className="border-b border-gray-100 pb-3 last:border-0">
                  <dt className="text-sm font-bold text-fundacion-cyan uppercase tracking-wider mb-1">
                    {dato.etiqueta}
                  </dt>
                  <dd className="text-gray-800 font-medium text-lg">{dato.valor}</dd>
                </div>
              ))}
            </dl>
            
            <div className="mt-8 relative z-10">
              <BotonCopiar
                texto={numeroCuenta}
                etiqueta="Copiar número de cuenta"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Texto de Transparencia */}
      <section className="bg-fundacion-pale-blue border-t border-b border-fundacion-sky/30">
        <div className="container mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 animate-float">
            <svg className="w-8 h-8 text-fundacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-fundacion-blue mb-6">
            Transparencia
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg mb-6">
            Cada aporte se destina a los programas de la fundación: el albergue
            Casa Esperanza, la alimentación de los pacientes y sus familias, el
            apoyo psicosocial, las actividades recreativas y la dotación de
            material escolar y víveres.
          </p>
          <p className="leading-relaxed text-gray-700 text-lg">
            Todos los servicios de la fundación son{" "}
            <strong className="text-fundacion-pink font-bold">completamente gratuitos</strong> para las familias: ningún
            niño, niña o adolescente paga por el acompañamiento que recibe. Tu
            donación es lo que hace posible ese trabajo.
          </p>
        </div>
      </section>

      <LlamadaALaAccion
        titulo="¿Prefieres donar tu tiempo?"
        mensaje="Si no puedes hacer una donación económica, también puedes apoyar como voluntario: tu tiempo y tus habilidades valen muchísimo para los niños y sus familias."
        mostrarVoluntariado={true}
        mostrarDonar={false}
      />
    </>
  );
}
