import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import customPath from './Custompath.js';
import HttpApi from 'i18next-http-backend'

const languageDetector = new LanguageDetector();

languageDetector.addDetector(customPath);


// i18n.on('languageChanged', function (lng) {
//   // if the language we switched to is the default language we need to remove the /en from URL
//   if (lng === i18n.options.fallbackLng[0]) {
//     if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
//       const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
//       window.location.replace(newUrl)
//     }
//   }
// })

// const options = {
//   order: ['customPath', 'localStorage', 'querystring',  'navigator'],


//   lookupQuerystring: 'lng',
//   lookupCookie: 'i18next',
//   lookupLocalStorage: 'i18nextLng',
//   lookupSessionStorage: 'i18nextLng',
//   lookupFromPathIndex: -1,
//   lookupFromSubdomainIndex: 0,

 

// };


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "am",
    supportedLngs: ['am', 'en', 'ru'],
   
    lng: localStorage.getItem('i18nextLng') || 'am',
    detection: {
      order: ["path","cookei","localStorage","htmlTag"]
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
   react: {useSuspense: false}
  });

  export default i18n;