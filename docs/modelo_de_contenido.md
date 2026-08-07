# Modelo de Contenido para Decap CMS

**Proyecto:** Sitio Web Institucional — Fundación Nuestra Esperanza  
**Fase:** 1 — Levantamiento y Diseño  
**Responsable:** Christian Coronel  
**Versión:** 1.0  
**Fecha:** Agosto 2026

---

## 1. Introducción

Este documento define la estructura de datos (modelo de contenido) que alimentará el sitio web de la Fundación Nuestra Esperanza a través de **Decap CMS** (CMS basado en Git). Cada entrada de contenido se almacena como un archivo Markdown (`.md`) con metadatos en formato YAML (*front-matter*) dentro de la carpeta `src/content/` del repositorio.

El objetivo es que el personal de la fundación (rol **Editor**) pueda crear, editar y eliminar contenido de programas, noticias y testimonios de forma autónoma, sin intervención de un desarrollador.

### 1.1 Convenciones generales

| Aspecto | Convención |
| :--- | :--- |
| **Formato de archivos** | Markdown (`.md`) con front-matter YAML |
| **Ubicación** | `src/content/<colección>/` |
| **Nomenclatura de archivos** | `YYYY-MM-DD-titulo-en-slug.md` (generado automáticamente por Decap CMS) |
| **Generación de slug** | Se deriva del nombre completo del archivo sin la extensión `.md`, incluyendo el prefijo de fecha |
| **Idioma** | Español (único idioma del sitio, según TDR §5.2) |
| **Imágenes** | Se almacenan en `public/images/` y se referencian con rutas relativas desde el front-matter |

### 1.2 Roles de usuario del CMS

| Rol | Permisos | Usuarios |
| :--- | :--- | :--- |
| **Editor** | Crear, editar y eliminar entradas de Programas, Noticias y Testimonios | Personal de la fundación |
| **Administrador** | Acceso completo al CMS y configuración del sitio | Equipo de desarrollo / Presidenta |

---

## 2. Colecciones Editables (Gestionadas por el CMS)

Estas son las colecciones que el personal de la fundación podrá administrar directamente desde la interfaz de Decap CMS.

---

### 2.1 Colección: Programas

**Ruta de almacenamiento:** `src/content/programas/`  
**Página del sitio:** `/programas` (listado) y `/programas/[slug]` (detalle)  
**Descripción:** Los cinco programas de intervención integral que ofrece la fundación: albergue, alimentación, apoyo psicosocial, recreación y material escolar/víveres.

#### Esquema de campos (front-matter)

| Campo | Tipo | Obligatorio | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `title` | String | ✅ Sí | Nombre del programa. Se muestra como título principal en el listado y en la página de detalle. | `"Albergue Casa Esperanza"` |
| `date` | DateTime | ✅ Sí | Fecha de creación o última actualización. Generada automáticamente por el CMS. | `2026-07-29T09:00:00.000Z` |
| `description` | String | ✅ Sí | Descripción corta del programa (máx. 200 caracteres). Se muestra en las tarjetas del listado y en los metadatos SEO de la página de detalle. | `"Un hogar temporal en Miraflores para niños con cáncer y sus familias..."` |
| `thumbnail` | Image | ❌ No | Imagen representativa del programa. Se muestra en la tarjeta del listado. Ruta relativa a `public/`. | `"/images/programas/albergue.jpg"` |
| `order` | Number | ❌ No | Orden de presentación en el listado. Si no se define, se ordena alfabéticamente por `title`. | `1` |

#### Cuerpo del archivo (body)

Contenido en formato **Markdown** con la descripción detallada del programa. Puede incluir:
- Subtítulos (`##`, `###`)
- Párrafos descriptivos
- Listas de servicios o beneficios
- Imágenes adicionales embebidas

#### Ejemplo de archivo completo

