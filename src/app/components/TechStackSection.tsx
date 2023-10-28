import Image from 'next/image';
function TechStackSection() {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-3xl">Check out my Tech Stack</h2>
      <div className="grid grid-cols-3 w-full">
        <div id="frontend" className="grid grid-cols-2 gap-8 grid-rows-3">
          <h3 className="grid-start col-span-full text-center text-2xl">
            Frontend
          </h3>
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
        </div>
        <div id="styling " className="grid grid-cols-2 gap-8 grid-rows-3">
          <h3 className="grid-start col-span-full text-center text-2xl">
            Styling
          </h3>
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
        </div>
        <div id="backend" className="grid grid-cols-2 gap-8 grid-rows-3">
          <h3 className="grid-start col-span-full text-center text-2xl">
            Backend
          </h3>
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'50'}
            height={'50'}
            alt={'tech stack item'}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
