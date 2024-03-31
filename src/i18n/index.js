import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {en, rus} from './translations';

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'rus',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      'en': {
        translation: en
      },
      'rus': {
        translation:rus
      }
    }
  });

export default i18n;