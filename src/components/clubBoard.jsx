import { useScrollFades } from "../hooks/useScrollFades";

const ClubBoard = () => {
  const { topFade, botFade, onScroll } = useScrollFades(128);

  return (
    // Parent box
    <div className="z-30 mx-auto h-[150vh] w-2/3 rounded-xl bg-primary-700 shadow-[0_0_10px_3px_rgba(0,0,0,0.35)]">
      {/* Join Button */}
      <div className="relative flex w-48 h-16 px-4 rounded-md justify-center items-center justify-self-end bg-primary-600 text-secondary font-bold top-8 right-8">
        <span className="flex-1 text-center text-xl">Join Now</span>
        <svg viewBox="0 0 10 10" fill="white" className="size-12">
          <rect width="7" height="1.5" x="1.5" y="4.25" rx="0.5" />
          <rect width="1.5" height="7" x="4.25" y="1.5" ry="0.5" />
        </svg>
      </div>

      {/* Header */}
      <h2 className="text-6xl font-bold text-secondary text-center mt-4">
        Message Board
      </h2>

      {/* Message Board */}
      <div
        className="z-30 relative mx-auto flex flex-col h-screen w-2/3 bg-primary-50 rounded-xl mt-8 overflow-y-scroll no-scrollbar shadow-[0_0_20px_6px_rgba(0,0,0,0.35)]"
        onScroll={onScroll}
      >
        {/* Top scroll fade */}
        <div
          className="sticky top-0 w-full\ bg-gradient-to-b from-primary-100 to-transparent backdrop-blur-xs"
          style={{ minHeight: topFade }}
        ></div>

        {/* Item 1 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl mx-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl mx-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              Hello everyone! We had a wonderful ride this week around the park
              with our riders. Everyone is raring and preparing for the Atlantic
              Equestrian competition!
              <img
                src="/equestrian_practice.jpg"
                alt="Young woman horse riding and jumping over obstacle"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Item 3*/}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
            </div>
          </div>
        </div>

        {/* Item 7 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
            </div>
          </div>
        </div>

        {/* Item 8 */}
        <div className="flex mx-8 mt-4 p-2 pr-6 pb-4 bg-primary-200">
          <img
            src="/unknown_person.jpg"
            alt="Default profile picture"
            className="size-12 rounded-3xl m-2"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bold">John Smith</span>
            <div className="text-primary-800">
              {" "}
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
              Test <br />
            </div>
          </div>
        </div>

        {/* Bottom scroll fade */}
        <div
          className="sticky bottom-0 w-full bg-gradient-to-t from-primary-100 to-transparent backdrop-blur-xs"
          style={{ minHeight: botFade }}
        ></div>
      </div>
    </div>
  );
};

export default ClubBoard;
