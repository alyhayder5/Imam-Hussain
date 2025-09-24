import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function Page() {
  return (
    <main>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <h1>Divine Words — The Speeches & Letters of Imam Hussain</h1>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
