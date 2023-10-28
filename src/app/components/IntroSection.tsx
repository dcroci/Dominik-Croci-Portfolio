import Image from 'next/image';
function IntroSection() {
  return (
    <section className="flex items-center flex-col p-12">
      <Image
        src={'/headshot.png'}
        alt="Professional photo of me"
        width={'70'}
        height={'70'}
        className="rounded-full"
      />
      <h1 className="text-7xl p-6">{`Hey, I'm Dominik`}</h1>
      <p className="text-4xl p-6 pt-0">
        Developer of responsive, accessible, and engaging web applications
      </p>
    </section>
  );
}

export default IntroSection;
