import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importez vos fichiers de traduction
import translationEN from '../locales/en/translation.json'
import translationFR from '../locales/fr/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react déjà protège contre l'XSS
  },
})

export default i18n
