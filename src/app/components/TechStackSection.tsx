import Image from 'next/image';
import StackIcon from './StackIcon';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import FadeOnScroll from './FadeOnScroll';
function TechStackSection() {
  return (
    <section className="flex flex-col items-center px-6 min-h-screen container mx-auto snap justify-center">
      <h2 className="text-5xl px-6 pb-12 text-center">
        <FadeOnScroll>Check out my Tech Stack</FadeOnScroll>{' '}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 w-full gap-x-8">
        <div
          id="frontend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl pb-6">
            <FadeOnScroll>Frontend</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="react-icon.png" />
              <StackIcon imgURL="js-icon.png" />
              <StackIcon imgURL="ts-icon.png" />
              <StackIcon imgURL="nextjs-icon.png" />
              <StackIcon imgURL="reactrouter-icon.jpg" />
              <StackIcon imgURL="html-icon.png" />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="styling"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl pb-6">
            <FadeOnScroll>Styling</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="css-icon.png" />
              <StackIcon imgURL="tailwind-icon.png" />
              <StackIcon imgURL="mui-icon.png" />
              <StackIcon imgURL="bootstrap-icon.png" />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="backend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl pb-6">
            <FadeOnScroll>Backend</FadeOnScroll>
          </h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="node-icon.png" />
              <StackIcon imgURL="express-icon.png" />
              <StackIcon imgURL="socketio-icon.png" />
            </div>
          </FadeLeftOnScroll>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
