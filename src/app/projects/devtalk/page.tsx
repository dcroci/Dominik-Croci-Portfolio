import StackIcon from '@/components/StackIcon';
import Image from 'next/image';

function DevTalkPage() {
  return (
    <main className="col-span-2 container mx-auto px-4">
      <section className="mt-12">
        <h2 className="text-center text-4xl py-6">
          Building Developer Communities With DevTalk
        </h2>
        <Image
          src={'/dev-talk.png'}
          alt="Professional photo of me"
          width={1400}
          height={400}
          priority={true}
          className="mx-auto"
        />
      </section>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-full md:col-span-3">
          <section>
            <h3 className="text-4xl py-6">The Problem</h3>
            <p className="max-w-[60ch] text-2xl">
              Self-taught developers have no dedicated space to connect with
              similar developers, ask questions, and find tips and tricks to
              further their learning. Many forum communities are unorganized, so
              I wanted to be able to differentiate spaces by the main signifier
              of a developer, the programming language they primarily use.{' '}
            </p>
          </section>
          <section>
            <h3 className="text-4xl py-6">My Process</h3>
            <p className="max-w-[60ch] text-2xl">
              I started ideating this project over a year ago. I knew that I
              wanted it to be programming language specific and allow developers
              to connect with each other, but was not sure at this point how to
              make this possible. DevTalk started as a messaging platform
              similar to a chat room, but I knew I wanted to do more and build a
              community around the language, which expanded the scope of the
              project. I created a mockup in Figma, outlining my fonts, color
              palettes, and layout for my essential pages. When completed with
              the mockup, I was able to bring that design to life with code and
              push new features each and every day.
            </p>
          </section>
          <section>
            <h3 className="text-4xl py-6">Results</h3>
            <p className="max-w-[60ch] text-2xl">
              DevTalk is a fully-fledged community for developers no matter the
              language they use. Any type of developer can go to DevTalk and
              connect with similar developers. Whether it be asking a question
              with Talking Points, sharing unique code Snippets, or showing off
              a project in the Project Showcase, developers can join a space
              that enables them to be part of a community.
            </p>
          </section>
          <section>
            <section className="relative">
              <h4 className="absolute top-[15%] left-0 right-0  text-center font-bold text-xl">
                DevTalk Language Home Page
              </h4>
              <Image
                src={'/devtalk_img/1.png'}
                alt="Professional photo of me"
                width={1400}
                height={400}
                className="mx-auto"
              />
            </section>
            <section className="relative">
              <h4 className="absolute top-[15%] left-0 right-0  text-center font-bold text-xl">
                DevTalk Talking Points Page
              </h4>
              <Image
                src={'/devtalk_img/2.png'}
                alt="Professional photo of me"
                width={1400}
                height={400}
                className="mx-auto"
              />
            </section>
            <section className="relative">
              <h4 className="absolute top-[15%] left-0 right-0  text-center font-bold text-xl">
                DevTalk Project Showcase Page
              </h4>
              <Image
                src={'/devtalk_img/4.png'}
                alt="Professional photo of me"
                width={1400}
                height={400}
                className="mx-auto"
              />
            </section>
            <section className="relative">
              <h4 className="absolute top-[15%] left-0 right-0  text-center font-bold text-xl">
                DevTalk Profile Page
              </h4>
              <Image
                src={'/devtalk_img/3.png'}
                alt="Professional photo of me"
                width={1400}
                height={400}
                className="mx-auto"
              />
            </section>
          </section>
        </div>
        <aside className="col-span-full md:col-span-1">
          <section>
            <h3 className="text-4xl py-6 text-center place-items-center">
              Tech Stack
            </h3>
            <ul className="text-xl grid grid-cols-2  gap-4">
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
                {' '}
                <StackIcon
                  imgURL="ts-icon.png"
                  stackName="TypeScript"
                  stackDesc="A superset of JavaScript that adds static type definitions, aimed at making code easier to understand and debug."
                  margin={'mx-auto'}
                />
              </li>
              <li>
                {' '}
                <StackIcon
                  imgURL="tailwind-icon.png"
                  stackName="Tailwind CSS"
                  stackDesc="A utility-first CSS framework for rapid UI development."
                  margin={'mx-auto'}
                />
              </li>
              <li>Prisma ORM</li>
              <li>Supabase</li>
            </ul>
          </section>
          <section>
            <h3 className="text-4xl py-6 text-center place-items-center">
              Live Links
            </h3>
            <div className="flex flex-col gap-8">
              <section>
                <p className="text-lg font-medium text-center">Website</p>
                <a
                  href="https://www.devtalk.tech/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    aria-label="Visit the live site here"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-full h-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
              </section>
              <section>
                <p className="text-lg font-medium text-center">GitHub</p>
                <a target="_blank" href="https://github.com/dcroci/devtalk">
                  <svg
                    aria-label="Visit the GitHub repository here"
                    className="w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                  >
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                  </svg>
                </a>
              </section>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default DevTalkPage;
