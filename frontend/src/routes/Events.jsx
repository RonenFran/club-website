import EventRow from "../components/eventRow";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

export default function Events() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center gap-4 text-primary-800 hover:cursor-pointer">
        <div className="w-1.5 h-8 bg-primary-700"></div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold ">Featured Events</h2>
          <h3 className="text-lg text-primary-600">14 events this month</h3>
        </div>
        <MdKeyboardArrowRight className="size-12" />
      </div>
      <EventRow />
      <h2 className="text-5xl text-primary-700 font-bold mb-4 border-b-4 border-primary-700">
        Events for <em>You</em>
      </h2>
      <EventRow />
      <div className="w-full h-24 bg-primary-600 mt-12 text-secondary text-4xl font-bold p-6 pl-8">
        Popular Categories
      </div>
      <h3 className="text-4xl text-primary-700 font-bold mb-4 border-b-4 border-primary-700">
        Business
      </h3>
      <div className="flex gap-2 mx-8 overflow-x-auto">
        {Array.from({ length: 10 }, (_, i) => (
          <div className="relative shrink-0 h-48 w-80 border-5 border-primary-700 rounded-lg text-secondary">
            <div className="absolute inset-0 bg-[url(../public/club_banners/equestrian4.avif)] bg-cover opacity-50 brightness-35"></div>
            <div className="absolute inset-0">
              <div className="text-2xl font-semibold m-4">Title of Event</div>
              <div className="absolute bottom-2 left-4"> January 4th</div>
              <div className="absolute bottom-2 right-4">6:00 PM - 8:00 PM</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
