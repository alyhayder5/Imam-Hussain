'use client';

import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { Image } from './image';
import LanguageSelector from './LanguageSelector';
import { RxCross1 } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [search, setSearch] = useState('');
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="fixed w-full z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg pb-4">
      <div className="container mx-auto flex justify-between items-center lg:w-[66%] w-[90%] px-6 py-4 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mt-10 h-[9vh]">
        <Image
          source="logo"
          width={100}
          height={100}
          alt="logo"
          className="w-32 h-14 object-cover"
        />

        <div className="flex-grow items-center mx-4 max-w-md border-[#F9A307] border-2 bg-black/1 rounded-lg hidden lg:flex">
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

        {/* only for small screens */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowNavBar(!showNavBar)}
            className="lg:hidden z-50 w-10 h-10"
          >
            <AnimatePresence mode="wait">
              {showNavBar ? (
                <motion.div
                  key="cross"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="relative left-2"
                >
                  <RxCross1 color="#F9A307" size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="burger"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    source="HamBurgerLogo"
                    alt="hamburger"
                    width={40}
                    height={40}
                    className="w-10 h-10 cursor-pointer"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
