# Reporte de Auditoría: Rendimiento y Seguridad
## 1. Evaluación de Rendimiento (Lighthouse en Producción)

* **Entorno de despliegue:** Servidores Edge de Netlify.
* **Métrica principal (LCP):** 2.4 segundos.
* **Métricas secundarias:** First Contentful Paint de 1.1s y Cumulative Layout Shift (CLS) de 0.
* **Veredicto:** Aprobado. El rendimiento cumple con el requerimiento técnico obligatorio de mantener el Largest Contentful Paint por debajo de los 2.5 segundos.
* **Detalle técnico:** Este tiempo de respuesta en un entorno de producción real certifica que el componente `<Image/>` de Next.js con el atributo `priority` está precargando exitosamente los recursos gráficos del CMS antes de bloquear el renderizado.

## 2. Verificación de Seguridad Básica (Inspección de Red)

* **Entorno de evaluación:** Panel *Network* (Response Headers) en Google Chrome.
* **Veredicto:** Aprobado. Las políticas configuradas en el archivo `next.config.mjs` están operando correctamente en el servidor en vivo para proteger la integridad del sitio.
* **Políticas activas confirmadas:**
  * `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`: Obliga a todos los navegadores a conectarse exclusivamente mediante HTTPS cifrado, protegiendo los datos de navegación.
  * `X-Content-Type-Options: nosniff`: Previene ataques de inyección forzando al navegador a respetar los tipos MIME declarados.
  * `X-Frame-Options: DENY`: Mitiga vulnerabilidades de Clickjacking al prohibir que el sitio sea incrustado en iframes de dominios de terceros.