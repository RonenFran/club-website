import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

export default function EventItem({ event }) {
  const [showText, setShowText] = useState(false);

  return (
    <li className="relative h-60 @sm:w-[calc(100%/2-12px)] @md:w-[calc(100%/3-12px)] @lg:w-[calc(100%/4-12px)] @xl:w-[calc(100%/5-12px)] min-w-80 max-w-120 shrink-0 text-secondary hover:cursor-pointer event-item">
      <div
        className="absolute inset-0 bg-[url(../public/club_banners/equestrian4.avif)] bg-cover opacity-80 brightness-70 rounded-xl"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      ></div>
      {showText ? (
        <div className="absolute flex flex-col gap-2 justify-end pointer-events-none inset-0 p-4 bg-primary-700/80 transition duration-300 rounded-xl">
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold">Horse Race</h4>
            <h5 className="text-xl">•</h5>
            <h5 className="text-lg font-semibold">Beasley Field</h5>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex gap-2 font-semibold bottom-2 left-0 items-center">
              <FaCalendar />
              Jan 4th • 6-8 PM
            </div>
            <div className="flex gap-2 font-semibold bottom-2 left-0 items-center">
              <MdPeopleAlt />
              <div className="font-semibold bottom-2 right-0">12</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 w-full rounded-b-xl bg-primary-900/85 text-3xl font-semibold p-4 pointer-events-none">
          Horse Race
        </div>
      )}
    </li>
  );
}
