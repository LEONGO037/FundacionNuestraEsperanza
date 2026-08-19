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
    <header className="fixed top-0 inset-x-0 z-50 py-3 px-4 sm:px-6 transition-all duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Cápsula Flotante Glassmorphic */}
        <div className="bg-fundacion-blue/90 backdrop-blur-xl border border-white/15 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-fundacion-blue/30 flex items-center justify-between">
          
          {/* Logo Badge Redondeado */}
          <div className="flex items-center">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-full"
            >
              <div className="bg-white p-1 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                <Image 
                  src="/logo.jpg" 
                  alt="Fundación Nuestra Esperanza" 
                  width={40} 
                  height={40} 
                  className="rounded-full object-cover w-9 h-9"
                  priority
                />
              </div>
              <span className="font-bold text-white tracking-tight text-sm sm:text-base group-hover:text-fundacion-sky transition-colors hidden xl:inline-block">
                Fundación Nuestra Esperanza
              </span>
            </Link>
          </div>

          {/* Navegación Principal Desktop (Píldoras) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 font-medium bg-white/5 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const activo = esActivo(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    activo
                      ? "bg-white/20 text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-inner flex items-center gap-2 border border-white/25 transition-all duration-300"
                      : "text-white/80 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium"
                  }
                >
                  {activo && (
                    <span className="w-2 h-2 rounded-full bg-fundacion-pink animate-pulse" aria-hidden="true" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Botones de Acción Desktop (Login + DONAR) */}
          <div className="hidden md:flex items-center gap-3">
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
              className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 border border-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </button>

            <Link
              href="/donar"
              className="relative group overflow-hidden bg-gradient-to-r from-fundacion-pink via-rose-500 to-fundacion-orange text-white font-bold py-2 px-5 rounded-full text-sm shadow-lg shadow-fundacion-pink/40 hover:shadow-fundacion-pink/60 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg className="w-4 h-4 text-white group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>DONAR</span>
            </Link>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button 
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="md:hidden text-white hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil Desplegable Estilo Cápsula */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-fundacion-blue/95 backdrop-blur-xl border border-white/15 rounded-3xl mt-2 p-6 shadow-2xl flex flex-col items-center space-y-3 animate-fade-in-up">
            {navLinks.map((link) => {
              const activo = esActivo(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    activo
                      ? "bg-white/20 text-white font-bold px-6 py-2 rounded-full text-base flex items-center gap-2 border border-white/25 w-full justify-center"
                      : "text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full text-base font-medium w-full text-center transition-colors"
                  }
                >
                  {activo && (
                    <span className="w-2 h-2 rounded-full bg-fundacion-pink animate-pulse" aria-hidden="true" />
                  )}
                  {link.label}
                </Link>
              );
            })}

            <div className="w-full pt-3 border-t border-white/10 flex flex-col gap-3">
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
                className="text-white/80 hover:text-white py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border border-white/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Acceso Personal (Login)
              </button>

              <Link 
                href="/donar" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-gradient-to-r from-fundacion-pink to-rose-500 text-white font-bold py-3 px-8 rounded-full text-center shadow-lg shadow-fundacion-pink/40 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                QUIERO DONAR
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
