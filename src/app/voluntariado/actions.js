"use server";

import { enviarNotificacion } from "@/lib/notificaciones";
import {
  DEPARTAMENTOS,
  DISPONIBILIDADES,
  AREAS_DE_INTERES,
} from "@/lib/opciones-voluntariado";

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFONO = /^[0-9+\-\s()]{7,20}$/;

// Validación de servidor: la validación HTML del navegador es solo comodidad;
// cualquiera puede enviar el POST directamente, así que aquí se revisa todo.
function validar(valores) {
  const errores = {};

  if (!valores.nombre || valores.nombre.length < 3) {
    errores.nombre = "Escribe tu nombre completo (mínimo 3 caracteres).";
  } else if (valores.nombre.length > 120) {
    errores.nombre = "El nombre es demasiado largo (máximo 120 caracteres).";
  }

  if (!valores.correo || !REGEX_CORREO.test(valores.correo)) {
    errores.correo = "Escribe un correo electrónico válido.";
  }

  if (!valores.telefono || !REGEX_TELEFONO.test(valores.telefono)) {
    errores.telefono =
      "Escribe un teléfono válido (solo números, espacios, +, - o paréntesis).";
  }

  if (!DEPARTAMENTOS.includes(valores.ciudad)) {
    errores.ciudad = "Selecciona tu departamento.";
  }

  if (!DISPONIBILIDADES.includes(valores.disponibilidad)) {
    errores.disponibilidad = "Selecciona tu disponibilidad.";
  }

  if (!AREAS_DE_INTERES.includes(valores.area)) {
    errores.area = "Selecciona un área de interés.";
  }

  if (valores.mensaje && valores.mensaje.length > 2000) {
    errores.mensaje = "El mensaje es demasiado largo (máximo 2000 caracteres).";
  }

  return errores;
}

export async function enviarSolicitudVoluntariado(estadoAnterior, formData) {
  try {
    const valores = {
      nombre: String(formData.get("nombre") ?? "").trim(),
      correo: String(formData.get("correo") ?? "").trim(),
      telefono: String(formData.get("telefono") ?? "").trim(),
      ciudad: String(formData.get("ciudad") ?? "").trim(),
      disponibilidad: String(formData.get("disponibilidad") ?? "").trim(),
      area: String(formData.get("area") ?? "").trim(),
      mensaje: String(formData.get("mensaje") ?? "").trim(),
    };

    // Honeypot anti-spam: los humanos no ven este campo. Si viene relleno es
    // un bot; se responde éxito falso y se descarta el envío en silencio.
    const honeypot = String(formData.get("sitio_web") ?? "").trim();
    if (honeypot) {
      return { exito: true, errores: null, valores: null };
    }

    const errores = validar(valores);
    if (Object.keys(errores).length > 0) {
      // Se devuelven los valores para que el formulario no se vacíe.
      return { exito: false, errores, valores };
    }

    const resultadoNotificacion = await enviarNotificacion(valores);

    // Campo aditivo (no rompe el contrato existente): indica si el correo a
    // la fundación quedó pendiente. La solicitud en sí siempre es "exito"
    // porque ya quedó validada y registrada; el correo es solo la
    // notificación interna.
    return {
      exito: true,
      errores: null,
      valores: null,
      notificacionPendiente: resultadoNotificacion.enviado !== true,
    };
  } catch {
    // Error inesperado: mensaje genérico, sin exponer detalles técnicos.
    return {
      exito: false,
      errores: {
        general:
          "Ocurrió un error inesperado. Intenta de nuevo en unos minutos o escríbenos por WhatsApp.",
      },
      valores: null,
    };
  }
}
