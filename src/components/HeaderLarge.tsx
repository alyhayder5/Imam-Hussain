'use client';

import { IoMdSearch } from 'react-icons/io';
import { Image } from './image';
import LanguageSelector from './LanguageSelector';

const HeaderLarge = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) => {
  return (
    <div className="hidden lg:flex container mx-auto justify-between items-center lg:w-[66%] w-[90%] px-6 py-4 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mt-10 h-[9vh]">
      <Image
        source="logo"
        width={100}
        height={100}
        alt="logo"
        className="w-32 h-14 object-cover"
      />

      <div className="flex-grow items-center mx-4 max-w-md border-[#F9A307] border-2 bg-black/1 rounded-lg flex">
        <IoMdSearch fontSize={30} className="pl-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-lg bg-opacity-10 text-white placeholder-gray-400 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <LanguageSelector />
    </div>
  );
};

export default HeaderLarge;
