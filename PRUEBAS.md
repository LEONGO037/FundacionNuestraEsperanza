# Informe de Pruebas Funcionales — Sitio Web Fundación Nuestra Esperanza

**Fase 5 del TDR — Pruebas funcionales de los flujos de navegación**
Responsable: Juan José Cordeiro · Fecha: 29 de julio de 2026
Entorno: Next.js 16.2.11 en modo desarrollo (`npm run dev`) y build de producción (`npm run build`), Windows 11.

## 1. Resumen

Se probaron los flujos de navegación de todo el sitio, el formulario de voluntariado (incluida la validación del lado del servidor y el mecanismo anti-spam) y la página de donaciones. **Todos los casos de prueba de los módulos implementados pasaron.** Se registran además observaciones sobre módulos de otros integrantes que aún tienen contenido placeholder.

Método: los recorridos de navegación y los envíos del formulario se verificaron mediante peticiones HTTP reales contra el servidor de desarrollo (incluyendo POST directos al Server Action para simular a un usuario que evade la validación del navegador). Las verificaciones de responsive y teclado se hicieron por inspección del HTML/clases generadas y de los atributos de accesibilidad.

## 2. Build y lint

| Verificación | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|
| `npm run build` | Compila sin errores | Compila sin errores (18 páginas generadas) | OK |
| Rutas estáticas | Todas las rutas pre-renderizadas | `/`, `/contacto`, `/donar`, `/noticias`, `/programas`, `/sobre-nosotros`, `/voluntariado` estáticas (○); `/programas/[slug]` y `/noticias/[slug]` SSG (●) con sus 5 + 3 rutas pre-generadas | OK |
| `npm run lint` | Sin errores | Sin errores ni advertencias | OK |

Nota: ninguna ruta quedó dinámica (ƒ). La página `/voluntariado` es estática; el envío del formulario usa un Server Action, que funciona sobre páginas estáticas (es un POST aparte).

## 3. Flujos de navegación

| Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|
| Header: enlaces Sobre Nosotros, Programas, Noticias, Contacto y botón DONAR (menú desktop) | Navegan a `/sobre-nosotros`, `/programas`, `/noticias`, `/contacto`, `/donar` | Los 5 `href` presentes y correctos; todas las rutas responden 200 | OK |
| Header: menú móvil | Mismos enlaces que desktop | Mismo componente y mismos `href` (verificado en `Header.jsx`); el menú se abre/cierra con el botón hamburguesa | OK |
| `/` → `/programas` → detalle → volver | Listado con 5 programas, cada tarjeta lleva a su detalle, enlace "← Volver a Programas" | 5 tarjetas con slugs correctos; los 5 detalles responden 200; enlace de retorno presente | OK |
| `/` → `/noticias` → detalle → volver | Listado con 3 noticias ordenadas por fecha descendente | 3 tarjetas correctas; los 3 detalles responden 200; enlace de retorno presente | OK |
| `/sobre-nosotros` | Página completa (historia, misión/visión, cifras, equipo, aliados) | Responde 200 con todas las secciones | OK |
| `/contacto` | Página de contacto | Responde 200 (ver observación B-1: datos placeholder) | OK |
| Slug inexistente `/programas/no-existe` | Página 404, sin error de runtime | 404 | OK |
| Slug inexistente `/noticias/no-existe` | Página 404, sin error de runtime | 404 | OK |

## 4. Página de Donaciones (`/donar`)

| Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|
| Enlace de WhatsApp | Abre `https://wa.me/59170112236` con mensaje predefinido URL-encodeado, `target="_blank"` y `rel="noopener noreferrer"` | `href` correcto con el texto "Hola, quisiera hacer una donación…" codificado; atributos presentes | OK |
| Datos falsos eliminados | Sin rastro de "Banco XYZ" ni cuenta "1234567890" | 0 apariciones de ambos | OK |
| Datos bancarios | Marcadores `[PENDIENTE: proporcionado por la fundación]`, sin números inventados | Marcadores presentes en Banco, Titular, Tipo de cuenta, Número de cuenta y NIT | OK |
| QR | Placeholder accesible "Código QR disponible próximamente" | Presente, con `role="img"` y `aria-label` | OK |
| Botón "Copiar número de cuenta" | Copia al portapapeles y confirma vía `aria-live` | Componente cliente con `navigator.clipboard`, confirmación `role="status"` y mensaje de fallback si el navegador lo bloquea | OK |

