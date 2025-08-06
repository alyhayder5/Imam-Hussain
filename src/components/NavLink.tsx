import { links } from '@/data/external-link';
import React from 'react';

function NavLink() {
  return (
    <div>
      <ul className="flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-0 mt-10">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="transition-transform duration-200 hover:translate-y-1 hover:text-[#F9A307] border sm:border-0 py-2.5 px-2.5 rounded-sm sm:py-0 sm:px-0"
            target="_blank"
          >
            {name}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default NavLink;
