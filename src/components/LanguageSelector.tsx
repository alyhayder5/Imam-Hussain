'use client';

import { languages, type Language } from '@/data/language';
import { useState } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative lg:w-32 inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border border-gray-600 text-white rounded px-2 lg:py-1 py-2.5 flex items-center justify-between"
      >
        <span>
          {currentLanguage.flag} {currentLanguage.name}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute w-full backdrop-filter backdrop-blur-lg shadow-lg border border-gray-600 rounded mt-1 z-10 bg-black/50">
          {languages
            .filter((item) => item.code !== currentLanguage.code)
            .map((lang) => (
              <li
                key={lang.name}
                onClick={() => handleLanguageChange(lang)}
                className="px-3 lg:py-1 py-2.5 hover:bg-gray-700 cursor-pointer flex items-center gap-2 text-white"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
