"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(GlobalContext);

  return (
    <header className="bg-fundacion-blue text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Título */}
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/logo.jpg" 
              alt="Fundación Nuestra Esperanza" 
              width={180} 
              height={60} 
              className="object-contain w-auto h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navegación Principal Desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/sobre-nosotros" className="hover:text-fundacion-sky transition-colors">Sobre Nosotros</Link>
          <Link href="/programas" className="hover:text-fundacion-sky transition-colors">Programas</Link>
          <Link href="/noticias" className="hover:text-fundacion-sky transition-colors">Noticias</Link>
          <Link href="/contacto" className="hover:text-fundacion-sky transition-colors">Contacto</Link>
        </nav>

        {/* Botón Donar Desktop */}
        <div className="hidden md:block">
          <Link
            href="/donar"
            className="bg-fundacion-pink text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-fundacion-pink transition-colors duration-300"
          >
            DONAR
          </Link>
        </div>

        {/* Botón Menú Móvil (Hamburguesa) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-fundacion-blue absolute top-full left-0 w-full shadow-lg border-t border-white/10 flex flex-col items-center py-6 space-y-4">
          <Link href="/sobre-nosotros" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-fundacion-sky transition-colors text-lg">Sobre Nosotros</Link>
          <Link href="/programas" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-fundacion-sky transition-colors text-lg">Programas</Link>
          <Link href="/noticias" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-fundacion-sky transition-colors text-lg">Noticias</Link>
          <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-fundacion-sky transition-colors text-lg">Contacto</Link>
          <Link href="/donar" onClick={() => setIsMobileMenuOpen(false)} className="bg-fundacion-pink text-white font-bold py-2 px-8 rounded-full mt-4">
            DONAR
          </Link>
        </div>
      )}
    </header>
  );
}
