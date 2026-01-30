const UpcomingEvents = () => {
  return (
    <div className="relative top-16 left-16 w-[25vw] h-[50vh] border-2 border-primary rounded-md bg-secondary">
      {/* Header */}
      <h2 className="bg-primary pt-1 h-12 text-2xl font-bold text-secondary text-center">
        Upcoming Events
      </h2>

      {/* Some Events */}
      <div className="flex flex-col">
        {/* Event 1 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] px-4 text-center">
            <time className="text-2xl font-semibold">
              Jan <br /> 25th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600">
              SMUSA Wonderland
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold">SMUSA</h4>
            <span className="font-bold px-4 bg-yellow-300 rounded-md">
              Social
            </span>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] px-4 text-center">
            <time className="text-2xl font-semibold">
              Jan <br /> 29th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600">
              Business Seminar
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold">John Smith</h4>
            <span className="font-bold px-4 bg-primary-200 rounded-md">
              Business
            </span>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] px-4 text-center">
            <time className="text-2xl font-semibold">
              Feb <br /> 4th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600">
              GenAI Hackathon
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold">
              AI Incorporated
            </h4>
            <span className="font-bold px-4 bg-blue-200 rounded-md">
              Technology
            </span>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] px-4 text-center">
            <time className="text-2xl font-semibold">
              Feb <br /> 14th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600">
              Valentines Ball
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold">SMU Events</h4>
            <span className="font-bold px-4 bg-yellow-300 rounded-md">
              Social
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
