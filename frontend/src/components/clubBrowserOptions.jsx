export default function ClubBrowserOptions() {
  return (
    <div className="z-30 sticky top-0 w-32 h-screen bg-gray-800">
      <div className="flex flex-col gap-4 h-full justify-center font-bold text-lg text-secondary-200">
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-red-800 transition-all duration-200 ease-in-out hover:w-48"
          style={{ writingMode: "sideways-lr" }}
        >
          All
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-yellow-800 transition-all duration-200 ease-in-out hover:w-48"
          style={{ writingMode: "sideways-lr" }}
        >
          Sports
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-green-800 transition-all duration-200 ease-in-out hover:w-48"
          style={{ writingMode: "sideways-lr" }}
        >
          Societies
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-blue-800 transition-all duration-200 ease-in-out hover:w-48"
          style={{ writingMode: "sideways-lr" }}
        >
          Social
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-purple-800 transition-all duration-200 ease-in-out hover:w-48"
          style={{ writingMode: "sideways-lr" }}
        >
          E-sports
        </div>
      </div>
    </div>
    // <ul className="flex flex-col -ml-16 gap-0.5 w-36">
    //   <li className="pl-2 border-2 border-s-0 border-e-4 border-primary w-44 rounded-e-lg text-start text-lg text-primary bg-secondary">
    //     (23) All
    //   </li>
    //   <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
    //     (11) Societies
    //   </li>
    //   <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
    //     (9) Sports
    //   </li>
    //   <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
    //     (4) E-Sports
    //   </li>
    //   <li className="pl-2 border-2 border-primary rounded-e-lg text-start text-lg text-white bg-primary">
    //     (15) Teams
    //   </li>
    // </ul>
  );
}
