import Image from 'next/image';
import StackIcon from './StackIcon';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import FadeOnScroll from './FadeOnScroll';
function TechStackSection() {
  return (
    <section className="flex flex-col items-center px-6 min-h-screen container mx-auto">
      <h2 className="text-5xl px-6 pb-12 text-center">
        <FadeOnScroll>Check out my Tech Stack</FadeOnScroll>{' '}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 w-full gap-x-8">
        <div
          id="frontend"
          className="grid grid-cols-2 gap-8 grid-rows-3 border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="grid-start col-span-full text-center text-4xl pb-6">
            <FadeOnScroll>Frontend</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <StackIcon imgURL="react-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="js-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="ts-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="nextjs-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="reactrouter-icon.jpg" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="html-icon.png" />
          </FadeLeftOnScroll>
        </div>
        <div
          id="styling "
          className="grid grid-cols-2 gap-8 grid-rows-3 border-gray-300 border-b md:border-r md:border-b-0"
        >
          <h3 className="grid-start col-span-full text-center text-4xl pb-12 pt-6">
            <FadeOnScroll>Styling</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <StackIcon imgURL="css-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="tailwind-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="bootstrap-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="mui-icon.png" />
          </FadeLeftOnScroll>
        </div>
        <div id="backend" className="grid grid-cols-2 gap-8 grid-rows-3">
          <h3 className="grid-start col-span-full text-center text-4xl pb-6 pt-6">
            <FadeOnScroll>Backend</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <StackIcon imgURL="express-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="node-icon.png" />
          </FadeLeftOnScroll>
          <FadeLeftOnScroll>
            <StackIcon imgURL="socketio-icon.png" />
          </FadeLeftOnScroll>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
