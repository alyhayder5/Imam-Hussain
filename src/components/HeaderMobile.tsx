'use client';

import { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import { Image } from './image';
import LanguageSelector from './LanguageSelector';
import NavLink from './NavLink';

const HeaderMobile = ({
  showNavBar,
  setShowNavBar,
}: {
  showNavBar: boolean;
  setShowNavBar: (val: boolean) => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = showNavBar ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showNavBar]);

  return (
    <>
      <div className="lg:hidden container mx-auto flex justify-between items-center w-[90%] px-6 py-4 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mt-10 h-[9vh]">
        <Image
          source="logo"
          width={100}
          height={100}
          alt="logo"
          className="w-32 h-14 object-cover"
        />

        <button
          onClick={() => setShowNavBar(!showNavBar)}
          className="z-50 w-10 h-10"
        >
          <AnimatePresence mode="wait">
            {!showNavBar && (
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

      <AnimatePresence>
        {showNavBar && (
          <motion.div
            key="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#000000dd] backdrop-blur-lg z-50 p-6 flex flex-col gap-6 pt-28"
          >
            <button
              onClick={() => setShowNavBar(false)}
              className="absolute top-8 right-8 z-50 w-10 h-10"
            >
              <RxCross1 color="#F9A307" size={32} />
            </button>
            <LanguageSelector />
            <NavLink />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMobile;
