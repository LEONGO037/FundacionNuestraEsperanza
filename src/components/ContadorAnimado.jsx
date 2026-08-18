"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated counter that counts up when the element enters the viewport.
 * Uses IntersectionObserver so the animation only fires when visible.
 */
export default function ContadorAnimado({ valor, duracion = 2000, sufijo = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duracion, 1);

            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * valor));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [valor, duracion, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("es-BO")}{sufijo}
    </span>
  );
}
