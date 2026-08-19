# Manual de Usuario del CMS — Fundación Nuestra Esperanza

**Proyecto Social UCB — Desarrollo de Sitio Web Institucional**  
**Fase 7: Capacitación y Cierre**  
**Elaborado por:** Alan Flores (Ingeniería de Sistemas — UCB La Paz)  
**Versión:** 1.0 — Agosto 2026  

---

## 1. Introducción y Propósito

Este manual está diseñado para el personal administrativo, directivo y voluntarios de la **Fundación Nuestra Esperanza** (como la Sra. Mónica Méndez, editores y encargados de comunicación). 

El sitio web institucional cuenta con un **Gestor de Contenido (Decap CMS)** que permite crear, editar y actualizar la información de la fundación —tales como **Programas**, **Noticias** y **Testimonios**— de forma independiente, sencilla y segura, **sin necesidad de conocimientos de programación ni contratación de personal técnico externo**.

### ¿Cómo funciona el CMS?
A diferencia de los sistemas tradicionales que requieren bases de datos complejas y costosas, este CMS guarda la información de forma automática y transparente en el repositorio digital del proyecto. Cada vez que publicas o guardas un cambio, el sitio web se actualiza automáticamente en internet en menos de 2 minutos.

---

## 2. Acceso al Panel de Administración

### 2.1 Enlace de Ingreso
Para ingresar al panel de administración del CMS, existen dos formas:
1. **Acceso Directo por URL**: Abre tu navegador web (Google Chrome, Mozilla Firefox, Edge o Safari) e ingresa a:  
   `https://fundacion-nuestra-esperanza.cloud/admin/`
2. **Acceso desde la Web Institucional**: Haz clic en el botón **"Login"** ubicado en la barra de navegación superior (Header) del sitio web.

---

### 2.2 Inicio de Sesión
1. Al ingresar a la dirección `/admin/`, se desplegará la pantalla de autenticación.
2. Ingresa con tu correo electrónico registrado y contraseña asignada por la administración de la fundación.
3. Haz clic en **"Log in"**.
4. Una vez autenticado, serás redirigido automáticamente al panel principal de gestión de contenidos.

---

## 3. Estructura y Navegación del Panel

Al ingresar al CMS, verás una interfaz dividida en tres áreas principales:

```text
┌────────────────────────┬────────────────────────────────────────────────────────┐
│  MENÚ LATERAL          │  VISTA DE LISTADO / EDITOR                             │
│  (Colecciones)         │                                                        │
│                        │  [ + Nuevo Registro ]   [ Buscar... ]                  │
│  • Programas           │                                                        │
│  • Noticias            │  ----------------------------------------------------  │
│  • Testimonios         │  Título de la entrada             Fecha      Estado    │
│                        │  ----------------------------------------------------  │
│                        │  Albergue Casa Esperanza          29/07/2026 Publicado │
│                        │  Jornada Recreativa en Albergue   20/05/2026 Publicado │
└────────────────────────┴────────────────────────────────────────────────────────┘
```

- **Menú Izquierdo (Colecciones)**: Muestra los tres módulos gestionables de la fundación: *Programas*, *Noticias* y *Testimonios*.
- **Barra Superior**: Contiene el buscador global y el botón verde **"New Program / New Noticia / New Testimonio"** (Nuevo Registro).
- **Área Central**: Lista todas las publicaciones existentes con su fecha y estado.

---

## 4. Guía Paso a Paso por Módulo

### 4.1 Módulo de Programas (`/programas`)

Este módulo gestiona los servicios de apoyo integral que ofrece la fundación (ej. *Albergue Casa Esperanza*, *Alimentación Gratuita*, *Apoyo Psicosocial*, *Recreación*, *Material Escolar y Víveres*).

#### Paso a paso para CREAR un nuevo programa:
1. En el menú lateral izquierdo, haz clic en **Programas**.
2. Haz clic en el botón **"New Program"** (Nuevo Programa).
3. Completa el formulario con los siguientes campos:
   - **Título** (*Obligatorio*): Nombre del programa (ej. `Taller de Arte y Musicoterapia`).
   - **Fecha** (*Obligatorio*): Fecha de creación o actualización del programa.
   - **Orden de visualización** (*Opcional*): Número entero que define la posición en el listado (ej. `1` para que aparezca primero).
   - **Imagen de portada (Thumbnail)** (*Recomendado*): Haz clic en *Choose an image* para subir una foto representativa desde tu computadora.
   - **Descripción corta** (*Obligatorio*): Resumen de 1 a 2 oraciones que aparecerá en la tarjeta del listado principal.
   - **Cuerpo del Programa (Contenido)** (*Obligatorio*): Espacio de redacción detallada. Puedes usar la barra de formato para colocar negritas, listas de viñetas, subtítulos e imágenes adicionales.
4. Para finalizar y publicar en la web: haz clic en el botón verde **"Publish"** (Publicar) en la esquina superior derecha y luego confirma haciendo clic en **"Publish now"**.

