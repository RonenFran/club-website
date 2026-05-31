export default function ClubBrowserOptions({ tagSetter }) {
  const selectTag = async (e) => {
    console.log(e.target.className);
  };

  // const tagList = ["All", "Sports", "Outdoors", "Social", "Technology"];

  const tagList = {
    All: "red",
    Sports: "yellow",
    Outdoors: "green",
    Social: "blue",
    Technology: "purple",
  };

  return (
    <div className="z-30 sticky top-0 w-32 h-screen bg-gray-800">
      <div className="flex flex-col gap-4 h-full justify-center font-bold text-lg text-secondary-200">
        {Object.entries(tagList).map(([tag, color]) => {
          return (
            <div
              className={
                "flex items-end justify-center p-8 border-secondary border-3 border-l-0 w-28 h-fit rounded-r-xl transition-all duration-200 ease-in-out hover:w-40 hover:cursor-pointer bg-" +
                color +
                "-800"
              }
              onClick={(e) => {
                selectTag(null);
              }}
              // style={{ writingMode: "sideways-lr" }} Sideways writing which is bad design, but feels like it kind of fits
              // Will return to this later
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}
