# Manual Técnico de Arquitectura, Despliegue y Mantenimiento

**Proyecto Social UCB — Desarrollo de Sitio Web Institucional**  
**Beneficiario:** Fundación Nuestra Esperanza (La Paz, Bolivia)  
**Fase 7: Capacitación y Cierre**  
**Elaborado por:** Alan Flores (Ingeniería de Sistemas — UCB La Paz)  
**Versión:** 1.0 — Agosto 2026  

---

## 1. Resumen Ejecutivo y Ficha Técnica

Este documento constituye la especificación técnica y guía de mantenimiento para administradores de sistemas, desarrolladores e integrantes de futuros proyectos sociales de la Universidad Católica Boliviana "San Pablo".

El sitio web institucional de la **Fundación Nuestra Esperanza** está desarrollado bajo la arquitectura moderna **Jamstack (JavaScript, API, Markup)** orientada a la **Generación de Páginas Estáticas (SSG - Static Site Generation)**. Esta elección garantiza máxima velocidad de carga (LCP < 2.5s), costo de infraestructura cero ($0/mes en planes comunitarios), seguridad total frente a inyecciones SQL o exploits de servidor, y autonomía completa mediante un gestor de contenidos sin servidor (Git-based Decap CMS).

### Cuadro de Especificaciones Técnicas
| Capa | Tecnología / Herramienta | Versión / Detalle | Justificación |
|---|---|---|---|
| **Framework Principal** | Next.js (App Router) | `16.2.11` | Generación SSG ultrarrápida y SEO optimizado |
| **Biblioteca de UI** | React | `19.2.4` | Componentización modular y reactiva |
| **Estilos CSS** | Tailwind CSS v4 | `^4.0.0` | Sistema de diseño nativo mediante `@theme inline` |
| **CMS (Gestor de Contenidos)** | Decap CMS (Git-based) | `^3.0.0` | Autogestión de contenido guardada directamente en Git |
| **Parser de Markdown** | `gray-matter` + `remark` | `4.0.3` / `15.0.1` | Extracción de Front-matter y conversión a HTML |
| **Notificaciones por Correo** | Nodemailer | `^9.0.3` | Envío SMTP para solicitudes de voluntariado |
| **Analítica Web** | `@next/third-parties/google` | `^16.3.1` | Integración nativa de Google Analytics 4 |
| **Hosting y CI/CD** | Vercel | Plan ONG / Free | Despliegue continuo con SSL automático |
| **Control de Versiones** | Git + GitHub | Main branch | Repositorio centralizado y trazable |

---

## 2. Arquitectura del Sistema y Flujo de Datos

