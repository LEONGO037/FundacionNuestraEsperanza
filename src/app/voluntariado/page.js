import EncabezadoPagina from "@/components/EncabezadoPagina";
import FormularioVoluntariado from "@/components/FormularioVoluntariado";

export const metadata = {
  title: "Voluntariado",
  description:
    "Súmate como voluntario o voluntaria de la Fundación Nuestra Esperanza y acompaña a niños, niñas y adolescentes con cáncer en Bolivia con tu tiempo y tus habilidades.",
};

export default function Voluntariado() {
  return (
    <>
      <EncabezadoPagina
        titulo="Únete como Voluntario"
        subtitulo="Tu tiempo también transforma: acompaña a los niños, niñas y adolescentes de la fundación en actividades recreativas, logística, difusión y más."
      />

      <section className="container mx-auto max-w-2xl px-6 py-12">
        {/* Texto preliminar: validar con la fundación */}
        <p className="leading-relaxed text-gray-800">
          Ser voluntario en la Fundación Nuestra Esperanza significa regalar
          tiempo de calidad a niños, niñas y adolescentes que atraviesan un
          tratamiento contra el cáncer, y apoyar a sus familias en el día a
          día del albergue Casa Esperanza. Completa el formulario y cuéntanos
          cómo te gustaría ayudar.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-md md:p-8">
          <h2 className="text-xl font-bold text-fundacion-blue">
            Formulario de inscripción
          </h2>
          <p className="mt-2 mb-6 text-sm text-gray-600">
            Los campos marcados con * son obligatorios.
          </p>
          <FormularioVoluntariado />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          Una vez enviada tu solicitud, el equipo de la fundación se pondrá en
          contacto contigo por el correo o el teléfono que proporcionaste.
        </p>
      </section>
    </>
  );
}
