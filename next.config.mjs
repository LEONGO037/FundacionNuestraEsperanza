/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Aplica estas cabeceras a todas las rutas del sitio
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Evita ataques de Clickjacking (que incrusten la web en otro sitio)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Evita que el navegador adivine el tipo de contenido y prevé inyecciones
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Protege la privacidad al navegar hacia otros sitios
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains', // Fuerza conexiones HTTPS seguras y estrictas
          },
        ],
      },
    ];
  },
};

export default nextConfig;