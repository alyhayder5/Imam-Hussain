'use client';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-2 *:text-gray-300 *:text-sm">
        <p>📜 The comprehensive Biography of Imam Hussain (a.s)</p>
        <p>
          🤲 Serving <span className="font-semibold">مؤمنين</span> since 2025
        </p>
      </div>
      <div
        style={{
          textShadow: '0 0 14px #c084fc, 0 0 20px #a855f7',
        }}
        className="mt-10 text-center text-sm text-white"
      >
        Rah-e-Najaf – All rights reserved © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
