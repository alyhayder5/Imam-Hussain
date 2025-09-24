'use client';

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

function Slogan() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center pt-[10vh] pb-24">
      <p className="text-4xl sm:text-6xl text-center font-bold text-red-600 animate-pulse">
        {t('slogan')}
      </p>
    </div>
  );
}

export default Slogan;
