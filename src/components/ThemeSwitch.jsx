import { Moon, Sun } from "lucide-react";
import { useThemeAnimation } from "../hooks/useThemeAnimation";

export default function ThemeSwitch({ isDarkMode, onThemeChange, ariaLabel }) {
  const { ref, animateThemeChange } = useThemeAnimation();

  const handleClick = () => {
    animateThemeChange(() => {
      onThemeChange(!isDarkMode);
    });
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
      aria-label={ariaLabel}
    >
      {isDarkMode ? (
        <Moon className="h-4 w-4 text-purple-500" />
      ) : (
        <Sun className="h-4 w-4 text-amber-500" />
      )}
    </button>
  );
}
