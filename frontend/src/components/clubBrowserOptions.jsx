import { useState } from "react";

export default function ClubBrowserOptions({ setFilterTag }) {
  const [activeTag, setActiveTag] = useState("All");

  const tagList = {
    All: "bg-red-800",
    Sports: "bg-yellow-800",
    Outdoors: "bg-green-800",
    Social: "bg-blue-800",
    Technology: "bg-purple-800",
  };

  return (
    <div className="z-30 sticky top-0 w-32 h-screen bg-gray-800">
      <div className="flex flex-col gap-4 h-full justify-center font-bold text-lg text-secondary-200">
        {/* Displays all main tags for users to filter clubs by */}
        {Object.entries(tagList).map(([tag, color]) => {
          return (
            <div
              key={tag}
              className={
                "flex items-end justify-center p-8 border-secondary border-3 border-l-0 h-fit rounded-r-xl transition-all duration-200 ease-in-out hover:w-40 hover:cursor-pointer " +
                color +
                (tag === activeTag ? " w-40" : " w-28")
              }
              onClick={(e) => {
                setActiveTag(tag);

                if (tag === "All") setFilterTag(null);
                else setFilterTag(tag);
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
