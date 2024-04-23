import Image from 'next/image';
import Navbar from './NavBar';
import { useState } from 'react';
function IntroSection() {
  return (
    <section
      className={`flex items-center flex-col px-6 min-h-screen container mx-auto snap justify-center relative `}
    >
      <div className="flex flex-col md:flex-col items-center lg:flex-row-reverse   gap-4 intro">
        <Image
          src={'/headshot.png'}
          alt="Professional photo of me"
          width={'500'}
          height={'500'}
          className={`rounded-full  `}
          priority={true}
        />
        <section>
          <h1 className="text-7xl py-6 leading-[90px]">
            Hey,
            <br />
            I&apos;m Dominik
          </h1>
          <p className="text-2xl max-w-[40ch] font-normal leading-relaxed">
            As a full-stack web developer, I specialize in React and Next.js to
            create seamless and efficient web applications. My expertise in
            front-end and back-end technologies allows me to deliver
            comprehensive solutions that are both scalable and user-friendly.
            Passionate about modern development practices, I am committed to
            innovating and staying ahead in the ever-evolving tech landscape.
          </p>
        </section>
      </div>
    </section>
  );
}

export default IntroSection;
