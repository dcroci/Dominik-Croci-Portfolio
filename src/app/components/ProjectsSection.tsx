import Image from 'next/image';
import Link from 'next/link';
import FadeLeftOnScroll from './FadeLeftOnScroll';
import FadeOnScroll from './FadeOnScroll';
import FadeRightOnScroll from './FadeRightOnScroll';
import Project from './Project';
function ProjectsSection() {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 min-h-screen container mx-auto px-6 snap justify-center">
      <h2 className="col-span-full text-center text-6xl p-6">
        <FadeOnScroll> Notable Projects</FadeOnScroll>
      </h2>
      <FadeLeftOnScroll>
        <Project
          title="Dev Talk"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatum temporibus enim esse est possimus pariatur maxime saepe dolor veritatis. Quod repellat aliquid officiis totam quia velit vel aut illum?"
          imgURL="dev-talk.png"
          siteLink={'https://devtalk.tech/'}
        />
      </FadeLeftOnScroll>
      <FadeRightOnScroll>
        <Project
          title="Game Guesser"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatum temporibus enim esse est possimus pariatur maxime saepe dolor veritatis. Quod repellat aliquid officiis totam quia velit vel aut illum?"
          imgURL="game-guesser.png"
          siteLink={'https://gameguesser.netlify.app/'}
        />
      </FadeRightOnScroll>
      <div className="flex col-span-full text-center text-3xl items-center justify-center bg-gray-700 rounded w-2/4 mx-auto">
        <p className="col-span-full text-center ">
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
