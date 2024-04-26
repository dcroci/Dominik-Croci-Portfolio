'use client';
import { Button } from '@nextui-org/react';
import StackIcon from './StackIcon';
import { useState } from 'react';
import Link from 'next/link';

function ProjectsSection() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section className="mb-32 pt-24" id="projects">
      <h3 className="font-bold ml-6">PROJECTS</h3>
      <div>
        <div className="grid gap-4  hover:bg-white/10 p-4 transition-all duration-300 rounded-md">
          <img
            className="w-full rounded-md"
            alt="DevTalk"
            src={'/dev-talk.png'}
          />
          <section>
            <Link
              href={'https://www.devtalk.tech/'}
              target="_blank"
              className="cursor-pointer"
            >
              <h4
                className="font-semibold text-[16px] mb-2 flex gap-2 items-center hover:text-gray-100 leading-6"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
              >
                Building Developer Communities With DevTalk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className={`${
                    isHovering ? 'translate-x-1 -translate-y-1' : ''
                  } w-4 h-4 transition-all duration-300`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h4>
            </Link>

            <p className="text-gray-200 text-[16px] leading-7">
              Welcome to DevTalk, the premier online community for developers
              from all corners of the tech world. Whether your code flows in
              JavaScript, Java, Rust, or any other language, DevTalk provides a
              dedicated platform where you can connect, share, and learn with
              fellow developers. Crafted with the diverse needs of the
              programming community in mind, our platform offers a rich array of
              features designed to foster collaboration, enhance learning, and
              celebrate the art of development.
            </p>
            <p className="font-medium text-white mt-4 cursor-pointer">
              Want to learn more?{' '}
              {/* <span className="underline">
                <Link href="/projects/devtalk">
                  See my process building DevTalk.
                </Link>
              </span> */}
            </p>
          </section>
          <ul className="flex items-center gap-4 w-full">
            <li>
              <StackIcon
                imgURL="tailwind-icon.png"
                stackName="Tailwind CSS"
                stackDesc="A utility-first CSS framework for rapid UI development."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="ts-icon.png"
                stackName="TypeScript"
                stackDesc="A superset of JavaScript that adds static type definitions, aimed at making code easier to understand and debug."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="react-icon.png"
                stackName="React"
                stackDesc="A JavaScript library for building user interfaces, particularly single-page applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              {' '}
              <StackIcon
                imgURL="nextjs-icon.png"
                stackName="NextJS"
                stackDesc="A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="prisma.png"
                stackName="Prisma ORM"
                stackDesc="A next-gen ORM for modern application development."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="supabase.png"
                stackName="Supabase"
                stackDesc="The open source Firebase alternative powered by PostgreSQL."
                margin={'mx-auto'}
              />
            </li>
          </ul>
        </div>
        <div className="grid gap-4 mt-12 hover:bg-white/10 p-4 transition-all duration-300 rounded-md">
          <img
            className="w-full rounded-md"
            alt="DevTalk"
            src={'/hoopshub.png'}
          />
          <section>
            <Link
              href={'https://hoopshub.vercel.app/'}
              target="_blank"
              className="cursor-pointer"
            >
              <h4
                className="font-semibold text-[16px] mb-2 flex gap-2 items-center hover:text-gray-100 leading-6"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
              >
                HoopsHub: Shop the Game, Own the Legacy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className={`${
                    isHovering ? 'translate-x-1 -translate-y-1' : ''
                  } w-4 h-4 transition-all duration-300`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h4>
            </Link>

            <p className="text-gray-200 text-[16px] leading-7">
              Welcome to HoopsHub, a comprehensive platform designed for
              enthusiasts to buy and sell NBA memorabilia. This includes a wide
              variety of items such as signed jerseys, player cards, and
              basketballs. Our platform also caters to sellers, providing a
              straightforward process for listing their memorabilia by uploading
              images and filling out product details. Additionally, HoopsHub
              features a dedicated dashboard for the company&apos;s use,
              showcasing recent sales, total revenue, and offering the ability
              to update product information seamlessly.
            </p>
          </section>
          <ul className="flex items-center gap-4 w-full flex-wrap">
            <li>
              <StackIcon
                imgURL="tailwind-icon.png"
                stackName="Tailwind CSS"
                stackDesc="A utility-first CSS framework for rapid UI development."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="ts-icon.png"
                stackName="TypeScript"
                stackDesc="A superset of JavaScript that adds static type definitions, aimed at making code easier to understand and debug."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="react-icon.png"
                stackName="React"
                stackDesc="A JavaScript library for building user interfaces, particularly single-page applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              {' '}
              <StackIcon
                imgURL="nextjs-icon.png"
                stackName="NextJS"
                stackDesc="A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="prisma.png"
                stackName="Prisma ORM"
                stackDesc="A next-gen ORM for modern application development."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="supabase.png"
                stackName="Supabase"
                stackDesc="The open source Firebase alternative powered by PostgreSQL."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="stripe.png"
                stackName="Stripe"
                stackDesc="Stripe is a comprehensive payment platform that enables businesses of all sizes to accept payments, manage transactions, and optimize financial workflows online."
                margin={'mx-auto'}
              />
            </li>
          </ul>
        </div>
        <div className="grid gap-4 mt-12 hover:bg-white/10 p-4 transition-all duration-300 rounded-md">
          <img
            className="w-full rounded-md"
            alt="Personal Blog"
            src={'/blog.png'}
          />
          <section>
            <Link
              href={'https://dominik-croci-blog.netlify.app/'}
              target="_blank"
              className="cursor-pointer"
            >
              <h4
                className="font-semibold text-[16px] mb-2 flex gap-2 items-center hover:text-gray-100 leading-6"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
              >
                Code & Life: My Personal Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className={`${
                    isHovering ? 'translate-x-1 -translate-y-1' : ''
                  } w-4 h-4 transition-all duration-300`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h4>
            </Link>
            <p className="text-gray-200 text-[16px] leading-7">
              Welcome to my personal development blog, where I share my journey
              and insights as a web developer. Specializing in dynamic,
              responsive web applications, my blog showcases my proficiency in a
              variety of modern technologies including React, MongoDB, and
              Tailwind CSS. It serves as a platform for me to explore and
              document the latest trends in web development, from front-end
              frameworks to back-end technologies. Through this blog, I aim to
              connect with like-minded enthusiasts and professionals by
              providing valuable content that enhances understanding and
              encourages innovation in the field. Whether you&apos;re interested
              in learning about coding best practices or responsive design, my
              blog is a resource for both novice developers and seasoned experts
              looking to enhance their skills and knowledge.
            </p>
          </section>
          <ul className="flex items-center gap-4 w-full flex-wrap">
            <li>
              {' '}
              <StackIcon
                imgURL="js-icon.png"
                stackName="JavaScript"
                stackDesc="A high-level, dynamic programming language used primarily for web development."
                margin={'mx-auto'}
              />
            </li>{' '}
            <li>
              <StackIcon
                imgURL="css-icon.png"
                stackName="CSS"
                stackDesc="The latest version of Cascading Style Sheets, used for styling and layout of web pages."
                margin={'mx-auto'}
              />
            </li>{' '}
            <li>
              <StackIcon
                imgURL="react-icon.png"
                stackName="React"
                stackDesc="A JavaScript library for building user interfaces, particularly single-page applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="reactrouter-icon.jpg"
                stackName="React Router"
                stackDesc="A library for routing in React applications, enabling navigation between different components."
                margin={'mx-auto'}
              />
            </li>
            <li>
              {' '}
              <StackIcon
                imgURL="node-icon.png"
                stackName="Node JS"
                stackDesc="Node.js is an open-source, JavaScript runtime environment used to execute JavaScript code server-side, efficiently handling asynchronous operations and I/O-intensive tasks."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="express-icon.png"
                stackName="Express"
                stackDesc="A minimal and flexible Node.js web application framework, providing a robust set of features for web and mobile applications."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="mongoose-icon.png"
                stackName="Mongoose"
                stackDesc="An Object Data Modeling (ODM) library for MongoDB and Node.js, managing relationships between data and providing schema validation."
                margin={'mx-auto'}
              />
            </li>
            <li>
              {' '}
              <StackIcon
                imgURL="mongodb-icon.svg"
                stackName="MongoDB"
                stackDesc="A NoSQL database program, using JSON-like documents with schema."
                margin={'mx-auto'}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