### 2.1 Flujo de Datos Jamstack
```text
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             ENTORNO DE ADMINISTRACIÓN                           │
│  Personal de la Fundación ──> Decap CMS (/admin/) ──> Commit Automático a Git  │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             PIPELINE DE COMPILACIÓN (CI/CD)                     │
│  GitHub Main Push ──> Vercel Build Pipeline ──> npm run build (SSG Generator)   │
│                       - Lee src/content/*.md                                    │
│                       - Convierte Front-matter a JSON                           │
│                       - Renderiza 20 páginas HTML estáticas en < 5s             │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             DISTRIBUCIÓN CDN GLOBAL                             │
│  Vercel Edge Network ──> Servidor HTTPS ultra veloz ──> Navegador del Usuario   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.2 Estructura del Código Fuente (`src/`)

```text
FundacionNuestraEsperanza/
├── docs/                        # Documentación técnica, wireframes, mockups y manuales
│   ├── manual_de_usuario_cms.md # Manual de uso del CMS para la fundación
│   ├── manual_tecnico.md        # Este documento técnico de arquitectura
│   └── ...
├── public/                      # Recursos estáticos servidos directamente por Next.js
│   ├── admin/                   # Panel de administración de Decap CMS
│   │   ├── config.yml           # Definición de colecciones y esquemas del CMS
│   │   └── index.html           # Punto de entrada HTML del CMS con Netlify Identity
│   ├── images/                  # Imágenes del sitio e imágenes subidas por el CMS
│   └── logo.jpg                 # Logo institucional de la fundación
├── src/                         # Código fuente de la aplicación Next.js
│   ├── app/                     # Rutas y páginas del App Router de Next.js
│   │   ├── contacto/page.js     # Módulo de Contacto con mapa de Miraflores
│   │   ├── donar/page.js        # Módulo de Donaciones (datos bancarios y WhatsApp)
│   │   ├── noticias/            # Módulo de Noticias
│   │   │   ├── page.js          # Listado estático de noticias
│   │   │   └── [slug]/page.js   # Rutas dinámicas SSG de noticia individual
│   │   ├── programas/           # Módulo de Programas
│   │   │   ├── page.js          # Listado estático de programas
│   │   │   └── [slug]/page.js   # Rutas dinámicas SSG de programa individual
│   │   ├── sobre-nosotros/      # Módulo Sobre Nosotros (misión, visión, equipo)
│   │   ├── voluntariado/        # Módulo de Voluntariado
│   │   │   ├── actions.js       # Server Action con validación y honeypot anti-spam
│   │   │   └── page.js          # Página del formulario de voluntariado
│   │   ├── globals.css          # Estilos globales y tema inline de Tailwind v4
│   │   ├── layout.js            # Root Layout (envuelve Header, Footer y Providers)
│   │   └── page.js              # Landing page principal (Inicio)
│   ├── components/              # Componentes UI reutilizables
│   │   ├── Header.jsx           # Encabezado flotante glassmorphic con usePathname
│   │   ├── Footer.jsx           # Pie de página con newsletter e info institucional
│   │   ├── TarjetaPrograma.jsx  # Tarjeta de programa con zoom hover y line-clamp
│   │   ├── TarjetaNoticia.jsx   # Tarjeta de noticia con zoom hover y line-clamp
│   │   ├── EncabezadoPagina.jsx # Banda superior con padding adaptativo para Header
│   │   ├── FormularioVoluntariado.jsx # Formulario cliente accesible con aria-live
│   │   ├── BotonCopiar.jsx      # Botón interactivo para copiar números de cuenta
│   │   ├── ContadorAnimado.jsx  # Contador numérico animado para estadísticas
│   │   └── LlamadaALaAccion.jsx # Bloque reutilizable de llamado a la acción (CTA)
│   ├── content/                 # Archivos de contenido en Markdown manejados por CMS
│   │   ├── noticias/            # Entradas de noticias (.md)
│   │   ├── programas/           # Entradas de programas (.md)
│   │   └── testimonios/         # Entradas de testimonios (.md)
│   ├── context/
│   │   └── GlobalContext.jsx    # React Context para estados globales (menú móvil)
│   └── lib/                     # Librerías y helpers del servidor
│       ├── content.js           # Lectura de archivos Markdown, parsing y SSG
│       ├── fechas.js            # Formateo de fechas a español de Bolivia (es-BO)
│       └── notificaciones.js    # Envío SMTP con Nodemailer
├── .env.example                 # Plantilla de variables de entorno
├── architecture.md              # Resumen arquitectónico base
├── next.config.mjs              # Configuración de Next.js (optimización de imágenes)
├── package.json                 # Dependencias y scripts de npm
├── postcss.config.mjs           # Integración de Tailwind v4 en PostCSS
└── PRUEBAS.md                   # Informe de pruebas funcionales y de build
```

---

## 3. Entorno de Desarrollo Local

### 3.1 Requisitos Previos
- **Node.js**: Versión LTS `18.x` o `20.x` (verificado en Node `20.x`).
- **npm**: Versión `9.x` o superior.
- **Git**: Sistema de control de versiones.

---

### 3.2 Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/LEONGO037/FundacionNuestraEsperanza.git
   cd FundacionNuestraEsperanza
   ```

