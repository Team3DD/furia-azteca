// src/components/ui/button.tsx
import { cn } from "../../lib/utils";

const sizeMap = {
  sm: "text-xs py-1.5 px-6",
  md: "text-sm py-2 px-7",
  lg: "text-base py-2.5 px-8",
};

// Mapa de colores → clases CSS para hover sin JS
const colorMap: Record<string, string> = {
  verde:  "bg-verde  text-white hover:bg-verde-dark",
  rojo:   "bg-rojo   text-white hover:bg-rojo-dark",
  dorado: "bg-dorado text-carbon hover:bg-dorado-dark",
};

const outlineMap: Record<string, string> = {
  verde:  "border-2 border-verde  text-verde  hover:bg-verde  hover:text-white",
  rojo:   "border-2 border-rojo   text-rojo   hover:bg-rojo   hover:text-white",
  dorado: "border-2 border-dorado text-dorado hover:bg-dorado hover:text-carbon",
};

const ghostMap: Record<string, string> = {
  verde:  "text-verde  hover:bg-crema-dark",
  rojo:   "text-rojo   hover:bg-crema-dark",
  dorado: "text-dorado hover:bg-crema-dark",
};

export function Button({
  children,
  variant = "solid",
  color = "verde",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  href,
  target,
  ...props
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  color?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
}) {
  const colorClass =
    variant === "solid"
      ? (colorMap[color] ?? `bg-[var(--color-${color})] text-white`)
      : variant === "outline"
        ? (outlineMap[color] ?? `border-2 border-[var(--color-${color})] text-[var(--color-${color})]`)
        : (ghostMap[color] ?? `text-[var(--color-${color})]`);

  const Element = href ? "a" : "button";
  const elementProps = href
    ? { href, target, ...props }
    : { onClick, disabled, ...props };

  return (
    <Element
      className={cn(
        // Layout
        "relative inline-flex items-center justify-center",
        // Tipografía
        "font-display font-medium uppercase tracking-wider whitespace-nowrap",
        // Transición (heredada por rhomboid pero la dejamos también aquí)
        "transition-all duration-150",
        // Accesibilidad
        "outline-none focus-visible:ring-2 focus-visible:ring-dorado",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-hueso",
        "dark:focus-visible:ring-offset-carbon",
        // ── Sistema rhomboid (utilidades globales) ──
        "rhomboid rhomboid-hover rhomboid-corners",
        // Color + variante
        colorClass,
        sizeMap[size],
        className
      )}
      {...elementProps}
    >
      <span className="rhomboid-content">{children}</span>
    </Element>
  );
}