// Formulario de voluntariado: componente cliente con useActionState (React 19)
// que envía los datos al Server Action enviarSolicitudVoluntariado.
"use client";

import { useActionState } from "react";
import { enviarSolicitudVoluntariado } from "@/app/voluntariado/actions";
import {
  DEPARTAMENTOS,
  DISPONIBILIDADES,
  AREAS_DE_INTERES,
} from "@/lib/opciones-voluntariado";

const ESTADO_INICIAL = { exito: null, errores: null, valores: null };

const CLASE_CAMPO =
  "mt-1 block w-full rounded-md border bg-white p-2 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-pink";

function claseCampo(tieneError) {
  return `${CLASE_CAMPO} ${tieneError ? "border-red-600" : "border-gray-300"}`;
}

// Mensaje de error de un campo, asociado al input vía aria-describedby.
function ErrorCampo({ id, mensaje }) {
  if (!mensaje) return null;
  return (
    <p id={id} className="mt-1 text-sm font-semibold text-red-700">
      {mensaje}
    </p>
  );
}

export default function FormularioVoluntariado() {
  const [estado, accionFormulario, enviando] = useActionState(
    enviarSolicitudVoluntariado,
    ESTADO_INICIAL
  );

  const errores = estado.errores ?? {};
  const valores = estado.valores ?? {};

  if (estado.exito) {
    return (
      <div
        role="status"
        className="rounded-xl bg-fundacion-pale-pink p-8 text-center shadow-md"
      >
        <h3 className="text-2xl font-bold text-fundacion-blue">
          ¡Gracias por querer ser parte!
        </h3>
        <p className="mt-4 text-gray-800">
          Recibimos tu solicitud de voluntariado. El equipo de la fundación se
          pondrá en contacto contigo por el correo o el teléfono que nos
          dejaste.
        </p>
      </div>
    );
  }

  return (
    <form action={accionFormulario} className="space-y-5" noValidate={false}>
      {errores.general && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-md bg-red-50 p-3 font-semibold text-red-700"
        >
          {errores.general}
        </p>
      )}

      <div>
        <label htmlFor="nombre" className="block font-semibold text-gray-800">
          Nombre completo <span aria-hidden="true">*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          minLength={3}
          maxLength={120}
          autoComplete="name"
          defaultValue={valores.nombre ?? ""}
          aria-invalid={errores.nombre ? "true" : undefined}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
          className={claseCampo(errores.nombre)}
        />
        <ErrorCampo id="error-nombre" mensaje={errores.nombre} />
      </div>

      <div>
        <label htmlFor="correo" className="block font-semibold text-gray-800">
          Correo electrónico <span aria-hidden="true">*</span>
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          autoComplete="email"
          defaultValue={valores.correo ?? ""}
          aria-invalid={errores.correo ? "true" : undefined}
          aria-describedby={errores.correo ? "error-correo" : undefined}
          className={claseCampo(errores.correo)}
        />
        <ErrorCampo id="error-correo" mensaje={errores.correo} />
      </div>

      <div>
        <label htmlFor="telefono" className="block font-semibold text-gray-800">
          Teléfono <span aria-hidden="true">*</span>
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          pattern="[0-9+\-\s()]{7,20}"
          title="Solo números, espacios, +, - o paréntesis (7 a 20 caracteres)"
          autoComplete="tel"
          defaultValue={valores.telefono ?? ""}
          aria-invalid={errores.telefono ? "true" : undefined}
          aria-describedby={errores.telefono ? "error-telefono" : undefined}
          className={claseCampo(errores.telefono)}
        />
        <ErrorCampo id="error-telefono" mensaje={errores.telefono} />
      </div>

      <div>
        <label htmlFor="ciudad" className="block font-semibold text-gray-800">
          Ciudad / Departamento <span aria-hidden="true">*</span>
        </label>
        <select
          id="ciudad"
          name="ciudad"
          required
          defaultValue={valores.ciudad ?? ""}
          aria-invalid={errores.ciudad ? "true" : undefined}
          aria-describedby={errores.ciudad ? "error-ciudad" : undefined}
          className={claseCampo(errores.ciudad)}
        >
          <option value="" disabled>
            Selecciona tu departamento
          </option>
          {DEPARTAMENTOS.map((departamento) => (
            <option key={departamento} value={departamento}>
              {departamento}
            </option>
          ))}
        </select>
        <ErrorCampo id="error-ciudad" mensaje={errores.ciudad} />
      </div>

      <div>
        <label
          htmlFor="disponibilidad"
          className="block font-semibold text-gray-800"
        >
          Disponibilidad <span aria-hidden="true">*</span>
        </label>
        <select
          id="disponibilidad"
          name="disponibilidad"
          required
          defaultValue={valores.disponibilidad ?? ""}
          aria-invalid={errores.disponibilidad ? "true" : undefined}
          aria-describedby={
            errores.disponibilidad ? "error-disponibilidad" : undefined
          }
          className={claseCampo(errores.disponibilidad)}
        >
          <option value="" disabled>
            Selecciona tu disponibilidad
          </option>
          {DISPONIBILIDADES.map((disponibilidad) => (
            <option key={disponibilidad} value={disponibilidad}>
              {disponibilidad}
            </option>
          ))}
        </select>
        <ErrorCampo id="error-disponibilidad" mensaje={errores.disponibilidad} />
      </div>

      <div>
        <label htmlFor="area" className="block font-semibold text-gray-800">
          Área de interés <span aria-hidden="true">*</span>
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue={valores.area ?? ""}
          aria-invalid={errores.area ? "true" : undefined}
          aria-describedby={errores.area ? "error-area" : undefined}
          className={claseCampo(errores.area)}
        >
          <option value="" disabled>
            Selecciona un área
          </option>
          {AREAS_DE_INTERES.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        <ErrorCampo id="error-area" mensaje={errores.area} />
      </div>

      <div>
        <label htmlFor="mensaje" className="block font-semibold text-gray-800">
          Mensaje <span className="font-normal text-gray-600">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={2000}
          defaultValue={valores.mensaje ?? ""}
          aria-invalid={errores.mensaje ? "true" : undefined}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
          className={claseCampo(errores.mensaje)}
        />
        <ErrorCampo id="error-mensaje" mensaje={errores.mensaje} />
      </div>

      {/* Honeypot anti-spam: invisible para humanos (CSS) e ignorado por
          lectores de pantalla; los bots que rellenan todo caen aquí. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="sitio_web">No llenes este campo</label>
        <input
          id="sitio_web"
          name="sitio_web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-full bg-fundacion-pink px-8 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-fundacion-blue focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-blue disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
