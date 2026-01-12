import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook, Youtube, Mail, Heart } from "lucide-react";
import { setLang } from "../lib/theme.js";

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const [showTooltip, setShowTooltip] = useState(false);

  function changeLang(next) {
    i18n.changeLanguage(next);
    setLang(next);
  }

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-neutral-950 to-black text-white overflow-hidden">
      {/* Gradient overlay decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="container-pad py-16 relative">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm mb-6">
              <img
                src="/icon.png"
                alt={t("common.brand")}
                className="h-10 w-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{t("common.brand")}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {t("common.location")}
            </p>
            <a
              href="mailto:hello@bonjourvallarta.com.mx"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-purple-400 transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>hello@bonjourvallarta.com.mx</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              {t("footer.quickLinks")}
            </h3>
            <nav className="grid gap-3">
              {[
                { to: "/courses", label: t("nav.courses") },
                { to: "/online", label: t("nav.onlinePlatform") },
                { to: "/certifications", label: t("nav.certifications") },
                { to: "/blog", label: t("nav.blog") },
                { to: "/contact", label: t("nav.contact") },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              {t("footer.follow")}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/bonjourvallarta/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/Bonjourvallarta"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-red-600/20 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-white/40">{t("nav.language")}</p>
              <div className="flex gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => changeLang("es")}
                  className={cx(
                    "px-3 py-1.5 rounded-lg border transition-all",
                    i18n.language === "es"
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => changeLang("en")}
                  className={cx(
                    "px-3 py-1.5 rounded-lg border transition-all",
                    i18n.language === "en"
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  EN
                </button>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 cursor-not-allowed relative group">
                  FR
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t("common.badges.comingSoon")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Language sections */}
          <div className="grid gap-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-white/90">
                {t("footer.languages.french.title")}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t("footer.languages.french.desc")}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-white/90">
                {t("footer.languages.english.title")}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t("footer.languages.english.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40">
            © {year} {t("common.brand")}. {t("footer.rights")}
          </p>

          {/* Racoon Devs Credit with Tooltip */}
          <div className="relative">
            <a
              href="https://racoondevs.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors group"
            >
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-3 w-3 text-red-500 group-hover:scale-125 transition-transform" />
              <span>{t("footer.by")}</span>
              <span className="font-semibold text-white/70 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400">
                {t("footer.racoonDevs.name")}
              </span>
            </a>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-3 w-72 p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                    <img
                      src="/rd_icon.webp"
                      alt={t("footer.racoonDevs.name")}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-1">
                      {t("footer.racoonDevs.name")}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {t("footer.racoonDevs.tagline")}
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 text-xs">
                  <div className="flex items-center gap-2 text-white/50">
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                    <span>{t("footer.racoonDevs.features.architecture")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{t("footer.racoonDevs.features.design")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                    <span>{t("footer.racoonDevs.features.solutions")}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
