// Helper compartido para formatear fechas ISO a español legible.

// Formatea un string ISO a "29 de julio de 2026". Devuelve "" si la fecha
// es null o inválida (el front-matter del CMS puede no traer fecha).
// Se formatea en UTC para que la fecha mostrada no se corra un día
// respecto a la guardada por el CMS.
export function formatearFecha(iso) {
  if (!iso) return "";
  const fecha = new Date(iso);
  if (isNaN(fecha.getTime())) return "";
  return new Intl.DateTimeFormat("es-BO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(fecha);
}
