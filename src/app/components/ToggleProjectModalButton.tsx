function ToggleProjectModalButton({ setShowModal, showModal }: any) {
  return (
    <div
      className="w-8 h-8 absolute top-2 right-2 cursor-pointer z-10 rounded-full bg-white  flex items-center justify-center shadow-lg shadow-black"
      onClick={() => setShowModal((prevState: boolean) => !prevState)}
    >
      {!showModal ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          className="w-2/3 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          className="w-2/3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
}

export default ToggleProjectModalButton;
