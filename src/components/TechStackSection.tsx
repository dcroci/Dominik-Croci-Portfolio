import React from 'react';
import StackIcon from './StackIcon';
import FadeLeftOnScroll from './Animate';
import styles from '../ScrollSnap.module.css';

function TechStackSection() {
  return (
    <section
      className={`flex flex-col items-center px-6 min-h-screen container mx-auto snap justify-center`}
    >
      <h2 className="text-5xl px-6 pb-12 text-center">
        Check out my Tech Stack
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 w-full gap-x-8 md:gap-x-0 mx-auto ">
        <div
          id="frontend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6 md:border-l"
        >
          <h3 className="text-center text-4xl py-6">Frontend</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full place-items-center">
              <StackIcon
                imgURL="react-icon.png"
                stackName="React"
                stackDesc="A JavaScript library for building user interfaces, particularly single-page applications."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="js-icon.png"
                stackName="JavaScript"
                stackDesc="A high-level, dynamic programming language used primarily for web development."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="ts-icon.png"
                stackName="TypeScript"
                stackDesc="A superset of JavaScript that adds static type definitions, aimed at making code easier to understand and debug."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="nextjs-icon.png"
                stackName="NextJS"
                stackDesc="A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="reactrouter-icon.jpg"
                stackName="React Router"
                stackDesc="A library for routing in React applications, enabling navigation between different components."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="html-icon.png"
                stackName="HTML 5"
                stackDesc="The latest version of HTML, providing the structure and content of web pages."
                margin={'mx-auto'}
              />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="styling"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl py-6">Styling</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full place-items-center">
              <StackIcon
                imgURL="css-icon.png"
                stackName="CSS 3"
                stackDesc="The latest version of Cascading Style Sheets, used for styling and layout of web pages."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="tailwind-icon.png"
                stackName="Tailwind CSS"
                stackDesc="A utility-first CSS framework for rapid UI development."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="mui-icon.png"
                stackName="Material UI"
                stackDesc="A React UI framework that implements Google's Material Design."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="bootstrap-icon.png"
                stackName="Bootstrap"
                stackDesc="An open-source CSS framework directed at responsive, mobile-first front-end web development."
                margin={'mx-auto'}
              />
            </div>
          </FadeLeftOnScroll>
        </div>

        <div
          id="backend"
          className="border-gray-300 border-b md:border-r md:border-b-0 pb-6"
        >
          <h3 className="text-center text-4xl py-6">Backend</h3>
          <FadeLeftOnScroll>
            <div className="grid grid-cols-2 gap-8 grid-rows-3 w-full place-items-center">
              <StackIcon
                imgURL="node-icon.png"
                stackName="Node JS"
                stackDesc="Node.js is an open-source, JavaScript runtime environment used to execute JavaScript code server-side, efficiently handling asynchronous operations and I/O-intensive tasks."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="express-icon.png"
                stackName="Express"
                stackDesc="A minimal and flexible Node.js web application framework, providing a robust set of features for web and mobile applications."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="socketio-icon.png"
                stackName="SocketIO"
                stackDesc="A JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="mongoose-icon.png"
                stackName="Mongoose"
                stackDesc="An Object Data Modeling (ODM) library for MongoDB and Node.js, managing relationships between data and providing schema validation."
                margin={'mx-auto'}
              />
              <StackIcon
                imgURL="mongodb-icon.svg"
                stackName="MongoDB"
                stackDesc="A NoSQL database program, using JSON-like documents with schema."
                margin={'mx-auto'}
              />
            </div>
          </FadeLeftOnScroll>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
