'use client';

import Link from 'next/link';
import { Image } from './image';
import LanguageSelector from './LanguageSelector';
import NavLink from './NavLink';

const HeaderLarge = () => {
  return (
    <div className="hidden lg:flex container mx-auto justify-between items-center lg:w-[66%] w-[90%] px-6 py-4 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mt-10 h-[9vh]">
      <Link href="/">
        <Image
          source="logo"
          width={100}
          height={100}
          alt="logo"
          className="w-32 h-14 object-cover"
        />
      </Link>
      <NavLink />
      <LanguageSelector />
    </div>
  );
};

export default HeaderLarge;
