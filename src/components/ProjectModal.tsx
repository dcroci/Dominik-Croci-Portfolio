import ToggleProjectModalButton from './ToggleProjectModalButton';
import Image from 'next/image';

function ProjectModal({
  title,
  desc,
  imgURL,
  siteLink,
  showModal,
  setShowModal,
  mockup1,
  mockup2,
  techs,
  hasTwoMockups,
}: any) {
  return (
    <div
      className={
        showModal
          ? ' border-r-[8px] border-white text-white w-full z-50 h-[600px] overflow-y-scroll grid grid-cols-2 p-6 max-w-lg mx-auto relative scroll-bar text-left items-start shadow-md shadow-black '
          : 'hidden'
      }
    >
      <ToggleProjectModalButton
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <h3 className="text-4xl col-span-2 mx-auto pb-6">{title}</h3>
      <p className="bg-blue-500 col-start-2 mr-auto w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center  ">
        Description
      </p>
      <p id="desc" className="text-2xl col-span-2 p-4 pl-0 leading-9">
        {desc}
      </p>
      <p className="bg-blue-500 col-start-2 mr-auto w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
        Mockups
      </p>
      <Image
        src={`/${mockup1}`}
        alt={title}
        width={'400'}
        height={'200'}
        className="col-span-2 mx-auto"
        id="mockups"
      />
      <p className=" mx-auto w-full  text-center col-span-2">Mockup 1</p>
      {hasTwoMockups ? (
        <>
          <Image
            src={`/${mockup2}`}
            alt={title}
            width={'400'}
            height={'200'}
            className="col-span-2 mx-auto"
          />
          <p className=" mx-auto w-full text-center col-span-2">Mockup 2</p>
        </>
      ) : null}
      <p className="bg-blue-500 col-start-2 mr-auto w-fit py-1 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
        Technologies
      </p>
      <ul className="flex col-span-2 mr-auto p-4 pl-0">
        <li>{techs}</li>
      </ul>
    </div>
  );
}

export default ProjectModal;