```markdown
---
title: "Albergue Casa Esperanza"
date: 2026-07-29T09:00:00.000Z
description: "Un hogar temporal en la zona de Miraflores, La Paz, para niños, niñas y adolescentes con cáncer y sus familias que llegan de otros departamentos para recibir tratamiento."
thumbnail: "/images/programas/albergue.jpg"
order: 1
---

## Un hogar cerca del tratamiento

Muchas de las familias que acompañamos viajan desde distintos departamentos de Bolivia
para que sus hijos e hijas reciban tratamiento oncológico en La Paz. El albergue Casa
Esperanza, ubicado en la zona de Miraflores, les ofrece un lugar seguro y acogedor
donde hospedarse durante ese proceso.

## Más que un techo

En Casa Esperanza las familias encuentran un espacio digno para descansar, cocinar y
acompañarse entre sí. Compartir el día a día con otras familias que atraviesan la misma
situación alivia la carga emocional del tratamiento y crea redes de apoyo que perduran
en el tiempo.
```

#### Programas actuales cargados

| # | Archivo | Título |
| :--- | :--- | :--- |
| 1 | `2026-07-29-albergue-casa-esperanza.md` | Albergue Casa Esperanza |
| 2 | `2026-07-29-alimentacion.md` | Alimentación |
| 3 | `2026-07-29-apoyo-psicosocial.md` | Apoyo Psicosocial |
| 4 | `2026-07-29-recreacion.md` | Recreación |
| 5 | `2026-07-29-material-escolar-y-viveres.md` | Material Escolar y Víveres |

---

### 2.2 Colección: Noticias

**Ruta de almacenamiento:** `src/content/noticias/`  
**Página del sitio:** `/noticias` (listado) y `/noticias/[slug]` (detalle)  
**Descripción:** Artículos informativos sobre actividades, campañas y novedades de la fundación. Listado simplificado sin categorías, paginación ni búsqueda (según TDR §5.2).

#### Esquema de campos (front-matter)

| Campo | Tipo | Obligatorio | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `title` | String | ✅ Sí | Titular de la noticia. Se muestra en la tarjeta del listado, en la página de detalle y en los metadatos SEO. | `"Campaña de recolección de víveres"` |
| `date` | DateTime | ✅ Sí | Fecha de publicación. Determina el orden de aparición (más reciente primero). También se usa para seleccionar las 3 noticias recientes de la página de Inicio. | `2026-03-15T10:00:00.000Z` |
| `author` | String | ❌ No | Autor o fuente de la noticia. Si no se especifica, se omite en la interfaz. | `"Fundación Nuestra Esperanza"` |
| `thumbnail` | Image | ❌ No | Imagen de portada de la noticia. Se muestra en la tarjeta del listado. Ruta relativa a `public/`. | `"/images/noticias/campana-viveres.jpg"` |

#### Cuerpo del archivo (body)

Contenido en formato **Markdown** con el cuerpo completo de la noticia. Puede incluir:
- Párrafos narrativos
- Imágenes embebidas
- Subtítulos para organizar secciones largas
- Enlaces a recursos externos

#### Ejemplo de archivo completo

```markdown
---
title: "Campaña de recolección de víveres"
date: 2026-03-15T10:00:00.000Z
author: "Fundación Nuestra Esperanza"
thumbnail: "/images/noticias/campana-viveres.jpg"
---

La Fundación Nuestra Esperanza lanza una nueva campaña de recolección de víveres
para abastecer el albergue Casa Esperanza durante los meses de invierno.

## ¿Cómo participar?

Puedes dejar tu donación de víveres no perecederos en las oficinas de la fundación
ubicadas en la zona de Miraflores, La Paz, de lunes a viernes de 9:00 a 17:00.

## Alimentos más necesitados

- Arroz, fideos, azúcar
- Aceite, harina
- Leche en polvo
- Enlatados
```

#### Noticias actuales cargadas

| # | Archivo | Título | Fecha |
| :--- | :--- | :--- | :--- |
| 1 | `2026-06-30-nueva-alianza-institucional.md` | La fundación fortalece sus alianzas institucionales | 30/06/2026 |
| 2 | `2026-05-20-jornada-recreativa-casa-esperanza.md` | Jornada recreativa en Casa Esperanza | 20/05/2026 |
| 3 | `2026-03-15-campana-de-recoleccion-de-viveres.md` | Campaña de recolección de víveres | 15/03/2026 |

