'use client';
import { languages } from '@/data/language';
import { useState } from 'react';

export default function LanguageSelector() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block w-32">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border border-gray-600 text-white rounded px-2 py-1 flex items-center justify-between"
      >
        <span>
          {selected.flag} {selected.name}
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
        <ul className="absolute w-full backdrop-filter backdrop-blur-lg shadow-lg border border-gray-600 rounded mt-1 z-10">
          {languages
            .filter((item) => item.name !== selected.name)
            .map((lang) => (
              <li
                key={lang.name}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                className="px-3 py-1 hover:bg-gray-700 cursor-pointer flex items-center gap-2 text-white"
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
