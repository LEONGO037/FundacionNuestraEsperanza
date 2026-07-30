import EncabezadoPagina from "@/components/EncabezadoPagina";
import LlamadaALaAccion from "@/components/LlamadaALaAccion";

export const metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia, misión y visión de la Fundación Nuestra Esperanza, organización sin fines de lucro de La Paz, Bolivia, que acompaña a niños, niñas y adolescentes de escasos recursos con cáncer.",
};

const cifras = [
  { valor: "~400", detalle: "familias acompañadas" },
  { valor: "+12", detalle: "años de trabajo" },
  { valor: "5", detalle: "programas de apoyo integral" },
  { valor: "Nacional", detalle: "familias de distintos departamentos" },
];

const aliados = [
  { nombre: "Laboratorios Bagó de Bolivia", detalle: "Aliado institucional" },
  {
    nombre: "Childhood Cancer International",
    detalle: "Programa Home Away From Home",
  },
  { nombre: "Foundation S", detalle: "Aliado institucional" },
];

export default function SobreNosotros() {
  return (
    <>
      <EncabezadoPagina
        titulo="Sobre Nosotros"
        subtitulo="Somos una organización sin fines de lucro que acompaña a niños, niñas y adolescentes de escasos recursos con cáncer y a sus familias en Bolivia."
      />

      {/* Texto preliminar: validar con la fundación */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue">
          Nuestra Historia
        </h2>
        <p className="mt-4 leading-relaxed text-gray-800">
          La Fundación Nuestra Esperanza es una organización sin fines de lucro
          con sede en La Paz, Bolivia, dedicada a mejorar la calidad de vida de
          niños, niñas y adolescentes de escasos recursos que padecen cáncer.
          Trabajamos desde aproximadamente 2011 acompañando a las familias que
          llegan de distintos departamentos del país para que sus hijos e hijas
          reciban tratamiento.
        </p>
        <p className="mt-4 leading-relaxed text-gray-800">
          Desde 2017 implementamos un programa de intervención integral
          gratuito que incluye albergue, alimentación, apoyo psicosocial,
          recreación y dotación de material escolar y víveres. A lo largo de
          estos años hemos colaborado con cerca de 400 familias de distintos
          departamentos de Bolivia.
        </p>
      </section>

      {/* Texto preliminar: validar con la fundación */}
      <section className="container mx-auto max-w-4xl px-6 pb-12">
        <h2 className="sr-only">Misión y Visión</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-fundacion-blue p-8 text-white">
            <h3 className="text-2xl font-bold">Misión</h3>
            <p className="mt-4 leading-relaxed">
              Mejorar la calidad de vida de los niños, niñas y adolescentes de
              escasos recursos con cáncer, brindándoles a ellos y a sus
              familias un acompañamiento integral y gratuito durante el
              tratamiento: un hogar, alimentación y contención emocional.
            </p>
          </div>
          <div className="rounded-xl bg-fundacion-pale-pink p-8">
            <h3 className="text-2xl font-bold text-fundacion-blue">Visión</h3>
            <p className="mt-4 leading-relaxed text-gray-800">
              Que ningún niño, niña o adolescente en Bolivia abandone su
              tratamiento contra el cáncer por falta de recursos, y que cada
              familia que atraviesa esta enfermedad encuentre una red de apoyo
              que la sostenga con dignidad y esperanza.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fundacion-blue">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
            Nuestro impacto
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cifras.map((cifra) => (
              <div
                key={cifra.detalle}
                className="flex flex-col rounded-xl bg-white/10 p-6 text-center"
              >
                <dd className="order-first text-4xl font-bold text-white">
                  {cifra.valor}
                </dd>
                <dt className="mt-2 text-fundacion-sky">{cifra.detalle}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue">
          Nuestro Equipo
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold text-fundacion-blue">
              Mónica Méndez
            </h3>
            <p className="mt-1 font-semibold text-fundacion-pink">Presidenta</p>
          </article>
          {/* Añadir aquí más integrantes del equipo cuando la fundación
              proporcione sus nombres y cargos, copiando el <article> anterior. */}
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-fundacion-blue">
          Aliados
        </h2>
        <p className="mt-4 leading-relaxed text-gray-800">
          Nuestro trabajo es posible gracias al apoyo de instituciones aliadas.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {aliados.map((aliado) => (
            <li
              key={aliado.nombre}
              className="flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-md"
            >
              {/* TODO: reemplazar por logo oficial cuando la fundación lo provea */}
              <span className="text-lg font-bold text-fundacion-blue">
                {aliado.nombre}
              </span>
              <span className="mt-2 text-sm text-gray-600">
                {aliado.detalle}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <LlamadaALaAccion />
    </>
  );
}
