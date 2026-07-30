import EncabezadoPagina from "@/components/EncabezadoPagina";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";
import BotonCopiar from "@/components/BotonCopiar";

export const metadata = {
  title: "Donar",
  description:
    "Haz una donación a la Fundación Nuestra Esperanza y apoya el albergue, la alimentación y el acompañamiento integral de niños, niñas y adolescentes con cáncer en Bolivia.",
};

// Datos bancarios PENDIENTES: deben ser proporcionados oficialmente por la
// fundación antes de publicar. No colocar valores provisionales ni inventados.
const datosBancarios = [
  { etiqueta: "Banco", valor: "[PENDIENTE: proporcionado por la fundación]" },
  { etiqueta: "Titular", valor: "[PENDIENTE: proporcionado por la fundación]" },
  {
    etiqueta: "Tipo de cuenta",
    valor: "[PENDIENTE: proporcionado por la fundación]",
  },
  {
    etiqueta: "Número de cuenta",
    valor: "[PENDIENTE: proporcionado por la fundación]",
  },
  { etiqueta: "NIT", valor: "[PENDIENTE: si aplica]" },
];

const numeroCuenta = datosBancarios.find(
  (dato) => dato.etiqueta === "Número de cuenta"
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

      <section className="container mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue">
          Formas de donar
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* WhatsApp: canal principal de la fundación, con prominencia */}
          <article className="flex flex-col rounded-xl bg-fundacion-blue p-8 text-white shadow-md lg:order-first">
            <h3 className="text-xl font-bold">Escríbenos por WhatsApp</h3>
            <p className="mt-3 flex-grow leading-relaxed">
              Es el canal más directo: te orientamos en el momento sobre cómo
              hacer llegar tu donación, ya sea en dinero, víveres o material.
            </p>
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-fundacion-pink px-6 py-3 text-center text-lg font-bold text-white transition-colors duration-300 hover:bg-white hover:text-fundacion-pink focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-cyan"
            >
              Donar por WhatsApp
            </a>
            <p className="mt-3 text-center text-sm text-fundacion-sky">
              +591 70112236
            </p>
          </article>

          {/* QR de banca móvil */}
          <article className="flex flex-col rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-fundacion-blue">
              Escanea el código QR
            </h3>
            <p className="mt-3 leading-relaxed text-gray-700">
              Dona desde la banca móvil de cualquier banco de Bolivia.
            </p>
            {/* TODO: reemplazar por public/images/qr-donaciones.png cuando la fundación lo provea.
                Basta con sustituir este bloque por la <Image> comentada abajo. */}
            <div
              role="img"
              aria-label="Código QR de donaciones disponible próximamente"
              className="mx-auto mt-6 flex aspect-square w-48 items-center justify-center rounded-lg bg-fundacion-pale-pink p-4 text-center text-sm font-semibold text-fundacion-blue"
            >
              Código QR disponible próximamente
            </div>
            {/*
            <Image
              src="/images/qr-donaciones.png"
              alt="Código QR para donar a la Fundación Nuestra Esperanza mediante banca móvil"
              width={192}
              height={192}
              className="mx-auto mt-6 rounded-lg"
            />
            (importar Image desde "next/image" al activarlo)
            */}
          </article>

          {/* Transferencia bancaria */}
          <article className="flex flex-col rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-fundacion-blue">
              Transferencia bancaria
            </h3>
            {/* Valores pendientes: la fundación debe proporcionar los datos oficiales */}
            <dl className="mt-4 flex-grow space-y-3">
              {datosBancarios.map((dato) => (
                <div key={dato.etiqueta}>
                  <dt className="text-sm font-bold text-gray-600">
                    {dato.etiqueta}
                  </dt>
                  <dd className="text-gray-800">{dato.valor}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4">
              <BotonCopiar
                texto={numeroCuenta}
                etiqueta="Copiar número de cuenta"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Texto preliminar: validar con la fundación */}
      <section className="bg-fundacion-cream">
        <div className="container mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue">
            Transparencia
          </h2>
          <p className="mt-4 leading-relaxed text-gray-800">
            Cada aporte se destina a los programas de la fundación: el albergue
            Casa Esperanza, la alimentación de los pacientes y sus familias, el
            apoyo psicosocial, las actividades recreativas y la dotación de
            material escolar y víveres.
          </p>
          <p className="mt-4 leading-relaxed text-gray-800">
            Todos los servicios de la fundación son{" "}
            <strong>completamente gratuitos</strong> para las familias: ningún
            niño, niña o adolescente paga por el acompañamiento que recibe. Tu
            donación es lo que hace posible ese trabajo.
          </p>
        </div>
      </section>

      <LlamadaALaAccion
        titulo="¿Prefieres donar tu tiempo?"
        mensaje="Si no puedes hacer una donación económica, también puedes apoyar como voluntario: tu tiempo y tus habilidades valen muchísimo para los niños y sus familias."
        mostrarVoluntariado={true}
      />
    </>
  );
}
