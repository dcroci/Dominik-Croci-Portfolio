import React from 'react';
import StackIcon from './StackIcon';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import styles from '../ScrollSnap.module.css';

function TechStackSection() {
  return (
    <section
      className={`flex flex-col items-center px-6 min-h-screen container mx-auto snap justify-center`}
    >
      <h2 className="text-5xl px-6 pb-12 text-center">
        Check out my Tech Stack
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 w-full gap-x-8 md:gap-x-0">
        <div
          id="frontend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6 border-l"
        >
          <h3 className="text-center text-4xl pb-6">Frontend</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="react-icon.png" stackName={'React'} />
              <StackIcon imgURL="js-icon.png" stackName={'JavaScript'} />
              <StackIcon imgURL="ts-icon.png" stackName={'TypeScript'} />
              <StackIcon imgURL="nextjs-icon.png" stackName={'NextJS'} />
              <StackIcon
                imgURL="reactrouter-icon.jpg"
                stackName={'React Router'}
              />
              <StackIcon imgURL="html-icon.png" stackName={'HTML 5'} />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="styling"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl pb-6">Styling</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="css-icon.png" stackName={'CSS 3'} />
              <StackIcon
                imgURL="tailwind-icon.png"
                stackName={'Tailwind CSS'}
              />
              <StackIcon imgURL="mui-icon.png" stackName={'Material UI'} />
              <StackIcon imgURL="bootstrap-icon.png" stackName={'Bootstrap'} />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="backend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl pb-6">Backend</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full">
              <StackIcon imgURL="node-icon.png" stackName={'Node JS'} />
              <StackIcon imgURL="express-icon.png" stackName={'Express'} />
              <StackIcon imgURL="socketio-icon.png" stackName={'SocketIO'} />
              <StackIcon imgURL="mongoose-icon.png" stackName={'Mongoose'} />
              <StackIcon imgURL="mongodb-icon.svg" stackName={'MongoDB'} />
            </div>
          </FadeLeftOnScroll>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
