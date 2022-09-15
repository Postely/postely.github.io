import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "header": "The first free and open-source social media scheduler for Twitter, Reddit, Instagram, Facebook and Tiktok",
      "subheader": "Get rid of those montly fees! Postely is free...forever!",
      "try": "Get started!",
      "how": "But how?",
      "howDescription": "Postely uses the exiting social media scheduling APIs and the power of your own device to schedule your posts. Voilà!" 
    }
  },
  fr: {
    translation: {
      "header": "Le premier planificateur de médias sociaux gratuit et open-source pour Twitter, Reddit, Instagram, Facebook and Tiktok",
      "subheader": "Débarassez vous des paiements mensuels! Postely est gratuit...pour toujours!",
      "try": "Commençons",
      "how": "Mais comment?",
      "howDescription": "Postely utilise les APIs existant des médias sociaux et le pouvoir de votre propre dispositif pour planifier vos publications. Voilà!"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;