'use client';

import React from 'react';
import Image from 'next/image';
import Slogan from './Slogan';
import { topics } from '@/data/topic';

function Topic() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] py-16">
      <Slogan />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[84vw] sm:w-[80vw] mx-auto sm:px-4 sm:gap-20 gap-10">
        {topics.map((card, i) => (
          <a
            key={i}
            href={card.param}
            className="backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl overflow-hidden text-white transition hover:scale-[1.03] hover:border-[#F9A307] hover:shadow-[0_0_20px_#F9A307] duration-300"
          >
            {card.image && (
              <div className="relative w-full h-60">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Topic;
