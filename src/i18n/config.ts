import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

const resources = {
    fr: {
        translation: translationFR,
    },
    en: {
        translation: translationEN,
    },
    ar: {
        translation: translationAR,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        lng: 'fr', // Default language
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

// Set HTML dir attribute for RTL support
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;
