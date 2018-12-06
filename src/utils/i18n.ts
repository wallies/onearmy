import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from 'src/assets/i18n/en/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue a la React et react-i18next"
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React y react-i18next"
    }
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;