---

### 2.3 Colección: Testimonios

**Ruta de almacenamiento:** `src/content/testimonios/`  
**Página del sitio:** Sección integrada dentro de la página de Inicio (`/`) — no tiene página propia (según TDR §5.1, módulo M05).  
**Descripción:** Testimonios breves de beneficiarios, familiares o voluntarios de la fundación. Son citas textuales cortas con el nombre y la relación de la persona.

#### Esquema de campos (front-matter)

| Campo | Tipo | Obligatorio | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `title` | String | ✅ Sí | Nombre o identificación de la persona que da el testimonio. Puede ser un seudónimo o un descriptor genérico para proteger la privacidad. | `"Madre de un paciente"` |
| `role` | String | ❌ No | Relación de la persona con la fundación (beneficiaria, voluntaria, aliado, etc.). Se muestra debajo del nombre. | `"Beneficiaria del programa de apoyo integral"` |

#### Cuerpo del archivo (body)

**Texto plano** (no Markdown complejo) con la cita textual del testimonio. Se renderiza directamente como texto, sin conversión a HTML avanzado, dado que son citas breves.

#### Ejemplo de archivo completo

```markdown
---
title: "Madre de un paciente"
role: "Beneficiaria del programa de apoyo integral"
---

La fundación nos apoyó con alimentación y con el ánimo que necesitábamos para seguir
adelante. Saber que había alguien pendiente de nosotros nos dio fuerzas durante el
tratamiento de mi hija.
```

#### Testimonios actuales cargados

| # | Archivo | Nombre | Rol |
| :--- | :--- | :--- | :--- |
| 1 | `madre-de-paciente.md` | Madre de un paciente | Beneficiaria del programa de apoyo integral |
| 2 | `familia-beneficiaria.md` | Familia beneficiaria | *(por verificar)* |
| 3 | `voluntaria-del-programa.md` | Voluntaria del programa | *(por verificar)* |

> **Nota:** Los testimonios no llevan prefijo de fecha en el nombre de archivo porque no tienen ordenamiento cronológico relevante; se muestran todos en la sección de Inicio.

---

## 3. Contenido Estático (No gestionado por CMS)

Las siguientes secciones del sitio web contienen datos que **no se administran desde Decap CMS**. Su contenido se define directamente en el código fuente y solo puede ser modificado por un desarrollador. Esta decisión se justifica porque son datos que cambian con muy poca frecuencia y que requieren control técnico.

---

### 3.1 Página de Inicio (`/`)

| Sección | Fuente de datos | Campos |
| :--- | :--- | :--- |
| **Hero** | Hardcoded en `page.js` | Título principal ("Toda vida merece esperanza"), subtítulo, imagen de fondo, botones CTA (Conoce Más, Quiero Donar) |
| **Estadísticas de Impacto** | Hardcoded en `page.js` | ~400 familias acompañadas, +12 años de trabajo, 5 programas de apoyo, alcance nacional |
| **Nuestros Programas** | `src/content/programas/` (CMS) | Se muestran las tarjetas de los 5 programas (ver §2.1) |
| **Testimonios** | `src/content/testimonios/` (CMS) | Se muestran todos los testimonios cargados (ver §2.3) |
| **Noticias Recientes** | `src/content/noticias/` (CMS) | Se muestran las 3 noticias más recientes por fecha (ver §2.2) |

---

### 3.2 Sobre Nosotros (`/sobre-nosotros`)

| Sección | Fuente de datos | Campos |
| :--- | :--- | :--- |
| **Nuestra Historia** | Hardcoded en `page.js` | Texto narrativo sobre el origen y evolución de la fundación |
| **Misión** | Hardcoded en `page.js` | Declaración de misión institucional |
| **Visión** | Hardcoded en `page.js` | Declaración de visión institucional |
| **Nuestro Impacto** | Hardcoded en `page.js` | Cifras: ~400 familias, +12 años, 5 programas, alcance nacional |
| **Equipo Directivo** | Hardcoded en `page.js` | Nombre y cargo (actualmente: Mónica Méndez — Presidenta) |
| **Aliados** | Hardcoded en `page.js` | Laboratorios Bagó de Bolivia, Childhood Cancer International (Programa Home Away From Home), Foundation S |

