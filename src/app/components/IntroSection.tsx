import Image from 'next/image';
import Link from 'next/link';
function IntroSection() {
  return (
    <section className="flex items-center flex-col px-6 min-h-screen container mx-auto snap justify-center relative">
      <nav className="p-6 w-full absolute top-0">
        <ul className="flex justify-between text-3xl">
          <li>
            <Link href={'/'}> Dominik Croci</Link>
          </li>
          <div className="flex gap-6">
            <li>
              <Link href={'/blog'}> Blog</Link>
            </li>
            <li>
              <Link href={'/projects'}> Projects</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="flex flex-col sm:flex-row-reverse items-center md:flex-col">
        <Image
          src={'/headshot.png'}
          alt="Professional photo of me"
          width={'250'}
          height={'50'}
          className="sm:rounded-full"
        />
        <h1 className="text-7xl py-6 text-center">{`Hey, I'm Dominik`}</h1>
      </div>
      <p className="text-4xl py-6 text-center">
        Developer of <span style={{ color: '#FFA500' }}>responsive</span>,
        <span style={{ color: '#00ffff' }}> accessible</span>, and
        <span style={{ color: '#1E90FF' }}> engaging </span>
        web applications
      </p>
    </section>
  );
}

export default IntroSection;
