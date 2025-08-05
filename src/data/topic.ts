import { StaticImageData } from 'next/image';
import { images } from '../../public/images';

export interface TopicItem {
  title: string;
  href: string;
  image?: string | StaticImageData;
}

export const topics: TopicItem[] = [
  {
    title:
      'The Noble Birth of Imam Hussain (ع), Grandson of the Holy Prophet (ﷺ)',
    href: '/birth',
    image: images.birth,
  },
  {
    title:
      'Childhood of Imam Hussain (ع) — In the Loving Care of the Prophet Muhammad (ﷺ)',
    href: '/childhood',
    image: images.childhood,
  },
  {
    title:
      'Imam Hussain’s (ع) Early Youth — Nurtured by Light, Honored by Prophets',
    href: '/youth',
    image: images.youth,
  },
  {
    title:
      'Imam Hussain’s (ع) Role During the Caliphate of His Father, Imam Ali (ع)',
    href: '/father',
    image: images.father,
  },
  {
    title:
      'Standing Beside His Older Brother, Imam Hasan (ع), in the Days of Caliphate',
    href: '/brother',
    image: images.brother,
  },
  {
    title:
      'The Loyal Companions of Imam Hussain (ع) — Embodiments of Faith & Courage',
    href: '/companion',
    image: images.companion,
  },
  {
    title: 'Divine Words — The Speeches & Letters of Imam Hussain (ع)',
    href: '/speeches-and-letters',
    image: images.letter,
  },
  {
    title: ' Imam Hussain’s (ع) Miracles — Reflections of Divine Grace',
    href: '/miracles',
    image: images.miracles,
  },
  {
    title:
      'The Battle of Karbala — A Sacred Uprising Against Injustice and Oppression',
    href: '/karbala',
    image: images.karbalaBattle,
  },
  {
    title:
      'Ziyarat Imam Hussain (ع) — Spiritual Ascension Through Love and Loyalty',
    href: '/ziyarat',
    image: images.ziyarat,
  },
];
