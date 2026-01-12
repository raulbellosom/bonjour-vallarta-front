import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

function detectLang() {
  const saved = localStorage.getItem('lang')
  if (saved && resources[saved]) return saved

  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('es')) return 'es'
  return 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
