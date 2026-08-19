"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [suscrito, setSuscrito] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSuscrito(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-fundacion-blue text-white py-12 mt-auto border-t-[8px] border-fundacion-pink">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Columna 1: Info y Redes */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Image 
              src="/logo.jpg" 
              alt="Logo Fundación Nuestra Esperanza" 
              width={60} 
              height={60}
              className="rounded-full bg-white p-1"
            />
            <div>
              <h3 className="font-bold text-lg leading-tight uppercase tracking-wide">Fundación Nuestra<br/>Esperanza</h3>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Haciendo una diferencia en la vida de los niños, niñas y adolescentes que padecen de cáncer en toda Bolivia.
          </p>
          <div className="flex space-x-3 mt-4">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/NuestraEsperanzaBo/?locale=es_LA" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Página de Facebook de la Fundación Nuestra Esperanza"
              className="bg-white text-fundacion-blue p-2 rounded-full hover:bg-fundacion-pink hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/fundacionnuestraesperanza/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Cuenta de Instagram de la Fundación Nuestra Esperanza"
              className="bg-white text-fundacion-blue p-2 rounded-full hover:bg-fundacion-pink hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@fund.nuestra.esperanza" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Cuenta de TikTok de la Fundación Nuestra Esperanza"
              className="bg-white text-fundacion-blue p-2 rounded-full hover:bg-fundacion-pink hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Menú Rápido */}
        <div>
          <h3 className="font-bold text-lg mb-4">Menú Rápido</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-fundacion-pink transition-colors">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-fundacion-pink transition-colors">Quiénes Somos</Link></li>
            <li><Link href="/programas" className="hover:text-fundacion-pink transition-colors">Programas</Link></li>
            <li><Link href="/noticias" className="hover:text-fundacion-pink transition-colors">Noticias</Link></li>
            <li><Link href="/#testimonios" className="hover:text-fundacion-pink transition-colors">Testimonios</Link></li>
          </ul>
        </div>

        {/* Columna 3: Cómo Ayudar */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg mb-2">Cómo Ayudar</h3>
          <Link 
            href="/donar" 
            className="bg-fundacion-pink text-white font-bold py-2 px-6 rounded-full text-center hover:bg-white hover:text-fundacion-pink transition-colors w-full"
          >
            DONAR AHORA
          </Link>
          <Link 
            href="/voluntariado" 
            className="bg-white text-fundacion-blue font-bold py-2 px-6 rounded-full text-center hover:bg-fundacion-sky transition-colors w-full"
          >
            SER VOLUNTARIO
          </Link>
        </div>

        {/* Columna 4: Suscríbete */}
        <div>
          <h3 className="font-bold text-lg mb-4">Suscríbete</h3>
          <p className="text-sm text-gray-300 mb-4">Recibe noticias en tu correo.</p>

          {suscrito ? (
            <div className="bg-emerald-600/20 border border-emerald-400 text-emerald-200 text-xs p-3 rounded-lg flex items-center gap-2" role="status" aria-live="polite">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>¡Gracias por suscribirte a nuestro boletín!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico" 
                required
                className="px-4 py-2 bg-white text-gray-900 placeholder:text-gray-500 rounded-md sm:rounded-r-none w-full focus:outline-none focus:ring-2 focus:ring-fundacion-pink text-sm"
              />
              <button 
                type="submit" 
                className="bg-fundacion-pink text-white font-bold px-5 py-2 rounded-md sm:rounded-l-none hover:bg-white hover:text-fundacion-pink transition-colors text-sm shrink-0"
              >
                OK
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Franja de Copyright Inferior */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-300">
        <p>© {new Date().getFullYear()} Fundación Nuestra Esperanza. Todos los derechos reservados.</p>
        <p className="mt-1 text-gray-400">
          Desarrollado como Proyecto Social — Universidad Católica Boliviana &quot;San Pablo&quot;
        </p>
      </div>
    </footer>
  );
}
