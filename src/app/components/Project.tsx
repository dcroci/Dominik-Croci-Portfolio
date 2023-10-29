import Image from 'next/image';
function Project({ title, desc, imgURL, siteLink }: any) {
  return (
    <div className="flex flex-col items-center p-6   max-w-lg mx-auto ">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-0 right-0 cursor-pointer z-50 bg-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
        <Image
          src={`/${imgURL}`}
          alt={title}
          width={'500'}
          height={'300'}
          className="relative"
        />
      </div>
      <div className="flex w-full justify-start items-center gap-6">
        <h3 className="text-4xl py-6">{title}</h3>
        <a href={siteLink} target="_blank">
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
        </a>
      </div>
      <p className="text-2xl pb-6">{desc}</p>
      <div className="flex"></div>
    </div>
  );
}

export default Project;
