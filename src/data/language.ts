export interface Language {
  name: string;
  flag: string;
  code: string;
}

export const languages: Language[] = [
  { name: 'English', flag: '🇬🇧', code: 'en' },
  { name: 'اردو', flag: '🇵🇰', code: 'ur' },
  { name: 'हिन्दी', flag: '🇮🇳', code: 'hi' },
  { name: 'Français', flag: '🇫🇷', code: 'fr' },
  { name: 'Español', flag: '🇪🇸', code: 'es' },
  { name: 'فارسی', flag: '🇮🇷', code: 'fa' },
];
