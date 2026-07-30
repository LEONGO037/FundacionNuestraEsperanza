// Notificaciones por correo a la fundación (solicitudes de voluntariado).
//
// IMPORTANTE: la implementación del transporte real de correo (nodemailer o
// similar) corresponde a la Fase 4 de Marvin Mollo. Este módulo deja lista la
// interfaz y la lectura de configuración para no duplicar trabajo: Marvin solo
// debe completar el bloque marcado con TODO.
//
// Las credenciales se leen SIEMPRE de variables de entorno (ver .env.example
// en la raíz del repo). Nunca escribir credenciales en el código.

export async function enviarNotificacion(datos) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CORREO_FUNDACION } =
    process.env;

  const configuracionCompleta =
    SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CORREO_FUNDACION;

  if (!configuracionCompleta) {
    // Sin SMTP configurado no se puede enviar, pero el envío del formulario
    // no debe fallar para el usuario: se registra la solicitud en el log del
    // servidor y se reporta como pendiente.
    console.log(
      "[voluntariado] SMTP no configurado. Solicitud registrada, envío de correo pendiente:",
      JSON.stringify(datos)
    );
    return { enviado: false, pendiente: true };
  }

  // TODO (Marvin, Fase 4): implementar aquí el transporte real con nodemailer,
  // enviando la solicitud a CORREO_FUNDACION vía SMTP_HOST:SMTP_PORT con
  // SMTP_USER/SMTP_PASS. Debe devolver { enviado: true } si el envío fue
  // exitoso y { enviado: false, pendiente: true } si falla (sin lanzar error).
  console.log(
    "[voluntariado] SMTP configurado pero transporte aún no implementado (Fase 4 - Marvin). Solicitud:",
    JSON.stringify(datos)
  );
  return { enviado: false, pendiente: true };
}
