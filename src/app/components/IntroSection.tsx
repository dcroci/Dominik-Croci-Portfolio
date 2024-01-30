import Image from 'next/image';
import Navbar from './NavBar';
import { useState } from 'react';
function IntroSection() {
  return (
    <section
      className={`flex items-center flex-col px-6 min-h-screen container mx-auto snap justify-center relative `}
    >
      <div className="flex flex-col sm:flex-col items-center md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse gap-8 intro">
        <Image
          src={'/updated-headshot.jpg'}
          alt="Professional photo of me"
          width={'250'}
          height={'50'}
          className={`rounded-full mt-12 `}
          priority={true}
        />
        <h1 className="text-7xl py-6 text-center">{`Hey, I'm Dominik`}</h1>
      </div>
      <p className="text-4xl py-6 text-center">
        Developer of <span style={{ color: '#f39237' }}>responsive</span>,
        <span style={{ color: '#00ffff' }}> accessible</span>, and
        <span style={{ color: '#70e000' }}> engaging </span>
        web applications
      </p>
    </section>
  );
}

export default IntroSection;
