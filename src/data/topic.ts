import { StaticImageData } from 'next/image';
import { images } from '../../public/images';

export interface TopicItem {
  title: string;
  image?: string | StaticImageData;
  param: string;
  translationKey: string;
}

export const topics: TopicItem[] = [
  {
    title:
      'The Noble Birth of Imam Hussain (ع), Grandson of the Holy Prophet (ﷺ)',
    image: images.birth,
    param: 'the-noble-birth-of-imam-hussain-grandson-of-the-holy-prophet',
    translationKey: 'birth',
  },
  {
    title:
      'Childhood of Imam Hussain (ع) — In the Loving Care of the Prophet Muhammad (ﷺ)',
    image: images.childhood,
    param:
      'childhood-of-imam-hussain-in-the-loving-care-of-the-prophet-muhammad',
    translationKey: 'childhood',
  },
  {
    title:
      "Imam Hussain's (ع) Early Youth — Nurtured by Light, Honored by Prophets",
    image: images.youth,
    param: 'imam-hussain-early-youth-nurtured-by-light-honored-by-prophets',
    translationKey: 'youth',
  },
  {
    title:
      "Imam Hussain's (ع) Role During the Caliphate of His Father, Imam Ali (ع)",
    image: images.father,
    param: 'imam-hussain-role-during-the-caliphate-of-his-father-imam-ali',
    translationKey: 'father',
  },
  {
    title:
      'Standing Beside His Older Brother, Imam Hassan (ع), in the Days of Caliphate',
    image: images.brother,
    param:
      'standing-beside-his-older-brother-imam-hassan-in-the-days-of-caliphate',
    translationKey: 'brother',
  },
  {
    title:
      'The Loyal Companions of Imam Hussain (ع) — Embodiments of Faith & Courage',
    image: images.companion,
    param: 'the-loyal-companions-of-imam-hussain-embodiments-of-faith-courage',
    translationKey: 'companion',
  },
  {
    title: 'Divine Words — The Speeches & Letters of Imam Hussain (ع)',
    image: images.letter,
    param: 'divine-words-the-speeches-letters-of-imam-hussain',
    translationKey: 'letter',
  },
  {
    title: " Imam Hussain's (ع) Miracles — Reflections of Divine Grace",
    image: images.miracles,
    param: 'imam-hussain-miracles-reflections-of-divine-grace',
    translationKey: 'miracles',
  },
  {
    title:
      'The Battle of Karbala — A Sacred Uprising Against Injustice and Oppression',
    image: images.karbalaBattle,
    param:
      'the-battle-of-karbala-a-sacred-uprising-against-injustice-and-oppression',
    translationKey: 'karbala',
  },
  {
    title:
      'Ziyarat Imam Hussain (ع) — Spiritual Ascension Through Love and Loyalty',
    image: images.ziyarat,
    param: 'ziyarat-imam-hussain-spiritual-ascension-through-love-and-loyalty',
    translationKey: 'ziyarat',
  },
];