---

### 4.2 Módulo de Noticias (`/noticias`)

Este módulo permite informar a la comunidad, donantes y familias sobre actividades recientes, eventos, campañas de recolección y alianzas de la fundación.

#### Paso a paso para CREAR una nueva noticia:
1. En el menú lateral izquierdo, haz clic en **Noticias**.
2. Haz clic en el botón **"New Noticia"** (Nueva Noticia).
3. Completa los campos:
   - **Título de la noticia** (*Obligatorio*): Título atractivo (ej. `Jornada de Recolección de Víveres para Casa Esperanza`).
   - **Fecha de publicación** (*Obligatorio*): Define el orden cronológico (las noticias más recientes aparecen primero).
   - **Autor** (*Opcional*): Nombre de quien redacta o del equipo (ej. `Equipo de Comunicación`).
   - **Imagen destacada (Thumbnail)** (*Recomendado*): Foto representativa de la actividad.
   - **Resumen corto** (*Obligatorio*): Extracto de 2 a 3 líneas que se muestra en la tarjeta informativa.
   - **Cuerpo de la noticia** (*Obligatorio*): Redacción completa del artículo, entrevistas, agradecimientos y fotos del evento.
4. Haz clic en **"Publish"** -> **"Publish now"**.

---

### 4.3 Módulo de Testimonios ("Burbujas de Esperanza")

Este módulo gestiona las voces de las madres, padres, pacientes y voluntarios que alimentan la sección de testimonios en la página de Inicio.

#### Paso a paso para CREAR un testimonio:
1. En el menú lateral izquierdo, haz clic en **Testimonios**.
2. Haz clic en **"New Testimonio"**.
3. Completa los campos:
   - **Nombre de la persona** (*Obligatorio*): Ej. `María Quispe`.
   - **Rol o relación con la fundación** (*Obligatorio*): Ej. `Madre de paciente beneficiario`, `Voluntaria del programa de recreación`, `Donante institucional`.
   - **Foto / Avatar** (*Opcional*): Fotografía de la persona en formato cuadrado. Si se deja en blanco, el sistema mostrará un ícono genérico institucional.
   - **Testimonio (Cuerpo)** (*Obligatorio*): Mensaje o frase emotiva que cuenta la experiencia vivida en la fundación.
4. Haz clic en **"Publish"** -> **"Publish now"**.

---

## 5. Edición y Eliminación de Contenidos

### Para EDITAR un registro existente:
1. Entra al módulo correspondiente (*Programas*, *Noticias* o *Testimonios*).
2. Haz clic sobre el título de la entrada que deseas modificar.
3. Modifica los textos o cambia la imagen requerida.
4. Haz clic en **"Publish"** para guardar y actualizar los cambios en la web.

### Para ELIMINAR un registro:
1. Entra a la entrada que deseas borrar.
2. En la barra superior del editor, haz clic en el botón con ícono de basurero o el texto **"Delete entry"** (Eliminar entrada).
3. Confirma la eliminación. La entrada desaparecerá inmediatamente de la página web.

---

## 6. Recomendaciones para el Manejo de Imágenes

Para garantizar que el sitio web cargue de forma ultra rápida en teléfonos móviles y computadoras, sigue estas pautas al subir fotos:

- **Formatos soportados**: JPG, PNG o WebP.
- **Peso máximo recomendado**: Intenta que cada foto pese menos de **500 KB** (idealmente entre 100 KB y 300 KB). Si la foto tomada con celular pesa 5 MB o más, puedes reducir su tamaño de forma gratuita en herramientas en línea como [tinyjpg.com](https://tinyjpg.com).
- **Proporción de fotos para tarjetas**: Se recomienda usar imágenes horizontales (formato apapaisado / 16:9) para programas y noticias.

---

## 7. Preguntas Frecuentes y Solución de Problemas (FAQ)

### ¿Cuánto tarda en verse mi cambio en la página web?
Por la tecnología de alta velocidad del sitio, una vez que haces clic en **Publish**, el servidor compila y publica los cambios en un lapso de **1 a 2 minutos**. Si no ves el cambio de inmediato, actualiza la página presionando `F5` o `Ctrl + Shift + R`.

### Olvidé mi contraseña de acceso al CMS, ¿qué hago?
En la pantalla de ingreso (`/admin/`), haz clic en el enlace **"Forgot your password?"** (¿Olvidaste tu contraseña?). Ingresa tu correo electrónico registrado y recibirás un enlace seguro para restablecerla.

### ¿Puedo guardar un trabajo a medias sin publicarlo aún?
Sí. En lugar de hacer clic en *Publish*, puedes hacer clic en **"Save"** (Guardar como borrador). El contenido se guardará en el panel pero no será visible para los visitantes hasta que presiones *Publish*.

---

*Manual elaborado como entregable oficial de la Fase 7 del Proyecto Social UCB — Fundación Nuestra Esperanza.*
