# Arquitectura del Proyecto Web: Fundación Nuestra Esperanza

Este documento describe la estructura base y el propósito de cada directorio dentro del proyecto Next.js, siguiendo los principios de la arquitectura App Router. 

## Estructura de Carpetas

```text
FundacionNuestraEsperanza/
├── public/                 # Archivos estáticos
│   ├── admin/              # Archivos de configuración de Decap CMS
│   │   ├── index.html      # Punto de entrada de Decap CMS
│   │   └── config.yml      # Configuración de colecciones del CMS
│   └── ...                 # Imágenes, iconos, fuentes, etc.
├── src/                    # Código fuente del proyecto
│   ├── app/                # App Router de Next.js (Rutas y Páginas)
│   │   ├── page.jsx        # Inicio
│   │   ├── about-us/       # Módulo: Sobre Nosotros
│   │   ├── programs/       # Módulo: Programas
│   │   │   └── [slug]/     # Rutas dinámicas de programas
│   │   ├── news/           # Módulo: Noticias
│   │   │   └── [slug]/     # Rutas dinámicas de noticias
│   │   ├── donate/         # Módulo: Donaciones
│   │   ├── volunteer/      # Módulo: Voluntariado
│   │   ├── contact/        # Módulo: Contacto
│   │   ├── layout.jsx      # Root Layout (contiene Header, Footer, etc.)
│   │   └── globals.css     # Estilos globales (Tailwind CSS)
│   ├── components/         # Componentes UI reutilizables (Botones, Tarjetas, etc.)
│   ├── context/            # Estados globales de la aplicación (Context API)
│   ├── lib/                # Funciones auxiliares, helpers, configuraciones globales
│   └── styles/             # (Opcional) Archivos CSS adicionales si no se usa Tailwind
├── .gitignore              # Archivos a ignorar por git
├── package.json            # Dependencias y scripts de npm
├── postcss.config.mjs      # Configuración de PostCSS
└── jsconfig.json           # Configuración de rutas (aliasing @/*)
```

## Consideraciones Adicionales
- Todo componente que sea cliente (es decir, use hooks de React o interactúe con el DOM del navegador) debe usar la directiva `"use client"` al inicio.
- Decap CMS usa Git para gestionar el contenido; todos los cambios en el CMS harán commits directos al repositorio.

## Guía de Desarrollo para el Equipo

Para estandarizar el desarrollo y facilitar la colaboración, todo el equipo debe conocer las siguientes decisiones técnicas:

### 1. Tailwind CSS v4 y Variables Nativas
Este proyecto utiliza la última versión de Tailwind CSS (v4) integrada con Next.js. 
**¡Importante!** Ya no utilizamos un archivo `tailwind.config.js`. La configuración del tema y los colores institucionales se declaran nativamente mediante la directiva `@theme inline` en el archivo `src/app/globals.css`. 
*Ejemplo:* Clases como `bg-fundacion-blue` o `text-fundacion-pink` están disponibles en todo el proyecto gracias a las variables definidas en `globals.css`.

### 2. Manejo de Estado Global (Context API)
Para mantener el código simple y libre de dependencias externas complejas, el manejo del estado global se hace mediante la Context API nativa de React.
- Todo el estado y la lógica global viven en `src/context/GlobalContext.jsx`.
- Este archivo tiene la directiva `"use client"` y exporta un `GlobalProvider` (el cual ya envuelve a toda la app en `layout.js`).
- **¿Cómo usarlo?** En cualquier componente (que sea cliente), simplemente importa `useContext` de React y el `GlobalContext` para leer o modificar los estados globales.

### 3. Rutas Dinámicas (Carpetas `[slug]`)
Notarás carpetas con nombres entre corchetes, como `src/app/programs/[slug]`. Esto sigue la convención del App Router de Next.js para crear **rutas dinámicas**.
- La palabra *slug* representa el identificador final en la URL (ej. `/programs/taller-infantil`).
- Next.js pasa este valor dinámico (`params.slug`) directamente como propiedad al componente `page.js` que está dentro de esa carpeta.
- Esto permite tener una única vista base (`page.js`) capaz de renderizar cualquier programa o noticia consultando dinámicamente el contenido de nuestro Decap CMS utilizando dicho slug.
