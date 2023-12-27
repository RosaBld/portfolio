import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from '../db/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: translation,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  console.log(i18n.options.resources);

export default i18n;