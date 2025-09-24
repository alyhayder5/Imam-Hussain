'use client';

import { FaRedditAlien, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { useTranslation } from '@/contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white px-6 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-2 *:text-gray-300 *:text-sm">
        <p>📜 {t('footer.biography')}</p>
        <p>
          🤲 {t('footer.serving')}{' '}
          <span className="font-semibold">{t('footer.believers')}</span>{' '}
          {t('footer.since')} 2025
        </p>
      </div>

      <div className="flex justify-center items-center mt-20 sm:mt-6 space-x-6">
        <a
          href="mailto:rahenajaf110@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-[#F9A307] transition-colors duration-200"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://www.reddit.com/r/shia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reddit"
          className="hover:text-[#F9A307] transition-colors duration-200"
        >
          <FaRedditAlien size={22} />
        </a>
        <a
          href="https://discord.gg/shia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="hover:text-[#F9A307] transition-colors duration-200"
        >
          <FaDiscord size={22} />
        </a>
      </div>

      <div
        style={{
          textShadow: '0 0 14px #c084fc, 0 0 20px #a855f7',
        }}
        className="mt-4 text-center text-sm text-white"
      >
        {t('footer.copyright')} {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
