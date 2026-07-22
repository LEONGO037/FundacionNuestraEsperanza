# Fundación Nuestra Esperanza - Proyecto Web

Este es el repositorio oficial para el desarrollo del sitio web de la **Fundación Nuestra Esperanza**, construido con Next.js (App Router), Tailwind CSS y Decap CMS.

## Requisitos Previos

- **Node.js**: Versión 18.x o superior.
- **NPM**: Versión 9.x o superior (incluido por defecto con Node.js).
- **Git**: Para clonar el proyecto y utilizar el CMS.

## Instalación y Configuración (Para desarrolladores)

Para los 6 desarrolladores del equipo, seguir estas instrucciones para tener el proyecto corriendo localmente sin problemas de compatibilidad:

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/LEONGO037/FundacionNuestraEsperanza.git
   cd FundacionNuestraEsperanza
   ```

2. **Instalar Dependencias**
   Utilizaremos `npm` para gestionar dependencias de acuerdo a la configuración inicial. 
   ```bash
   npm install
   ```

3. **Ejecutar el Servidor de Desarrollo**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:3000`.

## Acceso al CMS (Decap CMS)

Decap CMS está configurado para gestionar el contenido. Puedes acceder localmente al panel de control de la siguiente manera:

1. Asegúrate de que el servidor de desarrollo esté ejecutándose.
2. Ingresa a: `http://localhost:3000/admin`

*Nota: Para el despliegue final y correcto funcionamiento de Decap CMS es necesario tener habilitado Netlify Identity o algún backend de autenticación en GitHub OAuth.*

## Stack Tecnológico
- [Next.js](https://nextjs.org/) (Framework)
- [React](https://reactjs.org/) (UI Library)
- [Tailwind CSS](https://tailwindcss.com/) (Estilos)
- [Decap CMS](https://decapcms.org/) (Gestor de Contenidos Git-based)
