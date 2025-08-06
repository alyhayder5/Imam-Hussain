import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const beautifulPeople = localFont({
  src: '../../public/font/BeautifulPeoplePersonalUse-dE0g.ttf',
  variable: '--font-beautiful-people',
});

export const metadata: Metadata = {
  title: 'Imam Hussain',
  description:
    'Imam Hussain – Explore his noble biography, powerful sayings, and the pivotal events of Karbala. Discover the eternal message of sacrifice, truth, and resistance against injustice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beautifulPeople.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
