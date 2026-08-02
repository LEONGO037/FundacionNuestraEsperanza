// Notificaciones por correo a la fundación (solicitudes de voluntariado).
//
// Las credenciales se leen SIEMPRE de variables de entorno (ver .env.example
// en la raíz del repo). Nunca escribir credenciales en el código.

import nodemailer from "nodemailer";

const ETIQUETAS = {
  nombre: "Nombre completo",
  correo: "Correo electrónico",
  telefono: "Teléfono",
  ciudad: "Ciudad / Departamento",
  disponibilidad: "Disponibilidad",
  area: "Área de interés",
  mensaje: "Mensaje",
};

const CAMPOS_ORDENADOS = [
  "nombre",
  "correo",
  "telefono",
  "ciudad",
  "disponibilidad",
  "area",
  "mensaje",
];

function textoCorreo(datos) {
  return CAMPOS_ORDENADOS.map((campo) => {
    const valor = campo === "mensaje" ? datos.mensaje || "Sin mensaje adicional." : datos[campo];
    return `${ETIQUETAS[campo]}: ${valor}`;
  }).join("\n");
}

function htmlCorreo(datos) {
  const filas = CAMPOS_ORDENADOS.map((campo) => {
    const valor = campo === "mensaje" ? datos.mensaje || "Sin mensaje adicional." : datos[campo];
    return `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">${ETIQUETAS[campo]}</td><td style="padding:4px 0;">${valor}</td></tr>`;
  }).join("");
  return `<p>Se recibió una nueva solicitud de voluntariado para la Fundación Nuestra Esperanza:</p><table>${filas}</table>`;
}

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

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: CORREO_FUNDACION,
      replyTo: datos.correo,
      subject: `Nueva solicitud de voluntariado — ${datos.nombre}`,
      text: textoCorreo(datos),
      html: htmlCorreo(datos),
    });
    return { enviado: true };
  } catch (error) {
    // No se propaga el error: el envío del formulario no debe fallar para
    // el usuario aunque el correo no salga.
    console.error("[voluntariado] Falló el envío de correo:", error);
    return { enviado: false, pendiente: true };
  }
}
