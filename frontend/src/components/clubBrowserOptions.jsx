export default function ClubBrowserOptions({ tagSetter }) {
  return (
    <div className="z-30 sticky top-0 w-32 h-screen bg-gray-800">
      <div className="flex flex-col gap-4 h-full justify-center font-bold text-lg text-secondary-200">
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-red-800 transition-all duration-200 ease-in-out hover:w-40"
          // style={{ writingMode: "sideways-lr" }} Sideways writing which is bad design, but feels like it kind of fits
          // Will return to this later
        >
          All
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-yellow-800 transition-all duration-200 ease-in-out hover:w-40"
          // style={{ writingMode: "sideways-lr" }}
        >
          Sports
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-green-800 transition-all duration-200 ease-in-out hover:w-40"
          // style={{ writingMode: "sideways-lr" }}
        >
          Societies
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-blue-800 transition-all duration-200 ease-in-out hover:w-40"
          // style={{ writingMode: "sideways-lr" }}
        >
          Social
        </div>
        <div
          className="flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl bg-purple-800 transition-all duration-200 ease-in-out hover:w-40"
          // style={{ writingMode: "sideways-lr" }}
        >
          Research
        </div>
      </div>
    </div>
  );
}
