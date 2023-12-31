import Image from 'next/image';
import Link from 'next/link';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import FadeOnScroll from './FadeOnScroll';
import FadeRightOnScroll from './FadeRightOnScroll';
import Project from './Project';
function ProjectsSection() {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 min-h-screen gap-8 container mx-auto px-6 snap justify-center items-center overflow-x-hidden">
      <h2 className="col-span-full text-center text-6xl p-6 pb-0">
        Notable Projects
      </h2>
      <FadeLeftOnScroll>
        <Project
          title="Personal Blog"
          desc="A full-stack web application where I post articles about exciting tech, my goals and achievements, and other code-related ideas"
          imgURL="blog.png"
          siteLink={'https://dominik-croci-blog.netlify.app/'}
          mockup1="mockups/blog-mockup.png"
          mockup2="mockups/blog-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, Mongoose, MongoDB, Tailwind CSS'
          }
          gitLink="https://github.com/dcroci/blog-mern"
          hasTwoMockups={true}
        />
      </FadeLeftOnScroll>
      <FadeRightOnScroll>
        <Project
          title="Game Guesser"
          desc="An interactive single-page web game where players engage in guessing video game titles and imagery, testing their knowledge of various video games in a fun and engaging way"
          imgURL="game-guesser.png"
          siteLink={'https://gameguesser.netlify.app/'}
          mockup1="mockups/gg-mockup.png"
          mockup2="mockups/gg-tablet.png"
          techs="React, JSX, RAWG API"
          gitLink="https://github.com/dcroci/react-game-guesser"
          hasTwoMockups={true}
        />
      </FadeRightOnScroll>
      <div className="flex flex-col md:flex-row col-span-full text-center text-3xl items-center justify-center bg-blue-500 rounded w-2/4 mx-auto p-6">
        <p className="col-span-full text-center pb-4 md:pb-0 md:pr-4">
          <Link href={'/projects'}> See Full Portfolio</Link>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </section>
  );
}

export default ProjectsSection;
