'use client';

import { useState } from 'react';
import HeaderLarge from './HeaderLarge';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const [search, setSearch] = useState('');
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="fixed w-full z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg pb-4">
      <HeaderLarge search={search} setSearch={setSearch} />
      <HeaderMobile
        search={search}
        setSearch={setSearch}
        showNavBar={showNavBar}
        setShowNavBar={setShowNavBar}
      />
    </header>
  );
};

export default Header;
