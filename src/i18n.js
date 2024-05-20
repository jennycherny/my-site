import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from './languages/en.json';
import ruTranslation from './languages/ru.json';

i18next
  .use(initReactI18next)
//   .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation:  enTranslation
      },
      ru: {
        translation: ruTranslation
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
