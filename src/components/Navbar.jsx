import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

import { applyTheme, getInitialTheme, setLang } from "../lib/theme.js";
import ThemeSwitch from "./ThemeSwitch.jsx";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/courses", key: "nav.courses" },
  { to: "/online", key: "nav.onlinePlatform" },
  { to: "/certifications", key: "nav.certifications" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const platformUrl = useMemo(
    () =>
      import.meta.env.VITE_PLATFORM_URL ||
      "https://learn.bonjourvallarta.com.mx",
    []
  );

  function handleThemeChange(isDark) {
    const next = isDark ? "dark" : "light";
    setThemeState(next);
    applyTheme(next);
  }

  function changeLang(next) {
    i18n.changeLanguage(next);
    setLang(next);
  }

  function handleLogoClick(e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur-xl">
      <div className="container-pad h-16 flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <img src="/logo.png" alt={t("common.brand")} className="h-8 w-auto" />
          <span className="sr-only">{t("common.brand")}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cx(
                  "px-3 py-2 rounded-xl text-sm font-medium transition",
                  isActive
                    ? "bg-black/5 dark:bg-white/10"
                    : "hover:bg-black/5 dark:hover:bg-white/10"
                )
              }
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* External platform CTA */}
          <a
            href={platformUrl}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold gradient-brand text-white shadow-soft"
            target="_blank"
            rel="noreferrer"
          >
            {t("common.cta.learnOnline")}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Language */}
          <div className="hidden sm:flex items-center gap-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-1 py-1">
            <button
              type="button"
              onClick={() => changeLang("es")}
              className={cx(
                "px-2 py-1 rounded-lg text-xs font-semibold transition",
                i18n.language === "es"
                  ? "bg-black/5 dark:bg-white/10"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              )}
              aria-label="Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => changeLang("en")}
              className={cx(
                "px-2 py-1 rounded-lg text-xs font-semibold transition",
                i18n.language === "en"
                  ? "bg-black/5 dark:bg-white/10"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Theme */}
          <ThemeSwitch
            isDarkMode={theme === "dark"}
            onThemeChange={handleThemeChange}
            ariaLabel={t("nav.theme")}
          />

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl"
          >
            <div className="container-pad py-4">
              <div className="flex items-center justify-between gap-3 pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Globe className="h-4 w-4" />
                  {t("nav.language")}
                </div>
                <div className="flex items-center gap-2">
                  <ThemeSwitch
                    isDarkMode={theme === "dark"}
                    onThemeChange={handleThemeChange}
                    ariaLabel={t("nav.theme")}
                  />
                  <button
                    type="button"
                    onClick={() => changeLang("es")}
                    className={cx(
                      "px-3 py-2 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10",
                      i18n.language === "es"
                        ? "bg-black/5 dark:bg-white/10"
                        : "bg-white dark:bg-white/5"
                    )}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLang("en")}
                    className={cx(
                      "px-3 py-2 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10",
                      i18n.language === "en"
                        ? "bg-black/5 dark:bg-white/10"
                        : "bg-white dark:bg-white/5"
                    )}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="grid gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      cx(
                        "px-3 py-3 rounded-xl text-sm font-semibold transition border border-transparent",
                        isActive
                          ? "bg-black/5 dark:bg-white/10"
                          : "hover:bg-black/5 dark:hover:bg-white/10"
                      )
                    }
                  >
                    {t(l.key)}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={platformUrl}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("common.cta.learnOnline")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
