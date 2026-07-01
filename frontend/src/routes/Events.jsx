import EventRow from "../components/eventRow";
import axios from "axios";
import { useState, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";
import { FaRegStar, FaBriefcase, FaFootballBall, FaMicroscope } from "react-icons/fa";
import { FaWandMagicSparkles, FaMicrochip } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

export default function Events() {
  const [showText, setShowText] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col gap-10 py-8">
      {/* Featured Events */}
      <div>
        <div className="flex items-center gap-4 px-12 text-secondary-200 mb-4 bg-primary ml-12 mr-8 rounded-lg">
          <FaRegStar className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold">Featured Events</h2>
            <h3 className="text-lg text-secondary-500">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>

      {/* Reccomended Events */}
      <div>
        <div className="flex items-center gap-4 px-12 text-secondary-200 mb-4  bg-primary ml-12 mr-8 rounded-lg">
          <FaWandMagicSparkles className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold ">Picked for You</h2>
            <h3 className="text-lg text-secondary-500">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>

      {/* General Categories */}
      {/* Business */}
      <div>
        <div className="flex items-center gap-4 px-12 text-primary-800 mb-4 bg-purple-200 ml-12 mr-8 rounded-lg">
          <FaBriefcase className="size-10" />
          <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold">Business</h2>
            <h3 className="text-lg text-primary-600">14 events this month</h3>
          </div>
        </div>
        <EventRow eventList={events.filter((e) => e.tagName === "Business")} />
        {console.log(events.filter((e) => e.tagName === "Business"))}
      </div>

      {/* Social */}
      <div>
        <div className="flex items-center gap-4 px-12 text-primary-800 mb-4 bg-yellow-200 ml-12 mr-8 rounded-lg">
          <IoPeople className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold ">Social</h2>
            <h3 className="text-lg text-primary-600">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>

      {/* Science */}
      <div>
        <div className="flex items-center gap-4 px-12 text-primary-800 mb-4 bg-green-200 ml-12 mr-8 rounded-lg">
          <FaMicroscope className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold ">Science</h2>
            <h3 className="text-lg text-primary-600">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>

      {/* Sports */}
      <div>
        <div className="flex items-center gap-4 px-12 text-primary-800 mb-4 bg-primary-200 ml-12 mr-8 rounded-lg">
          <FaFootballBall className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold ">Sports</h2>
            <h3 className="text-lg text-primary-600">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>

      {/* Technology */}
      <div>
        <div className="flex items-center gap-4 px-12 text-primary-800 mb-4 bg-blue-200 ml-12 mr-8 rounded-lg">
          <FaMicrochip className="size-10" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold ">Technology</h2>
            <h3 className="text-lg text-primary-600">14 events this month</h3>
          </div>
        </div>
        <EventRow />
      </div>
    </div>
  );
}
