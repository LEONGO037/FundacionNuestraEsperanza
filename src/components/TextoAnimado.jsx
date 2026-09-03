// Divide un texto en letras animables: el contenedor que lo use debe tener
// la clase "hover-letras" para que se active la ola de rebote en hover/foco.
// Puramente decorativo (aria-hidden): el elemento contenedor (botón, link)
// debe proveer su propio texto accesible, por ejemplo con aria-label.
export default function TextoAnimado({ texto }) {
  return (
    <span aria-hidden="true">
      {Array.from(texto).map((caracter, indice) => (
        <span
          key={indice}
          className="letra-anim"
          style={{ animationDelay: `${indice * 0.025}s` }}
        >
          {caracter === " " ? " " : caracter}
        </span>
      ))}
    </span>
  );
}