2. **Instalar dependencias de npm**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env.local` en la raíz del proyecto copiando `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Configura las variables según sea necesario:
   ```env
   # Google Analytics 4 (Opcional en desarrollo)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

   # Notificaciones SMTP para Voluntariado (Fase 4)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=notificaciones@fundacion-nuestra-esperanza.cloud
   SMTP_PASS=tu_password_de_aplicacion
   NOTIFICATION_EMAIL_DEST=contacto@fundacion-nuestra-esperanza.cloud
   ```

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000`.

5. **Verificar la compilación estática (Build de producción)**:
   ```bash
   npm run build
   ```
   *Nota importante de desarrollo*: Asegúrate de detener el servidor de desarrollo (`Ctrl + C`) antes de ejecutar `npm run build` para evitar conflictos en la caché de `.next`.

---

## 4. Gestión de Contenido (Decap CMS & `src/lib/content.js`)

### 4.1 Configuración de Decap CMS (`public/admin/config.yml`)
Decap CMS lee el archivo `config.yml` para estructurar los campos de edición. Las colecciones definidas son:
- **`programas`**: Guarda archivos en `src/content/programas/{{date}}-{{slug}}.md`.
- **`noticias`**: Guarda archivos en `src/content/noticias/{{date}}-{{slug}}.md`.
- **`testimonios`**: Guarda archivos en `src/content/testimonios/{{slug}}.md`.

---

### 4.2 Helper de Contenido (`src/lib/content.js`)
Este módulo se ejecuta únicamente en tiempo de compilación (Server-side SSG) y realiza:
1. Lectura síncrona de archivos `.md` desde `src/content/<coleccion>`.
2. Extracción de metadatos (Front-matter) con `gray-matter`.
3. Conversión del cuerpo Markdown a HTML utilizando `remark().use(html).process()`.
4. Normalización estricta de datos (garantizando que nunca se produzcan errores `undefined` en renderizado).
5. Exportación de funciones principales:
   - `getProgramas()`: Retorna lista ordenada por el campo `order`.
   - `getProgramaBySlug(slug)`: Retorna el detalle del programa con `contentHtml`.
   - `getNoticias()`: Retorna noticias ordenadas por fecha descendente.
   - `getNoticiaBySlug(slug)`: Retorna el detalle de la noticia con `contentHtml`.
   - `getTestimonios()`: Retorna la lista de testimonios para la landing page.

---

### 4.3 Generación de Rutas Dinámicas Estáticas (`generateStaticParams`)
Tanto en `/programas/[slug]/page.js` como en `/noticias/[slug]/page.js`, se utiliza la función nativa de Next.js:
```javascript
export function generateStaticParams() {
  return getProgramas().map(({ slug }) => ({ slug }));
}
```
Esto le indica a Next.js que construya páginas HTML estáticas independientes para cada slug durante la ejecución de `npm run build`, eliminando la necesidad de consultas a servidores en tiempo de ejecución.

---

## 5. Sistema de Diseño (Tailwind CSS v4)

El proyecto utiliza la versión 4 de Tailwind CSS. Toda la personalización del tema institucional se declara en [`src/app/globals.css`](file:///c:/Proyectos/FundacionNuestraEsperanza/src/app/globals.css) utilizando la directiva `@theme inline`:

```css
@theme inline {
  --color-fundacion-blue: #00246E;      /* Azul principal institucional */
  --color-fundacion-pink: #ff4874;      /* Rosado institucional */
  --color-fundacion-cyan: #00c2cb;      /* Celeste / Cyan institucional */
  --color-fundacion-sky: #bce5ff;       /* Celeste claro de contraste */
  --color-fundacion-cream: #f8f7f2;     /* Fondo crema secundario */
  --color-fundacion-pale-pink: #fce8ed; /* Rosado pálido para fondos */
  --color-fundacion-green: #78B833;     /* Verde institucional */
  --color-fundacion-orange: #FFA700;    /* Naranja institucional */
  --color-fundacion-dark: #1A1A1A;      /* Texto oscuro */
  --color-fundacion-pale-blue: #F0F7FC; /* Azul pálido para fondos */
}
```

---

## 6. Despliegue en Producción (Vercel)

El proyecto está preparado para despliegue continuo (CI/CD) en Vercel:

1. **Conectar Repositorio**: Vincular la cuenta de Vercel al repositorio GitHub `LEONGO037/FundacionNuestraEsperanza`.
2. **Configuración del proyecto en Vercel**:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Node.js Version**: `20.x`
3. **Variables de Entorno en Vercel**: Cargar las mismas variables documentadas en `.env.example` en la sección *Settings > Environment Variables*.
4. **Despliegue Automático**: Cada push a la rama `main` desencadenará una compilación automática en Vercel que se desplegará en el dominio final en menos de 2 minutos.

---

## 7. Plan de Extensiones Futuras (Fase 16 del TDR)

Las siguientes características han sido planificadas y delimitadas para fases posteriores o un tercer grupo de trabajo:
- **Pasarela de Pago Transaccional**: Integración con Stripe o PagosNet para donaciones directas con tarjeta de crédito/débito y emisión automática de recibos digitales.
- **Email Marketing**: Integración con las APIs de Brevo o Mailchimp para sincronizar automáticamente las direcciones capturadas en el formulario del boletín (Footer).
- **Internacionalización (i18n)**: Soporte multilingüe (Español / Inglés) para captar apoyo de ONG internacionales.
- **Dashboard de Métricas**: Tablero privado para visualizar estadísticas de voluntarios e impactos en tiempo real.

---

*Documento Técnico elaborado como entregable oficial de la Fase 7 del Proyecto Social UCB — Fundación Nuestra Esperanza.*
