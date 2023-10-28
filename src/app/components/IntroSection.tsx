import Image from 'next/image';
function IntroSection() {
  return (
    <section className="flex items-center flex-col">
      <Image
        src={'/headshot.png'}
        alt="Professional photo of me"
        width={'300'}
        height={'300'}
        className="rounded-full"
      />
      <h1 className="text-3xl">Hey, I'm Dominik</h1>
      <p className="text-2xl">
        Developer of responsive, accessible, and engaging web applications
      </p>
    </section>
  );
}

export default IntroSection;