## 5. Formulario de Voluntariado (`/voluntariado`)

Los casos marcados con (*) se ejecutaron mediante POST directo al Server Action **sin pasar por la validación HTML del navegador**, que es lo que haría un atacante o un bot.

| Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|
| Envío con todos los campos válidos | Mensaje de éxito; datos registrados en el log del servidor (SMTP pendiente) | Mensaje "¡Gracias por querer ser parte!"; log `[voluntariado] SMTP no configurado. Solicitud registrada…` con los datos completos | OK |
| Campos obligatorios vacíos (con navegador) | El atributo `required` de los 6 campos obligatorios bloquea el envío | Los 6 campos llevan `required`; validación de cliente actúa antes de enviar | OK |
| (*) Envío vacío evadiendo el HTML | El servidor devuelve errores por campo sin caerse | Los 6 mensajes de error por campo devueltos (nombre, correo, teléfono, ciudad, disponibilidad, área); sin excepción ni 500 | OK |
| (*) Correo con formato inválido | Error solo en el campo correo; los demás valores se conservan en el formulario | "Escribe un correo electrónico válido." y valores repoblados | OK |
| (*) Valor de select manipulado (ciudad = "Narnia") | El servidor rechaza valores fuera de la lista permitida | Error "Selecciona tu departamento." | OK |
| (*) Honeypot relleno | Respuesta de éxito falso; el envío se descarta y NO se registra como legítimo | Mensaje de éxito devuelto; 0 registros del envío en el log del servidor | OK |
| Doble envío | Botón deshabilitado mientras se envía | `disabled={enviando}` con `useActionState`; texto cambia a "Enviando..." | OK |

## 6. Responsive (360 px / 768 px / 1280 px)

Verificado por inspección de las clases generadas en las páginas tocadas en esta fase (`/donar`, `/voluntariado`):

| Verificación | Resultado | Estado |
|---|---|---|
| Sin scroll horizontal | `overflow-x: hidden` global en `body` (globals.css) + contenedores fluidos (`container mx-auto px-6`, sin anchos fijos) | OK |
| Tarjetas de donación | Grilla `grid-cols-1` en móvil → `lg:grid-cols-3` en escritorio; legibles en una columna a 360 px | OK |
| Formulario usable en móvil | Inputs `w-full`, contenedor `max-w-2xl`, botón de envío a ancho completo | OK |
| QR | `w-48` fijo pero centrado dentro de contenedor fluido; no desborda a 360 px | OK |

## 7. Accesibilidad y teclado (formulario)

| Verificación | Resultado | Estado |
|---|---|---|
| Tab recorre los campos en orden lógico | Orden del DOM = orden visual (nombre → correo → teléfono → ciudad → disponibilidad → área → mensaje → enviar) | OK |
| El honeypot NO recibe foco | `tabIndex={-1}` + contenedor `aria-hidden="true"` oculto con CSS (verificado en el HTML servido) | OK |
| Enter envía el formulario | Botón `type="submit"` dentro del `<form>` | OK |
| Foco visible | Patrón `focus-visible:outline-4 outline-offset-2` en inputs, selects, textarea, botones y enlaces | OK |
| Errores anunciados | Mensajes asociados con `aria-describedby`, campos con `aria-invalid`, éxito/error general con `role="status"`/`aria-live="polite"` | OK |
| Labels asociados | Todos los campos con `<label htmlFor>` e `id` correspondiente | OK |

## 8. Bugs y observaciones (módulos de otros integrantes — NO corregidos aquí)

| ID | Módulo (responsable) | Descripción | Gravedad |
|---|---|---|---|
| B-1 | Contacto (M10) | `/contacto` aún tiene datos placeholder: "Calle Falsa 123, Ciudad, País", WhatsApp `wa.me/1234567890` (número falso) y mapa sin incrustar. Deben reemplazarse por la dirección real de Miraflores, el WhatsApp +591 70112236 y el mapa. Usa colores genéricos (`bg-green-500`) en lugar de la paleta institucional. | Alta (número de WhatsApp falso visible) |
| B-2 | Inicio (M01) | `/` sigue siendo el scaffolding: "Noticia de ejemplo", "Persona de Ejemplo", sin CTAs Donar/Voluntario ni estadísticas. Ya existen los componentes (`TarjetaNoticia`, `LlamadaALaAccion`) y los helpers (`getNoticiasRecientes`, `getTestimonios`) para armarla. | Media |
| B-3 | General | No existe Footer todavía (previsto para otra fase). | Baja |

