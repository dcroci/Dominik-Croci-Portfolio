import Image from 'next/image';
import StackIcon from './StackIcon';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import FadeOnScroll from './FadeOnScroll';
function TechStackSection() {
  return (
    <section className="flex flex-col items-center p-12">
      <h2 className="text-5xl p-6">Check out my Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 w-full">
        <div
          id="frontend"
          className="grid grid-cols-2 gap-8 grid-rows-3 border-gray-500 border-r"
        >
          <h3 className="grid-start col-span-full text-center text-4xl">
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
          className="grid grid-cols-2 gap-8 grid-rows-3 border-gray-500 border-r"
        >
          <h3 className="grid-start col-span-full text-center text-4xl">
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
          <h3 className="grid-start col-span-full text-center text-4xl">
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
