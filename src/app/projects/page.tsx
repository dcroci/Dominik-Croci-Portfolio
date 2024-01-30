import Link from 'next/link';
import Navbar from '../components/NavBar';
import Project from '../components/Project';
function Page() {
  return (
    <section className="flex flex-col sm:flex-col items-center md:flex-row-reverse lg:flex-col xl:flex-col gap-8 container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto w-full">
        <h1 className="text-5xl col-span-full text-center p-6">
          Here are some of my projects!
        </h1>
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
          gitLink="https://github.com/dcroci/devtalk-chatapp"
          hasTwoMockups={true}
        />

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
        <Project
          title="Country Info"
          desc="React web app for researching information on many countries"
          imgURL="country.png"
          siteLink={'https://react-countries-dc.netlify.app/'}
          mockup1="mockups/country-mockup.png"
          mockup2="mockups/country-tablet.png"
          techs={'React, JSX, JavaScript, Tailwind CSS'}
          gitLink="https://github.com/dcroci/react-country-info"
          hasTwoMockups={true}
        />
        <Project
          title="Dev Talk"
          desc="A dynamic single-page application where developers connect, share, and engage in spaces dedicated to various programming languages "
          imgURL="dev-talk.png"
          siteLink={'https://devtalk.tech/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, JavaScript, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink={'https://github.com/dcroci/devtalk-chatapp'}
          hasTwoMockups={true}
        />
        <Project
          title="Film Finder"
          desc="Search movies, find detailed information, and add movies to your Watch List with this React web app"
          imgURL="filmfinder.png"
          siteLink={'https://react-film-finder-dc.netlify.app/'}
          mockup1="mockups/ff-mockup.png"
          mockup2="mockups/ff-tablet.png"
          techs={'React, JSX, JavaScript'}
          gitLink="https://github.com/dcroci/FilmFinder"
          hasTwoMockups={true}
        />
        <Project
          title="Trip Tracker"
          desc="A convenient React application designed to help you organize your trip by creating a list of items you need to pack and keeping track of their packing status "
          imgURL="triptracker.png"
          siteLink={'https://react-trip-tracker.netlify.app/'}
          mockup1="mockups/tt-mockup.png"
          mockup2="mockups/tt-tablet.png"
          techs={'React, JSX, JavaScript'}
          gitLink="https://github.com/dcroci/react-trip-tracker"
          hasTwoMockups={true}
        />
        <Project
          title="Meme Generator"
          desc="Build custom memes with this React app"
          imgURL="memegen.png"
          siteLink={'https://react-meme-generator-dc.netlify.app/'}
          mockup1="mockups/memegen-mockup.png"
          mockup2="mockups/meme-tablet.png"
          techs={'React, JSX, JavaScript'}
          gitLink="https://github.com/dcroci/react-meme-generator"
          hasTwoMockups={true}
        />
        <Project
          title="Don't Roll a 1"
          desc="First to 50 points wins! Rolling a 1 resets you back to 0 points "
          imgURL="rolla1.png"
          siteLink={'https://dcroci.github.io/Dont-Roll-A-1/'}
          mockup1="mockups/roll-mockup.png"
          techs={'HTML, CSS, JavaScript'}
          gitLink="https://github.com/dcroci/Dont-Roll-A-1"
          hasTwoMockups={false}
        />
        <Project
          title="Library E-Commerce"
          desc="Simple landing page for an E-Commerce book store with a Sign Up form as well as a display of featured books"
          imgURL="library.png"
          siteLink={'https://dcroci.github.io/E-Commerce-Website/'}
          mockup1="mockups/library-mockup.png"
          hasTwoMockups={false}
          techs={'HTML, CSS'}
          gitLink="https://github.com/dcroci/E-Commerce-Website"
        />
      </div>
    </section>
  );
}

export default Page;
