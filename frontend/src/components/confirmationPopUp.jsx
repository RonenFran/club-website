export default function ConfirmationPopUp({ message, confirm, cancel }) {
  return (
    <>
      <div className="z-40 fixed top-0 left-0 w-screen h-screen bg-gray-700 opacity-50"></div>
      <div className="z-50 fixed flex flex-wrap gap-x-8 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-60 bg-secondary border-2 border-primary rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="grey"
          className="absolute top-2 right-2 size-6 opacity-75 cursor-pointer hover:opacity-100"
          onClick={cancel}
        >
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
        </svg>
        <div className="px-8 w-full font-bold text-xl text-center">{message}</div>
        <button
          className="w-32 h-12 bg-primary-600 text-secondary font-bold border-2 border-primary rounded-md hover:brightness-75 hover:scale-110"
          onClick={confirm}
        >
          Yes
        </button>
        <button
          className="w-32 h-12 bg-secondary text-primary-600 font-bold border-2 border-primary rounded-md hover:brightness-75 hover:scale-110"
          onClick={cancel}
        >
          No
        </button>
      </div>
    </>
  );
}