Observación de desarrollo (no es bug del sitio): ejecutar `npm run build` mientras `npm run dev` está corriendo corrompe la caché `.next` del servidor de desarrollo y produce errores 500 hasta reiniciarlo. Recomendación para el equipo: detener el dev server antes de hacer builds.

## 9. Pendientes conocidos (datos que debe proveer la fundación)

1. **Datos bancarios oficiales** (banco, titular, tipo y número de cuenta, NIT) para `/donar` — hoy hay marcadores `[PENDIENTE]`.
2. **Imagen del código QR** de banca móvil → colocar en `public/images/qr-donaciones.png` y activar el bloque comentado en `src/app/donar/page.js`.
3. **Credenciales SMTP y correo de destino** para la notificación del formulario de voluntariado → variables documentadas en `.env.example`; la implementación del transporte (nodemailer) corresponde a la Fase 4 de Marvin Mollo (ver `src/lib/notificaciones.js`).
4. Validación institucional de los textos marcados con `{/* Texto preliminar: validar con la fundación */}` en Donar, Voluntariado y Sobre Nosotros, y del contenido semilla del CMS (`<!-- Contenido preliminar -->`).

---

## 10. Auditoría Visual y Pruebas Cross-Browser (Fase 5)

**Responsable:** Christian Coronel · **Fecha de ejecución:** Agosto 2026  

Como parte de la Fase 5, se ejecutó una auditoría exhaustiva centrada en la capa de presentación (UI/UX), asegurando la coherencia visual del Sistema de Diseño en las vistas estáticas y su correcto despliegue responsivo.

### 10.1 Verificación Cross-Browser y Dispositivos
| Caso de prueba | Dispositivo / Navegador | Resultado obtenido | Estado |
|---|---|---|---|
| Fidelidad de degradados y `mix-blend-mode` | Chrome, Safari, Edge, Firefox | Animaciones `float` y desenfoques (blur) procesados correctamente en motores WebKit y Blink. | OK |
| Renderizado tipográfico | iOS Safari, Android Chrome | Fuentes legibles (`leading-relaxed`), sin desbordes de texto. | OK |
| Grid de Aliados (`/sobre-nosotros`) | Móvil (360px), Tablet (768px), Desktop (1280px) | Transición perfecta de 2 columnas en móvil a 3 en tablet y 5 en desktop. | OK |
| Tarjetas de programas y donación | Móvil, Desktop | Apiladas (1 columna) en pantallas pequeñas, expandidas en desktop; efectos `hover` fluidos. | OK |
| Iframe embebido (Google Maps) | Móvil (iOS/Android) | Ancho `100%` respetado; configurado para no bloquear el scroll vertical en móviles. | OK |

### 10.2 Auditoría Visual y Coherencia de Marca
| Verificación | Criterio de aceptación | Resultado obtenido | Estado |
|---|---|---|---|
| Uso de Paleta Corporativa | Uso estricto de variables `@theme inline` (`--color-fundacion-*`). | Se rediseñó el total de las 5 páginas para usar *navy blue, pink, cyan, green* y *orange* correctamente. | OK |
| Jerarquía y Espaciado | Espaciado simétrico y aire entre bloques (Tailwind `py-20`, `gap-8`). | Consistencia visual lograda entre Inicio, Sobre Nosotros y Contacto. Sensación "premium". | OK |
| Componentes Compartidos | Encabezados deben ser uniformes en todas las vistas. | Se corrigió `EncabezadoPagina.jsx` para centrar su contenido globalmente. | OK |
| Datos Placeholder (Bug Visual) | Limpiar datos falsos, lorem ipsum o assets temporales. | Se insertó directorio real (4 personas), 5 aliados verdaderos, y dirección/mapa de Miraflores verídicos. | OK |
