'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { languages, type Language } from '@/data/language';

interface TranslationContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
      try {
        const parsed = JSON.parse(storedLang);
        const matchedLang = languages.find((lang) => lang.code === parsed.code);
        if (matchedLang) {
          setCurrentLanguage(matchedLang);
        }
      } catch (error) {
        console.error('Error parsing stored language:', error);
      }
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
  };

  const t = (key: string): string => {
    const translations = getTranslations(currentLanguage.code);
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage: handleLanguageChange,
        t,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

// Import translations synchronously
import enTranslations from '@/data/translations/en.json';
import urTranslations from '@/data/translations/ur.json';
import hiTranslations from '@/data/translations/hi.json';
import frTranslations from '@/data/translations/fr.json';
import esTranslations from '@/data/translations/es.json';
import faTranslations from '@/data/translations/fa.json';

const getTranslations = (languageCode: string) => {
  switch (languageCode) {
    case 'en':
      return enTranslations;
    case 'ur':
      return urTranslations;
    case 'hi':
      return hiTranslations;
    case 'fr':
      return frTranslations;
    case 'es':
      return esTranslations;
    case 'fa':
      return faTranslations;
    default:
      return enTranslations;
  }
};
