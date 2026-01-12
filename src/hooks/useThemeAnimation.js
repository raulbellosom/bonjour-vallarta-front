import { useRef } from "react";

/**
 * Hook personalizado para animar el cambio de tema usando View Transitions API
 * Similar a react-theme-switch-animation pero compatible con React 19
 */
export function useThemeAnimation() {
  const buttonRef = useRef(null);

  const animateThemeChange = async (callback) => {
    // Verificar si el navegador soporta View Transitions API
    if (!document.startViewTransition) {
      callback();
      return;
    }

    // Obtener la posición del botón para el efecto circular
    const button = buttonRef.current;
    if (!button) {
      callback();
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calcular el radio necesario para cubrir toda la pantalla
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Crear la transición
    const transition = document.startViewTransition(() => {
      callback();
    });

    // Aplicar el estilo de animación circular
    await transition.ready;

    // Crear el clip-path circular desde el botón
    document.documentElement.animate(
      [
        {
          clipPath: `circle(0px at ${x}px ${y}px)`,
        },
        {
          clipPath: `circle(${maxRadius}px at ${x}px ${y}px)`,
        },
      ],
      {
        duration: 750,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return {
    ref: buttonRef,
    animateThemeChange,
  };
}
