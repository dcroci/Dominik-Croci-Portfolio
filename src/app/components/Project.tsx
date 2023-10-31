'use client';
import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import ToggleProjectModalButton from './ToggleProjectModalButton';
import FadeOnScroll from './FadeOnScroll';

function Project({ title, desc, imgURL, siteLink }: any) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <FadeOnScroll>
          <ProjectModal
            title={title}
            desc={desc}
            imgURL={imgURL}
            siteLink={siteLink}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </FadeOnScroll>
      ) : (
        <div className="flex flex-col items-center p-6 max-w-lg mx-auto ">
          <div className="relative">
            <ToggleProjectModalButton setShowModal={setShowModal} />
            <Image
              src={`/${imgURL}`}
              alt={title}
              width={'500'}
              height={'300'}
              className="relative shadow-lg shadow-black"
            />
          </div>
          <div className="flex w-full justify-start items-center gap-6">
            <h3 className="text-4xl py-6 underline">{title}</h3>
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
      )}
    </>
  );
}

export default Project;
