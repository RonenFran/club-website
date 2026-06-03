import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

export default function EventItem2({ event }) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="relative shrink-0 h-60 w-108 text-secondary hover:cursor-pointer">
      <div
        className="absolute inset-0 bg-[url(../public/club_banners/equestrian4.avif)] bg-cover opacity-80 brightness-70 rounded-xl hover:inset-shadow-[0_120px_120px_rgba(0,0,0,0.9)] hover:brightness-50 transition duration-300"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      ></div>
      <div className="absolute pointer-events-none inset-0 mx-4">
        <div className="text-3xl font-semibold mt-4">Horse Race</div>
        {showText && (
          <>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="absolute font-semibold bottom-2 left-0">
              January 4th
              <br />
              6:00 PM - 8:00 PM
            </div>
            <div className="absolute flex items-center gap-2 font-semibold bottom-2 right-0">
              <MdPeopleAlt />
              12
            </div>
          </>
        )}
      </div>
    </div>
  );
}