> **Justificación:** El equipo directivo y los aliados cambian con muy poca frecuencia. No justifica una colección en el CMS dentro del alcance actual (240 horas). Sin embargo, se documenta como extensión futura (ver §5).

---

### 3.3 Donaciones (`/donar`)

| Sección | Fuente de datos | Campos |
| :--- | :--- | :--- |
| **WhatsApp** | Hardcoded en `page.js` | Enlace directo con mensaje predefinido, número: +591 70112236 |
| **Código QR** | Imagen estática en `public/images/` | Imagen QR de banca móvil boliviana *(pendiente: la fundación debe proporcionar la imagen)* |
| **Transferencia Bancaria** | Hardcoded en `page.js` | Banco, titular, tipo de cuenta, número de cuenta, NIT *(pendiente: la fundación debe proporcionar datos oficiales)* |
| **Transparencia** | Hardcoded en `page.js` | Texto informativo sobre el destino de las donaciones |

> **Nota importante:** Según el TDR §5.2, este proyecto **NO** incluye integración transaccional con pasarela de pago. La página es puramente informativa.

---

### 3.4 Voluntariado (`/voluntariado`)

| Campo del formulario | Tipo | Obligatorio | Descripción |
| :--- | :--- | :--- | :--- |
| `nombre` | Texto | ✅ Sí | Nombre completo del voluntario |
| `correo` | Email | ✅ Sí | Correo electrónico de contacto |
| `telefono` | Teléfono | ✅ Sí | Número de teléfono o celular |
| `ciudad` | Texto | ✅ Sí | Ciudad de residencia |
| `disponibilidad` | Selección | ✅ Sí | Horarios o días de disponibilidad |
| `area_interes` | Selección | ❌ No | Área en la que desea colaborar (recreación, logística, difusión, etc.) |
| `mensaje` | Texto largo | ❌ No | Mensaje adicional o motivación |

> **Flujo:** Al enviar el formulario, se dispara una notificación automática por correo electrónico al equipo de la fundación (implementación a cargo de Juan Jose Cordeiro y Marvin Mollo en Fase 4).

---

### 3.5 Contacto (`/contacto`)

| Dato | Valor actual | Fuente |
| :--- | :--- | :--- |
| **Dirección** | Casa Esperanza, zona Miraflores, La Paz, Bolivia | Hardcoded en `page.js` |
| **WhatsApp** | +591 70112236 | Hardcoded en `page.js` |
| **Facebook** | NuestraEsperanzaBo | Hardcoded en `page.js` |
| **Mapa interactivo** | Embebido (Google Maps o similar) | Hardcoded en `page.js` |

---

### 3.6 Newsletter (Captura de correo)

| Campo | Tipo | Obligatorio | Descripción |
| :--- | :--- | :--- | :--- |
| `email` | Email | ✅ Sí | Correo electrónico del suscriptor |

> **Alcance:** Según el TDR §5.2, la captura de correo se almacena en el CMS. **No** se integra con servicios de email marketing (Brevo, Mailchimp) en esta fase. La integración queda documentada como extensión futura.

---

## 4. Diagrama de Relaciones entre Contenido y Páginas

```
src/content/
├── programas/                    ──► /programas (listado)
│   ├── 2026-07-29-albergue...md       /programas/[slug] (detalle)
│   ├── 2026-07-29-alimentacion.md     / (tarjetas en Inicio)
│   ├── 2026-07-29-apoyo-psicosocial.md
│   ├── 2026-07-29-recreacion.md
│   └── 2026-07-29-material-escolar...md
│
├── noticias/                     ──► /noticias (listado)
│   ├── 2026-03-15-campana...md        /noticias/[slug] (detalle)
│   ├── 2026-05-20-jornada...md        / (3 más recientes en Inicio)
│   └── 2026-06-30-nueva-alianza...md
│
└── testimonios/                  ──► / (sección en Inicio únicamente)
    ├── madre-de-paciente.md
    ├── familia-beneficiaria.md
    └── voluntaria-del-programa.md
```

