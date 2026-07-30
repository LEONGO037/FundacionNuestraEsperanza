// Botón que copia un texto al portapapeles con confirmación accesible (aria-live).
"use client";

import { useRef, useState } from "react";

export default function BotonCopiar({ texto, etiqueta = "Copiar" }) {
  const [mensaje, setMensaje] = useState("");
  const temporizador = useRef(null);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
      setMensaje("Copiado al portapapeles");
    } catch {
      setMensaje("No se pudo copiar. Selecciona y copia el texto manualmente.");
    }
    clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => setMensaje(""), 4000);
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={copiar}
        className="rounded-full border-2 border-fundacion-blue px-4 py-1 text-sm font-bold text-fundacion-blue transition-colors duration-300 hover:bg-fundacion-blue hover:text-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fundacion-pink"
      >
        {etiqueta}
      </button>
      <span role="status" aria-live="polite" className="text-sm text-gray-600">
        {mensaje}
      </span>
    </span>
  );
}
