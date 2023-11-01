import Link from 'next/link';
import Project from '../components/Project';
function Page() {
  return (
    <section className="flex items-center flex-col px-6 min-h-screen container mx-auto snap justify-center relative ">
      <nav className="p-6 w-full absolute top-0">
        <ul className="flex justify-between text-3xl">
          <li>
            <Link href={'/'}> Dominik Croci</Link>
          </li>
          <div className="flex gap-6">
            <li>
              <Link href={'/blog'}> Blog</Link>
            </li>
            <li>
              <Link href={'/projects'}> Projects</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-36 container mx-auto">
        <h1 className="text-5xl col-span-full text-center p-6">
          Here are some of my projects!
        </h1>
        <Project
          title="Dev Talk"
          desc="A dynamic single-page application where developers connect, share, and engage in spaces dedicated to various programming languages "
          imgURL="dev-talk.png"
          siteLink={'https://devtalk.tech/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink={'https://github.com/dcroci/devtalk-chatapp'}
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
        />
        <Project
          title="Country Info"
          desc="React web app for researching information on many countries"
          imgURL="country.png"
          siteLink={'https://react-countries-dc.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/react-country-info"
        />
        <Project
          title="Film Finder"
          desc="React web app for researching information on many countries"
          imgURL="filmfinder.png"
          siteLink={'https://react-film-finder-dc.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/FilmFinder"
        />
        <Project
          title="Trip Tracker"
          desc="A convenient React application designed to help you organize your trip by creating a list of items you need to pack and keeping track of their packing status "
          imgURL="triptracker.png"
          siteLink={'https://react-trip-tracker.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/react-trip-tracker"
        />
        <Project
          title="Meme Generator"
          desc="Build custom memes with this React app"
          imgURL="memegen.png"
          siteLink={'https://react-meme-generator-dc.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/react-meme-generator"
        />
        <Project
          title="Don't Roll a 1"
          desc="First to 50 points wins! Rolling a 1 resets you back to 0 points "
          imgURL="rolla1.png"
          siteLink={'https://react-meme-generator-dc.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/Dont-Roll-A-1"
        />
        <Project
          title="Library E-Commerce"
          desc="First to 50 points wins! Rolling a 1 resets you back to 0 points "
          imgURL="library.png"
          siteLink={'https://react-meme-generator-dc.netlify.app/'}
          mockup1="mockups/dt-mockup.png"
          mockup2="mockups/dt-tablet.png"
          techs={
            'React, JSX, React Router, NodeJS, Express, SocketIO, Material UI, Firebase'
          }
          gitLink="https://github.com/dcroci/E-Commerce-Website"
        />
      </div>
    </section>
  );
}

export default Page;
