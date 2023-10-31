import ToggleProjectModalButton from './ToggleProjectModalButton';
import Image from 'next/image';

function ProjectModal({
  title,
  desc,
  imgURL,
  siteLink,
  showModal,
  setShowModal,
}: any) {
  const techs = ['React', 'JSX', 'JS'];
  return (
    <div
      className={
        showModal
          ? ' border-r-[8px] border-white text-white w-full z-50 h-[600px] overflow-y-scroll grid grid-cols-2 p-6 max-w-lg mx-auto relative scroll-bar shadow-md shadow-black text-left'
          : 'hidden'
      }
    >
      <ToggleProjectModalButton setShowModal={setShowModal} />
      <h3 className="text-4xl col-span-2 mx-auto pb-6">{title}</h3>
      <p className="bg-blue-500 w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
        Description
      </p>
      <p id="desc" className="text-2xl col-span-2 p-4 pl-0 leading-9">
        {desc}
      </p>
      <p className="bg-blue-500 w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
        Mockups
      </p>
      <Image
        src={'/game-guesser-mockup-1.png'}
        alt={title}
        width={'400'}
        height={'200'}
        className="col-span-2 mx-auto"
        id="mockups"
      />
      <p className=" mx-auto w-full text-center col-span-2">Mockup 1</p>
      <Image
        src={'/game-guesser-mockup-1.png'}
        alt={title}
        width={'400'}
        height={'200'}
        className="col-span-2 mx-auto"
      />
      <p className=" mx-auto w-full text-center col-span-2">Mockup 2</p>
      <p className="bg-blue-500 w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
        Technologies
      </p>
      <ul className="flex col-span-2">
        {techs.map((techz): any => {
          return <li>{techz}, </li>;
        })}
      </ul>
    </div>
  );
}

export default ProjectModal;
