import Image from 'next/image';
function ProjectsSection() {
  return (
    <section className="grid grid-cols-2 ">
      <h2 className="col-span-full text-center text-3xl">Notable Projects</h2>
      <div className="flex flex-col items-center p-6 bg-gray-800  max-w-lg mx-auto relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-0 right-0 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
        <Image
          src={'/game-guesser.png'}
          alt="website"
          width={'500'}
          height={'300'}
        />
        <div className="flex w-full justify-start">
          <h3>Dev Talk</h3>
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
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          voluptatum temporibus enim esse est possimus pariatur maxime saepe
          dolor veritatis. Quod repellat aliquid officiis totam quia velit vel
          aut illum?
        </p>
        <div className="flex">
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-800 max-w-lg mx-auto">
        <Image
          src={'/game-guesser.png'}
          alt="website"
          width={'500'}
          height={'300'}
        />
        <div className="flex w-full justify-start">
          <h3>Dev Talk</h3>
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
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          voluptatum temporibus enim esse est possimus pariatur maxime saepe
          dolor veritatis. Quod repellat aliquid officiis totam quia velit vel
          aut illum?
        </p>
        <div className="flex">
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
          <Image
            src={'/react-icon.png'}
            width={'30'}
            height={'30'}
            alt={'tech used'}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex col-span-full text-center text-3xl items-center justify-center bg-gray-700 rounded w-2/4 mx-auto">
        <p className="col-span-full text-center ">See full portfolio</p>
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
