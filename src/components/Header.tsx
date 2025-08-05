'use client';

import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { Image } from './image';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <header className="fixed w-full z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg pb-4">
      <div className="container mx-auto flex justify-between items-center w-[66%] px-6 py-4 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mt-10 h-[9vh]">
        <Image
          source="logo"
          width={100}
          height={100}
          alt="logo"
          className="w-32 h-14 object-cover"
        />
        <div className="flex-grow flex items-center mx-4 max-w-md border-[#F9A307] border-2 bg-black/1 rounded-lg">
          <IoMdSearch fontSize={30} className="pl-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg bg-opacity-10 text-white placeholder-gray-400 focus:outline-none "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
