export default function UpcomingEvents() {
  return (
    <div className="relative left-8 top-8 w-[25vw] h-[50vh] border-2 border-primary rounded-md bg-secondary">
      {/* Header */}
      <h2 className="bg-primary pt-1 h-12 text-2xl font-bold text-secondary text-center select-none">
        Upcoming Events
      </h2>

      {/* Some Events */}
      <div className="flex flex-col">
        {/* Event 1 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1 select-none">
          {/* Date */}
          <div className="w-[4vw] pt-1 px-4 text-center">
            <time className="text-2xl font-semibold select-none">
              Jan <br /> 25th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600 select-none">
              SMUSA Wonderland
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold select-none">
              SMUSA
            </h4>
            <span className="font-bold px-4 bg-yellow-300 rounded-md select-none">
              Social
            </span>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1 select-none">
          {/* Date */}
          <div className="w-[4vw] pt-1 px-4 text-center">
            <time className="text-2xl font-semibold select-none">
              Jan <br /> 29th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600 select-none">
              Business Seminar
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold select-none">
              John Smith
            </h4>
            <span className="font-bold px-4 bg-primary-200 rounded-md select-none">
              Business
            </span>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] pt-1 px-4 text-center">
            <time className="text-2xl font-semibold select-none">
              Feb <br /> 4th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600 select-none">
              GenAI Hackathon
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold select-none">
              AI Incorporated
            </h4>
            <span className="font-bold px-4 bg-blue-200 rounded-md select-none">
              Technology
            </span>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex w-[24vw] h-22 mx-2 mt-2 border-2 rounded-md p-1">
          {/* Date */}
          <div className="w-[4vw] pt-1 px-4 text-center">
            <time className="text-2xl font-semibold select-none">
              Feb <br /> 14th
            </time>
          </div>

          {/* Description */}
          <div className="pl-4">
            <h3 className="font-bold text-xl text-primary-600 select-none">
              Valentines Ball
            </h3>
            <h4 className="mb-1 text-primary-500 font-semibold select-none">
              SMU Events
            </h4>
            <span className="font-bold px-4 bg-yellow-300 rounded-md select-none">
              Social
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
