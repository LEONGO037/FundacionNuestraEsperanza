"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/noticias", label: "Noticias" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(GlobalContext);
  const pathname = usePathname();

  const esActivo = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-fundacion-blue text-white shadow-md sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
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
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {navLinks.map((link) => {
            const activo = esActivo(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  activo
                    ? "text-fundacion-sky font-bold underline decoration-fundacion-pink decoration-2 underline-offset-8 transition-colors"
                    : "text-white hover:text-fundacion-sky transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <button 
            type="button"
            onClick={() => {
              if (window.netlifyIdentity) {
                if (window.netlifyIdentity.currentUser()) {
                  window.location.href = "/admin/";
                } else {
                  window.netlifyIdentity.open();
                }
              }
            }}
            className="text-white hover:text-fundacion-sky transition-colors font-bold text-sm bg-white/10 px-3 py-1 rounded focus-visible:outline-2 focus-visible:outline-white"
          >
            Login
          </button>
        </nav>

        {/* Botón Donar Desktop */}
        <div className="hidden md:block">
          <Link
            href="/donar"
            className="bg-fundacion-pink text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-fundacion-pink transition-colors duration-300 shadow-md focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            DONAR
          </Link>
        </div>

        {/* Botón Menú Móvil (Hamburguesa) */}
        <button 
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-1 rounded-md"
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
          {navLinks.map((link) => {
            const activo = esActivo(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  activo
                    ? "text-fundacion-sky font-bold text-lg underline decoration-fundacion-pink decoration-2 underline-offset-4"
                    : "text-white hover:text-fundacion-sky transition-colors text-lg"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <button 
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (window.netlifyIdentity) {
                if (window.netlifyIdentity.currentUser()) {
                  window.location.href = "/admin/";
                } else {
                  window.netlifyIdentity.open();
                }
              }
            }}
            className="text-fundacion-sky font-bold text-lg"
          >
            Login
          </button>
          <Link 
            href="/donar" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-fundacion-pink text-white font-bold py-2 px-8 rounded-full mt-4"
          >
            DONAR
          </Link>
        </div>
      )}
    </header>
  );
}
