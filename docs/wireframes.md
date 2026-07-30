# Especificación de Wireframes Estructurales (Fase 1)

Este documento detalla la distribución de contenidos y la jerarquía visual de las 7 páginas que conforman el sitio web de la **Fundación Nuestra Esperanza**, optimizadas para mejorar la experiencia de usuario (UX/UI).

---

## 1. Página de Inicio (`/`)
Diseño de una landing page fluida que capte la atención de forma inmediata:

```text
[------------------------------ HEADER ------------------------------]
  Logo (Manos) | Sobre Nosotros  Programas  Noticias  Contacto  [DONAR]
[--------------------------------------------------------------------]

=========================== HERO SECTION =============================
  [ Imagen emotiva de alta calidad con overlay degradado azul ]
  
     "Todo vida merece esperanza"
     Nuestra misión es devolver la sonrisa y la esperanza a niños y
     adolescentes con cáncer en Bolivia.
     
     [ Conoce Más (Cyan) ]      [ Quiero Donar (Pink) ]
======================================================================

========================= TARJETAS DE IMPACTO =========================
  [ 950+ Familias Apoyadas ]  [ 420+ Casos Anuales ]  [ 80+ Voluntarios ]
  (Fondo suave crema, números grandes en Rosa/Cyan con micro-sombras)
======================================================================

======================== NUESTROS PROGRAMAS ==========================
  Título: "El apoyo integral que brindamos"
  Subtítulo: "Conoce las diferentes áreas donde impactamos vidas"
  
  [ CARD: Albergue Casa Esperanza ]  [ CARD: Alimentación y Nutrición ]
  - Borde superior Azul              - Borde superior Naranja
  - Título + Descripción corta       - Título + Descripción corta
  - [ Conocer más -> ] (Cyan)        - [ Conocer más -> ] (Cyan)
  
  [ CARD: Apoyo Psicosocial ]        [ CARD: Transporte y Recreación ]
  - Borde superior Rosa              - Borde superior Verde
  - Título + Descripción corta       - Título + Descripción corta
  - [ Conocer más -> ] (Cyan)        - [ Conocer más -> ] (Cyan)
======================================================================

=========================== TESTIMONIOS ==============================
  Título: "Voces de Esperanza"
  [ Carrusel o Grid de 3 Burbujas de Testimonios con avatar circular, ]
  [ texto en cursiva y nombre de la madre/niño beneficiado.            ]
======================================================================

========================= ÚLTIMAS NOTICIAS ============================
  Título: "Noticias y Eventos"
  [ Grid de 3 Tarjetas de Noticias Recientes ]
  - Imagen miniatura + Fecha + Título + Resumen + [ Leer Más (Rosa) ]
======================================================================

========================= ALIANZAS Y CONTACTO ========================
  [ Carrusel de Logotipos de Aliados en escala de grises (Bagó, CCI, etc.) ]
  
  Formulario de Contacto Rápido (Nombre, Email, Mensaje, Botón [Enviar])
======================================================================

[------------------------------ FOOTER ------------------------------]
  Info de la Fundación  |  Enlaces Rápidos  |  Boletín Informativo
  Redes Sociales        |  about-us, news... |  [ Input email ] [Ok]
[--------------------------------------------------------------------]
```

---

## 2. Sobre Nosotros (`/about-us`)
Enfocada en construir confianza e informar sobre la trayectoria:

*   **Bloque 1: Introducción Emotiva:** Título "Quiénes Somos" con una imagen del equipo de la fundación y un texto detallando que operan desde 2011 y de forma integral desde 2017 en La Paz.
*   **Bloque 2: Misión y Visión:** Dos columnas con fondo suave de color `fundacion-pale-blue` y `fundacion-pale-pink`.
*   **Bloque 3: Nuestro Equipo:** Sección con tarjetas de los directivos principales (Presidenta: Mónica Méndez) mostrando foto, nombre y rol.
*   **Bloque 4: Aliados de Esperanza:** Mapeo de logotipos en color de Laboratorios Bagó de Bolivia, Childhood Cancer International (Programa Home Away From Home) y Foundation S.

---

## 3. Programas (`/programs` y `/programs/[slug]`)
*   **Catálogo Principal (`/programs`):** Grid de tarjetas grandes con iconos representativos de cada uno de los 5 programas (Albergue, Alimentación, Apoyo Psicosocial, Recreación y Material Escolar).
*   **Detalle del Programa (`/programs/[slug]`):** Layout de dos columnas:
    *   *Columna Izquierda (66%):* Imagen descriptiva de alta resolución, descripción detallada del programa, objetivos específicos y logros alcanzados.
    *   *Columna Derecha (33%):* Tarjeta lateral fija (Sticky) con llamada a la acción: "¿Cómo puedes apoyar a este programa?" con botones para "Ser Voluntario" o "Hacer una Donación".

---

## 4. Noticias (`/news` y `/news/[slug]`)
*   **Listado (`/news`):** Lista vertical con diseño de tarjeta limpia. Cada noticia tiene una imagen al lado izquierdo (desktop) y el texto al lado derecho con la fecha y título.
*   **Detalle (`/news/[slug]`):** Estructura de lectura cómoda ("Modo Lectura" centrado con ancho máximo `max-w-3xl`), fecha destacada, título de gran tamaño (`text-4xl`), autor e imágenes intercaladas en el contenido.

---

## 5. Donaciones (`/donate`)
Diseño de interfaz transparente, seguro y directo para facilitar el aporte:

```text
========================= PÁGINA DE DONACIONES =======================
  Título: "Tu apoyo salva vidas"
  Subtítulo: "Tu donativo hace posible el tratamiento y albergue de niños con cáncer"
  
  [ Fila de Métodos de Pago Rápido ]
  --------------------------------------------------------------------
  [ Tarjeta Método 1: Banco Unión ]     [ Tarjeta Método 2: Banco BISA ]
  - Datos de Cuenta (Número, Titular)   - Datos de Cuenta (Número, Titular)
  - Botón: [ Copiar Cuenta ]            - Botón: [ Copiar Cuenta ]
  - Código QR de Transferencia          - Código QR de Transferencia
  --------------------------------------------------------------------
  
  [ Sección Especial: Donaciones en Especie / Coordinación Directa ]
  "¿Deseas donar medicamentos, víveres o juguetes?"
  [ Botón: Coordinar por WhatsApp (Rosa con icono de WhatsApp) ]
======================================================================
```

---

## 6. Voluntariado (`/volunteer`)
Formulario de captación intuitivo y motivacional:

*   **Banner Superior:** Mensaje inspirador sobre el valor de ser voluntario.
*   **Formulario Estructurado:**
    *   *Datos Personales:* Nombre Completo, Correo Electrónico, Teléfono (con máscara de formato boliviano), Ciudad.
    *   *Preferencias:* Selector de Disponibilidad (Fines de semana, Entre semana, Flexible) y Área de Interés (Apoyo escolar, Recreación, Logística/Eventos, Administrativo).
    *   *Mensaje:* Campo de texto libre para motivaciones.
    *   *Botón de Envío:* Botón animado con estado de carga ("Enviando...").

---

## 7. Contacto (`/contact`)
*   **Layout:** Dos columnas fluidas.
    *   *Lado Izquierdo:* Formulario de contacto directo y datos rápidos (Dirección de la Casa Esperanza en Miraflores, Teléfono, Correo institucional).
    *   *Lado Derecho:* Mapa interactivo integrado (Google Maps) centrado en la zona de Miraflores, La Paz, facilitando la ubicación física del albergue para entrega de donativos.