### Flujo de lectura en el código

```
Decap CMS (Editor) ──► Guarda .md en Git ──► src/content/
                                                   │
                                           src/lib/content.js
                                           (lee archivos .md con gray-matter)
                                                   │
                                    ┌───────────────┼───────────────┐
                                    │               │               │
                              getProgramas()   getNoticias()   getTestimonios()
                              getProgramaBySlug()  getNoticiaBySlug()
                                    │               │               │
                                    ▼               ▼               ▼
                              /programas        /noticias         / (Inicio)
                              /programas/[slug] /noticias/[slug]
```

---

## 5. Extensiones Futuras (Fuera del Alcance Actual)

Las siguientes mejoras al modelo de contenido quedan documentadas para implementación posterior, en concordancia con el TDR §16:

| Extensión | Descripción | Impacto en el modelo |
| :--- | :--- | :--- |
| **Equipo y Aliados dinámicos** | Permitir que la fundación gestione los miembros del equipo directivo y los aliados desde el CMS | Nueva colección `equipo/` con campos: nombre, cargo, foto, orden. Nueva colección `aliados/` con campos: nombre, logo, descripción, URL |
| **Categorías en Noticias** | Agregar un campo `category` al front-matter de noticias para filtrar por tipo | Nuevo campo `category` (enum: Campaña, Evento, Alianza, General) |
| **Paginación en Noticias** | Cuando el volumen de noticias crezca, implementar paginación en el listado | Modificación en `getNoticias()` para soportar offset/limit |
| **Página independiente de Testimonios** | Crear una página `/testimonios` con galería, fotos de los beneficiarios y flujo de aprobación | Nuevos campos: `photo` (Image), `approved` (Boolean), `featured` (Boolean) |
| **Newsletter con email marketing** | Integrar la captura de correo con Brevo o Mailchimp para envíos automáticos | Sin cambio en el modelo; requiere integración API |
| **Galería de imágenes en Noticias** | Permitir múltiples imágenes por noticia | Nuevo campo `gallery` (List de Image) |

---

## 6. Validación y Restricciones

Para garantizar la integridad del contenido gestionado por los editores, se recomienda configurar las siguientes validaciones en Decap CMS:

| Colección | Validación | Motivo |
| :--- | :--- | :--- |
| **Programas** | `title`: máximo 80 caracteres | Evitar títulos que desborden las tarjetas del listado |
| **Programas** | `description`: máximo 200 caracteres | Controlar el tamaño de las tarjetas en el grid |
| **Programas** | `thumbnail`: formatos aceptados `.jpg`, `.png`, `.webp` | Compatibilidad con el componente `<Image>` de Next.js |
| **Noticias** | `title`: máximo 120 caracteres | SEO (Google trunca títulos largos en resultados) |
| **Noticias** | `date`: no puede ser futura | Evitar publicaciones con fecha incorrecta |
| **Testimonios** | `body`: máximo 300 caracteres | Los testimonios son citas breves para la sección de Inicio |
| **Todas** | Imágenes: tamaño máximo 2 MB por archivo | Rendimiento y tiempo de carga (LCP < 2.5s según TDR §7.2) |

---

## 7. Referencias

- **TDR:** Términos de Referencia — Desarrollo de Sitio Web Institucional, versión 1.0, Junio 2026
- **Guía de Diseño:** `docs/design_guide.md` — Paleta de colores y sistema de diseño visual
- **Wireframes:** `docs/wireframes/` — Planos estructurales de cada página
- **Código fuente del helper de contenido:** `src/lib/content.js` — Funciones de lectura de colecciones
- **Sitio de referencia:** [fundacion-nuestra-esperanza.cloud](https://fundacion-nuestra-esperanza.cloud)
